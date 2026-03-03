import {
  buildHeader,
  buildFooter,
  buildHeroSection,
  buildServicesSection,
  buildAboutSection,
  buildAboutPage,
  buildBeforeAfterSection,
  buildTestimonialsSection,
  buildFaqSection,
  buildCTASection,
  buildContactSection,
  buildServicesPage,
  buildBlogPage,
  buildBlogPostPage,
  buildGalleryPage,
  buildServiceDetailPage,
  buildFloatingButtons,
  testimonials,
  faqCategories,
  galleryImages,
  serviceDetails,
  blogPostsDetailed,
} from "./components.js";

const qs = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const ANDROID_APP_URL = "https://play.google.com/store/apps/details?id=com.exly.kakkarclinic&hl=en_IN";

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "home";
  renderChrome();
  renderPage(page);
  initHeader();
  initAnimations();
  initBlogFilters();
  injectVideoModal();
  initAndroidAppPopup();
});

/* ===================== CHROME ===================== */

function renderChrome() {
  const headerMount = qs("[data-header]");
  const footerMount = qs("[data-footer]");
  const floatingMount = qs("[data-floating-buttons]");
  const current = window.location.pathname.split("/").pop() || "index.html";
  if (headerMount) headerMount.innerHTML = buildHeader(current);
  if (footerMount) footerMount.innerHTML = buildFooter();
  if (floatingMount) floatingMount.innerHTML = buildFloatingButtons();
}

/* ===================== PAGE RENDER ===================== */

function renderPage(page) {
  const main = qs("main");
  if (!main) return;

  const sections = {
    hero: buildHeroSection,
    services: buildServicesSection,
    about: buildAboutSection,
    gallery: buildBeforeAfterSection,
    testimonials: buildTestimonialsSection,
    faq: buildFaqSection,
    cta: buildCTASection,
    contact: buildContactSection,
    servicesPage: buildServicesPage,
    blog: buildBlogPage,
    galleryPage: buildGalleryPage,
  };

  switch (page) {
    case "home":
      qsa("[data-section]").forEach((node) => {
        const builder = sections[node.dataset.section];
        if (builder) node.innerHTML = builder();
      });
      break;

    case "testimonials":
      main.innerHTML = `
        <section class="pt-28 pb-16 bg-muted/30">
          <div class="container">
            <div class="max-w-3xl">
              <span class="text-primary font-medium text-sm uppercase tracking-wider">
                Testimonials
              </span>
              <h1 class="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6">
                Stories of Healing & Hope
              </h1>
              <p class="text-lg text-muted-foreground">
                Real experiences from patients who trusted us with their care.
              </p>
            </div>
          </div>
        </section>

        ${buildTestimonialsSection()}

        <section class="py-16 bg-muted/30">
  <div class="container">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-display font-bold text-foreground mb-4">
        Video Testimonials
      </h2>
      <p class="text-muted-foreground">
        Watch our patients share their stories
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      ${[
        {
          video: "../assets/665.mp4",
          thumbnail: "../assets/thumb1.png",
          type: "mp4",
          name: "Patient 1",
          caption: "Post-operative ankel wound healing with visible tissue repair"
        },
        {
          video: "../assets/VID-20250305-WA0004.mp4",
          thumbnail: "../assets/thumb2.jpg",
          type: "mp4",
          name: "Patient 2",
          caption: "Intraoperative view of foot surgery with exposed surgical site"
        },
        {
          video: "../assets/777.mp4",
          thumbnail: "../assets/thumb3.jpeg",
          type: "mp4",
          name: "Patient 3",
          caption: "Ongoing surgical treatment and wound management in the operating room"
        },
      ]
        .map(
          (item) => `
          <div class="flex flex-col">
            <button
              onclick="openVideoModal('${item.video}','${item.type}')"
              class="group relative aspect-video rounded-xl overflow-hidden border border-border/50"
            >
              <img
                src="${item.thumbnail}"
                alt="${item.name}"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />

              <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div class="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-white text-2xl group-hover:scale-110 transition">
                  ▶
                </div>
              </div>

              <span class="absolute bottom-3 left-0 right-0 text-center text-sm text-white font-medium drop-shadow">
                ${item.name}
              </span>
            </button>
            <p class="mt-3 text-sm text-muted-foreground text-center">${item.caption}</p>
          </div>
        `
        )
        .join("")}
    </div>
  </div>
</section>

        ${buildCTASection()}
      `;
      break;

    case "services":
      main.innerHTML = buildServicesPage() + buildCTASection();
      break;

    case "about":
      main.innerHTML = buildAboutPage() + buildCTASection();
      break;

    case "gallery":
      main.innerHTML = buildGalleryPage() + buildCTASection();
      break;

    case "blog":
      main.innerHTML = buildBlogPage() + buildCTASection();
      break;

    case "blog-post":
      const slug = document.body.dataset.blogSlug;
      const post = blogPostsDetailed.find(p => p.slug === slug);
      if (post) {
        document.title = `${post.title} | Kakkar Clinic`;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.content = post.excerpt;
      }
      main.innerHTML = buildBlogPostPage(slug);
      break;

    case "faq":
      main.innerHTML = buildFaqSection() + buildCTASection();
      break;

    case "contact":
      main.innerHTML = buildContactSection();
      break;

    case "service":
      const serviceSlug = document.body.dataset.service;
      const detail = serviceDetails[serviceSlug];
      if (detail) document.title = `${detail.title} | Kakkar Clinic`;
      main.innerHTML = buildServiceDetailPage(serviceSlug) + buildCTASection();
      break;
  }

  initHeaderOffset();
  initSliders();
  initTestimonials();
  initFaq();
  initGallery();
  initAnimations();
  initBlogFilters();
}

