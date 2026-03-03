// Minimal helper for static hosting: redirect React-style paths to .html equivalents.
// Use this file from a 404 page or a fallback route if needed.
(function () {
  const path = window.location.pathname;
  if (path.endsWith(".html")) return;
  const cleaned = path.replace(/^\/+/, "");
  if (!cleaned) return;
  const redirects = {
    "": "index.html",
    "book": "book.html",
    "services": "services.html",
    "about": "about.html",
    "gallery": "gallery.html",
    "testimonials": "testimonials.html",
    "blog": "blog.html",
    "faq": "faq.html",
    "contact": "contact.html",
    "privacy": "privacy.html",
    "terms": "terms.html",
  };
  const direct = redirects[cleaned];
  if (direct) {
    window.location.replace("/" + direct);
    return;
  }
  if (cleaned.startsWith("services/")) {
    window.location.replace("/" + cleaned + ".html");
  }
})(); 

