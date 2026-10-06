// ===== MINIATURE TRAIN RIDE PARK — SHARED COMPONENTS =====

// ── NAVBAR HTML ──────────────────────────────────────────
function getNavbarHTML(activePage = '') {
  const links = [
    { href: 'index.html', label: 'Home' },
    { href: 'home2.html', label: 'Experience' },
    { href: 'visit.html', label: 'Visit Us' },
    { href: 'birthday.html', label: 'Birthday Parties' },
    { href: 'school.html', label: 'School Groups' },
    { href: 'contact.html', label: 'Contact' },
  ];
  const navLinks = links.map(l =>
    `<a href="${l.href}" class="nav-link${activePage === l.href ? ' active' : ''}">${l.label}</a>`
  ).join('');
  const mobLinks = links.map(l =>
    `<a href="${l.href}" class="mob-link${activePage === l.href ? ' active' : ''}">${l.label}</a>`
  ).join('');
  return `
<nav class="navbar" id="mainNavbar">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo" aria-label="Miniature Train Ride Park Home">
      <img src="logo.svg" alt="Train Park Logo" class="nav-logo-img">
      <div class="nav-logo-text">
        <span class="brand-top">TrainPark</span>
        <span class="brand-bottom">Ride &amp; Play</span>
      </div>
    </a>
    <div class="nav-links" id="navLinks">${navLinks}</div>
    <div class="nav-actions">
      <button class="nav-icon-btn" id="darkToggle" aria-label="Toggle dark mode" title="Toggle dark/light mode">
        <svg id="iconSun" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
        <svg id="iconMoon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </button>
      <a href="login.html" class="btn btn-outline btn-sm" id="navLoginBtn">Login</a>
      <a href="visit.html" class="btn btn-secondary btn-sm" id="navBookBtn">Book Tickets</a>
      <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Open menu" aria-expanded="false">
        <svg id="menuIconOpen" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        <svg id="menuIconClose" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
  </div>
</nav>
<div class="mobile-backdrop" id="mobileBackdrop"></div>
<div class="mobile-menu" id="mobileMenu" aria-hidden="true">
  ${mobLinks}
  <div class="mob-actions">
    <a href="login.html" class="btn btn-outline w-full" style="margin-bottom:0.5rem">Login</a>
    <a href="visit.html" class="btn btn-secondary w-full">Book Tickets</a>
  </div>
  <div class="mob-toggles">
    <button class="nav-icon-btn" id="darkToggleMob" style="width:auto;padding:0.4rem 0.75rem;gap:0.375rem;font-size:0.8rem">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      Toggle Theme
    </button>
  </div>
</div>
<div class="navbar-spacer"></div>`;
}

// ── FOOTER HTML ───────────────────────────────────────────
function getFooterHTML() {
  return `
<footer class="footer" id="mainFooter">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo footer-logo">
          <img src="logo.svg" alt="Train Park Logo" class="nav-logo-img" style="filter:brightness(10)">
          <div class="nav-logo-text">
            <span class="brand-top">TrainPark</span>
            <span class="brand-bottom">Ride &amp; Play</span>
          </div>
        </a>
        <p>A nostalgic, family-friendly miniature train ride experience. Making memories one ride at a time since 1987.</p>
        <div class="footer-socials">
          <a href="#" class="footer-social-link" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" class="footer-social-link" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="#" class="footer-social-link" aria-label="Twitter/X">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
          <a href="#" class="footer-social-link" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
          </a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Quick Links</div>
        <nav class="footer-links" aria-label="Footer navigation">
          <a href="index.html">Home</a>
          <a href="home2.html">Experience</a>
          <a href="visit.html">Visit Us</a>
          <a href="birthday.html">Birthday Parties</a>
          <a href="school.html">School Groups</a>
          <a href="contact.html">Contact</a>
        </nav>
      </div>
      <div>
        <div class="footer-col-title">Park Info</div>
        <nav class="footer-links" aria-label="Park information links">
          <a href="visit.html#hours">Opening Hours</a>
          <a href="visit.html#tickets">Ticket Prices</a>
          <a href="visit.html#map">Getting Here</a>
          <a href="visit.html#facilities">Facilities</a>
          <a href="birthday.html">Party Packages</a>
          <a href="school.html">Group Bookings</a>
        </nav>
      </div>
      <div class="footer-col-newsletter">
        <div class="footer-newsletter-card">
          <div class="footer-newsletter-title">Stay on Track!</div>
          <p class="footer-newsletter-desc">Get seasonal events, special offers &amp; park news delivered to your inbox.</p>
          <form class="footer-newsletter-form" id="newsletterForm" novalidate>
            <input type="email" class="footer-newsletter-input" id="newsletterEmail" placeholder="your@email.com" aria-label="Email address" required>
            <button type="submit" class="footer-newsletter-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
      <p class="footer-copyright">&copy; ${new Date().getFullYear()} Miniature Train Ride Park. All rights reserved.</p>
      <nav class="footer-bottom-links" aria-label="Legal links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Accessibility</a>
      </nav>
    </div>
  </div>
</footer>`;
}

// ── BACK TO TOP BUTTON ────────────────────────────────────
function getBackToTopHTML() {
  return `<button id="backToTop" aria-label="Back to top" style="position:fixed;bottom:1.5rem;right:1.5rem;width:44px;height:44px;border-radius:50%;background:var(--primary);color:#fff;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-lg);opacity:0;transform:translateY(16px);transition:var(--transition-smooth);z-index:500;">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
  </button>`;
}