/* ===================== VIDEO MODAL ===================== */

function injectVideoModal() {
  if (document.getElementById("videoModal")) return;

  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <div
      id="videoModal"
      class="fixed inset-0 hidden z-50 flex items-center justify-center bg-black/60"
      style="backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);"
    >
      <!-- Overlay -->
      <div
        class="absolute inset-0"
        onclick="closeVideoModal()"
      ></div>

      <!-- Modal Content -->
      <div class="relative w-[90%] max-w-4xl z-10">
        <button
          onclick="closeVideoModal()"
          class="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white text-2xl font-bold transition-colors"
          aria-label="Close video"
        >
          ✕
        </button>

        <div
          id="videoContainer"
          class="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
        ></div>
      </div>
    </div>
    `
  );
}

window.openVideoModal = function (videoUrl, type) {
  const modal = document.getElementById("videoModal");
  const container = document.getElementById("videoContainer");

  container.innerHTML = `
    <video
      src="${videoUrl}"
      class="w-full h-full"
      controls
      autoplay
      playsinline
    ></video>
  `;

  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");

  // ESC key support
  document.addEventListener("keydown", handleEscClose);
};

window.closeVideoModal = function () {
  const modal = document.getElementById("videoModal");
  const container = document.getElementById("videoContainer");

  container.innerHTML = "";
  modal.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");

  document.removeEventListener("keydown", handleEscClose);
};

function handleEscClose(e) {
  if (e.key === "Escape") {
    closeVideoModal();
  }
}

/* ===================== ANDROID APP POPUP ===================== */

function initAndroidAppPopup() {
  if (document.getElementById("androidAppPopup")) return;
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const firstDelayMs = isMobile ? 9000 : 6000;
  const repeatDelayMs = isMobile ? 35000 : 25000;
  const visibleDurationMs = isMobile ? 7000 : 9000;
  const leaveDurationMs = isMobile ? 2500 : 4000;

  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <aside id="androidAppPopup" class="app-download-popup app-download-popup--right" aria-live="polite" aria-label="Download Android app">
      <button type="button" class="app-download-popup__close" data-app-popup-close aria-label="Dismiss app download popup">×</button>
      <div class="app-download-popup__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M8 9h8a2 2 0 0 1 2 2v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6a2 2 0 0 1 2-2z"></path>
          <path d="M8 9a4 4 0 0 1 8 0"></path>
          <line x1="10" y1="4" x2="8" y2="6"></line>
          <line x1="14" y1="4" x2="16" y2="6"></line>
          <circle cx="10" cy="12.5" r="0.8"></circle>
          <circle cx="14" cy="12.5" r="0.8"></circle>
          <line x1="5" y1="11" x2="5" y2="17"></line>
          <line x1="19" y1="11" x2="19" y2="17"></line>
        </svg>
      </div>
      <div class="app-download-popup__content">
        <p class="app-download-popup__title">Download Android App</p>
        <p class="app-download-popup__text">Book appointments faster with the Kakkar Clinic app.</p>
        <a href="${ANDROID_APP_URL}" target="_blank" rel="noopener" class="app-download-popup__cta">Download Now</a>
      </div>
    </aside>
    `
  );

  const popup = document.getElementById("androidAppPopup");
  const close = qs("[data-app-popup-close]", popup);
  if (isMobile) popup.classList.add("app-download-popup--mobile");
  let showOnLeft = false;
  let hideTimer = null;

  const hidePopup = () => {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
    popup.classList.remove("is-visible");
  };

  const showPopup = () => {
    if (popup.classList.contains("is-visible")) return;
    popup.classList.remove("app-download-popup--left", "app-download-popup--right");
    popup.classList.add(showOnLeft ? "app-download-popup--left" : "app-download-popup--right");
    requestAnimationFrame(() => popup.classList.add("is-visible"));
    hideTimer = window.setTimeout(hidePopup, visibleDurationMs);
    showOnLeft = !showOnLeft;
  };

  close?.addEventListener("click", hidePopup);
  if (!isMobile) {
    popup.addEventListener("mouseenter", () => {
      if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
    });
    popup.addEventListener("mouseleave", () => {
      if (popup.classList.contains("is-visible")) {
        hideTimer = window.setTimeout(hidePopup, leaveDurationMs);
      }
    });
  }

  window.setTimeout(showPopup, firstDelayMs);
  window.setInterval(showPopup, repeatDelayMs);
}

