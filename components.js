// ===== MINIATURE TRAIN RIDE PARK — SHARED COMPONENTS =====

/* ─── THEME & DIRECTION INIT ─────────────────────────────── */
(function initThemeDir() {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('trainpark-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) html.classList.add('dark');
  if (localStorage.getItem('trainpark-dir') === 'rtl') html.setAttribute('dir', 'rtl');
})();

function toggleDir() {
  const html = document.documentElement;
  const isRTL = html.getAttribute('dir') === 'rtl';
  html.setAttribute('dir', isRTL ? 'ltr' : 'rtl');
  localStorage.setItem('trainpark-dir', isRTL ? 'ltr' : 'rtl');
  document.querySelectorAll('.dir-label').forEach(el => {
    el.textContent = isRTL ? 'LTR' : 'RTL';
  });
}

// ── NAVBAR HTML ──────────────────────────────────────────
function getNavbarHTML(activePage = '') {
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
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
      <!-- RTL Toggle -->
      <button onclick="toggleDir()" class="nav-icon-btn" title="Toggle Direction" aria-label="Toggle text direction">
        <span class="dir-label" style="font-size:0.625rem;font-weight:700;">${isRTL ? 'RTL' : 'LTR'}</span>
      </button>
      <!-- Dark Toggle -->
      <button class="nav-icon-btn" id="darkToggle" aria-label="Toggle dark mode" title="Toggle dark/light mode">
        <svg id="iconSun" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
        <svg id="iconMoon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </button>
      <a href="login.html" class="btn btn-secondary btn-sm" id="navLoginBtn">Login</a>
      <button class="mobile-menu-btn" id="mobileMenuBtn" onclick="toggleMobileMenu(event)" aria-label="Open menu" aria-expanded="false">
        <span class="mobile-menu-icon">
          <svg id="menuIconOpen" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          <svg id="menuIconClose" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </span>
      </button>
    </div>
  </div>

  <!-- Mobile Backdrop -->
  <div class="mobile-backdrop" id="mobileBackdrop" onclick="toggleMobileMenu(event)"></div>

  <!-- Mobile Menu -->
  <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
    ${mobLinks}
    <div class="mob-actions">
      <a href="login.html" class="btn btn-secondary w-full">Login</a>
    </div>
    <div class="mob-toggles">
      <button onclick="toggleDir()" class="nav-icon-btn" title="Toggle Direction" aria-label="Toggle text direction">
        <span class="dir-label" style="font-size:0.625rem;font-weight:700;">${isRTL ? 'RTL' : 'LTR'}</span>
      </button>
      <button class="nav-icon-btn" id="darkToggleMob" aria-label="Toggle dark mode" title="Toggle dark/light mode">
        <svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
        <svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </button>
    </div>
  </div>
</nav>
<div class="navbar-spacer"></div>`;
}

// ── FOOTER HTML ───────────────────────────────────────────
function getFooterHTML() {
  return `
<footer class="footer" id="mainFooter">
  <div class="container">
    <div class="footer-grid">
      <!-- Column 1: Brand & Socials -->
      <div class="footer-brand">
        <a href="index.html" class="nav-logo footer-logo" aria-label="Miniature Train Ride Park Home">
          <img src="logo.svg" alt="Train Park Logo" class="nav-logo-img" style="filter:brightness(10)">
          <div class="nav-logo-text">
            <span class="brand-top" style="color:#fff;">TrainPark</span>
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
          <a href="#" class="footer-social-link" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
          </a>
          <a href="#" class="footer-social-link" aria-label="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          </a>
        </div>
      </div>

      <!-- Column 2: Quick Links -->
      <div class="footer-col">
        <h4 class="footer-col-title">QUICK LINKS</h4>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="home2.html">Home 2 — Premium</a></li>
          <li><a href="visit.html">Visit Us</a></li>
          <li><a href="birthday.html">Birthday Parties</a></li>
          <li><a href="school.html">School Groups</a></li>
          <li><a href="visit.html#tickets">Pricing &amp; Tickets</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>

      <!-- Column 3: Resources -->
      <div class="footer-col">
        <h4 class="footer-col-title">RESOURCES</h4>
        <ul class="footer-links">
          <li><a href="coming-soon.html">Blog &amp; Tips</a></li>
          <li><a href="coming-soon.html">Careers</a></li>
          <li><a href="login.html">Login</a></li>
          <li><a href="signup.html">Sign Up</a></li>
          <li><a href="404.html">404 Page</a></li>
          <li><a href="coming-soon.html">Coming Soon</a></li>
        </ul>
      </div>

      <!-- Column 4: Stay Updated Card -->
      <div class="footer-col footer-col-newsletter">
        <div class="footer-newsletter-card">
          <h4 class="footer-newsletter-title">Stay Updated</h4>
          <p class="footer-newsletter-desc">Get seasonal events, special offers &amp; park news delivered to your inbox.</p>
          <form class="footer-newsletter-form" id="newsletterForm" onsubmit="event.preventDefault(); alert('Subscribed successfully!'); this.reset();">
            <input type="email" class="footer-newsletter-input" id="newsletterEmail" placeholder="your@email.com" aria-label="Email address" required>
            <button type="submit" class="footer-newsletter-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <p class="footer-copyright">&copy; ${new Date().getFullYear()} Miniature Train Ride Park. All rights reserved.</p>
      <div class="footer-bottom-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Cookies</a>
      </div>
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
  initGalleryLightbox();
  initHeroCarousel();
  initHero2Carousel();
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
    document.querySelectorAll('#iconSun, .icon-sun').forEach(el => el.style.display = dark ? 'block' : 'none');
    document.querySelectorAll('#iconMoon, .icon-moon').forEach(el => el.style.display = dark ? 'none' : 'block');
  }
  updateIcons();

  function toggle() {
    html.classList.toggle('dark');
    localStorage.setItem('trainpark-theme', html.classList.contains('dark') ? 'dark' : 'light');
    updateIcons();
  }

  document.querySelectorAll('#darkToggle, #darkToggleMob, .auth-theme-toggle').forEach(btn => {
    btn.removeEventListener('click', toggle);
    btn.addEventListener('click', toggle);
  });
}