// ── INIT ALL COMPONENTS ───────────────────────────────────
function initComponents(activePage = '') {
  // Inject navbar
  const navContainer = document.getElementById('navbar-container');
  if (navContainer) navContainer.innerHTML = getNavbarHTML(activePage);

  // Inject footer
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) footerContainer.innerHTML = getFooterHTML();

  // Inject back-to-top
  document.body.insertAdjacentHTML('beforeend', getBackToTopHTML());

  // Run all behavior inits after DOM is ready
  initDarkMode();
  initNavScroll();
  initMobileMenu();
  initBackToTop();
  initNewsletterForm();
  initFormValidation();
}

// ── DARK MODE ─────────────────────────────────────────────
function initDarkMode() {
  const html = document.documentElement;
  const saved = localStorage.getItem('trainpark-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = saved ? saved === 'dark' : prefersDark;
  if (isDark) html.classList.add('dark');

  function updateIcons() {
    const dark = html.classList.contains('dark');
    const sun = document.getElementById('iconSun');
    const moon = document.getElementById('iconMoon');
    if (sun) sun.style.display = dark ? 'block' : 'none';
    if (moon) moon.style.display = dark ? 'none' : 'block';
  }
  updateIcons();

  function toggle() {
    html.classList.toggle('dark');
    localStorage.setItem('trainpark-theme', html.classList.contains('dark') ? 'dark' : 'light');
    updateIcons();
  }

  const btn = document.getElementById('darkToggle');
  if (btn) btn.addEventListener('click', toggle);
  const btnMob = document.getElementById('darkToggleMob');
  if (btnMob) btnMob.addEventListener('click', toggle);
}

// ── NAVBAR SCROLL ─────────────────────────────────────────
function initNavScroll() {
  const nav = document.getElementById('mainNavbar');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── MOBILE MENU ───────────────────────────────────────────
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('mobileBackdrop');
  const openIcon = document.getElementById('menuIconOpen');
  const closeIcon = document.getElementById('menuIconClose');
  if (!btn || !menu) return;

  function openMenu() {
    menu.classList.add('open');
    menu.style.display = 'flex';
    backdrop.classList.add('open');
    backdrop.style.display = 'block';
    btn.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    if (openIcon) openIcon.style.display = 'none';
    if (closeIcon) closeIcon.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    menu.classList.remove('open');
    backdrop.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    if (openIcon) openIcon.style.display = 'block';
    if (closeIcon) closeIcon.style.display = 'none';
    document.body.style.overflow = '';
    setTimeout(() => {
      if (!menu.classList.contains('open')) menu.style.display = 'none';
    }, 300);
  }
  btn.addEventListener('click', () => menu.classList.contains('open') ? closeMenu() : openMenu());
  backdrop.addEventListener('click', closeMenu);
  menu.querySelectorAll('.mob-link').forEach(l => l.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => e.key === 'Escape' && closeMenu());
}

// ── BACK TO TOP ───────────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    const show = window.scrollY > 400;
    btn.style.opacity = show ? '1' : '0';
    btn.style.transform = show ? 'translateY(0)' : 'translateY(16px)';
    btn.style.pointerEvents = show ? 'auto' : 'none';
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── NEWSLETTER FORM ───────────────────────────────────────
function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const input = form.querySelector('input');
    if (!input.value || !input.value.includes('@')) {
      input.style.borderColor = '#EF4444';
      setTimeout(() => input.style.borderColor = '', 2000);
      return;
    }
    btn.textContent = 'Subscribed!';
    btn.style.background = '#059669';
    input.value = '';
    setTimeout(() => { btn.textContent = 'Subscribe'; btn.style.background = ''; }, 3000);
  });
}

// ── GENERIC FORM VALIDATION ───────────────────────────────
function initFormValidation() {
  document.querySelectorAll('form[data-validate]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll('[required]').forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = '#EF4444';
          field.style.boxShadow = '0 0 0 3px rgba(239,68,68,0.12)';
          valid = false;
          field.addEventListener('input', () => {
            field.style.borderColor = '';
            field.style.boxShadow = '';
          }, { once: true });
        }
      });
      if (valid) {
        const btn = form.querySelector('[type="submit"]');
        const orig = btn.innerHTML;
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Sent!';
        btn.disabled = true;
        btn.style.background = '#059669';
        btn.style.borderColor = '#059669';
        setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; btn.style.background = ''; btn.style.borderColor = ''; }, 3500);
      }
    });
  });
}

// ── SCROLL ANIMATIONS ─────────────────────────────────────
function initScrollAnimations() {
  if (!window.IntersectionObserver) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.anim-fade-up,.anim-fade').forEach(el => {
    el.style.animationPlayState = 'paused';
    obs.observe(el);
  });
}

// ── COUNTDOWN TIMER ───────────────────────────────────────
function initCountdown(targetDateStr) {
  const target = new Date(targetDateStr).getTime();
  function update() {
    const now = Date.now();
    const diff = target - now;
    if (diff <= 0) return;
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = String(val).padStart(2, '0'); };
    set('cd-days', d); set('cd-hours', h); set('cd-mins', m); set('cd-secs', s);
  }
  update();
  setInterval(update, 1000);
}

// ── PASSWORD TOGGLE ───────────────────────────────────────
function initPasswordToggle() {
  document.querySelectorAll('.pw-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.closest('.pw-field').querySelector('input');
      if (!input) return;
      const isText = input.type === 'text';
      input.type = isText ? 'password' : 'text';
      btn.innerHTML = isText
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
    });
  });
}
