# DevERP Portfolio Website

A fully data-driven, modular ERP portfolio website built with vanilla HTML, CSS, and JavaScript. Chatbot-ready architecture.

## Project Structure

```
erp-portfolio/
├── index.html              # Home page
├── pages/
│   ├── solutions.html      # All modules overview
│   ├── hrms.html           # HRMS detail page
│   ├── finance.html        # Finance detail page
│   ├── inventory.html      # Inventory detail page
│   ├── crm.html            # CRM detail page
│   ├── faq.html            # All FAQs with search
│   ├── about.html          # Company, team, values
│   └── contact.html        # Contact form
├── css/
│   └── styles.css          # Full design system
├── js/
│   ├── data.js             # ALL content (source of truth)
│   ├── ui.js               # Reusable component functions
│   └── main.js             # Page initialization logic
└── assets/
    └── images/             # Add your images here
```

## Running Locally

### Option 1: VS Code Live Server (Recommended)
1. Open the `erp-portfolio/` folder in VS Code
2. Install the **Live Server** extension (ritwickdey.LiveServer)
3. Right-click `index.html` → **Open with Live Server**
4. Visit `http://127.0.0.1:5500`

### Option 2: Python HTTP Server
```bash
cd erp-portfolio
python3 -m http.server 8080
# Open http://localhost:8080
```

### Option 3: Node.js serve
```bash
cd erp-portfolio
npx serve .
# Open the URL shown in terminal
```

> ⚠️ Do NOT open HTML files directly via `file://` — relative paths require a server.

---

## Adding a Chatbot

### Option A: Tawk.to (Free, 5 minutes)
1. Sign up at https://tawk.to
2. Get your Widget Script (looks like `<!--Start of Tawk.to Script-->...`)
3. In `js/data.js`, set:
   ```js
   chatbot: {
     enabled: true,
     provider: "tawk.to",
     widgetId: "YOUR_WIDGET_ID"
   }
   ```
4. Paste the Tawk.to script tag before `</body>` in each HTML file
5. The `#chatbot-container` div on every page is already positioned for you

### Option B: Custom AI Chatbot
1. Replace the chatbot placeholder HTML in `ui.js → renderChatbotPlaceholder()`
2. The `botReply()` function in `ui.js` is a basic local implementation
3. To connect to Claude/OpenAI: replace `botReply()` with an API call:
   ```js
   async function botReply(userMsg) {
     const res = await fetch('/api/chat', {
       method: 'POST',
       body: JSON.stringify({ message: userMsg, context: ERPData })
     });
     const data = await res.json();
     appendChatMessage(data.reply, 'bot');
   }
   ```
4. Feed `ERPData` (from `data.js`) to your AI as context/system prompt

### Option C: Dialogflow / Botpress
- Replace the `#chatbot-container` content with the provider's embed script
- Both providers can be given `ERPData.modules`, `ERPData.generalFaqs`, and `ERPData.chatbot.intents` for training

---

## Extending Content

All content lives in `js/data.js`. To add a new module:

```js
// In ERPData.modules array:
{
  id: "procurement",
  slug: "procurement",
  name: "Procurement",
  fullName: "Procurement Management System",
  icon: "◈",
  color: "#F59E0B",
  tagline: "...",
  description: "...",
  heroStat: { value: "30%", label: "Cost savings" },
  features: [ { title: "...", desc: "..." } ],
  faqs: [ { q: "...", a: "..." } ]
}
```

Then create `pages/procurement.html` (copy any existing module page).
`main.js` will automatically detect the slug and render it.

---

## Key Design Decisions

| Concern        | Implementation                              |
|----------------|---------------------------------------------|
| Content source | `data.js` — single source of truth          |
| Rendering      | `ui.js` — pure DOM manipulation functions   |
| Page logic     | `main.js` — page detection & orchestration  |
| Chatbot hook   | `#chatbot-placeholder` div on every page    |
| FAQ format     | Q&A objects — usable by UI and AI both      |
| Search         | Live `input` filter on FAQ/module text      |
| Animations     | CSS `@keyframes` + IntersectionObserver     |
| Responsiveness | CSS Grid + `clamp()` + media queries        |