/* ===================== HEADER ===================== */

function initHeader() {
  const header = qs(".site-header");
  const toggle = qs("[data-nav-toggle]");
  const mobileNav = qs("[data-mobile-nav]");
  if (!header) return;
  const setScrolled = () => {
    if (window.scrollY > 20) {
      header.classList.add("py-2", "shadow-soft");
    } else {
      header.classList.remove("py-2", "shadow-soft");
    }
  };
  setScrolled();
  window.addEventListener("scroll", setScrolled);
  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      mobileNav.classList.toggle("hidden");
    });
    qsa("a", mobileNav).forEach((link) =>
      link.addEventListener("click", () => mobileNav.classList.add("hidden"))
    );
  }
}

function initHeaderOffset() {
  const skip = qs("#main-content");
  if (skip) return;
  const main = qs("main");
  if (main && !main.id) main.id = "main-content";
}

/* ===================== SLIDERS ===================== */

function initSliders() {
  qsa("[data-slider]").forEach((slider) => {
    const beforeWrap = qs("[data-before-wrap]", slider);
    const handle = qs("[data-slider-handle]", slider);
    if (!beforeWrap || !handle) return;
    const update = (percentage) => {
      beforeWrap.style.width = `${percentage}%`;
      handle.style.left = `${percentage}%`;
    };
    const compute = (clientX) => {
      const rect = slider.getBoundingClientRect();
      const x = clientX - rect.left;
      return Math.max(0, Math.min(100, (x / rect.width) * 100));
    };
    let dragging = false;
    slider.addEventListener("mousedown", (e) => {
      dragging = true;
      update(compute(e.clientX));
    });
    slider.addEventListener("mousemove", (e) => {
      if (dragging) update(compute(e.clientX));
    });
    slider.addEventListener("mouseup", () => (dragging = false));
    slider.addEventListener("mouseleave", () => (dragging = false));
    slider.addEventListener("touchstart", (e) => update(compute(e.touches[0].clientX)));
    slider.addEventListener("touchmove", (e) => update(compute(e.touches[0].clientX)));
    slider.addEventListener("keydown", (e) => {
      const current = parseFloat(beforeWrap.style.width || "50");
      if (e.key === "ArrowLeft") update(Math.max(0, current - 5));
      if (e.key === "ArrowRight") update(Math.min(100, current + 5));
    });
    update(50);
  });
}