function initAuthPage() {
  initDarkMode();
  initPasswordToggle();
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
  document.querySelectorAll('.dir-label').forEach(el => {
    el.textContent = isRTL ? 'RTL' : 'LTR';
  });
}

function togglePasswordVisibility(inputId, btnEl) {
  const input = document.getElementById(inputId) || (btnEl ? btnEl.closest('.password-wrapper, .pw-field')?.querySelector('input') : null);
  if (!input) return;
  const isText = input.type === 'text';
  input.type = isText ? 'password' : 'text';
  const svg = btnEl?.querySelector('svg') || btnEl;
  if (svg) {
    btnEl.innerHTML = isText
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
  }
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
function toggleMobileMenu(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('mobileBackdrop');
  const openIcon = document.getElementById('menuIconOpen');
  const closeIcon = document.getElementById('menuIconClose');
  if (!menu) return;

  const isOpen = menu.classList.contains('open');
  if (isOpen) {
    menu.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    if (btn) btn.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    if (openIcon) openIcon.style.display = 'block';
    if (closeIcon) closeIcon.style.display = 'none';
    document.body.style.overflow = '';
  } else {
    menu.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    if (btn) btn.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    if (openIcon) openIcon.style.display = 'none';
    if (closeIcon) closeIcon.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('mobileBackdrop');
  const openIcon = document.getElementById('menuIconOpen');
  const closeIcon = document.getElementById('menuIconClose');
  if (!menu) return;

  menu.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
  if (btn) btn.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-hidden', 'true');
  if (openIcon) openIcon.style.display = 'block';
  if (closeIcon) closeIcon.style.display = 'none';
  document.body.style.overflow = '';
}

function initMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('mobileBackdrop');
  const btn = document.getElementById('mobileMenuBtn');
  if (!menu) return;

  if (backdrop) backdrop.addEventListener('click', closeMobileMenu);
  menu.querySelectorAll('.mob-link, .mob-actions a').forEach(l => l.addEventListener('click', closeMobileMenu));

  // Close on outside click
  document.addEventListener('click', function(e) {
    if (!menu.classList.contains('open')) return;
    if (btn && (btn === e.target || btn.contains(e.target))) return;
    if (menu.contains(e.target)) return;
    closeMobileMenu();
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      closeMobileMenu();
    }
  });
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

// ── GALLERY LIGHTBOX MODAL ────────────────────────────────
function initGalleryLightbox() {
  const items = Array.from(document.querySelectorAll('.gallery-item'));
  if (!items.length) return;

  let lightbox = document.getElementById('galleryLightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'galleryLightbox';
    lightbox.className = 'gallery-lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Image Zoom View');
    lightbox.innerHTML = `
      <button class="lightbox-btn lightbox-btn-close" id="lightboxClose" aria-label="Close Lightbox">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <button class="lightbox-btn lightbox-btn-prev" id="lightboxPrev" aria-label="Previous Image">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button class="lightbox-btn lightbox-btn-next" id="lightboxNext" aria-label="Next Image">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
      <div class="lightbox-content-wrap">
        <img src="" alt="" class="lightbox-img" id="lightboxImg">
        <div class="lightbox-caption" id="lightboxCaption"></div>
        <div class="lightbox-counter" id="lightboxCounter"></div>
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  const imgEl = document.getElementById('lightboxImg');
  const captionEl = document.getElementById('lightboxCaption');
  const counterEl = document.getElementById('lightboxCounter');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  let currentIndex = 0;

  function showImage(index) {
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;
    currentIndex = index;

    const item = items[currentIndex];
    const img = item.querySelector('img');
    if (!img) return;

    imgEl.src = img.src;
    imgEl.alt = img.alt || 'TrainPark photo';
    captionEl.textContent = img.alt || 'TrainPark Moments';
    counterEl.textContent = `Photo ${currentIndex + 1} of ${items.length}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  items.forEach((item, idx) => {
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', `Zoom image ${idx + 1}`);
    item.addEventListener('click', () => showImage(idx));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showImage(idx);
      }
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showImage(currentIndex - 1); });
  nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showImage(currentIndex + 1); });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content-wrap')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });
}

