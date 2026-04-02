/**
 * data.js — Central data store for ERP Portfolio
 * All content lives here: modules, features, FAQs, services, case studies, company info.
 * This structure is intentionally chatbot-ready (Q&A format, flat lookups, etc.)
 */

const ERPData = {

  company: {
    name: "DevERP",
    tagline: "Unify. Automate. Scale.",
    description: "DevERP delivers enterprise-grade resource planning solutions built for modern businesses. From HR to Finance, Inventory to CRM — one platform, infinite possibilities.",
    founded: "2015",
    clients: "500+",
    countries: "40+",
    uptime: "99.9%",
    mission: "To empower businesses of every size with intelligent, integrated ERP systems that eliminate silos, reduce costs, and accelerate growth.",
    vision: "A world where every business — from startup to enterprise — operates with the clarity and efficiency of a Fortune 500 company.",
    values: [
      { title: "Transparency", icon: "◎", desc: "Open architecture, honest pricing, no vendor lock-in." },
      { title: "Innovation", icon: "⟐", desc: "Continuously evolving with AI, automation and emerging tech." },
      { title: "Reliability", icon: "▣", desc: "99.9% uptime SLA backed by enterprise-grade infrastructure." },
      { title: "Partnership", icon: "⌘", desc: "We succeed only when our clients succeed." }
    ],
    team: [
      { name: "Arjun Mehta", role: "CEO & Co-founder", bio: "20 years in enterprise software. Former VP at SAP." },
      { name: "Priya Sharma", role: "CTO", bio: "Built scalable systems at Google and Oracle. Leads platform architecture." },
      { name: "David Osei", role: "Head of Product", bio: "Product strategist with deep roots in ERP and supply chain." },
      { name: "Lena Kovacs", role: "Head of Customer Success", bio: "Ensures every client achieves measurable ROI within 90 days." }
    ],
    contact: {
      email: "#",
      phone: "#",
      address: "#",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  },

  // ─── ERP Modules ────────────────────────────────────────────────────────────
  modules: [
    {
      id: "hrms",
      slug: "hrms",
      name: "HRMS",
      fullName: "Human Resource Management System",
      icon: "◈",
      color: "#00C9A7",
      tagline: "Manage your workforce intelligently",
      description: "DevERP HRMS streamlines every aspect of the employee lifecycle — from recruitment and onboarding to payroll, attendance, and performance management. Built for teams of 10 to 10,000.",
      heroStat: { value: "60%", label: "Reduction in HR admin time" },
      features: [
        { title: "Smart Recruitment", desc: "AI-powered job posting, applicant tracking, and interview scheduling in one pipeline." },
        { title: "Automated Payroll", desc: "Multi-currency payroll processing with tax compliance for 40+ countries." },
        { title: "Attendance & Leave", desc: "Biometric integration, GPS check-in, shift scheduling and leave approvals." },
        { title: "Performance Reviews", desc: "360° feedback, OKR tracking, appraisal cycles and career path planning." },
        { title: "Employee Self-Service", desc: "Mobile app for payslips, leave requests, and HR queries — anytime, anywhere." },
        { title: "Analytics & Reports", desc: "Real-time HR dashboards with headcount, attrition, and cost-per-hire metrics." }
      ],
      faqs: [
        { q: "How long does HRMS implementation take?", a: "Typical implementation takes 2–4 weeks depending on company size. We provide dedicated onboarding support at every stage." },
        { q: "Does HRMS support multiple countries and currencies?", a: "Yes. DevERP HRMS supports payroll compliance and multi-currency processing for 40+ countries." },
        { q: "Can employees access HRMS on mobile?", a: "Absolutely. The Employee Self-Service portal is fully mobile-responsive and available as a native app on iOS and Android." },
        { q: "Is biometric attendance integration supported?", a: "Yes. We integrate with all major biometric device brands including ZKTeco, Suprema, and BioMax." },
        { q: "How secure is employee data in HRMS?", a: "All data is encrypted at rest and in transit using AES-256. We are GDPR, SOC2 Type II, and ISO 27001 compliant." }
      ]
    },
    {
      id: "finance",
      slug: "finance",
      name: "Finance",
      fullName: "Financial Management System",
      icon: "◇",
      color: "#4F8EF7",
      tagline: "Complete financial clarity, zero guesswork",
      description: "Take full control of your financials with DevERP Finance. Automate accounting, track budgets, manage invoicing, and generate compliance-ready financial statements with ease.",
      heroStat: { value: "80%", label: "Faster month-end close" },
      features: [
        { title: "General Ledger", desc: "Multi-company, multi-currency chart of accounts with automated journal entries." },
        { title: "Accounts Payable & Receivable", desc: "Streamline vendor payments and customer invoicing with automated reminders." },
        { title: "Budget Management", desc: "Plan, allocate, and monitor budgets across departments with variance alerts." },
        { title: "Tax & Compliance", desc: "Auto-calculate GST, VAT, and local taxes. Generate audit-ready reports instantly." },
        { title: "Financial Reporting", desc: "P&L, Balance Sheet, Cash Flow, and custom reports with drill-down capabilities." },
        { title: "Bank Reconciliation", desc: "Automated bank feed sync with intelligent transaction matching." }
      ],
      faqs: [
        { q: "Does the Finance module support multi-company accounting?", a: "Yes. You can manage multiple legal entities with consolidated reporting, inter-company transactions, and separate chart of accounts." },
        { q: "Which tax regimes does DevERP Finance support?", a: "We support GST, VAT, US Sales Tax, and over 30 international tax frameworks. Updates are pushed automatically as regulations change." },
        { q: "Can Finance integrate with our existing bank?", a: "Yes. We support direct bank feeds for 200+ banks via Open Banking APIs and manual SWIFT/BAI import as fallback." },
        { q: "How does the month-end close process work?", a: "DevERP automates recurring entries, accruals, and reconciliations — reducing close time by up to 80% compared to manual processes." },
        { q: "Is the Finance module audit-ready?", a: "Yes. Every transaction has a full audit trail. We generate audit-ready reports in PDF and Excel formats with one click." }
      ]
    },
    {
      id: "inventory",
      slug: "inventory",
      name: "Inventory",
      fullName: "Inventory & Supply Chain Management",
      icon: "⬡",
      color: "#FF7C5C",
      tagline: "Never stock out. Never overstock.",
      description: "DevERP Inventory gives you real-time visibility across your entire supply chain. Manage warehouses, track stock movements, automate reordering, and optimize fulfillment.",
      heroStat: { value: "35%", label: "Reduction in carrying costs" },
      features: [
        { title: "Real-Time Stock Tracking", desc: "Live inventory levels across multiple warehouses with barcode and QR scanning." },
        { title: "Smart Reorder Points", desc: "AI-driven reorder suggestions based on demand patterns and lead times." },
        { title: "Warehouse Management", desc: "Bin/rack/shelf location mapping, pick-pack-ship workflows, and cycle counting." },
        { title: "Supplier Management", desc: "Vendor scorecards, purchase orders, and delivery tracking in one view." },
        { title: "Demand Forecasting", desc: "Machine learning models predict demand to prevent stockouts and overstocking." },
        { title: "Batch & Serial Tracking", desc: "Full traceability for regulated industries — pharma, food, electronics." }
      ],
      faqs: [
        { q: "Can Inventory manage multiple warehouses?", a: "Yes. You can manage unlimited warehouse locations with inter-warehouse transfers, dedicated stock counts, and location-specific reporting." },
        { q: "Does DevERP support barcode and QR scanning?", a: "Yes. Our mobile app supports camera-based scanning. We also integrate with hardware scanners from Zebra, Honeywell, and others." },
        { q: "How does demand forecasting work?", a: "Our ML engine analyzes 12+ months of historical sales data, seasonal trends, and supplier lead times to generate accurate reorder recommendations." },
        { q: "Can Inventory integrate with eCommerce platforms?", a: "Yes. We offer native integrations with Shopify, WooCommerce, Amazon, and Magento for real-time stock sync." },
        { q: "Is batch and expiry date tracking available?", a: "Yes. Full batch/lot tracking with expiry date management is available, especially useful for pharma, FMCG, and food industries." }
      ]
    },
    {
      id: "crm",
      slug: "crm",
      name: "CRM",
      fullName: "Customer Relationship Management",
      icon: "◉",
      color: "#A78BFA",
      tagline: "Turn every lead into a loyal customer",
      description: "DevERP CRM unifies your sales, marketing, and customer support teams on a single platform. Track every interaction, automate pipelines, and close deals faster.",
      heroStat: { value: "45%", label: "Increase in sales conversion" },
      features: [
        { title: "Lead & Pipeline Management", desc: "Visual Kanban pipeline with lead scoring, stage automation, and win probability." },
        { title: "Contact & Account 360°", desc: "Complete customer history — calls, emails, deals, support tickets — in one place." },
        { title: "Sales Automation", desc: "Automate follow-ups, proposals, and approvals to keep deals moving forward." },
        { title: "Email & Campaign Tools", desc: "Built-in email sequences, bulk campaigns, and open/click tracking." },
        { title: "Customer Support Desk", desc: "Ticketing system with SLA management, escalation rules, and CSAT tracking." },
        { title: "CRM Analytics", desc: "Forecasting, team performance, funnel conversion, and revenue attribution reports." }
      ],
      faqs: [
        { q: "How does DevERP CRM handle lead scoring?", a: "Lead scores are calculated based on engagement signals (email opens, site visits, demo requests) and demographic fit, using a configurable scoring model." },
        { q: "Can CRM integrate with Gmail and Outlook?", a: "Yes. Two-way email sync is available for both Gmail and Outlook, with email tracking and auto-logging to contact records." },
        { q: "Is a customer support ticketing system included?", a: "Yes. The CRM includes a full helpdesk module with ticket assignment, SLA tracking, escalation rules, and customer satisfaction surveys." },
        { q: "Can I customize the CRM pipeline stages?", a: "Absolutely. Pipelines, stages, fields, and workflows are fully customizable to match your exact sales process." },
        { q: "Does the CRM have a mobile app?", a: "Yes. The DevERP mobile app provides full CRM access including contact management, pipeline updates, and call logging on iOS and Android." }
      ]
    }
  ],

  // ─── Services ────────────────────────────────────────────────────────────────
  services: [
    {
      id: "implementation",
      title: "Implementation & Onboarding",
      icon: "⟳",
      desc: "Dedicated project managers guide you from kickoff to go-live. Typical deployments complete in 2–6 weeks with zero downtime.",
      highlight: "2–6 week go-live"
    },
    {
      id: "migration",
      title: "Data Migration",
      icon: "⇄",
      desc: "We safely migrate your legacy data from any ERP — SAP, Oracle, Tally, QuickBooks — with full validation and rollback support.",
      highlight: "100% data integrity"
    },
    {
      id: "training",
      title: "Training & Enablement",
      icon: "◎",
      desc: "Role-based training workshops, video library access, and a dedicated success manager for your first 90 days.",
      highlight: "Hands-on workshops"
    },
    {
      id: "support",
      title: "24/7 Enterprise Support",
      icon: "▲",
      desc: "Round-the-clock support via chat, email, and phone. P1 issues are acknowledged within 15 minutes with a dedicated war room.",
      highlight: "15-min P1 response"
    },
    {
      id: "customization",
      title: "Custom Development",
      icon: "⬡",
      desc: "Need something unique? Our engineering team builds custom modules, integrations, and workflows tailored to your industry.",
      highlight: "Industry-specific builds"
    },
    {
      id: "api",
      title: "API & Integrations",
      icon: "⌥",
      desc: "RESTful APIs and 100+ pre-built connectors for Salesforce, Shopify, Xero, Slack, and more. iPaaS support via Zapier and Make.",
      highlight: "100+ pre-built connectors"
    }
  ],

  // ─── Case Studies ────────────────────────────────────────────────────────────
  caseStudies: [
    {
      id: "cs1",
      company: "GlobalTex Industries",
      industry: "Manufacturing",
      module: "inventory",
      metric: "40% reduction in inventory costs",
      summary: "GlobalTex deployed DevERP Inventory across 8 warehouses in 3 countries, achieving real-time stock visibility and slashing carrying costs within 60 days.",
      results: ["40% lower inventory carrying cost", "3-country warehouse unification", "60-day full deployment"]
    },
    {
      id: "cs2",
      company: "MedPlus Healthcare",
      industry: "Healthcare",
      module: "hrms",
      metric: "55% faster payroll processing",
      summary: "MedPlus streamlined payroll for 4,200 employees across 12 states using DevERP HRMS, achieving full tax compliance automation.",
      results: ["55% faster payroll", "4,200 employees managed", "12-state compliance automated"]
    },
    {
      id: "cs3",
      company: "SwiftRetail Group",
      industry: "Retail",
      module: "crm",
      metric: "2.3x revenue growth in 12 months",
      summary: "SwiftRetail used DevERP CRM to unify 6 sales teams, automate their pipeline, and drive $12M in incremental revenue within one year.",
      results: ["2.3x revenue growth", "6 teams unified", "$12M incremental revenue"]
    }
  ],

  // ─── Global FAQs ─────────────────────────────────────────────────────────────
  generalFaqs: [
    { q: "What is DevERP?", a: "DevERP is an all-in-one enterprise resource planning platform with modules for HRMS, Finance, Inventory, and CRM — all unified on a single cloud platform." },
    { q: "Is DevERP cloud-based or on-premise?", a: "DevERP is cloud-native (SaaS), but we also offer private cloud and on-premise deployments for regulated industries." },
    { q: "How is DevERP priced?", a: "We offer module-based pricing starting at $49/user/month. Enterprise plans with custom SLAs are available. Contact us for a tailored quote." },
    { q: "Is there a free trial available?", a: "Yes! We offer a 14-day free trial with full access to all modules — no credit card required." },
    { q: "How does DevERP handle data security?", a: "We use AES-256 encryption, role-based access controls, MFA, and are compliant with GDPR, SOC2 Type II, ISO 27001, and HIPAA." },
    { q: "Can DevERP integrate with our existing software?", a: "Yes. DevERP offers 100+ pre-built integrations and open RESTful APIs for custom integrations with any business system." },
    { q: "What kind of support does DevERP provide?", a: "We provide 24/7 support via chat, email, and phone. Enterprise clients get a dedicated success manager and 15-minute P1 response SLA." },
    { q: "Can DevERP scale as our business grows?", a: "Absolutely. DevERP is built on a microservices architecture that scales horizontally. Clients range from 10-person startups to 50,000-employee enterprises." },
    { q: "What implementation timeline should we expect?", a: "Standard implementations take 2–6 weeks. Complex multi-module deployments with data migration may take 8–12 weeks." },
    { q: "Does DevERP support multiple languages?", a: "Yes. The platform is available in 18 languages including English, Arabic, Spanish, French, German, Mandarin, and Hindi." }
  ],

  // ─── Navigation ──────────────────────────────────────────────────────────────
  navigation: [
    { label: "Home", href: "../index.html", pageHref: "index.html" },
    { label: "Solutions", href: "../pages/solutions.html", pageHref: "pages/solutions.html" },
    { label: "About", href: "../pages/about.html", pageHref: "pages/about.html" },
    { label: "FAQ", href: "../pages/faq.html", pageHref: "pages/faq.html" },
    { label: "Contact", href: "../pages/contact.html", pageHref: "pages/contact.html" }
  ],

  // ─── Chatbot Config (ready for integration) ───────────────────────────────
  chatbot: {
    enabled: false, // Set to true when chatbot is integrated
    provider: null, // "tawk.to" | "custom" | "dialogflow"
    widgetId: null,
    // Pre-built intent map for chatbot training
    intents: [
      { intent: "pricing", keywords: ["price", "cost", "plan", "subscription", "trial"], redirect: "contact" },
      { intent: "demo", keywords: ["demo", "trial", "test", "try"], redirect: "contact" },
      { intent: "hrms", keywords: ["hr", "hrms", "payroll", "employee", "attendance"], redirect: "hrms" },
      { intent: "finance", keywords: ["finance", "accounting", "invoice", "tax", "ledger"], redirect: "finance" },
      { intent: "inventory", keywords: ["inventory", "stock", "warehouse", "supply"], redirect: "inventory" },
      { intent: "crm", keywords: ["crm", "sales", "leads", "customers", "pipeline"], redirect: "crm" }
    ]
  }
};

// Make available globally
window.ERPData = ERPData;