/* ===================== TESTIMONIALS ===================== */

function initTestimonials() {
  // Initialize left column
  const wrapLeft = qs("[data-testimonial-left]");
  if (wrapLeft) {
    initTestimonialColumn(wrapLeft, testimonials.filter((_, i) => i % 2 === 0));
  }

  // Initialize right column
  const wrapRight = qs("[data-testimonial-right]");
  if (wrapRight) {
    initTestimonialColumn(wrapRight, testimonials.filter((_, i) => i % 2 !== 0));
  }
}

function initTestimonialColumn(wrap, columnTestimonials) {
  const quote = qs("[data-quote]", wrap);
  const name = qs("[data-name]", wrap);
  const meta = qs("[data-meta]", wrap);
  const stars = qs("[data-stars]", wrap);
  const dots = qs("[data-dots]", wrap);
  const prev = qs("[data-prev]", wrap);
  const next = qs("[data-next]", wrap);
  let index = 0;

  const render = () => {
    const item = columnTestimonials[index];
    if (!item) return;
    
    quote.textContent = `"${item.text}"`;
    name.textContent = item.name;
    meta.textContent = `${item.location} • ${item.service}`;
    
    stars.innerHTML = Array.from({ length: item.rating })
      .map(() => `<span class="text-accent">★</span>`)
      .join("");
    
    dots.innerHTML = columnTestimonials
      .map(
        (_, i) =>
          `<button class="w-2.5 h-2.5 rounded-full transition-all ${
            i === index ? "bg-primary w-8" : "bg-primary/30"
          }" aria-label="Go to testimonial ${i + 1}" data-dot="${i}"></button>`
      )
      .join("");
    
    qsa("[data-dot]", dots).forEach((dot) =>
      dot.addEventListener("click", () => {
        index = Number(dot.dataset.dot);
        render();
      })
    );
  };

  prev?.addEventListener("click", () => {
    index = (index - 1 + columnTestimonials.length) % columnTestimonials.length;
    render();
  });
  
  next?.addEventListener("click", () => {
    index = (index + 1) % columnTestimonials.length;
    render();
  });
  
  render();
}

/* ===================== FAQ ===================== */

function initFaq() {
  const tabs = qs("[data-faq-tabs]");
  const list = qs("[data-faq-list]");
  if (!tabs || !list) return;
  let active = faqCategories[0]?.name;
  const renderTabs = () => {
    tabs.innerHTML = faqCategories
      .map(
        (cat) =>
          `<button class="px-4 py-2 rounded-full text-sm font-medium transition-all ${
            active === cat.name ? "bg-primary text-primary-foreground" : "bg-card text-foreground hover:bg-card/80 border border-border"
          }" data-cat="${cat.name}">${cat.name}</button>`
      )
      .join("");
    qsa("[data-cat]", tabs).forEach((btn) =>
      btn.addEventListener("click", () => {
        active = btn.dataset.cat;
        renderTabs();
        renderList();
      })
    );
  };
  const renderList = () => {
    const cat = faqCategories.find((c) => c.name === active);
    list.innerHTML = (cat?.questions || [])
      .map(
        (item) => `
          <div class="border-b border-border last:border-0">
            <button class="w-full py-5 flex items-center justify-between text-left gap-4 faq-toggle">
              <span class="font-medium text-foreground">${item.q}</span>
              <span class="text-muted-foreground">⌄</span>
            </button>
            <div class="hidden pb-5 text-muted-foreground leading-relaxed">${item.a}</div>
          </div>
        `
      )
      .join("");
    qsa(".faq-toggle", list).forEach((btn) =>
      btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        const isOpen = !content.classList.contains("hidden");
        qsa(".faq-toggle", list).forEach((b) => (b.nextElementSibling.classList.add("hidden")));
        if (!isOpen) content.classList.remove("hidden");
      })
    );
  };
  renderTabs();
  renderList();
}

