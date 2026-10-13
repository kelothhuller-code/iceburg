/**
 * ICEBURG COFFEE POINT — Core Interactive & Animation Engine
 * Technologies: Pure Vanilla JS + GSAP + ScrollTrigger + Lenis Smooth Scroll
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Lenis Smooth Scroll (if available)
  let lenis = null;
  if (typeof Lenis !== "undefined") {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync Lenis with GSAP ScrollTrigger
    if (typeof ScrollTrigger !== "undefined") {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
  }

  // 2. Render Dynamic Content from Config
  renderAppFromConfig();

  // 3. Setup Custom Interactive Cursor
  initCustomCursor();

  // 4. Setup Scroll Progress & Header Scroll Dynamics
  initHeaderAndScrollProgress();

  // 5. Setup Mobile Drawer Navigation
  initMobileNav();

  // 6. Setup Category Filtering
  initMenuFiltering();

  // 7. Setup Fullscreen Lightbox
  initLightbox();

  // 8. Setup GSAP ScrollTrigger Animations
  initScrollAnimations();

  // 9. Setup Live Hours / Status Pill
  updateLiveHoursStatus();

  // 10. Setup Reservation Modal
  initReservationModal();

  // 11. Setup Live Media Studio Drawer
  initMediaStudio();
});

/* ==========================================================================
   RENDER APPLICATION FROM CONFIG
   ========================================================================== */
