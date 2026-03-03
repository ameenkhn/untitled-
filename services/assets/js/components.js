import {
  navItems,
  heroContent,
  homeServices,
  aboutStats,
  qualifications,
  achievements,
  memberships,
  philosophyQuote,
  beforeAfterCases,
  testimonials,
  faqCategories,
  contactCards,
  ctaBenefits,
  galleryImages,
  blogPosts,
  blogCategories,
  blogPostsDetailed,
  servicesPageCategories,
  serviceDetails,
  newsletterCopy,
  siteMeta,
  choice,
} from "./state.js";

const icons = {
  award: `
    <svg viewBox="0 0 24 24" fill="none" stroke="#22a087" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="icon">
      <circle cx="12" cy="8" r="6"></circle>
      <path d="M15.5 14l1.5 8-5-3-5 3 1.5-8"></path>
    </svg>
  `,

  shield: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="icon">
      <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6z"></path>
    </svg>
  `,

  users: `
    <svg viewBox="0 0 24 24" fill="none" stroke="#22a087" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="icon">
      <circle cx="9" cy="7" r="4"></circle>
      <circle cx="17" cy="7" r="4"></circle>
      <path d="M2 21v-2a4 4 0 0 1 4-4h6"></path>
      <path d="M14 15h2a4 4 0 0 1 4 4v2"></path>
    </svg>
  `,

  heart: `
    <svg viewBox="0 0 24 24" fill="none" stroke="#22a087" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="icon">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"></path>
    </svg>
  `,

  benefit: `
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#22a087"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="lucide lucide-circle-check-big w-5 h-5"
>
  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
  <path d="m9 11 3 3L22 4"></path>
</svg>

  `,
  procedure: `
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#d2962d"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10"></circle>
  <line x1="12" x2="12" y1="8" y2="12"></line>
  <line x1="12" x2="12.01" y1="16" y2="16"></line>
</svg>

  `,

  graduation: `
    <svg viewBox="0 0 24 24" fill="none" stroke="#22a087" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="icon">
      <path d="M22 10L12 4 2 10l10 6z"></path>
      <path d="M6 12v5c0 1.7 3 3 6 3s6-1.3 6-3v-5"></path>
    </svg>
  `,

  footprints: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="icon">
      <circle cx="7" cy="4" r="2"></circle>
      <circle cx="17" cy="6" r="2"></circle>
      <path d="M5 10c0 2 2 4 4 4"></path>
      <path d="M15 12c0 2 2 4 4 4"></path>
    </svg>
  `,

  syringe: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="icon">
      <path d="M18 2l4 4"></path>
      <path d="M2 22l4-4"></path>
      <path d="M7 17L17 7"></path>
      <path d="M15 5l4 4"></path>
    </svg>
  `,

  hospital: `
    <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <!-- Clipboard body -->
          <rect
            x="2"
            y="7"
            width="20"
            height="15"
            rx="2.5"
            fill="#DEDEE0"
          />

          <!-- Clipboard handle (perfectly symmetric, touches only at ends) -->
          <path
            d="
              M7 4
              h10
              a1.5 1.5 0 0 1 1.5 1.5
              v2
              h-1.8
              v-1.2
              a0.8 0.8 0 0 0 -0.8 -0.8
              h-6.2
              a0.8 0.8 0 0 0 -0.8 0.8
              v1.2
              H5.5
              v-2
              A1.5 1.5 0 0 1 7 4
              Z"
            fill="#6E6E73"
          />

          <!-- Plus icon -->
          <rect x="11" y="11" width="2" height="7" fill="#1FA187" />
          <rect x="8.5" y="13.5" width="7" height="2" fill="#1FA187" />
    </svg>


  `,
  

  sparkles: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="icon">
      <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"></path>
    </svg>
  `,

  whatsapp: `
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="whatsapp-icon">
      <style>
        .whatsapp-icon {
        width: 24px;
        height: 24px;
        fill: #25D366; /* Official WhatsApp green */
        }
      </style>

      <path d="M12.04 2C6.56 2 2.1 6.46 2.1 11.94c0 1.95.51 3.82 1.48 5.46L2 22l4.76-1.53a9.9 9.9 0 0 0 5.28 1.53h.01c5.48 0 9.94-4.46 9.94-9.94C22 6.46 17.54 2 12.04 2zm5.79 14.4c-.24.67-1.38 1.29-1.91 1.36-.5.07-1.14.1-1.84-.11-.43-.13-.99-.32-1.7-.63-3-1.3-4.96-4.35-5.11-4.55-.15-.2-1.22-1.63-1.22-3.1 0-1.47.77-2.19 1.04-2.49.27-.3.6-.37.8-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.24.58.82 2.02.89 2.17.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.17-.32.38-.46.51-.15.15-.3.32-.13.62.17.3.77 1.27 1.65 2.05 1.13 1.01 2.09 1.33 2.39 1.48.3.15.48.13.65-.08.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.7.8 1.99.95.3.15.5.22.57.35.07.13.07.75-.17 1.42z"/>
    </svg>
  `,

  bandage: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="icon">
      <rect x="3" y="10" width="18" height="4" rx="2"></rect>
      <circle cx="12" cy="12" r="1"></circle>
    </svg>
  `,

  scan: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="icon">
      <path d="M3 7V3h4"></path>
      <path d="M21 7V3h-4"></path>
      <path d="M3 17v4h4"></path>
      <path d="M21 17v4h-4"></path>
    </svg>
  `,

  activity: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="icon">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
  `,

  shoe: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="icon">
      <path d="M3 18h18v-3c-6 0-9-6-9-6H6z"></path>
    </svg>
  `,

  phone: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="icon">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 A19.8 19.8 0 0 1 3 5.2 2 2 0 0 1 5 3h3 a2 2 0 0 1 2 1.7 l.6 3a2 2 0 0 1-1.1 2.2 l-2.2 1.1 a16 16 0 0 0 7.1 7.1 l1.1-2.2 a2 2 0 0 1 2.2-1.1 l3 .6 a2 2 0 0 1 1.7 2z"></path>
    </svg>
  `,

  mail: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="icon">
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <path d="M22 6l-10 7L2 6"></path>
    </svg>
  `,

  map: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="icon">
      <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  `,

  clock: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="icon">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,

  calendar: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="icon">
      <path d="M8 2v4"></path>
      <path d="M16 2v4"></path>
      <rect x="3" y="4" width="18" height="18" rx="2"></rect>
      <path d="M3 10h18"></path>
    </svg>
  `,

  instagram:`
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  aria-label="Instagram"
>
  <defs>
    <linearGradient id="instaGradient" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FEDA77"/>
      <stop offset="25%" stop-color="#F58529"/>
      <stop offset="50%" stop-color="#DD2A7B"/>
      <stop offset="75%" stop-color="#8134AF"/>
      <stop offset="100%" stop-color="#515BD4"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect x="1" y="1" width="22" height="22" rx="6" fill="url(#instaGradient)" />

  <!-- Camera outline -->
  <rect
    x="6"
    y="6"
    width="12"
    height="12"
    rx="3.5"
    fill="none"
    stroke="#fff"
    stroke-width="1.4"
  />

  <!-- Lens -->
  <circle
    cx="12"
    cy="12"
    r="3.5"
    fill="none"
    stroke="#fff"
    stroke-width="1.4"
  />

  <!-- Flash dot (visible & balanced) -->
  <circle
    cx="16.2"
    cy="7.8"
    r="1"
    fill="#fff"
  />
</svg>


  `,

  youtube:`
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="yt-icon">
      <style>
        .yt-icon { width:24px; height:24px; fill:#FF0000; }
      </style>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.5V8.5L15.8 12l-6.2 3.5z"/>
    </svg>
  `,

  linkedin:`
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="li-icon">
      <style>
        .li-icon { width:24px; height:24px; fill:#0A66C2; }
      </style>
    <path d="M4.98 3.5a2.48 2.48 0 1 1 0 5 2.48 2.48 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.6h.05c.53-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6v6.4h-4v-5.7c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v5.8h-4V9z"/>
    </svg>
  `,

  facebook:`
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fb-icon">
      <style>
        .fb-icon { width:24px; height:24px; fill:#1877F2; }
      </style>
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2V9.7c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z"/>
    </svg>
  `,

  message: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="icon">
      <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path>
    </svg>
  `,

  quote: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="icon">
      <path d="M3 21c3 0 4-2 4-4V7H3z"></path>
      <path d="M13 21c3 0 4-2 4-4V7h-4z"></path>
    </svg>
  `,

  info: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="icon">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  `,

  leftArrow: `
  <svg
  viewBox="0 0 24 24"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
  class="icon"
>
  <path d="M13.27 3.66a1.5 1.5 0 0 1 2.12 0l6.36 6.36a1.5 1.5 0 0 1 0 2.12l-6.36 6.36a1.5 1.5 0 1 1-2.12-2.12L16.88 13H3.75a1.25 1.25 0 1 1 0-2.5h13.13l-3.61-3.62a1.5 1.5 0 0 1 0-2.12z"/>
</svg>
`

};

const icon = (name, classes = "text-lg") =>
  `<span class="${classes}">${icons[name] || "•"}</span>`;

const isServicePage = () => window.location.pathname.includes("/services/");
const href = (path) => {
  if (!path) return "#";
  if (path.startsWith("http")) return path;
  const inService = isServicePage();
  // When on a service detail page:
  // - links to sibling service files should stay in the same folder (no "../")
  // - links that include a slash (e.g., "services/...") should climb up one level
  // - other site pages should climb up one level
  if (inService) {
    const hasSlash = path.includes("/");
    const isSiblingService = !hasSlash;
    if (isSiblingService) return path;
    return `../${path}`;
  }
  return path;
};
const assetPath = (path) => {
  if (!path) return "#";
  if (path.startsWith("http")) return path;
  return isServicePage() ? `../${path}` : path;
};

const year = new Date().getFullYear();

export function buildHeader(currentPath = "") {
  return `
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg">
      Skip to content
    </a>
    <header class="site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-soft py-4">
      <div class="container flex items-center justify-between">
        <a href="${href("../index.html")}" class="flex items-center gap-3">
          <img src="${assetPath("../assets/logo1.png")}" alt="Kakkar Clinic" class="w-10 h-10 rounded-full object-contain" />
          <div class="hidden sm:block">
            <p class="font-display text-lg font-semibold text-foreground leading-tight">Kakkar Clinic</p>
            <p class="text-xs text-muted-foreground">Cosmetic Excellence & Surgical Expertise
            </p>
          </div>
        </a>
        <nav class="hidden lg:flex items-center gap-1">
  ${navItems
    .map(
      (item) => `
        <a 
          href="${href(item.href)}"
          ${item.external ? 'target="_blank" rel="noopener noreferrer"' : ""}
          class="px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            currentPath.endsWith(item.href)
              ? "bg-primary/10 text-primary"
              : "text-foreground/70 hover:text-foreground hover:bg-muted"
          }"
        >
          ${item.label}
        </a>
      `
    )
    .join("")}
</nav>

        <div class="hidden md:flex items-center gap-3">
          <a href="tel:++919815131355" class="px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition">
            ${icon("phone", "text-base")} <span class="hidden xl:inline">Call Now</span>
          </a>
          <a href="${href("https://kakkarclinic.exlyapp.com/f6d9ac2e-c7d9-4742-acf4-8d07c4244ad4")}" class="btn-primary px-4 py-2 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
            ${icon("calendar", "text-base")} Book Appointment
          </a>
        </div>
        <button class="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors" data-nav-toggle aria-label="Toggle menu">
          <span class="sr-only">Toggle menu</span>
          ☰
        </button>
      </div>
      <div class="mobile-nav hidden lg:hidden bg-white border-t border-border" data-mobile-nav>
        <nav class="container py-4 flex flex-col gap-1">
          ${navItems
            .map(
              (item) => `
              <a href="${href(item.href)}" class="px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                currentPath.endsWith(item.href) ? "bg-primary/10 text-primary" : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }">${item.label}</a>
            `
            )
            .join("")}
          <div class="flex gap-2 mt-4 pt-4 border-t border-border">
            <a href="tel:+919815131355" class="flex-1 px-3 py-2 rounded-lg border text-center hover:bg-muted transition">Call</a>
            <a href="${href("https://kakkarclinic.exlyapp.com/f6d9ac2e-c7d9-4742-acf4-8d07c4244ad4")}" class="flex-1 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-center hover:bg-primary/90 transition">Book</a>
          </div>
          <a href="https://play.google.com/store/apps/details?id=com.exly.kakkarclinic&hl=en_IN" target="_blank" rel="noopener" class="mt-2 block px-3 py-2 rounded-lg border text-center hover:bg-muted transition">Download Android App</a>
        </nav>
      </div>
    </header>
  `;
}

export function buildFooter() {
  return `
    <footer class="bg-foreground text-background mt-16">
      <div class="container py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div class="space-y-6">
            <div class="flex items-center gap-3">
              <img src="${assetPath("../assets/logo kakkar clinic.png")}" alt="Kakkar Clinic" class="w-8 h-8 object-contain" />
              <div>
                <h3 class="font-display text-xl font-semibold">Kakkar Clinic</h3>
                <p class="text-sm text-background/60">Cosmetic Excellence & Surgical Expertise</p>
              </div>
            </div>
            <p class="text-background/70 text-sm leading-relaxed">
              Specializing in diabetic foot care, limb salvage, and plastic & reconstructive surgery with over 25 years of experience.
            </p>
            <div class="space-y-3">
              <a href="tel:+919815131355" class="flex items-center gap-3 text-sm text-background/80 hover:text-background transition-colors">
                ${icon("phone")}  +91 98151 31355
              </a>
              <a href="mailto:info@kakkarclinic.com" class="flex items-center gap-3 text-sm text-background/80 hover:text-background transition-colors">
                ${icon("mail")} info@kakkarclinic.com
              </a>
              <div class="flex items-start gap-3 text-sm text-background/80">
                ${icon("map")} <span>Kakkar Clinic, Ram Aasre, 564, B-Block, Ranjit Avenue,<br />Amritsar, Punjab - 143001</span>
              </div>
              <div class="flex items-start gap-3 text-sm text-background/80">
                ${icon("clock")} <span>Mon - Sat: Morning 10am to 2pm<br />Evening: 4pm to 7pm</span>
              </div>
              <a href="https://play.google.com/store/apps/details?id=com.exly.kakkarclinic&hl=en_IN" target="_blank" rel="noopener" class="flex items-center gap-3 text-sm text-background/80 hover:text-background transition-colors">
                ${icon("phone")} Download Android App
              </a>
            </div>
          </div>
          <div>
            <h4 class="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul class="space-y-3">
              ${navItems
                .map(
                  (item) =>
                    `<li><a href="${href(item.href)}" class="text-sm text-background/70 hover:text-background hover:pl-2 transition-all">${item.label}</a></li>`
                )
                .join("")}
            </ul>
          </div>
          <div>
            <h4 class="font-display text-lg font-semibold mb-6">Our Services</h4>
            <ul class="space-y-3">
              ${servicesPageCategories
                .flatMap((c) => c.services)
                .slice(0, 6)
                .map((service) => {
                  const link = service.href?.startsWith("http") ? service.href : href(service.href || "#");
                  return `<li><a href="${link}" class="text-sm text-background/70 hover:text-background hover:pl-2 transition-all">${service.name}</a></li>`;
                })
                .join("")}
            </ul>
          </div>
          <div>
            <h4 class="font-display text-lg font-semibold mb-6">Stay Updated</h4>
            <p class="text-sm text-background/70 mb-4">${newsletterCopy}</p>
            <a href="https://kakkarclinic.exlyapp.com/9743428b-3701-4fff-9e21-548f5a367525" target="_blank" rel="noopener">
              <button type="button" class="w-full px-4 py-2 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition">
                Join Our Branded Community!
               </button>
            </a>
            <div class="flex gap-3 mt-6">
              ${[
              { name: "facebook", url: "https://www.facebook.com/kakkarclinic/#" },
              { name: "instagram", url: "https://www.instagram.com/kakkarclinic?igsh=aHVmcXY2cnlucDB" },
              { name: "youtube", url: "https://www.youtube.com/@kakkarclinic3560/shorts" },
            ]
              .map(
                (social) => `
                  <a
                    href="${social.url}"
                    target="_blank"
                    rel="noopener"
                    class="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label="${social.name}"
                  >
                    ${icon(social.name)}
                  </a>
                `
              )
              .join("")}
            </div>
          </div>
        </div>
      </div>
      <div class="border-t border-background/10">
        <div class="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-background/60">© ${year} Kakkar Clinic. All rights reserved.</p>
          <div class="flex gap-6">
            <a href="${href("privacy.html")}" class="text-sm text-background/60 hover:text-background transition-colors">Privacy Policy</a>
            <a href="${href("terms.html")}" class="text-sm text-background/60 hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

export function buildHeroSection() {
  return `
    <section class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-foreground text-background">
      <div class="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60"></div>
      <div class="container relative z-10 py-16 lg:py-24">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-center lg:text-left" data-animate>
            <div class="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <span class="text-sm font-semibold text-accent">
                      25+ Years Experience
                    </span>
                    <span class="text-background/60">|</span>
                    <span class="text-sm font-medium text-background/90">
                      Diabetic Foot & Wound Care Specialist in Amritsar
                    </span>
            </div>

            <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              ${heroContent.title}
              <span class="block text-primary mt-2">${heroContent.highlight}</span>
            </h1>
            <p class="text-lg text-background/80 mb-8 max-w-xl mx-auto lg:mx-0">
              ${heroContent.description}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a href="${href("https://kakkarclinic.exlyapp.com/f6d9ac2e-c7d9-4742-acf4-8d07c4244ad4")}" class="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition">
                ${icon("calendar")} Book Appointment
              </a>
              <a href="https://api.whatsapp.com/send/?phone=%2B919815131355&text=Hello%21+I+would+like+to+book+an+appointment+at+Kakkar+Clinic.&type=phone_number&app_absent=0" target="_blank" rel="noopener" class="px-6 py-3 rounded-lg border border-background/40 text-background font-semibold text-lg hover:bg-background/10 transition">
                ${icon("message")} WhatsApp Consult
              </a>
            </div>
            <div class="flex flex-wrap justify-center lg:justify-start gap-6">
              ${heroContent.trustBadges
                .map(
                  (badge) => `
                    <div class="flex items-center gap-2">
                      <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        ${icon(badge.icon)}
                      </div>
                      <span class="text-sm font-medium text-background/80">${badge.label}</span>
                    </div>
                  `
                )
                .join("")}
            </div>
          </div>
          <div class="hidden lg:block" data-animate data-anim-delay="0.15">
            <div class="relative">
              <div class="w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
                <img src="${assetPath("assets/doctors-protrait1.JPG")}" alt="Dr. Vikas Kakkar" class="w-full h-full object-cover" />
              </div>
              <div class="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-card p-4 border border-border text-foreground bg-white">
              <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    ${icon("hospital")}
                  </div>
                  <div>
                    <p class="font-semibold">Diabetic Foot • Wound • Ulcer Care</p>
                    <p class="text-sm text-muted-foreground">Specialist in Amritsar/Punjab</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function buildServicesSection() {
  return `
    <section class="py-20 lg:py-28 bg-muted/30" id="services">
      <div class="container">
        <div class="text-center mb-16" data-animate>
          <span class="text-primary font-medium text-sm uppercase tracking-wider">Our Expertise</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            Specialized Medical Services
          </h2>
          <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
            From preventive care to complex reconstructive surgery, we offer comprehensive solutions tailored to your unique needs.
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${homeServices
            .map(
              (category, idx) => `
                <div class="bg-card rounded-2xl p-8 h-full shadow-soft border border-border/50 hover:shadow-card hover:border-primary/20 transition-all" data-animate data-anim-delay="${idx * 0.05}">
                        <!-- Image instead of emoji -->
                        <div class="w-14 h-14 rounded-xl ${category.color} overflow-hidden mb-6">
                          <img
                            src="${category.image}"
                            alt="${category.title}"
                            class="w-full h-full object-cover"
                          />
                        </div>

                        <h3 class="text-xl font-display font-semibold text-foreground mb-3">
                          ${category.title}
                        </h3>

                        <p class="text-muted-foreground mb-6">
                          ${category.description}
                        </p>

                        <ul class="space-y-2 mb-6">
                          ${category.services
                            .map(
                              (service) =>
                                `<li class="flex items-center gap-2 text-sm text-foreground/80">
                                  <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                  ${service}
                                </li>`
                            )
                            .join("")}
                        </ul>

                        ${
                          category.external
                            ? `<a href="${category.href}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">Learn More →</a>`
                            : `<a href="${href(category.href)}" class="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">Learn More →</a>`
                        }
                        </div>
              `
            )
            .join("")}
        </div>
        <div class="text-center mt-12" data-animate data-anim-delay="0.1">
          <a href="${href("services.html")}" class="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
            View All Services →
          </a>
        </div>
      </div>
    </section>
  `;
}

// About teaser for index / home — short bio, stats, and philosophy only
export function buildAboutSection() {
  return `
    <section class="py-20 lg:py-28" id="about">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div class="relative" data-animate>
            <div class="relative aspect-[4/5] max-w-lg mx-auto translate-y-6">
              <div class="absolute inset-4 bg-primary/10 rounded-3xl"></div>
              <div class="relative rounded-3xl overflow-hidden shadow-elevated">
                <img src="${assetPath("../assets/WhatsApp Image 2025-12-03 at 11.24.02 AM.jpeg")}" alt="Dr. Vikas Kakkar" class="w-full h-full object-cover" />
              </div>
              <div class="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-elevated">
                <p class="text-4xl font-display font-bold">25+</p>
                <p class="text-sm opacity-90">Years of Excellence</p>
              </div>
            </div>
          </div>
          <div data-animate data-anim-delay="0.1">
            <span class="text-primary font-medium text-sm uppercase tracking-wider">About the Doctor</span>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-6">Dr. Vikas Kakkar</h2>
            <p class="text-muted-foreground text-lg mb-6 leading-relaxed">
              A pioneer in diabetic foot care and limb salvage surgery with over 25 years of dedicated experience. Dr. Kakkar has transformed thousands of lives through his expertise in preventing amputations and restoring mobility to patients with complex foot conditions.
            </p>
            <p class="text-muted-foreground text-lg mb-6 leading-relaxed">
              His multidisciplinary approach combines advanced surgical techniques with preventive care strategies, ensuring comprehensive treatment for each patient. As a recognized expert in both diabetic foot surgery and plastic & reconstructive procedures, Dr. Kakkar brings a unique perspective to patient care.
            </p>
            <a href="${href("about.html")}" class="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
              Learn more → 
            </a>
          </div>
        </div>
<br>
<br>
<br>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          ${aboutStats
            .map(
              (stat, idx) => `
              <div class="bg-card rounded-2xl p-6 text-center shadow-soft border border-border/50" data-animate data-anim-delay="${0.05 * idx}">
                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  ${icon(stat.icon)}
                </div>
                <p class="text-3xl font-display font-bold text-foreground">${stat.number}</p>
                <p class="text-sm text-muted-foreground mt-1">${stat.label}</p>
              </div>
            `
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center" data-animate>
          <h2 class="text-3xl font-display font-bold text-foreground mb-4">Our Philosophy</h2>
          <p class="text-lg text-muted-foreground mb-4">${philosophyQuote}</p>
          <p class="text-primary font-display">— Dr. Vikas Kakkar</p>
        </div>
      </div>
    </section>
  `;
}

// Full About page (detailed) — includes Education & Qualifications, Awards, Memberships
export function buildAboutPage() {
  return `
    <section class="pt-28 pb-16 bg-muted/30">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div class="relative" data-animate>
              <div class="relative rounded-3xl overflow-hidden shadow-elevated">
                <img src="${assetPath("../assets/688b28e42c62012f3979187fvikaskakkar.jpg")}" alt="Dr. Vikas Kakkar" class="w-full h-full object-cover" />
              </div>
          </div>
          <div data-animate data-anim-delay="0.1">
            <span class="text-primary font-medium text-sm uppercase tracking-wider">About the Doctor</span>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-6">Dr. Vikas Kakkar</h2>
            <p class="text-muted-foreground text-lg mb-6 leading-relaxed">
              A pioneer in diabetic foot care and limb salvage surgery with over 25 years of dedicated experience. Dr. Kakkar has transformed thousands of lives through his expertise in preventing amputations and restoring mobility to patients with complex foot conditions.
            </p>
            <p class="text-muted-foreground text-lg mb-6 leading-relaxed">
              His multidisciplinary approach combines advanced surgical techniques with preventive care strategies, ensuring comprehensive treatment for each patient. As a recognized expert in both diabetic foot surgery and plastic & reconstructive procedures, Dr. Kakkar brings a unique perspective to patient care.
            </p>

            <div class="grid grid-cols-2 gap-3 mb-8">
              ${qualifications
                .map(
                  (qual, idx) => `
                  <div class="flex items-center gap-2" data-animate data-anim-delay="${0.03 * idx}">
                    <div class="w-2 h-2 rounded-full bg-primary"></div>
                    <span class="text-sm text-foreground">${qual}</span>
                  </div>
                `
                )
                .join("")}
            </div>

            <a href="${href("https://kakkarclinic.exlyapp.com/f6d9ac2e-c7d9-4742-acf4-8d07c4244ad4")}" class="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
              Book a Consultation →
            </a>
          </div>
        </div>
<br>
<br>
<br>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          ${aboutStats
            .map(
              (stat, idx) => `
              <div class="bg-card rounded-2xl p-6 text-center shadow-soft border border-border/50" data-animate data-anim-delay="${0.05 * idx}">
                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  ${icon(stat.icon)}
                </div>
                <p class="text-3xl font-display font-bold text-foreground">${stat.number}</p>
                <p class="text-sm text-muted-foreground mt-1">${stat.label}</p>
              </div>
            `
            )
            .join("")}
        </div>
      </div>
    </section>

    <!-- Education & Qualifications -->
    <section class="py-16" id="qualifications">
      <div class="container">
        <div class="text-center mb-12" data-animate>
          <h2 class="text-3xl font-display font-bold text-foreground mb-4">Why Choose Us?​</h2>
        </div>
        <div class="max-w-3xl mx-auto space-y-4">
          ${choice
            .map(
              (qual, idx) => `
              <div class="bg-card rounded-xl p-6 shadow-soft border border-border/50 flex items-start gap-4" data-animate data-anim-delay="${0.05 * idx}">
                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  ${icon("benefit")}
                </div>
                <div>
                  <p class="text-muted-foreground">${qual.title}</p>
                  <p class="text-sm text-primary">${qual.org}</p>
                </div>
              </div>
            `
            )
            .join("")}
        </div>
      </div>
    </section>

    <!-- Awards & Recognition -->
    <section class="py-16" id="achievements">
      <div class="container">
        <div class="text-center mb-12" data-animate>
          <h2 class="text-3xl font-display font-bold text-foreground mb-4">Your Transformative Treatment Journey at Kakkar Clinic</h2>
        </div>
        <div class="max-w-3xl mx-auto">
          <div class="relative">
            <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
            ${achievements
              .map(
                (item, idx) => `
                <div class="relative pl-16 pb-8 last:pb-0" data-animate data-anim-delay="${0.05 * idx}">
                  <div class="absolute left-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    ${icon("award")}
                  </div>
                  <div class="bg-card rounded-xl p-6 shadow-soft border border-border/50">
                    <span class="text-sm text-primary font-medium">${item.year}</span>
                    <h3 class="font-semibold text-foreground mt-1">${item.title}</h3>
                    <p class="text-sm text-muted-foreground">${item.org}</p>
                  </div>
                </div>
              `
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Memberships -->
    <section class="py-16 bg-muted/30">
      <div class="container">
        <div class="text-center mb-12" data-animate>
          <h2 class="text-3xl font-display font-bold text-foreground mb-4">Professional Memberships</h2>
        </div>
        <div class="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          ${memberships
            .map(
              (membership, idx) => `
              <div class="bg-card rounded-full px-6 py-3 shadow-soft border border-border/50" data-animate data-anim-delay="${0.04 * idx}">
                <span class="text-sm text-foreground">${membership}</span>
              </div>
            `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function buildBeforeAfterSection() {
  const resolve = (src) => (src.startsWith("assets/") ? assetPath(src) : src);
  return `
    <section class="py-20 lg:py-28" id="gallery">
      <div class="container">
        <div class="text-center mb-16" data-animate>
          <span class="text-primary font-medium text-sm uppercase tracking-wider">Results</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-4">Before & After Gallery</h2>
          <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
            See the transformative results of our treatments. Drag the slider to compare before and after.
          </p>
        </div>
        <div class="bg-muted/50 rounded-xl p-4 mb-10 flex items-start gap-3 max-w-3xl mx-auto" data-animate data-anim-delay="0.05">
          ${icon("info")} 
          <p class="text-sm text-muted-foreground">
            All images are shared with patient consent and are for educational purposes only. Individual results may vary.
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${beforeAfterCases
            .map(
              (item, idx) => `
                <div class="group slider-card" data-before="${resolve(item.before)}" data-after="${resolve(item.after)}" data-animate data-anim-delay="${0.05 * idx}">
                  <div class="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none ba-slider" data-slider>
                    <img src="${resolve(item.after)}" alt="After treatment" class="absolute inset-0 w-full h-full object-cover" />
                    <div class="absolute inset-0 overflow-hidden" data-before-wrap>
                      <img src="${resolve(item.before)}" alt="Before treatment" class="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div class="absolute top-0 bottom-0 w-1 bg-background shadow-lg cursor-ew-resize" data-slider-handle>
                      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center">
                        <div class="flex gap-0.5">
                          <div class="w-0.5 h-4 bg-primary rounded-full"></div>
                          <div class="w-0.5 h-4 bg-primary rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div class="absolute bottom-4 left-4 bg-foreground/80 text-background px-3 py-1 rounded-full text-sm font-medium">Before</div>
                    <div class="absolute bottom-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">After</div>
                  </div>
                  <p class="text-sm text-muted-foreground mt-3 text-center">${item.caption}</p>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function buildTestimonialsSection() {
  return `
    <section class="py-20 lg:py-28 bg-primary/5" id="testimonials">
      <div class="container">
        <div class="text-center mb-16" data-animate>
          <span class="text-primary font-medium text-sm uppercase tracking-wider">Patient Stories</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-4">What Our Patients Say</h2>
          <p class="text-muted-foreground text-lg max-w-2xl mx-auto">Real experiences from patients who trusted us with their care.</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <!-- Left Column -->
          <div class="relative" data-testimonial data-testimonial-left data-animate data-anim-delay="0.05">
            <div class="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50 min-h-[400px] flex flex-col" data-testimonial-card>
              <div class="flex gap-1 mb-4" data-stars></div>
              <p class="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-display flex-grow" data-quote></p>
              <div class="flex items-center justify-between mt-auto">
                <div>
                  <p class="font-semibold text-foreground" data-name></p>
                  <p class="text-sm text-muted-foreground" data-meta></p>
                </div>
                <div class="flex gap-2">
                  <button class="px-3 py-2 rounded-lg border hover:bg-muted transition" data-prev aria-label="Previous testimonial">←</button>
                  <button class="px-3 py-2 rounded-lg border hover:bg-muted transition" data-next aria-label="Next testimonial">→</button>
                </div>
              </div>
            </div>
            <div class="flex justify-center gap-2 mt-6" data-dots></div>
          </div>

          <!-- Right Column -->
          <div class="relative" data-testimonial data-testimonial-right data-animate data-anim-delay="0.1">
            <div class="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50 min-h-[400px] flex flex-col" data-testimonial-card>
              <div class="flex gap-1 mb-4" data-stars></div>
              <p class="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-display flex-grow" data-quote></p>
              <div class="flex items-center justify-between mt-auto">
                <div>
                  <p class="font-semibold text-foreground" data-name></p>
                  <p class="text-sm text-muted-foreground" data-meta></p>
                </div>
                <div class="flex gap-2">
                  <button class="px-3 py-2 rounded-lg border hover:bg-muted transition" data-prev aria-label="Previous testimonial">←</button>
                  <button class="px-3 py-2 rounded-lg border hover:bg-muted transition" data-next aria-label="Next testimonial">→</button>
                </div>
              </div>
            </div>
            <div class="flex justify-center gap-2 mt-6" data-dots></div>
          </div>
        </div>

        <script type="application/ld+json">
          ${JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Kakkar Clinic",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: testimonials.length,
            },
            review: testimonials.map((t) => ({
              "@type": "Review",
              author: { "@type": "Person", name: t.name },
              reviewRating: { "@type": "Rating", ratingValue: t.rating },
              reviewBody: t.text,
            })),
          })}
        </script>
      </div>
    </section>
  `;
}

export function buildFaqSection() {
  return `
    <section class="py-20 lg:py-28 bg-muted/30" id="faq">
      <div class="container">
        <div class="text-center mb-16" data-animate>
          <span class="text-primary font-medium text-sm uppercase tracking-wider">FAQ</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-4">Frequently Asked Questions</h2>
          <p class="text-muted-foreground text-lg max-w-2xl mx-auto">Find answers to common questions about our services and treatments.</p>
        </div>
        <div class="max-w-3xl mx-auto" data-faq>
          <div class="flex flex-wrap gap-2 mb-8 justify-center" data-faq-tabs></div>
          <div class="bg-card rounded-2xl shadow-soft border border-border/50 px-6" data-faq-list data-animate data-anim-delay="0.05"></div>
          <div class="text-center mt-10">
            <div class="inline-flex items-center gap-2 text-muted-foreground">
              ${icon("message")} <span>Still have questions?</span>
              <a href="${href("contact.html")}" class="text-primary font-medium hover:underline">Contact us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function buildCTASection() {
  return `
    <section class="py-20 lg:py-28 hero-gradient relative overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl"></div>
      </div>
      <div class="container relative z-10">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Take the First Step Towards <span class="block">Healthier Feet</span>
          </h2>
          <p class="text-lg text-primary-foreground/80 mb-10">
            Don't wait until it's too late. Early intervention can prevent complications and save your limbs. Book your assessment today.
          </p>
          <div class="grid sm:grid-cols-3 mb-10">
            ${ctaBenefits
              .map(
                (item) => `
                <div class="flex items-center justify-center gap-2 text-primary-foreground/90">
                  ${icon(item.icon)} <span class="text-sm">${item.text}</span>
                </div>
              `
              )
              .join("")}
          </div>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="${href("https://kakkarclinic.exlyapp.com/f6d9ac2e-c7d9-4742-acf4-8d07c4244ad4")}" class="px-6 py-3 rounded-lg bg-background text-primary font-semibold text-lg hover:bg-background/90 inline-flex items-center gap-2">
              ${icon("calendar")} Book Your Assessment
            </a>
            <a href="tel:+919815131355" class="px-6 py-3 rounded-lg border border-primary-foreground text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 inline-flex items-center gap-2">
              ${icon("phone")} Call: +91 9815131355
            </a>
          </div>
          <p class="text-sm text-primary-foreground/60 mt-8">No obligation. No spam. Your health information is kept confidential.</p>
        </div>
      </div>
    </section>
  `;
}

export function buildContactSection() {
  return `
    <section class="py-20 lg:py-28" id="contact">
      <div class="container">

        <!-- Section Header -->
        <div class="text-center mb-16" data-animate="fade-up">
          <span class="text-primary font-medium text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            Contact Us
          </h2>
          <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of these channels.
          </p>
        </div>

        <!-- Main Grid -->
        <div class="grid lg:grid-cols-2 gap-12">

          <!-- Contact Cards -->
          <div class="grid sm:grid-cols-2 gap-6">
            ${contactCards
              .map(
                (item, idx) => `
                  <a
                    href="${item.href || "#"}"
                    target="${item.href?.startsWith("http") ? "_blank" : "_self"}"
                    rel="${item.href?.startsWith("http") ? "noopener" : ""}"
                    class="block bg-card rounded-2xl p-6 shadow-soft border border-border/50
                           hover:shadow-card hover:border-primary/20 transition-all h-full"
                    data-animate="zoom-in"
                    data-anim-delay="${idx * 0.08}"
                  >
                    <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      ${icon(item.icon)}
                    </div>
                    <p class="text-sm text-muted-foreground">
                      ${item.label}
                    </p>
                    <p class="font-semibold text-foreground mt-1">
                      ${item.value}
                    </p>
                    <p class="text-sm text-muted-foreground mt-1">
                      ${item.description || ""}
                    </p>
                  </a>
                `
              )
              .join("")}
          </div>

          <!-- Map -->
          <div
            class="rounded-2xl overflow-hidden shadow-card border border-border/50 h-[400px]"
            data-animate="fade-left"
            data-anim-delay="0.1"
          >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.5678901234567!2d74.8574274!3d31.6540441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964972a409709%3A0x5f724dd568d829e5!2sKAKKAR%20CLINIC%20-%20Plastic%20Surgeon%20%26%20Diabetic%20Foot%20Specialist!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Kakkar Clinic Location"
                ></iframe>
          </div>
        </div>

        <!-- WhatsApp CTA -->
        <div class="mt-12 text-center" data-animate="fade-up" data-anim-delay="0.15">
          <div class="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            ${icon("message", "w-12 h-12 text-primary mx-auto mb-4 text-4xl")}
            <h3 class="text-xl font-display font-semibold text-foreground mb-2">
              Prefer WhatsApp?
            </h3>
            <p class="text-muted-foreground mb-6">
              Get quick responses to your questions. Chat with us directly on WhatsApp.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B919815131355&text=Hello%21+I+would+like+to+book+an+appointment+at+Kakkar+Clinic.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener"
              class="px-6 py-3 rounded-lg bg-green-500 text-white font-semibold
                     hover:bg-green-500/90 inline-flex items-center gap-2"
            >
              ${icon("whatsapp")} Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  `;
}

export function buildServicesPage() {
  return `
    <!-- Hero -->
    <section class="pt-28 pb-16 bg-muted/30">
      <div class="container">
        <div class="max-w-3xl" data-animate="fade-up">
          <span class="text-primary font-medium text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h1 class="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6">
            Comprehensive Care for Diabetic Foot & Beyond
          </h1>
          <p class="text-lg text-muted-foreground">
            From preventive diagnostics to advanced surgical interventions, we offer a full spectrum of services designed to preserve your mobility and improve your quality of life.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Content -->
    <section class="py-16">
      <div class="container space-y-16">
        ${servicesPageCategories
          .map(
            (category, catIdx) => `
              <div data-animate="fade-up" data-anim-delay="${catIdx * 0.08}">
                
                <!-- Category Header -->
                <div class="flex items-center gap-4 mb-8">
                  
                  <!-- Image -->
                  <div
                    class="w-14 h-14 rounded-xl ${category.color} overflow-hidden"
                    data-animate="zoom-in"
                    data-anim-delay="0.05"
                  >
                    <img
                      src="${category.image}"
                      alt="${category.category}"
                      class="w-full h-full object-cover"
                    />
                  </div>

                  <!-- Title -->
                  <h2
                    class="text-2xl md:text-3xl font-display font-bold text-foreground"
                    data-animate="fade-left"
                    data-anim-delay="0.1"
                  >
                    ${category.category}
                  </h2>
                </div>

                <!-- Services Grid -->
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  ${category.services
                    .map(
                      (service, svcIdx) => `
                        <div
                          class="bg-card rounded-xl p-6 shadow-soft border border-border/50
                                 hover:shadow-card hover:border-primary/20 transition-all
                                 h-full group"
                          data-animate="zoom-in"
                          data-anim-delay="${svcIdx * 0.06}"
                        >
                          <h3
                            class="text-lg font-semibold text-foreground mb-2
                                   group-hover:text-primary transition-colors"
                          >
                            ${service.name}
                          </h3>

                          <p class="text-muted-foreground text-sm mb-4">
                            ${service.description}
                          </p>

                          ${
                            service.external
                              ? `<a href="${service.href}" target="_blank" rel="noopener"
                                   class="inline-flex items-center gap-1 text-primary text-sm font-medium">
                                   Learn More →
                                 </a>`
                              : `<a href="${href(service.href)}"
                                   class="inline-flex items-center gap-1 text-primary text-sm font-medium">
                                   Learn More →
                                 </a>`
                          }
                        </div>
                      `
                    )
                    .join("")}
                </div>

              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}


export function buildBlogPage() {
  const [featured, ...rest] = blogPosts;

  return `
    <!-- Blog Header -->
    <section class="pt-28 pb-16 bg-muted/30">
      <div class="container">
        <div class="max-w-3xl" data-animate>
          <span class="text-primary font-medium text-sm uppercase tracking-wider">Blog</span>
          <h1 class="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6">
            Health Insights & Articles
          </h1>
          <p class="text-lg text-muted-foreground">
            Expert advice, educational content, and the latest developments in diabetic foot care and limb salvage surgery from Dr. Vikas Kakkar.
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Content -->
    <section class="py-16" data-blog>
      <div class="container">

        <!-- Categories -->
        <div class="flex flex-wrap gap-2 mb-10 justify-center" data-blog-tabs>
          ${blogCategories
            .map(
              (cat) => `
                <button 
                  class="px-4 py-2 rounded-full text-sm font-medium transition-all bg-card text-foreground hover:bg-muted border border-border"
                  data-blog-cat="${cat}">
                  ${cat}
                </button>
              `
            )
            .join("")}
        </div>

        <!-- Featured Blog -->
        <article class="mb-16" data-blog-feature data-cat="${featured.category}">
          <div class="grid md:grid-cols-2 gap-8 items-center group">

            <!-- Image link -->
            <a href="${featured.link || '#'}" class="block aspect-[16/10] rounded-2xl overflow-hidden" data-animate>
              <img 
                src="${featured.image}" 
                alt="${featured.title}" 
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
              />
            </a>

            <!-- Content -->
            <div data-animate data-anim-delay="0.05">
              <span class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                ${featured.category}
              </span>

              <h2 class="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                <a href="${featured.link || '#'}">
                  ${featured.title}
                </a>
              </h2>

              <p class="text-muted-foreground mb-6">
                ${featured.excerpt}
              </p>

              <div class="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span class="flex items-center gap-1">${icon("users")} ${featured.author}</span>
                <span class="flex items-center gap-1">${icon("calendar")} ${featured.date}</span>
                <span class="flex items-center gap-1">${icon("clock")} ${featured.readTime}</span>
              </div>

              <!-- Learn More link -->
              <a 
                href="${featured.link || '#'}"
                class="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Learn More
                ${icon("leftArrow")}
              </a>
            </div>

          </div>
        </article>

        <!-- Blog Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-blog-grid>
          ${rest
            .map(
              (post, idx) => `
                <article class="group block" data-blog-item data-cat="${post.category}">
                  <div>
                    <a 
                      href="${post.link || '#'}"
                      class="block aspect-[16/10] rounded-xl overflow-hidden mb-4"
                      data-animate 
                      data-anim-delay="${0.03 * idx}">
                      <img 
                        src="${post.image}" 
                        alt="${post.title}" 
                        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                        loading="lazy" 
                      />
                    </a>

                    <span class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-3">
                      ${post.category}
                    </span>

                    <h3 class="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      <a href="${post.link || '#'}">
                        ${post.title}
                      </a>
                    </h3>

                    <p class="text-muted-foreground text-sm mb-4 line-clamp-2">
                      ${post.excerpt}
                    </p>

                    <div class="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span>${post.date}</span>
                      <span>•</span>
                      <span>${post.readTime}</span>
                    </div>

                    <!-- Learn More link -->
                    <a 
                      href="${post.link || '#'}"
                      class="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                      Learn More
                      ${icon("leftArrow")}
                    </a>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>

      </div>
    </section>
  `;
}


export function buildBlogPostPage(slug) {
  const post = blogPostsDetailed.find(p => p.slug === slug);
  
  if (!post) {
    return `
      <section class="pt-28 pb-20">
        <div class="container">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-4xl font-display font-bold text-foreground mb-4">Post Not Found</h1>
            <p class="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <a href="${href('../blog.html')}" class="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 inline-flex items-center gap-2">
              ← Back to Blog
            </a>
          </div>
        </div>
      </section>
    `;
  }

  // Get related posts (same category, different post)
  const relatedPosts = blogPostsDetailed
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return `
    <!-- Hero Section with Featured Image -->
    <section class="pt-28 pb-16 bg-muted/30">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <a href="${href('../blog.html')}" class="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            ← Back to Blog
          </a>
          
          <div class="mb-6">
            <span class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              ${post.category}
            </span>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              ${post.title}
            </h1>
            <div class="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span class="flex items-center gap-2">
                ${icon("users")} ${post.author}
              </span>
              <span class="flex items-center gap-2">
                ${icon("calendar")} ${post.date}
              </span>
              <span class="flex items-center gap-2">
                ${icon("clock")} ${post.readTime}
              </span>
            </div>
          </div>

          <div class="aspect-video rounded-2xl overflow-hidden shadow-card mb-8">
            <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <article class="py-16">
      <div class="container">
        <div class="max-w-3xl mx-auto">
          <div class="prose prose-lg max-w-none">
            ${post.content}
          </div>

          <!-- Author Bio -->
          <div class="mt-12 p-6 bg-muted/30 rounded-2xl border border-border/50">
            <div class="flex items-start gap-4">
              <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                ${icon("users", "text-2xl")}
              </div>
              <div>
                <h3 class="font-display font-semibold text-foreground mb-2">About ${post.author}</h3>
                <p class="text-muted-foreground text-sm mb-3">
                  With over 25 years of experience in diabetic foot care and limb salvage surgery, Dr. Vikas Kakkar is a recognized expert in preventing and treating diabetic foot complications. He combines advanced medical knowledge with compassionate patient care.
                </p>
                <a href="${href('../about.html')}" class="text-primary text-sm font-medium hover:underline">
                  Learn more about Dr. Kakkar →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  `;
}

const proseStyles = `
  <style>
    .prose {
      color: hsl(var(--foreground));
    }
    .prose .lead {
      font-size: 1.25rem;
      line-height: 1.75;
      color: hsl(var(--foreground) / 0.8);
      margin-bottom: 2rem;
    }
    .prose h2 {
      font-size: 1.875rem;
      font-weight: 700;
      margin-top: 2.5rem;
      margin-bottom: 1.5rem;
      color: hsl(var(--foreground));
      font-family: var(--font-display);
    }
    .prose h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-top: 2rem;
      margin-bottom: 1rem;
      color: hsl(var(--foreground));
      font-family: var(--font-display);
    }
    .prose p {
      margin-bottom: 1.5rem;
      line-height: 1.75;
    }
    .prose ul {
      list-style: disc;
      padding-left: 1.5rem;
      margin-bottom: 1.5rem;
    }
    .prose ul li {
      margin-bottom: 0.5rem;
    }
    .prose strong {
      font-weight: 600;
      color: hsl(var(--foreground));
    }
    .prose a {
      color: hsl(var(--primary));
      text-decoration: underline;
    }
    .prose a:hover {
      color: hsl(var(--primary) / 0.8);
    }
  </style>
`;

export function buildGalleryPage() {
  return `
    <!-- Page Header -->
    <section class="pt-28 pb-16 bg-muted/30">
      <div class="container">
        <div class="max-w-3xl" data-animate="fade-up">
          <span class="text-primary font-medium text-sm uppercase tracking-wider">
            Gallery
          </span>
          <h1 class="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6">
            Photo Gallery
          </h1>
          <p class="text-lg text-muted-foreground">
            Take a virtual tour of our facilities and see the care environment we've created for our patients.
          </p>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="py-16" data-gallery>
      <div class="container">

        <!-- Gallery Grid -->
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          data-gallery-grid
          data-animate="fade-up"
        >
          ${galleryImages
            .map(
              (item, idx) => `
                <div class="flex flex-col gap-2">
                  <div
                    class="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                    data-gallery-item
                    data-id="${item.id}"
                    data-category="${item.category}"
                    data-type="${item.type}"
                    data-animate="zoom-in"
                    data-anim-delay="${idx * 0.02}"
                  >

                    ${
                      item.type === "video"
                        ? `
                          <video
                            src="${item.src}"
                            class="w-full h-full object-cover"
                            muted
                            preload="metadata"
                          ></video>

                          <!-- Play Icon -->
                          <div
                            class="absolute inset-0 flex items-center justify-center"
                            data-animate="zoom-in"
                            data-anim-delay="0.1"
                          >
                            <div
                              class="w-14 h-14 rounded-full bg-background/80
                                     flex items-center justify-center text-xl font-bold"
                            >
                              ▶
                            </div>
                          </div>
                        `
                        : `
                          <img
                            src="${item.src}"
                            alt="${item.caption}"
                            class="w-full h-full object-cover transition-transform duration-300
                                   group-hover:scale-110"
                            loading="lazy"
                          />
                        `
                    }

                    <!-- Hover Overlay -->
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent
                             opacity-0 group-hover:opacity-100 transition-opacity
                             flex items-end p-4"
                    >
                      <div>
                        <p class="text-background font-medium">
                          ${item.caption}
                        </p>
                        <p class="text-background/70 text-sm">
                          ${item.category}
                        </p>
                      </div>
                    </div>

                    <!-- Top Right Icon -->
                    <div
                      class="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80
                             flex items-center justify-center
                             opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ${icon("sparkles")}
                    </div>
                  </div>
                  
                  <!-- Caption -->
                      <div
                        class="px-1"
                        data-animate="fade-up"
                        data-anim-delay="${idx * 0.03 + 0.1}"
                      >
                        ${
                          item.caption
                            ? `<p class="text-xs text-muted-foreground mt-1">
                                ${item.caption}
                              </p>`
                            : ""
                        }
                      </div>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div class="hidden" data-lightbox></div>
  `;
}


export function buildServiceDetailPage(slug) {
  const data = serviceDetails[slug];
  if (!data) return `<section class="py-20 container"><p class="text-center text-muted-foreground">Service not found.</p></section>`;
  return `
    <section class="pt-28 pb-16 bg-gradient-to-b from-muted/50 to-background">
      <div class="container">
        <a href="${href("../services.html")}" class="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6" data-animate>← Back to Services</a>
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div data-animate>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full ${data.categoryColor} mb-4">
              ${icon(data.icon)} <span class="text-sm font-medium">${data.category}</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">${data.title}</h1>
            <p class="text-xl text-muted-foreground mb-6">${data.subtitle}</p>
            <p class="text-muted-foreground mb-8">${data.description}</p>
            <div class="flex flex-wrap gap-4 mb-8">
              ${data.duration ? `<div class="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border/50">${icon("clock")}<span class="text-sm"><span class="text-muted-foreground">Duration:</span> <strong>${data.duration}</strong></span></div>` : ""}
              ${data.recovery ? `<div class="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border/50">${icon("calendar")}<span class="text-sm"><span class="text-muted-foreground">Recovery:</span> <strong>${data.recovery}</strong></span></div>` : ""}
            </div>
            <div class="flex flex-wrap gap-4">
              <a href="${href("https://kakkarclinic.exlyapp.com/f6d9ac2e-c7d9-4742-acf4-8d07c4244ad4")}" class="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold inline-flex items-center gap-2">${icon("calendar")} Book Consultation</a>
              <a href="https://wa.me/+919815131355?text=I'm interested in learning more about your services" class="px-6 py-3 rounded-lg border border-primary text-primary font-semibold inline-flex items-center gap-2">WhatsApp Inquiry</a>
            </div>
          </div>
          <div class="relative" data-animate data-anim-delay="0.1">
                  <!-- IMAGE CARD -->
                  <div class="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft border border-border/30">
                          ${
                            data.image
                              ? `
                                <img
                                  src="${data.image}"
                                  alt="${data.title}"
                                  class="absolute inset-0 w-full h-full object-cover"
                                />
                              `
                              : `<div class="absolute inset-0 flex items-center justify-center text-6xl text-primary/60">
                                  ${icon(data.icon, "text-6xl")}
                                </div>`
                            }
                        </div>
              <!-- BADGE (OUTSIDE IMAGE, AS BEFORE) -->
                  <div class="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-card border border-border/50">
                    <div class="flex items-center gap-3">
                      <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        ${icon("award")}
                  </div>
              <div>
                <p class="font-semibold text-foreground">Expert Care</p>
                <p class="text-sm text-muted-foreground">25+ Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-16 bg-primary/5">
      <div class="container">
        <div class="text-center mb-12" data-animate>
          <h2 class="text-3xl font-display font-bold text-foreground mb-4">Key Benefits</h2>
          <p class="text-muted-foreground max-w-2xl mx-auto">Discover the advantages of this procedure for your foot health</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${data.benefits
            .map(
              (benefit, idx) => `
                <div class="bg-card p-6 rounded-xl shadow-soft border border-border/50" data-animate data-anim-delay="${0.05 * idx}">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">${icon("benefit")}</div>
                  <p class="font-medium text-foreground">${benefit}</p>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
    <section class="py-16">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-12">
          <div data-animate>
            <h2 class="text-3xl font-display font-bold text-foreground mb-6">When Is This Procedure Indicated?</h2>
            <ul class="space-y-4">
              ${data.indications
                .map((item, idx) => `<li class="flex items-start gap-3" data-animate data-anim-delay="${0.04 * idx}">${icon("procedure")}<span class="text-muted-foreground">${item}</span></li>`)
                .join("")}
            </ul>
          </div>
          <div data-animate data-anim-delay="0.05">
            <h2 class="text-3xl font-display font-bold text-foreground mb-6">Who Is a Good Candidate?</h2>
            <ul class="space-y-4">
              ${data.candidates
                .map((item, idx) => `<li class="flex items-start gap-3" data-animate data-anim-delay="${0.04 * idx}">${icon("sparkles")}<span class="text-muted-foreground">${item}</span></li>`)
                .join("")}
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="py-16 bg-muted/30">
      <div class="container">
        <div class="text-center mb-12" data-animate>
          <h2 class="text-3xl font-display font-bold text-foreground mb-4">The Procedure</h2>
          <p class="text-muted-foreground max-w-2xl mx-auto">What to expect during your treatment journey</p>
        </div>
        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <div class="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
            ${data.procedureSteps
              .map(
                (step, idx) => `
                  <div class="relative pl-12 md:pl-20 pb-8 last:pb-0" data-animate data-anim-delay="${0.04 * idx}">
                    <div class="absolute left-0 md:left-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">${idx + 1}</div>
                    <div class="bg-card p-6 rounded-xl shadow-soft border border-border/50">
                      <p class="text-foreground">${step}</p>
                    </div>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>
    ${
      data.faqs && data.faqs.length
        ? `<section class="py-16">
      <div class="container">
        <div class="text-center mb-12" data-animate>
          <h2 class="text-3xl font-display font-bold text-foreground mb-4">Frequently Asked Questions</h2>
        </div>
        <div class="max-w-3xl mx-auto space-y-4">
          ${data.faqs
            .map(
              (faq, idx) => `
                <details class="group bg-card rounded-xl border border-border/50 overflow-hidden" data-animate data-anim-delay="${0.05 * idx}">
                  <summary class="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span class="font-semibold text-foreground">${faq.question}</span>
                    <span class="text-primary group-open:rotate-180 transition-transform">⌄</span>
                  </summary>
                  <div class="px-6 pb-6 text-muted-foreground">${faq.answer}</div>
                </details>
              `
            )
            .join("")}
        </div>
      </div>
    </section>`
        : ""
    }
    ${
      data.relatedServices && data.relatedServices.length
        ? `<section class="py-16 bg-muted/30">
      <div class="container">
        <div class="text-center mb-12" data-animate>
          <h2 class="text-3xl font-display font-bold text-foreground mb-4">Related Services</h2>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          ${data.relatedServices
            .map(
              (service, idx) => `<a href="${href(service.href)}" class="bg-card px-6 py-3 rounded-lg border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all text-foreground font-medium" data-animate data-anim-delay="${0.05 * idx}">${service.name}</a>`
            )
            .join("")}
        </div>
      </div>
    </section>`
        : ""
    }
  `;
}

export function buildFloatingButtons() {
  const whatsapp = "https://wa.me/+919815131355?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment%20at%20Kakkar%20Clinic.";
  return `
    <div class="fixed bottom-6 right-6 z-40 flex flex-col gap-3" data-floating>
      <a href="${whatsapp}" target="_blank" rel="noopener" class="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-elevated hover:scale-110 transition-all" aria-label="Chat on WhatsApp">${icon("whatsapp")}</a>
    </div>
  `;
}


export { testimonials, faqCategories, galleryImages, blogPosts, blogPostsDetailed, serviceDetails, siteMeta };