/* ===================== GALLERY ===================== */

function initGallery() {
  const grid = qs("[data-gallery-grid]");
  const lightbox = qs("[data-lightbox]");
  if (!grid || !lightbox) return;

  const renderGrid = () => {
    qsa("[data-gallery-item]", grid).forEach((card) =>
      card.addEventListener("click", () => openLightbox(Number(card.dataset.id)))
    );
  };

  const openLightbox = (id) => {
    const filtered = galleryImages;
    let index = filtered.findIndex((img) => img.id === id);
    if (index === -1) return;
    lightbox.classList.remove("hidden");
    lightbox.innerHTML = `
      <div class="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4">
        <button class="absolute top-4 right-4 w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors" data-close>✕</button>
        <button class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors" data-prev>←</button>
        <button class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors" data-next>→</button>
        <div class="max-w-4xl max-h-[80vh]" data-lightbox-body></div>
      </div>
    `;
    const body = qs("[data-lightbox-body]", lightbox);
    const render = () => {
      const item = filtered[index];
      body.innerHTML = `
        <img src="${item.src}" alt="${item.title}" class="max-w-full max-h-[75vh] rounded-lg object-contain" />
        <div class="text-center mt-4 text-background">
          <p class="font-medium">${item.title}</p>
          <p class="text-background/60 text-sm">${index + 1} of ${filtered.length}</p>
        </div>
      `;
    };
    qs("[data-close]", lightbox).addEventListener("click", () => lightbox.classList.add("hidden"));
    qs("[data-prev]", lightbox).addEventListener("click", (e) => {
      e.stopPropagation();
      index = (index - 1 + filtered.length) % filtered.length;
      render();
    });
    qs("[data-next]", lightbox).addEventListener("click", (e) => {
      e.stopPropagation();
      index = (index + 1) % filtered.length;
      render();
    });
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox.firstElementChild) lightbox.classList.add("hidden");
    });
    render();
  };

  renderGrid();
}

/* ===================== BLOG FILTERS ===================== */

function initBlogFilters() {
  const tabs = qs("[data-blog-tabs]");
  const feature = qs("[data-blog-feature]");
  const grid = qs("[data-blog-grid]");
  if (!tabs || !grid) return;
  const buttons = qsa("[data-blog-cat]", tabs);
  const items = qsa("[data-blog-item]", grid);
  const setActive = (cat) => {
    buttons.forEach((btn) => {
      const isActive = btn.dataset.blogCat === cat;
      btn.classList.toggle("bg-primary", isActive);
      btn.classList.toggle("text-primary-foreground", isActive);
      btn.classList.toggle("border", true);
    });
    const match = (el) => {
      const current = el.dataset.cat;
      if (cat === "All") return true;
      return current === cat;
    };
    items.forEach((item) => {
      item.classList.toggle("hidden", !match(item));
    });
    if (feature) feature.classList.toggle("hidden", !match(feature));
  };
  buttons.forEach((btn) =>
    btn.addEventListener("click", () => setActive(btn.dataset.blogCat))
  );
  // default All
  setActive("All");
}

/* ===================== ANIMATIONS ===================== */

function initAnimations() {
  if (!document.getElementById("anim-styles")) {
    const style = document.createElement("style");
    style.id = "anim-styles";
    style.textContent = `
      .animate-init { opacity: 0; transform: translateY(16px); transition: opacity 0.6s ease, transform 0.6s ease; }
      .animate-visible { opacity: 1; transform: translateY(0); }
    `;
    document.head.appendChild(style);
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  qsa("[data-animate]").forEach((el) => {
    el.classList.add("animate-init");
    const delay = Number(el.dataset.animDelay || 0);
    if (delay) {
      el.style.transitionDelay = `${delay}s`;
    }
    observer.observe(el);
  });
}