function renderAppFromConfig() {
  const config = window.ICEBURG_CONFIG;
  if (!config) return;

  // Render Menu Items
  renderMenuItems(config.menuItems);

  // Render Signature Dishes
  renderSignatureDishes(config.signatureDishes);

  // Render Ambience Gallery
  renderGallery(config.gallery);

  // Render Social Proof
  renderReviews(config.reviews);

  // Render Instagram Posts
  renderInstagram(config.instagramPosts);

  // Re-run Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

function renderMenuItems(items) {
  const container = document.getElementById("menuGridContainer");
  if (!container) return;

  container.innerHTML = items.map((item) => `
    <article class="menu-card" data-category="${item.category}" data-id="${item.id}">
      <div class="card-media-wrap" onclick="openLightboxFromSource('${item.image}', '${escapeHtml(item.title)}', '${item.price} · ${item.tags.join(" • ")}')">
        <img class="card-img" src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy">
        <span class="card-price-pill">${item.price}</span>
        ${item.tags && item.tags.length ? `<span class="card-tag-pill">${item.tags[0]}</span>` : ""}
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.description}</p>
        <div class="card-footer">
          <button class="card-quick-view" onclick="openLightboxFromSource('${item.image}', '${escapeHtml(item.title)}', '${item.price} · ${item.description}')">
            View Details <i data-lucide="arrow-up-right" style="width: 14px; height: 14px;"></i>
          </button>
          <button class="card-replace-btn" onclick="openMediaStudioFor('${item.id}', '${item.title}', '${item.image}')" title="Preview replacing this photo">
            <i data-lucide="image" style="width: 13px; height: 13px;"></i> Replace
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderSignatureDishes(signatures) {
  const container = document.getElementById("signaturesContainer");
  if (!container) return;

  container.innerHTML = signatures.map((dish) => `
    <div class="signature-row">
      <div class="signature-media-col">
        <div class="signature-editorial-num">${dish.number}</div>
        <div class="signature-image-frame" onclick="openLightboxFromSource('${dish.image}', '${escapeHtml(dish.title)}', '${dish.price} · ${dish.subtitle}')">
          <img src="${dish.image}" alt="${escapeHtml(dish.title)}" loading="lazy">
        </div>
      </div>
      <div class="signature-content-col">
        <span class="signature-label">${dish.subtitle}</span>
        <h3 class="signature-dish-title">${dish.title}</h3>
        <span class="signature-dish-price">${dish.price}</span>
        <p class="signature-dish-desc">${dish.description}</p>
        <div class="signature-taste-tags">
          ${dish.tasteNotes.map((note) => `<span class="taste-pill">${note}</span>`).join("")}
        </div>
        <button class="btn-primary" onclick="openReservationModalWithNote('Reservation inquiry for ${escapeHtml(dish.title)}')">
          Order for Dining <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
    </div>
  `).join("");
}

function renderGallery(galleryItems) {
  const container = document.getElementById("galleryGridContainer");
  if (!container) return;

  container.innerHTML = galleryItems.map((item, index) => {
    // Add visual rhythm with spanning
    let spanClass = "";
    if (index === 0) spanClass = "span-2-col span-2-row";
    else if (index === 3) spanClass = "span-2-col";
    else if (index === 6) spanClass = "span-2-row";

    return `
      <div class="gallery-item ${spanClass}" onclick="openLightboxByIndex(${index})">
        <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy">
        <div class="gallery-item-overlay">
          <span class="gallery-item-category">${item.category}</span>
          <h4 class="gallery-item-title">${item.title}</h4>
        </div>
      </div>
    `;
  }).join("");
}

function renderReviews(reviews) {
  const container = document.getElementById("reviewsContainer");
  if (!container) return;

  container.innerHTML = reviews.map((r) => `
    <div class="review-card">
      <div>
        <div class="review-stars">
          ${Array(r.rating).fill('<i data-lucide="star" style="width: 16px; height: 16px; fill: currentColor;"></i>').join("")}
        </div>
        <p class="review-quote-text">“${r.quote}”</p>
      </div>
      <div class="review-author-wrap">
        <div class="author-avatar-initials">${r.author.charAt(0)}</div>
        <div>
          <div class="author-name">${r.author}</div>
          <div class="author-role">${r.role} · ${r.date}</div>
        </div>
      </div>
    </div>
  `).join("");
}

function renderInstagram(posts) {
  const container = document.getElementById("instagramGridContainer");
  if (!container) return;

  container.innerHTML = posts.map((post) => `
    <div class="instagram-post-card" onclick="openLightboxFromSource('${post.image}', '${post.tag}', '${post.likes} Likes on Instagram')">
      <img src="${post.image}" alt="${post.tag}" loading="lazy">
      <div class="instagram-hover-overlay">
        <div class="insta-stats-row">
          <span><i data-lucide="heart" style="width: 14px; height: 14px; fill: currentColor; display: inline;"></i> ${post.likes}</span>
          <span><i data-lucide="message-circle" style="width: 14px; height: 14px; fill: currentColor; display: inline;"></i> ${post.comments}</span>
        </div>
        <span style="font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase;">${post.tag}</span>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   CUSTOM LUXURY CURSOR
   ========================================================================== */
function initCustomCursor() {
  const dot = document.querySelector(".custom-cursor-dot");
  const follower = document.querySelector(".custom-cursor-follower");
  if (!dot || !follower) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  // Smooth lerp follower loop
  function animateFollower() {
    followerX += (mouseX - followerX) * 0.16;
    followerY += (mouseY - followerY) * 0.16;
    follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
    requestAnimationFrame(animateFollower);
  }
  requestAnimationFrame(animateFollower);

  // Link & Button hover states
  const interactives = document.querySelectorAll("a, button, input, textarea, select, .filter-btn, .mobile-nav-toggle");
  interactives.forEach((el) => {
    el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });

  // Image cards hover state
  const imageCards = document.querySelectorAll(".card-media-wrap, .gallery-item, .signature-image-frame, .instagram-post-card");
  imageCards.forEach((el) => {
    el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover-image"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover-image"));
  });
}

/* ==========================================================================
   SCROLL DYNAMICS & HEADER
   ========================================================================== */
function initHeaderAndScrollProgress() {
  const header = document.querySelector(".site-header");
  const progressBar = document.querySelector(".scroll-progress-bar");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Header state
    if (scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Progress bar
    if (progressBar && docHeight > 0) {
      const progress = (scrollY / docHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }
  }, { passive: true });
}

/* ==========================================================================
   MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNav() {
  const toggle = document.querySelector(".mobile-nav-toggle");
  const drawer = document.querySelector(".mobile-nav-drawer");
  const links = document.querySelectorAll(".mobile-nav-item");

  if (!toggle || !drawer) return;

  function toggleDrawer(open) {
    const isOpen = open !== undefined ? open : !drawer.classList.contains("is-open");
    toggle.classList.toggle("is-open", isOpen);
    drawer.classList.toggle("is-open", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";

    if (isOpen) {
      // Staggered reveal of links
      links.forEach((link, idx) => {
        setTimeout(() => {
          link.style.opacity = "1";
          link.style.transform = "translateY(0)";
        }, 100 + idx * 60);
      });
    } else {
      links.forEach((link) => {
        link.style.opacity = "0";
        link.style.transform = "translateY(20px)";
      });
    }
  }

  toggle.addEventListener("click", () => toggleDrawer());

  links.forEach((link) => {
    link.addEventListener("click", () => toggleDrawer(false));
  });
}

/* ==========================================================================
   MENU FILTERING
   ========================================================================== */
function initMenuFiltering() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".menu-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");

      cards.forEach((card) => {
        const itemCategory = card.getAttribute("data-category");
        if (category === "all" || itemCategory === category) {
          card.style.display = "flex";
          if (typeof gsap !== "undefined") {
            gsap.fromTo(card, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
          }
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/* ==========================================================================
   FULLSCREEN LIGHTBOX
   ========================================================================== */
let currentLightboxIndex = 0;
let currentGalleryList = [];

function initLightbox() {
  const config = window.ICEBURG_CONFIG;
  if (!config) return;
  currentGalleryList = config.gallery;

  const modal = document.querySelector(".lightbox-modal");
  const closeBtn = document.querySelector(".lightbox-close-btn");
  const prevBtn = document.querySelector(".lightbox-arrow-btn.prev");
  const nextBtn = document.querySelector(".lightbox-arrow-btn.next");

  if (!modal) return;

  closeBtn?.addEventListener("click", closeLightbox);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeLightbox();
  });

  prevBtn?.addEventListener("click", () => navigateLightbox(-1));
  nextBtn?.addEventListener("click", () => navigateLightbox(1));

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("is-active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });

  // Touch swipe support
  let touchStartX = 0;
  modal.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  modal.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) navigateLightbox(1);
    if (touchEndX - touchStartX > 50) navigateLightbox(-1);
  }, { passive: true });
}

