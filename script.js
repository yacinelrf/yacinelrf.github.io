// script.js

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. Hamburger menu ── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

  /* ── 2. Smooth scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.getElementById(link.getAttribute('href').slice(1));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('open');
      }
    });
  });

  /* ── 3. Parallax hero ── */
  const bg = document.getElementById('bg');
  window.addEventListener('scroll', () => {
    if (bg) bg.style.transform = `translateY(${window.scrollY * 0.4}px)`;
  }, { passive: true });

  /* ── 4. Section fade-in ── */
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  document.querySelectorAll('section').forEach(sec => io.observe(sec));

  /* ── 5. Skill bars animation ── */
  const barObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.bar-fill').forEach(fill => {
          fill.classList.add('animated');
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const skillsPanel = document.querySelector('.skills-panel');
  if (skillsPanel) barObserver.observe(skillsPanel);

  /* ── 6. Project filtering ── */
  const filterBtns   = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.category;
      projectCards.forEach(card => {
        const show = cat === 'All' || card.dataset.category === cat;
        card.style.display = show ? '' : 'none';
      });
    });
  });

  /* ── 7. Lightbox (projects + certs) ── */
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lb-img');
  const lbClose  = document.getElementById('lb-close');

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lightbox.classList.add('open');
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    setTimeout(() => { lbImg.src = ''; }, 300);
  }

  document.querySelectorAll('.project-card .card-img img, .cert-img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });

  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
});
