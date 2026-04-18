/* =========================================================
   Rangaswamy Yagateela — Portfolio Interactions
   ========================================================= */

(() => {
  'use strict';

  document.getElementById('year').textContent = new Date().getFullYear();

  // ---------- Theme Toggle ----------
  const themeToggle = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('ry-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initialTheme);

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('ry-theme', next);
  });

  // ---------- Nav scrolled state + mobile toggle ----------
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');

  const onScroll = () => {
    if (window.scrollY > 10) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  navToggle.addEventListener('click', () => nav.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach((link) =>
    link.addEventListener('click', () => nav.classList.remove('open'))
  );

  // ---------- Reveal on scroll ----------
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  reveals.forEach((el) => io.observe(el));

  // ---------- Typewriter ----------
  const roles = [
    'SAP BTP Developer',
    'CAPM Engineer',
    'AI/ML Enthusiast',
    'Cloud-Native Builder',
    'Full-Stack Problem Solver',
  ];
  const target = document.getElementById('typewriter');
  let roleIdx = 0;
  let charIdx = 0;
  let deleting = false;

  const tick = () => {
    const current = roles[roleIdx];
    if (deleting) {
      target.textContent = current.substring(0, charIdx--);
      if (charIdx < 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        charIdx = 0;
        setTimeout(tick, 220);
        return;
      }
      setTimeout(tick, 35);
    } else {
      target.textContent = current.substring(0, charIdx++);
      if (charIdx > current.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
      setTimeout(tick, 70);
    }
  };
  tick();

  // ---------- Animated stat counters ----------
  const counters = document.querySelectorAll('.stat-number');
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const duration = 1400;
        const start = performance.now();

        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(target * eased);
          if (progress < 1) requestAnimationFrame(animate);
          else el.textContent = target;
        };
        requestAnimationFrame(animate);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => counterObserver.observe(c));

  // ---------- Active section highlight in nav ----------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const highlight = () => {
    const scrollY = window.scrollY + 120;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((l) => {
          l.style.color = '';
          l.style.background = '';
        });
        const active = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (active) {
          active.style.color = 'var(--text)';
          active.style.background = 'var(--surface)';
        }
      }
    });
  };
  window.addEventListener('scroll', highlight, { passive: true });
})();