function openLightboxByIndex(index) {
  currentLightboxIndex = index;
  const item = currentGalleryList[index];
  if (!item) return;

  populateLightbox(item.image, item.title, item.caption || item.category, `${index + 1} of ${currentGalleryList.length}`);
}

window.openLightboxByIndex = openLightboxByIndex;

function openLightboxFromSource(src, title, subtitle) {
  populateLightbox(src, title, subtitle, "");
}
window.openLightboxFromSource = openLightboxFromSource;

function populateLightbox(src, title, subtitle, counter) {
  const modal = document.querySelector(".lightbox-modal");
  const img = document.querySelector(".lightbox-img-element");
  const titleEl = document.querySelector(".lightbox-title");
  const subEl = document.querySelector(".lightbox-subtitle");
  const counterEl = document.querySelector(".lightbox-counter");

  if (!modal || !img) return;

  img.src = src;
  if (titleEl) titleEl.textContent = title;
  if (subEl) subEl.textContent = subtitle;
  if (counterEl) counterEl.textContent = counter;

  modal.classList.add("is-active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.querySelector(".lightbox-modal");
  if (modal) {
    modal.classList.remove("is-active");
    document.body.style.overflow = "";
  }
}

function navigateLightbox(direction) {
  if (!currentGalleryList.length) return;
  currentLightboxIndex = (currentLightboxIndex + direction + currentGalleryList.length) % currentGalleryList.length;
  openLightboxByIndex(currentLightboxIndex);
}

/* ==========================================================================
   GSAP SCROLLTRIGGER ANIMATIONS
   ========================================================================== */
function initScrollAnimations() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  // 1. Hero Entrance Animation
  const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
  heroTl
    .from(".hero-badge-pill", { opacity: 0, y: -20, duration: 0.8, delay: 0.2 })
    .from(".hero-headline", { opacity: 0, y: 35, duration: 1 }, "-=0.5")
    .from(".hero-description", { opacity: 0, y: 25, duration: 0.8 }, "-=0.6")
    .from(".hero-cta-group", { opacity: 0, y: 20, duration: 0.8 }, "-=0.6")
    .from(".hero-stats-row", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5")
    .from(".hero-scroll-prompt", { opacity: 0, duration: 0.8 }, "-=0.3");

  // 2. Hero Background Parallax & Zoom on Scroll
  gsap.to(".hero-bg-image", {
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
    y: 120,
    scale: 1.18,
    ease: "none"
  });

  // 3. Story Section Layered Parallax
  gsap.to(".story-img-main img", {
    scrollTrigger: {
      trigger: ".section-story",
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5,
    },
    y: 40,
    ease: "none"
  });

  gsap.to(".story-img-float img", {
    scrollTrigger: {
      trigger: ".section-story",
      start: "top bottom",
      end: "bottom top",
      scrub: 2,
    },
    y: -50,
    ease: "none"
  });

  // 4. Section Headers Reveal
  const sectionHeaders = document.querySelectorAll(".section-header-block");
  sectionHeaders.forEach((header) => {
    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
        start: "top 85%",
      },
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: "power3.out"
    });
  });

  // 5. Signature Dish Staggered Rows
  const signatureRows = document.querySelectorAll(".signature-row");
  signatureRows.forEach((row) => {
    gsap.from(row.querySelector(".signature-media-col"), {
      scrollTrigger: {
        trigger: row,
        start: "top 80%",
      },
      opacity: 0,
      x: -40,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(row.querySelector(".signature-content-col"), {
      scrollTrigger: {
        trigger: row,
        start: "top 80%",
      },
      opacity: 0,
      x: 40,
      duration: 1,
      ease: "power3.out"
    });
  });

  // 6. Experience Section Parallax
  gsap.to(".experience-bg-wrap img", {
    scrollTrigger: {
      trigger: ".section-experience",
      start: "top bottom",
      end: "bottom top",
      scrub: 1.2,
    },
    scale: 1.15,
    y: 60,
    ease: "none"
  });
}

/* ==========================================================================
   LIVE HOURS / STATUS PILL (Kerala IST Time Calculation)
   ========================================================================== */
function updateLiveHoursStatus() {
  const statusPills = document.querySelectorAll(".live-status-pill");
  if (!statusPills.length) return;

  // Manathavady Kerala time (UTC+5:30)
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istTime = new Date(utc + 3600000 * 5.5);
  const hour = istTime.getHours();
  const minutes = istTime.getMinutes();
  const currentTimeVal = hour + minutes / 60;

  // Open 10:00 AM (10.0) to 11:30 PM (23.5)
  const isOpen = currentTimeVal >= 10.0 && currentTimeVal < 23.5;

  statusPills.forEach((el) => {
    if (isOpen) {
      el.innerHTML = `<span class="hero-badge-dot"></span> Open Now · Serving until 11:30 PM`;
      el.style.color = "#a1f2c2";
    } else {
      el.innerHTML = `<span style="width: 7px; height: 7px; border-radius: 50%; background-color: #f7a468; display: inline-block;"></span> Opens Today at 10:00 AM`;
      el.style.color = "#ffd6b0";
    }
  });
}

/* ==========================================================================
   RESERVATION & WHATSAPP MODAL
   ========================================================================== */
function initReservationModal() {
  const modal = document.getElementById("reservationModal");
  const closeBtn = document.getElementById("resCloseBtn");
  const form = document.getElementById("reservationForm");

  if (!modal || !form) return;

  closeBtn?.addEventListener("click", () => {
    modal.classList.remove("is-active");
    document.body.style.overflow = "";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("is-active");
      document.body.style.overflow = "";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("resName")?.value || "";
    const phone = document.getElementById("resPhone")?.value || "";
    const date = document.getElementById("resDate")?.value || "";
    const time = document.getElementById("resTime")?.value || "";
    const guests = document.getElementById("resGuests")?.value || "2";
    const note = document.getElementById("resNotes")?.value || "";

    // Compose formatted WhatsApp booking message
    const message = encodeURIComponent(
      `Hello Iceburg Coffee Point Manathavady!\n\nI would like to reserve a table / place an order:\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n📅 Date: ${date}\n⏰ Time: ${time}\n👥 Guests: ${guests}\n📝 Special Request: ${note || "None"}\n\nLooking forward to visiting Iceburg in Manathavady!`
    );

    const whatsappNumber = window.ICEBURG_CONFIG.brand.whatsappNumber || "919496012345";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

    modal.classList.remove("is-active");
    document.body.style.overflow = "";
    alert("Thank you! Opening WhatsApp to finalize your table request with Iceburg Coffee Point.");
  });
}

function openReservationModalWithNote(defaultNote = "") {
  const modal = document.getElementById("reservationModal");
  const notesField = document.getElementById("resNotes");
  if (!modal) return;

  if (notesField && defaultNote) {
    notesField.value = defaultNote;
  }
  modal.classList.add("is-active");
  document.body.style.overflow = "hidden";
}
window.openReservationModalWithNote = openReservationModalWithNote;

/* ==========================================================================
   LIVE MEDIA STUDIO DRAWER (Photo Customizer & Config Exporter)
   ========================================================================== */
function initMediaStudio() {
  const drawer = document.getElementById("mediaStudioDrawer");
  const closeBtn = document.getElementById("closeMediaStudio");
  const openBtns = document.querySelectorAll(".trigger-media-studio");
  const fileInput = document.getElementById("studioFileInput");
  const itemsContainer = document.getElementById("studioItemsContainer");
  const exportBtn = document.getElementById("exportConfigBtn");

  if (!drawer) return;

  openBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      drawer.classList.add("is-open");
      document.body.style.overflow = "hidden";
      renderStudioItems();
    });
  });

  closeBtn?.addEventListener("click", () => {
    drawer.classList.remove("is-open");
    document.body.style.overflow = "";
  });

  // Handle live local file upload preview
  fileInput?.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      const targetId = drawer.getAttribute("data-target-id");

      if (targetId) {
        // Update specific item
        const item = window.ICEBURG_CONFIG.menuItems.find((m) => m.id === targetId);
        if (item) {
          item.image = dataUrl;
          const cardEl = document.querySelector(`.menu-card[data-id="${targetId}"] img`);
          if (cardEl) cardEl.src = dataUrl;
          alert(`Updated photo for "${item.title}" live on the website!`);
        }
      } else {
        // Default update hero
        window.ICEBURG_CONFIG.hero.bgImage = dataUrl;
        const heroImg = document.querySelector(".hero-bg-image");
        if (heroImg) heroImg.src = dataUrl;
        alert("Updated hero background photo live!");
      }
      renderStudioItems();
    };
    reader.readAsDataURL(file);
  });

  // Export JSON configuration
  exportBtn?.addEventListener("click", () => {
    const dataStr = "data:text/javascript;charset=utf-8," + encodeURIComponent(
      "const ICEBURG_CONFIG = " + JSON.stringify(window.ICEBURG_CONFIG, null, 2) + ";\nif (typeof window !== 'undefined') window.ICEBURG_CONFIG = ICEBURG_CONFIG;"
    );
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "config.js");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  });
}

