/**
 * main.js — Page initialization entry point
 * Detects current page and triggers the correct render functions.
 * Initializes all shared components (navbar, footer, chatbot, etc.)
 */

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const page = path.split("/").pop().replace(".html", "") || "index";

  // ─── Inject shared layout ─────────────────────────────────────────────────
  injectLayout(page);

  // ─── Page-specific initialization ─────────────────────────────────────────
  switch (page) {
    case "index":
    case "":
      initHomePage();
      break;
    case "solutions":
      initSolutionsPage();
      break;
    case "hrms":
    case "finance":
    case "inventory":
    case "crm":
      initModulePage(page);
      break;
    case "faq":
      initFaqPage();
      break;
    case "about":
      initAboutPage();
      break;
    case "contact":
      initContactPage();
      break;
  }

  // ─── Shared initializers ──────────────────────────────────────────────────
  UI.initNavbar();
  UI.initScrollReveal();
  UI.initSmoothScroll();
  UI.initChatbot();
});

// ─── Layout injection ─────────────────────────────────────────────────────────
function injectLayout(page) {
  const isPage = page !== "index" && page !== "";
  const activePage = page === "index" ? "home" : page;

  // Inject navbar
  const navEl = document.getElementById("nav-placeholder");
  if (navEl) navEl.innerHTML = UI.renderNavbar(activePage);

  // Inject footer
  const footerEl = document.getElementById("footer-placeholder");
  if (footerEl) footerEl.innerHTML = UI.renderFooter(isPage);

  // Inject chatbot placeholder
  const chatEl = document.getElementById("chatbot-placeholder");
  if (chatEl) chatEl.innerHTML = UI.renderChatbotPlaceholder();
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
function initHomePage() {
  // Hero
  const heroEl = document.getElementById("hero-section");
  if (heroEl) heroEl.innerHTML = UI.renderHomeHero();

  // Stats bar
  const statsEl = document.getElementById("stats-section");
  if (statsEl) statsEl.innerHTML = UI.renderStatsBar();

  // Module cards
  const modulesEl = document.getElementById("modules-section");
  if (modulesEl) {
    modulesEl.innerHTML = ERPData.modules
      .map(m => UI.renderModuleCard(m, false))
      .join("");
  }

  // Services
  const servicesEl = document.getElementById("services-section");
  if (servicesEl) {
    servicesEl.innerHTML = ERPData.services
      .map(s => UI.renderServiceCard(s))
      .join("");
  }

  // Case studies
  const casesEl = document.getElementById("cases-section");
  if (casesEl) {
    casesEl.innerHTML = ERPData.caseStudies
      .map(cs => UI.renderCaseStudyCard(cs))
      .join("");
  }

  // Home FAQs (top 4 general)
  const faqEl = document.getElementById("home-faq-section");
  if (faqEl) {
    const top4 = ERPData.generalFaqs.slice(0, 4);
    faqEl.innerHTML = top4.map((f, i) => UI.renderFaqItem(f, i, "home")).join("");
    UI.initFaqToggle();
  }
}

// ─── SOLUTIONS PAGE ───────────────────────────────────────────────────────────
function initSolutionsPage() {
  // Page header
  const headerEl = document.getElementById("page-header");
  if (headerEl) {
    headerEl.innerHTML = UI.renderPageHeader(
      "ERP Solutions",
      "One platform. Four powerful modules. Infinite possibilities.",
      [{ label: "Home", href: "../index.html" }, { label: "Solutions" }]
    );
  }

  // Search bar
  const searchEl = document.getElementById("search-section");
  if (searchEl) {
    searchEl.innerHTML = UI.renderSearchBar("Search modules...", "modules-grid");
    UI.initModuleSearch();
  }

  // Module cards
  const modulesEl = document.getElementById("modules-grid");
  if (modulesEl) {
    modulesEl.innerHTML = ERPData.modules
      .map(m => UI.renderModuleCard(m, true))
      .join("");
  }

  // Services
  const servicesEl = document.getElementById("services-section");
  if (servicesEl) {
    servicesEl.innerHTML = ERPData.services
      .map(s => UI.renderServiceCard(s))
      .join("");
  }
}

// ─── MODULE DETAIL PAGE ───────────────────────────────────────────────────────
function initModulePage(slug) {
  const module = ERPData.modules.find(m => m.slug === slug);
  if (!module) return;

  // Set page title
  document.title = `${module.fullName} | ${ERPData.company.name}`;

  // Page header with module color
  const headerEl = document.getElementById("page-header");
  if (headerEl) {
    headerEl.innerHTML = UI.renderPageHeader(
      module.fullName,
      module.tagline,
      [
        { label: "Home", href: "../index.html" },
        { label: "Solutions", href: "../pages/solutions.html" },
        { label: module.name }
      ]
    );
    headerEl.style.setProperty("--accent", module.color);
  }

  // Module hero stat
  const statEl = document.getElementById("module-stat");
  if (statEl) {
    statEl.innerHTML = `
      <div class="module-hero-stat" style="--accent: ${module.color}">
        <div class="mhs-icon">${module.icon}</div>
        <div class="mhs-value">${module.heroStat.value}</div>
        <div class="mhs-label">${module.heroStat.label}</div>
      </div>`;
  }

  // Description
  const descEl = document.getElementById("module-description");
  if (descEl) descEl.textContent = module.description;

  // Features
  const featuresEl = document.getElementById("features-section");
  if (featuresEl) {
    featuresEl.innerHTML = module.features
      .map((f, i) => UI.renderFeatureCard(f, i))
      .join("");
  }

  // Module FAQs
  const faqEl = document.getElementById("module-faq-section");
  if (faqEl) {
    faqEl.innerHTML = module.faqs
      .map((f, i) => UI.renderFaqItem(f, i, module.id))
      .join("");
    UI.initFaqToggle();
  }

  // Related modules
  const relatedEl = document.getElementById("related-modules");
  if (relatedEl) {
    const related = ERPData.modules.filter(m => m.id !== module.id);
    relatedEl.innerHTML = related
      .map(m => UI.renderModuleCard(m, true))
      .join("");
  }
}

// ─── FAQ PAGE ─────────────────────────────────────────────────────────────────
function initFaqPage() {
  // Page header
  const headerEl = document.getElementById("page-header");
  if (headerEl) {
    headerEl.innerHTML = UI.renderPageHeader(
      "Frequently Asked Questions",
      "Everything you need to know about DevERP.",
      [{ label: "Home", href: "../index.html" }, { label: "FAQ" }]
    );
  }

  // Search
  const searchEl = document.getElementById("search-section");
  if (searchEl) {
    searchEl.innerHTML = UI.renderSearchBar("Search FAQs...", "faq-list");
    UI.initFaqSearch();
  }

  const faqListEl = document.getElementById("faq-list");
  if (!faqListEl) return;

  let allFaqs = "";

  // General FAQs
  allFaqs += `<div class="faq-group">
    <h3 class="faq-group-title">General Questions</h3>
    <div class="faq-list" id="faq-general">
      ${ERPData.generalFaqs.map((f, i) => UI.renderFaqItem(f, i, "general")).join("")}
    </div>
  </div>`;

  // Module FAQs
  ERPData.modules.forEach(mod => {
    allFaqs += `<div class="faq-group">
      <h3 class="faq-group-title" style="--accent: ${mod.color}">${mod.icon} ${mod.fullName}</h3>
      <div class="faq-list" id="faq-${mod.id}">
        ${mod.faqs.map((f, i) => UI.renderFaqItem(f, i, mod.id)).join("")}
      </div>
    </div>`;
  });

  faqListEl.innerHTML = allFaqs;
  UI.initFaqToggle(faqListEl);
}

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
function initAboutPage() {
  const c = ERPData.company;

  // Page header
  const headerEl = document.getElementById("page-header");
  if (headerEl) {
    headerEl.innerHTML = UI.renderPageHeader(
      "About DevERP",
      "Built by enterprise veterans. Designed for every business.",
      [{ label: "Home", href: "../index.html" }, { label: "About" }]
    );
  }

  // Mission & Vision
  const missionEl = document.getElementById("mission-section");
  if (missionEl) {
    missionEl.innerHTML = `
      <div class="mission-card reveal">
        <div class="mission-label">Our Mission</div>
        <p>${c.mission}</p>
      </div>
      <div class="mission-card reveal">
        <div class="mission-label">Our Vision</div>
        <p>${c.vision}</p>
      </div>`;
  }

  // Stats
  const statsEl = document.getElementById("stats-section");
  if (statsEl) statsEl.innerHTML = UI.renderStatsBar();

  // Values
  const valuesEl = document.getElementById("values-section");
  if (valuesEl) {
    valuesEl.innerHTML = c.values.map(v => `
      <div class="value-card reveal">
        <div class="value-icon">${v.icon}</div>
        <h4>${v.title}</h4>
        <p>${v.desc}</p>
      </div>`).join("");
  }

  // Team
  const teamEl = document.getElementById("team-section");
  if (teamEl) {
    teamEl.innerHTML = c.team.map(t => UI.renderTeamCard(t)).join("");
  }
}

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
function initContactPage() {
  // Page header
  const headerEl = document.getElementById("page-header");
  if (headerEl) {
    headerEl.innerHTML = UI.renderPageHeader(
      "Get in Touch",
      "Ready to transform your operations? Let's talk.",
      [{ label: "Home", href: "../index.html" }, { label: "Contact" }]
    );
  }

  // Contact info
  const infoEl = document.getElementById("contact-info");
  const c = ERPData.company.contact;
  if (infoEl) {
    infoEl.innerHTML = `
      <div class="contact-detail">
        <span class="contact-icon">✉</span>
        <div><strong>Email</strong><a href="mailto:${c.email}">${c.email}</a></div>
      </div>
      <div class="contact-detail">
        <span class="contact-icon">☏</span>
        <div><strong>Phone</strong><a href="tel:${c.phone}">${c.phone}</a></div>
      </div>
      <div class="contact-detail">
        <span class="contact-icon">⌖</span>
        <div><strong>Office</strong><span>${c.address}</span></div>
      </div>`;
  }

  // Form handling
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const name = form.querySelector("#name").value;
      btn.textContent = "Sending...";
      btn.disabled = true;
      // Simulate API call
      setTimeout(() => {
        document.getElementById("form-success").style.display = "flex";
        form.reset();
        btn.textContent = "Send Message";
        btn.disabled = false;
        // Populate success message with name
        document.getElementById("success-name").textContent = name;
      }, 1200);
    });
  }
}