// ── HERO CAROUSEL AUTO-SLIDER (5 SECONDS) ─────────────────
function initHeroCarousel() {
  const hero = document.getElementById('heroCarousel');
  if (!hero) return;

  const slides = Array.from(hero.querySelectorAll('.hero-slide'));
  const dots = Array.from(hero.querySelectorAll('.hero-dot'));
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');

  if (slides.length < 2) return;

  let currentIndex = 0;
  let timer = null;
  const slideDuration = 5000; // 5 seconds per user request

  function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;

    slides.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    dots.forEach((dot, i) => {
      const prog = dot.querySelector('.dot-progress');
      if (i === currentIndex) {
        dot.classList.add('active');
        dot.setAttribute('aria-selected', 'true');
        if (prog) {
          prog.style.animation = 'none';
          prog.offsetHeight; // trigger reflow
          prog.style.animation = 'heroProgress 5s linear forwards';
        }
      } else {
        dot.classList.remove('active');
        dot.setAttribute('aria-selected', 'false');
        if (prog) prog.style.animation = 'none';
      }
    });
  }

  function startTimer() {
    stopTimer();
    timer = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, slideDuration);
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
      startTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
      startTimer();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      goToSlide(idx);
      startTimer();
    });
  });

  hero.addEventListener('mouseenter', stopTimer);
  hero.addEventListener('mouseleave', startTimer);

  goToSlide(0);
  startTimer();
}

// ── HERO 2 (EXPERIENCE PAGE) SPLIT CAROUSEL (5s AUTO-SWITCH) ──
function initHero2Carousel() {
  const hero2 = document.getElementById('hero2Carousel');
  if (!hero2) return;

  const slides = Array.from(hero2.querySelectorAll('.hero2-slide'));
  const dots = Array.from(hero2.querySelectorAll('.hero2-dot'));
  const prevBtn = document.getElementById('hero2PrevBtn');
  const nextBtn = document.getElementById('hero2NextBtn');

  if (slides.length < 2) return;

  let currentIndex = 0;
  let timer = null;
  const slideDuration = 5000; // 5 seconds per user request

  function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;

    slides.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    dots.forEach((dot, i) => {
      const prog = dot.querySelector('.hero2-dot-progress');
      if (i === currentIndex) {
        dot.classList.add('active');
        dot.setAttribute('aria-selected', 'true');
        if (prog) {
          prog.style.animation = 'none';
          prog.offsetHeight; // trigger reflow
          prog.style.animation = 'hero2Progress 5s linear forwards';
        }
      } else {
        dot.classList.remove('active');
        dot.setAttribute('aria-selected', 'false');
        if (prog) prog.style.animation = 'none';
      }
    });
  }

  function startTimer() {
    stopTimer();
    timer = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, slideDuration);
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
      startTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
      startTimer();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      goToSlide(idx);
      startTimer();
    });
  });

  hero2.addEventListener('mouseenter', stopTimer);
  hero2.addEventListener('mouseleave', startTimer);

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  hero2.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopTimer();
  }, { passive: true });
  hero2.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      goToSlide(currentIndex + 1);
    } else if (touchEndX - touchStartX > 50) {
      goToSlide(currentIndex - 1);
    }
    startTimer();
  }, { passive: true });

  goToSlide(0);
  startTimer();
}