function openMediaStudioFor(id, title, currentImage) {
  const drawer = document.getElementById("mediaStudioDrawer");
  const targetLabel = document.getElementById("studioTargetItemName");
  if (!drawer) return;

  drawer.setAttribute("data-target-id", id);
  if (targetLabel) {
    targetLabel.textContent = `Target: ${title}`;
  }
  drawer.classList.add("is-open");
  document.body.style.overflow = "hidden";
  renderStudioItems();
}
window.openMediaStudioFor = openMediaStudioFor;

function renderStudioItems() {
  const container = document.getElementById("studioItemsContainer");
  if (!container || !window.ICEBURG_CONFIG) return;

  container.innerHTML = window.ICEBURG_CONFIG.menuItems.slice(0, 10).map((item) => `
    <div class="studio-row-item">
      <img src="${item.image}" class="studio-row-thumb" alt="${item.title}">
      <div class="studio-row-meta">
        <div class="studio-row-name">${item.title}</div>
        <div class="studio-row-path">${item.image}</div>
      </div>
      <button class="filter-btn" style="padding: 4px 10px; font-size: 0.72rem;" onclick="document.getElementById('studioFileInput').click(); document.getElementById('mediaStudioDrawer').setAttribute('data-target-id', '${item.id}');">
        Change
      </button>
    </div>
  `).join("");
}

/* Helper function to escape HTML */
function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
