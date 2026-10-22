// Job specifications — Star Supermarket Stores Limited Recruitment Guide
// Edit this file to add, remove or update roles. The UI renders from this array.

window.APPLY_URL = "https://forms.gle/LsuunCUkdj1DKjkp8";

window.JOBS = [
  {
    id: "till-operator",
    short: "Till Operator",
    title: "Till Operator / Checkout Assistant",
    positions: "3",
    department: "Front of House / Operations",
    reportsTo: "Store / Duty Manager",
    contract: "Full-Time / Part-Time",
    purpose:
      "Deliver efficient, friendly customer service at the checkout while accurately scanning merchandise and handling financial transactions in line with store policies and age-restricted sales legislation.",
    responsibilities: [
      "Scan customer purchases accurately and handle cash, card, and contactless payments.",
      "Enforce statutory age-verification policies (Challenge 25) for restricted items (alcohol, tobacco, lottery).",
      "Balance till floats accurately at the start and end of each shift, accounting for all payments and vouchers.",
      "Keep checkout lanes clean, organized, and adequately stocked with carrier bags and till rolls.",
      "Handle basic customer inquiries warmly and escalate unresolved issues to the Duty Manager.",
    ],
    essential: [
      "Strong basic numeracy and communication skills; high attention to detail and honesty.",
      "Ability to remain calm and polite during peak trade hours.",
    ],
    desirable: ["Previous experience with retail Point of Sale (POS) systems or cash handling."],
  },
  {
    id: "shop-floor-assistant",
    short: "Shop Floor Assistant",
    title: "Shop Floor / Replenishment Assistant",
    positions: "5",
    department: "Retail Operations",
    reportsTo: "Store / Duty Manager",
    contract: "Full-Time / Part-Time",
    purpose:
      "Maintain fully stocked, clean, and visually appealing sales aisles while assisting customers and ensuring strict stock rotation standards.",
    responsibilities: [
      "Unpack deliveries and restock shelves efficiently following floor layout guidelines.",
      "Practice strict First-In, First-Out (FIFO) stock rotation to minimize waste and expired products.",
      "Conduct routine price checks and update shelf-edge labels (SELs) as instructed.",
      "Maintain aisle cleanliness, clear packaging waste, and resolve spills immediately to prevent hazards.",
      "Assist customers in locating products across the store.",
    ],
    essential: [
      "Physical capability to perform manual handling, lifting boxes, and standing for full shifts.",
      "Excellent teamworking attitude and punctuality.",
    ],
    desirable: ["Prior experience in retail shelf replenishment or grocery retail."],
  },
  {
    id: "warehouse-controller",
    short: "Warehouse Controller",
    title: "Warehouse & Inventory Controller",
    positions: "1",
    department: "Logistics & Back House",
    reportsTo: "Operations / Manager",
    contract: "Full-Time",
    purpose:
      "Oversee back-room storage efficiency, stock accuracy, aisle replenishment staging, and shrinkage/damage control.",
    responsibilities: [
      "Organize back-of-house storage spaces logically to ensure safe, easy access for floor staff.",
      "Audit physical stock counts against inventory logs; investigate discrepancies and excess waste.",
      "Stage inventory for shop floor replenishment based on daily sales velocity.",
      "Log all damaged, expired, or written-off goods accurately in the inventory system.",
      "Maintain strict safety standards within the storage area, keeping walkways free of clutter.",
    ],
    essential: [
      "Minimum 1 year experience in warehouse organization or inventory management.",
      "Strong computer literacy and confidence using inventory tracking tools.",
    ],
    desirable: ["Certified manual handling training or pallet truck operational experience."],
  },
  {
    id: "goods-in-operative",
    short: "Goods In Operative",
    title: "Goods In / Receiving Operative",
    positions: "1",
    department: "Logistics & Intake",
    reportsTo: "Manager / Controller",
    contract: "Full-Time (Early Shift)",
    purpose:
      "Manage the intake of supplier deliveries, verify stock quantities against purchase orders, perform quality/temperature control checks, and process intake documentation.",
    responsibilities: [
      "Safely offload supplier delivery vehicles and inspect delivery condition upon arrival.",
      "Match physical goods received against Purchase Orders (POs) and Delivery Notes; flag discrepancies immediately.",
      "Conduct cold-chain temperature checks for chilled and frozen goods; log readings before accepting deliveries.",
      "Reject damaged goods or expired stock, securing credit notes from delivery drivers.",
      "Transfer accepted stock to warehouse holding areas or cold rooms promptly.",
    ],
    essential: [
      "Prior experience receiving commercial freight or food deliveries.",
      "Understanding of cold-chain hygiene rules and HACCP temperature guidelines.",
      "High precision when handling paperwork and delivery dockets.",
    ],
    desirable: [],
  },
  {
    id: "office-accounts-assistant",
    short: "Office / Accounts Assistant",
    title: "Office / Accounts & Administrative Assistant",
    positions: "2",
    department: "Finance & Admin",
    reportsTo: "Director / Owner",
    contract: "Full / Part-Time",
    purpose:
      "Provide administrative and bookkeeping support, managing supplier invoice reconciliation, daily sales audit entry, payroll records, and store correspondence.",
    responsibilities: [
      "Reconcile Goods In delivery notes against supplier invoices and process them into bookkeeping systems (Xero).",
      "Compile and record daily sales summaries, till reports, and banking sheets across store branches.",
      "Process staff time cards, maintain attendance logs, and assist with monthly payroll preparation.",
      "Monitor office supply inventories and maintain organized digital and physical filing systems.",
      "Communicate with suppliers to resolve invoice disputes, pricing differences, or credit notes.",
    ],
    essential: [
      "Demonstrable proficiency in MS Excel and accounting software (e.g., Xero).",
      "Strong organizational skills and experience in accounts payable/admin support.",
    ],
    desirable: ["AAT qualification (Level 2 or above) or equivalent bookkeeping experience."],
  },
  {
    id: "store-duty-manager",
    short: "Store / Duty Manager",
    title: "Store / Duty Manager",
    positions: "1 – 2",
    department: "Management",
    reportsTo: "Operations Director",
    contract: "Full-Time",
    purpose:
      "Lead daily store operations, manage on-duty staff, ensure high standards of customer service, enforce health and safety compliance, and safeguard store profitability.",
    responsibilities: [
      "Oversee store opening and closing procedures, keyholding, security arming/disarming, and safe management.",
      "Supervise floor staff, assign daily tasks, and manage shift rotas to cover peak trade times.",
      "Monitor store presentation, stock availability, food hygiene practices, and Challenge 25 enforcement.",
      "Handle escalated customer complaints professionally and resolve operational bottlenecks.",
      "Conduct daily end-of-day till reconciliations and prepare bank deposits.",
    ],
    essential: [
      "Minimum 2 years of supervisory/management experience in supermarket or high-volume retail.",
      "Strong team leadership, decision-making, and conflict resolution skills.",
    ],
    desirable: ["Personal License Holder (for alcohol sales supervision) and Level 2 Food Safety certification."],
  },
  {
    id: "security-guard",
    short: "Security Guard",
    title: "Security / Loss Prevention Guard",
    positions: "1",
    department: "Store Operations / Protection",
    reportsTo: "Store Manager",
    contract: "Full / Part-Time",
    purpose:
      "Provide visible security presence to deter theft and antisocial behavior, conduct routine floor surveillance, and protect store assets, staff, and customers.",
    responsibilities: [
      "Maintain a visible presence at the main entrance and high-value product aisles.",
      "Monitor customer behavior and review CCTV footage when suspicious activity occurs.",
      "Detain shoplifters lawfully and safely in accordance with UK guidelines until police arrival.",
      "Complete detailed incident reports for all security breaches, shrinkage events, or safety hazards.",
      "Assist management in implementing store-wide loss prevention strategies.",
    ],
    essential: [
      "Valid SIA License (Door Supervision or Security Officer).",
      "Excellent conflict management and de-escalation skills.",
    ],
    desirable: ["Prior security experience within a supermarket or shopping centre setting."],
  },
];
