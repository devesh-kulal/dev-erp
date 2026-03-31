/**
 * ui.js — Reusable UI component factory
 * All DOM-building functions live here. Pages call these to render content.
 * Chatbot can also call these functions to inject UI into the placeholder div.
 */

const UI = (() => {

  // ─── Navbar ─────────────────────────────────────────────────────────────────
  function renderNavbar(activePage = "") {
    const nav = ERPData.navigation;
    const isPage = activePage !== "home";
    const logoHref = isPage ? "../index.html" : "index.html";

    const links = nav.map(item => {
      const href = isPage ? item.href : item.pageHref;
      const isActive = item.label.toLowerCase() === activePage ? 'class="active"' : '';
      return `<a href="${href}" ${isActive}>${item.label}</a>`;
    }).join("");

    return `
      <nav class="navbar" id="navbar">
        <div class="nav-inner container">
          <a href="${logoHref}" class="nav-logo">
            <span class="logo-mark">⬡</span>
            <span class="logo-text">${ERPData.company.name}</span>
          </a>
          <div class="nav-links" id="navLinks">
            ${links}
            <a href="${isPage ? '../pages/contact.html' : 'pages/contact.html'}" class="btn btn-primary btn-sm">Get Demo</a>
          </div>
          <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>`;
  }

  // ─── Footer ──────────────────────────────────────────────────────────────────
  function renderFooter(isPage = false) {
    const base = isPage ? "../" : "";
    const modules = ERPData.modules;
    return `
      <footer class="footer">
        <div class="container footer-grid">
          <div class="footer-brand">
            <a href="${base}index.html" class="nav-logo">
              <span class="logo-mark">⬡</span>
              <span class="logo-text">${ERPData.company.name}</span>
            </a>
            <p>${ERPData.company.description}</p>
            <div class="footer-social">
              <a href="${ERPData.company.contact.social.linkedin}" aria-label="LinkedIn">in</a>
              <a href="${ERPData.company.contact.social.twitter}" aria-label="Twitter">𝕏</a>
              <a href="${ERPData.company.contact.social.github}" aria-label="GitHub">⌥</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Modules</h4>
            <ul>
              ${modules.map(m => `<li><a href="${base}pages/${m.slug}.html">${m.fullName}</a></li>`).join("")}
            </ul>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="${base}pages/about.html">About Us</a></li>
              <li><a href="${base}pages/solutions.html">Solutions</a></li>
              <li><a href="${base}pages/faq.html">FAQ</a></li>
              <li><a href="${base}pages/contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul class="footer-contact">
              <li>✉ ${ERPData.company.contact.email}</li>
              <li>☏ ${ERPData.company.contact.phone}</li>
              <li>⌖ ${ERPData.company.contact.address}</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom container">
          <p>© ${new Date().getFullYear()} ${ERPData.company.name}. All rights reserved.</p>
          <p>Built for scale. Designed for humans.</p>
        </div>
      </footer>`;
  }

  // ─── Module Card ─────────────────────────────────────────────────────────────
  function renderModuleCard(module, isPage = false) {
    const base = isPage ? "../" : "";
    return `
      <a href="${base}pages/${module.slug}.html" class="module-card" data-module="${module.id}" style="--accent: ${module.color}">
        <div class="module-card-icon">${module.icon}</div>
        <div class="module-card-body">
          <div class="module-tag">${module.name}</div>
          <h3>${module.fullName}</h3>
          <p>${module.tagline}</p>
        </div>
        <div class="module-card-stat">
          <span class="stat-value">${module.heroStat.value}</span>
          <span class="stat-label">${module.heroStat.label}</span>
        </div>
        <span class="module-arrow">→</span>
      </a>`;
  }

  // ─── Feature Card ────────────────────────────────────────────────────────────
  function renderFeatureCard(feature, index) {
    return `
      <div class="feature-card" style="animation-delay: ${index * 0.08}s">
        <div class="feature-num">${String(index + 1).padStart(2, "0")}</div>
        <div class="feature-body">
          <h4>${feature.title}</h4>
          <p>${feature.desc}</p>
        </div>
      </div>`;
  }

  // ─── FAQ Item ────────────────────────────────────────────────────────────────
  function renderFaqItem(faq, index, groupId = "") {
    const id = `faq-${groupId}-${index}`;
    return `
      <div class="faq-item" data-faq-id="${id}">
        <button class="faq-question" aria-expanded="false" aria-controls="${id}-answer">
          <span>${faq.q}</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" id="${id}-answer" role="region">
          <p>${faq.a}</p>
        </div>
      </div>`;
  }

  // ─── Service Card ────────────────────────────────────────────────────────────
  function renderServiceCard(service) {
    return `
      <div class="service-card">
        <div class="service-icon">${service.icon}</div>
        <div class="service-body">
          <h4>${service.title}</h4>
          <p>${service.desc}</p>
        </div>
        <div class="service-highlight">${service.highlight}</div>
      </div>`;
  }

  // ─── Case Study Card ─────────────────────────────────────────────────────────
  function renderCaseStudyCard(cs) {
    return `
      <div class="case-card">
        <div class="case-industry">${cs.industry}</div>
        <h3>${cs.company}</h3>
        <p class="case-metric">${cs.metric}</p>
        <p>${cs.summary}</p>
        <ul class="case-results">
          ${cs.results.map(r => `<li>${r}</li>`).join("")}
        </ul>
      </div>`;
  }

  // ─── Stats Bar ───────────────────────────────────────────────────────────────
  function renderStatsBar() {
    const c = ERPData.company;
    return `
      <div class="stats-bar">
        <div class="stat-item"><span class="stat-num">${c.clients}</span><span class="stat-lbl">Clients Worldwide</span></div>
        <div class="stat-item"><span class="stat-num">${c.countries}</span><span class="stat-lbl">Countries</span></div>
        <div class="stat-item"><span class="stat-num">${c.uptime}</span><span class="stat-lbl">Uptime SLA</span></div>
        <div class="stat-item"><span class="stat-num">${c.founded}</span><span class="stat-lbl">Founded</span></div>
      </div>`;
  }

  // ─── Team Card ───────────────────────────────────────────────────────────────
  function renderTeamCard(member) {
    const initials = member.name.split(" ").map(n => n[0]).join("");
    return `
      <div class="team-card">
        <div class="team-avatar">${initials}</div>
        <h4>${member.name}</h4>
        <div class="team-role">${member.role}</div>
        <p>${member.bio}</p>
      </div>`;
  }

  // ─── Search Bar ──────────────────────────────────────────────────────────────
  function renderSearchBar(placeholder = "Search...", targetId = "") {
    return `
      <div class="search-wrap">
        <span class="search-icon">⌕</span>
        <input type="search" class="search-input" placeholder="${placeholder}" 
               data-target="${targetId}" id="searchInput" autocomplete="off">
        <kbd class="search-hint">ESC to clear</kbd>
      </div>`;
  }

  // ─── Chatbot Placeholder ─────────────────────────────────────────────────────
  /**
   * Chatbot placeholder div — present on every page.
   * To integrate Tawk.to: set ERPData.chatbot.enabled=true and paste your widget script.
   * To integrate a custom AI: render your chat UI inside #chatbot-container.
   */
  function renderChatbotPlaceholder() {
    return `
      <!-- CHATBOT PLACEHOLDER — integrate any chatbot here -->
      <div id="chatbot-container" class="chatbot-placeholder" 
           data-chatbot-enabled="${ERPData.chatbot.enabled}"
           data-chatbot-provider="${ERPData.chatbot.provider || 'none'}"
           aria-label="Chat support widget">
        ${!ERPData.chatbot.enabled ? `
          <button class="chatbot-fab" id="chatbotFab" aria-label="Open chat">
            <span class="chatbot-fab-icon">💬</span>
            <span class="chatbot-fab-badge">AI</span>
          </button>
          <div class="chatbot-panel" id="chatbotPanel" aria-hidden="true">
            <div class="chatbot-header">
              <span>⬡ DevAI Assistant</span>
              <button class="chatbot-close" id="chatbotClose" aria-label="Close chat">✕</button>
            </div>
            <div class="chatbot-body">
              <div class="chatbot-message bot">
                <p>👋 Hi! I'm DevAI. Ask me anything about our ERP modules, pricing, or features.</p>
              </div>
              <div class="chatbot-suggestions">
                <button class="suggestion-chip" onclick="UI.handleSuggestion(this)">What modules do you offer?</button>
                <button class="suggestion-chip" onclick="UI.handleSuggestion(this)">How much does it cost?</button>
                <button class="suggestion-chip" onclick="UI.handleSuggestion(this)">Book a demo</button>
              </div>
            </div>
            <div class="chatbot-input-row">
              <input type="text" id="chatbotInput" placeholder="Type your question..." aria-label="Chat input">
              <button id="chatbotSend" aria-label="Send">→</button>
            </div>
          </div>
        ` : `<!-- Chatbot script will be injected here by provider SDK -->`}
      </div>`;
  }

  // ─── Hero Section (Home) ─────────────────────────────────────────────────────
  function renderHomeHero() {
    const c = ERPData.company;
    return `
      <section class="hero" id="hero">
        <div class="hero-bg">
          <div class="hero-grid"></div>
          <div class="hero-glow glow-1"></div>
          <div class="hero-glow glow-2"></div>
        </div>
        <div class="container hero-content">
          <div class="hero-eyebrow">Enterprise Resource Planning</div>
          <h1 class="hero-title">
            <span class="title-line">${c.tagline.split(". ").join("</span><span class='title-line'>")}</span>
          </h1>
          <p class="hero-desc">${c.description}</p>
          <div class="hero-actions">
            <a href="pages/solutions.html" class="btn btn-primary btn-lg">Explore Solutions</a>
            <a href="pages/contact.html" class="btn btn-outline btn-lg">Book a Demo</a>
          </div>
          <div class="hero-modules-preview">
            ${ERPData.modules.map(m => `
              <div class="hero-module-chip" style="--c: ${m.color}">
                <span>${m.icon}</span>${m.name}
              </div>`).join("")}
          </div>
        </div>
        <div class="hero-scroll-hint">
          <span>Scroll to explore</span>
          <span class="scroll-arrow">↓</span>
        </div>
      </section>`;
  }

  // ─── Breadcrumb ──────────────────────────────────────────────────────────────
  function renderBreadcrumb(items) {
    return `
      <nav class="breadcrumb" aria-label="breadcrumb">
        ${items.map((item, i) =>
          i < items.length - 1
            ? `<a href="${item.href}">${item.label}</a><span class="breadcrumb-sep">›</span>`
            : `<span class="breadcrumb-current">${item.label}</span>`
        ).join("")}
      </nav>`;
  }

  // ─── Page Header ─────────────────────────────────────────────────────────────
  function renderPageHeader(title, subtitle, breadcrumbs = []) {
    return `
      <section class="page-header">
        <div class="page-header-bg">
          <div class="hero-grid"></div>
        </div>
        <div class="container">
          ${breadcrumbs.length ? renderBreadcrumb(breadcrumbs) : ""}
          <h1>${title}</h1>
          ${subtitle ? `<p class="page-subtitle">${subtitle}</p>` : ""}
        </div>
      </section>`;
  }

  // ─── FAQ Search Logic ─────────────────────────────────────────────────────────
  function initFaqSearch() {
    const input = document.getElementById("searchInput");
    if (!input) return;
    input.addEventListener("input", () => {
      const query = input.value.toLowerCase().trim();
      const items = document.querySelectorAll(".faq-item");
      let visible = 0;
      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        const match = !query || text.includes(query);
        item.style.display = match ? "" : "none";
        if (match) visible++;
      });
      // Update empty state
      let empty = document.getElementById("faqEmpty");
      if (!empty) {
        empty = document.createElement("div");
        empty.id = "faqEmpty";
        empty.className = "faq-empty";
        empty.textContent = "No FAQs found for your search. Try different keywords.";
        document.querySelector(".faq-list")?.appendChild(empty);
      }
      empty.style.display = visible === 0 ? "" : "none";
    });
    input.addEventListener("keydown", e => {
      if (e.key === "Escape") { input.value = ""; input.dispatchEvent(new Event("input")); }
    });
  }

  // ─── Module Search Logic ──────────────────────────────────────────────────────
  function initModuleSearch() {
    const input = document.getElementById("searchInput");
    if (!input) return;
    input.addEventListener("input", () => {
      const query = input.value.toLowerCase().trim();
      const cards = document.querySelectorAll(".module-card");
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = !query || text.includes(query) ? "" : "none";
      });
    });
  }

  // ─── FAQ Toggle ──────────────────────────────────────────────────────────────
  function initFaqToggle(container = document) {
    container.querySelectorAll(".faq-question").forEach(btn => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const answer = item.querySelector(".faq-answer");
        const icon = btn.querySelector(".faq-icon");
        const isOpen = item.classList.contains("open");

        // Close all in same group
        const group = item.closest(".faq-list, .faq-group");
        if (group) {
          group.querySelectorAll(".faq-item.open").forEach(open => {
            if (open !== item) {
              open.classList.remove("open");
              open.querySelector(".faq-question").setAttribute("aria-expanded", "false");
              open.querySelector(".faq-icon").textContent = "+";
              open.querySelector(".faq-answer").style.maxHeight = null;
            }
          });
        }

        item.classList.toggle("open", !isOpen);
        btn.setAttribute("aria-expanded", !isOpen);
        icon.textContent = isOpen ? "+" : "−";
        answer.style.maxHeight = isOpen ? null : answer.scrollHeight + "px";
      });
    });
  }

  // ─── Navbar Scroll Effect ────────────────────────────────────────────────────
  function initNavbar() {
    const navbar = document.getElementById("navbar");
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");

    window.addEventListener("scroll", () => {
      navbar?.classList.toggle("scrolled", window.scrollY > 40);
    });

    toggle?.addEventListener("click", () => {
      links?.classList.toggle("open");
      toggle.classList.toggle("active");
    });

    // Close mobile menu on link click
    links?.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle?.classList.remove("active");
      });
    });
  }

  // ─── Chatbot FAB ─────────────────────────────────────────────────────────────
  function initChatbot() {
    const fab = document.getElementById("chatbotFab");
    const panel = document.getElementById("chatbotPanel");
    const closeBtn = document.getElementById("chatbotClose");
    const sendBtn = document.getElementById("chatbotSend");
    const input = document.getElementById("chatbotInput");
    const heroBtn = document.getElementById("heroOpenChat");

    const openChat = () => {
      panel?.classList.add("open");
      panel?.setAttribute("aria-hidden", "false");
      input?.focus();
    };

    fab?.addEventListener("click", openChat);
    heroBtn?.addEventListener("click", openChat);
    closeBtn?.addEventListener("click", () => {
      panel?.classList.remove("open");
      panel?.setAttribute("aria-hidden", "true");
    });

    const sendMessage = () => {
      const val = input?.value.trim();
      if (!val) return;
      appendChatMessage(val, "user");
      input.value = "";
      setTimeout(() => botReply(val), 600);
    };

    sendBtn?.addEventListener("click", sendMessage);
    input?.addEventListener("keydown", e => e.key === "Enter" && sendMessage());
  }

  function appendChatMessage(text, role) {
    const body = document.querySelector(".chatbot-body");
    if (!body) return;
    const msg = document.createElement("div");
    msg.className = `chatbot-message ${role}`;
    msg.innerHTML = `<p>${text}</p>`;
    body.appendChild(msg);
    body.scrollTop = body.scrollHeight;
  }

  // Basic chatbot reply using data.js — replace with real AI later
  function botReply(userMsg) {
    const msg = userMsg.toLowerCase();
    const intents = ERPData.chatbot.intents;
    let reply = "I'd be happy to help! Could you clarify what you're looking for? You can ask about our modules (HRMS, Finance, Inventory, CRM), pricing, or to book a demo.";

    // Check module FAQs
    for (const mod of ERPData.modules) {
      for (const faq of mod.faqs) {
        if (msg.includes(mod.name.toLowerCase()) || msg.includes(mod.id)) {
          reply = `About ${mod.fullName}: ${mod.description} <br><br>Would you like to <a href="pages/${mod.slug}.html">learn more</a>?`;
          break;
        }
      }
    }
    // Check general FAQs
    for (const faq of ERPData.generalFaqs) {
      const keywords = faq.q.toLowerCase().split(" ").filter(w => w.length > 4);
      if (keywords.some(k => msg.includes(k))) {
        reply = faq.a;
        break;
      }
    }

    appendChatMessage(reply, "bot");
  }

  // Suggestion chip handler
  function handleSuggestion(btn) {
    const text = btn.textContent;
    appendChatMessage(text, "user");
    btn.closest(".chatbot-suggestions")?.remove();
    setTimeout(() => botReply(text), 500);
  }

  // ─── Scroll Animations ────────────────────────────────────────────────────────
  function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  }

  // ─── Smooth Scroll ───────────────────────────────────────────────────────────
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener("click", e => {
        const target = document.querySelector(a.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  // ─── Public API ──────────────────────────────────────────────────────────────
  return {
    renderNavbar,
    renderFooter,
    renderModuleCard,
    renderFeatureCard,
    renderFaqItem,
    renderServiceCard,
    renderCaseStudyCard,
    renderStatsBar,
    renderTeamCard,
    renderSearchBar,
    renderChatbotPlaceholder,
    renderHomeHero,
    renderBreadcrumb,
    renderPageHeader,
    initFaqSearch,
    initModuleSearch,
    initFaqToggle,
    initNavbar,
    initChatbot,
    initScrollReveal,
    initSmoothScroll,
    handleSuggestion,
    appendChatMessage,
    botReply
  };
})();

window.UI = UI;
