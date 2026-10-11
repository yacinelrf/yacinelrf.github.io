/* ===========================
   HAMBURGER MENU
=========================== */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.querySelector('i').classList.toggle('fa-bars');
  hamburger.querySelector('i').classList.toggle('fa-times');
});

// Fermer le menu au clic sur un lien
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.querySelector('i').classList.add('fa-bars');
    hamburger.querySelector('i').classList.remove('fa-times');
  });
});

/* ===========================
   PARALLAX HERO BG
=========================== */
const bg = document.getElementById('bg');
window.addEventListener('scroll', () => {
  if (bg) bg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
});

/* ===========================
   SCROLL REVEAL SECTIONS
=========================== */
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(s => observer.observe(s));

/* ===========================
   SKILL BAR ANIMATION
=========================== */
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.bar-fill').forEach(bar => {
        bar.classList.add('animated');
      });
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-panel').forEach(el => barObserver.observe(el));

/* ===========================
   PROJECT FILTER
=========================== */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.dataset.category;

    projectCards.forEach(card => {
      if (category === 'All' || card.dataset.category === category) {
        card.style.display = 'block';
        card.style.animation = 'fadeUp 0.4s ease both';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

/* ===========================
   LIGHTBOX (CERTIFICATIONS)
=========================== */
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lb-img');
const lbClose   = document.getElementById('lb-close');

document.querySelectorAll('.cert-img').forEach(img => {
  img.addEventListener('click', () => {
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

lbClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

/* ===========================
   ACTIVE NAV LINK ON SCROLL
=========================== */
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--accent)';
    }
  });
});
