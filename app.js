// Star Supermarket Careers — UI logic
(function () {
  "use strict";

  const jobs = window.JOBS || [];
  const APPLY_URL = window.APPLY_URL || "https://forms.gle/LsuunCUkdj1DKjkp8";
  const listEl = document.getElementById("job-list");
  const detailEl = document.getElementById("job-detail");

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const check = `
    <svg class="w-5 h-5 shrink-0 mt-0.5 text-star-green" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

  /* ---------- Stats ---------- */
  (function stats() {
    let min = 0, max = 0;
    jobs.forEach((j) => {
      const nums = j.positions.match(/\d+/g).map(Number);
      min += Math.min(...nums);
      max += Math.max(...nums);
    });
    document.getElementById("stat-roles").textContent = jobs.length;
    document.getElementById("stat-openings").textContent = min === max ? min : `${min}–${max}`;
    document.getElementById("year").textContent = new Date().getFullYear();
  })();

  /* ---------- Left column: job list ---------- */
  listEl.innerHTML = jobs
    .map(
      (j) => `
      <li role="presentation">
        <button type="button" role="tab" id="tab-${j.id}" data-id="${j.id}" aria-controls="job-detail" aria-selected="false" tabindex="-1"
          class="job-tab group w-full text-left flex items-start justify-between gap-3 pl-4 pr-3.5 py-3 rounded-lg border-l-2 border-transparent
                 transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:bg-neutral-50
                 aria-selected:border-star-red aria-selected:bg-neutral-50">
          <span class="min-w-0">
            <span class="block text-base font-medium text-neutral-800 group-aria-selected:text-star-red transition-colors">${esc(j.short)}</span>
            <span class="block text-sm text-neutral-500 mt-0.5">${esc(j.department)}</span>
          </span>
          <span class="shrink-0 text-sm text-star-green font-medium pt-0.5">${esc(j.positions)}<span class="sr-only"> positions</span></span>
        </button>
      </li>`
    )
    .join("");

  const tabs = Array.from(listEl.querySelectorAll(".job-tab"));

  /* ---------- Right column: detail panel ---------- */
  function renderDetail(job) {
    const meta = [
      ["Positions available", job.positions],
      ["Department", job.department],
      ["Reports to", job.reportsTo],
      ["Contract", job.contract],
    ];

    const reqList = (label, items, dot) =>
      items.length
        ? `
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider text-neutral-500">${label}</h4>
          <ul class="mt-2.5 space-y-2.5">
            ${items.map((t) => `<li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full ${dot} mt-2.5 shrink-0"></span><span class="text-neutral-700">${esc(t)}</span></li>`).join("")}
          </ul>
        </div>`
        : "";

    detailEl.innerHTML = `
      <div class="fade-in">
        <h3 class="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug">${esc(job.title)}</h3>

        <dl class="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 border-b border-neutral-100">
          ${meta
            .map(
              ([k, v]) => `
            <div>
              <dt class="text-sm text-neutral-500">${k}</dt>
              <dd class="mt-0.5 font-medium text-base">${esc(v)}</dd>
            </div>`
            )
            .join("")}
        </dl>

        <section class="py-6 border-b border-neutral-100">
          <h4 class="text-lg font-semibold">Core purpose</h4>
          <p class="mt-2 text-neutral-700 leading-relaxed">${esc(job.purpose)}</p>
        </section>

        <section class="py-6 border-b border-neutral-100">
          <h4 class="text-lg font-semibold">Key responsibilities</h4>
          <ul class="mt-3.5 space-y-2.5">
            ${job.responsibilities.map((r) => `<li class="flex gap-2.5">${check}<span class="text-neutral-700">${esc(r)}</span></li>`).join("")}
          </ul>
        </section>

        <section class="py-6 border-b border-neutral-100">
          <h4 class="text-lg font-semibold">Candidate requirements</h4>
          <div class="mt-4 grid sm:grid-cols-2 gap-6">
            ${reqList("Essential", job.essential, "bg-star-red")}
            ${reqList("Desirable", job.desirable, "bg-star-green")}
          </div>
        </section>

        <div class="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p class="text-neutral-500 text-sm sm:text-base">Applications take around five minutes.</p>
          <a id="apply-btn" href="${APPLY_URL}" target="_blank" rel="noopener noreferrer"
             class="group inline-flex items-center justify-center gap-2 bg-star-red hover:bg-star-redDark text-white text-base font-medium
                    px-6 py-3 rounded-full transition-colors
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-star-red">
            Apply For This Role
            <svg class="w-5 h-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </div>`;
    detailEl.setAttribute("aria-labelledby", `tab-${job.id}`);
  }

  /* ---------- Selection ---------- */
  function select(id, { focus = false, scroll = false } = {}) {
    let i = jobs.findIndex((j) => j.id === id);
    if (i < 0) i = 0;
    const job = jobs[i];

    tabs.forEach((t, k) => {
      const on = k === i;
      t.setAttribute("aria-selected", on);
      t.tabIndex = on ? 0 : -1;
    });
    if (focus) tabs[i].focus();
    renderDetail(job);
    history.replaceState(null, "", `#${job.id}`);

    // On small screens the panel sits below the list — bring it into view.
    if (scroll && window.matchMedia("(max-width: 1023px)").matches) {
      detailEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  listEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".job-tab");
    if (btn) select(btn.dataset.id, { scroll: true });
  });

  // Arrow-key navigation (WAI-ARIA tabs pattern)
  listEl.addEventListener("keydown", (e) => {
    const cur = tabs.indexOf(document.activeElement);
    if (cur < 0) return;
    let next = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (cur + 1) % tabs.length;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (cur - 1 + tabs.length) % tabs.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = tabs.length - 1;
    if (next !== null) {
      e.preventDefault();
      select(tabs[next].dataset.id, { focus: true });
    }
  });

  // Deep-link support: index.html#security-guard
  const fromHash = location.hash.slice(1);
  const valid = jobs.some((j) => j.id === fromHash);
  select(valid ? fromHash : jobs[0].id);
  if (valid) requestAnimationFrame(() => document.getElementById("roles").scrollIntoView());
})();
