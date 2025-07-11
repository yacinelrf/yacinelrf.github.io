// script.js

document.addEventListener('DOMContentLoaded', () => {
    /*==============================
      1. Toggle menu hamburger
    ==============================*/
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('nav-links');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  
    /*==============================
      2. Smooth scrolling pour ancres
    ==============================*/
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const targetId = link.getAttribute('href').slice(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
          // Fermer le menu mobile si ouvert
          if (navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
          }
        }
      });
    });
  
    /*==============================
      3. Parallax du hero background
    ==============================*/
    const bg = document.getElementById('bg');
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      // On déplace l'image un peu plus lentement
      bg.style.transform = `translateY(${scrollY * 0.5}px)`;
    });
  
    /*==============================
      4. Fade-in des sections
    ==============================*/
    const sections = document.querySelectorAll('section, header.hero');
    const ioOptions = { rootMargin: '0px 0px -10% 0px', threshold: 0.1 };
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, ioOptions);
    sections.forEach(sec => io.observe(sec));
  
    /*==============================
      5. Highlight nav link actif
    ==============================*/
    const navItems = document.querySelectorAll('.nav-links li a');
    const sectionMap = Array.from(navItems).reduce((map, a) => {
      const href = a.getAttribute('href');
      if (href.startsWith('#')) map[href.slice(1)] = a;
      return map;
    }, {});
    const navObserver = new IntersectionObserver((ents) => {
      ents.forEach(ent => {
        const id = ent.target.id;
        if (sectionMap[id]) {
          sectionMap[id].classList.toggle('active', ent.isIntersecting);
        }
      });
    }, { threshold: 0.6 });
    Object.keys(sectionMap).forEach(id => {
      const sec = document.getElementById(id);
      if (sec) navObserver.observe(sec);
    });
  
    /*==============================
      6. Lazy-loading d’images
    ==============================*/
    const lazyImgs = document.querySelectorAll('img[data-src]');
    const imgObserver = new IntersectionObserver((ents, obsImg) => {
      ents.forEach(ent => {
        if (ent.isIntersecting) {
          const img = ent.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          obsImg.unobserve(img);
        }
      });
    }, { rootMargin: '50px', threshold: 0.01 });
    lazyImgs.forEach(img => imgObserver.observe(img));
  
    /*==============================
      7. Lightbox pour projets
    ==============================*/
    // Création de la lightbox
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    Object.assign(lightbox.style, {
      position: 'fixed', top: 0, left: 0,
      width: '100%', height: '100%',
      background: 'rgba(0,0,0,0.8)',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      opacity: 0, visibility: 'hidden', transition: 'opacity 0.3s ease'
    });
    document.body.appendChild(lightbox);
  
    lightbox.addEventListener('click', () => {
      lightbox.style.opacity = '0';
      lightbox.style.visibility = 'hidden';
      lightbox.innerHTML = '';
    });
  
    document.querySelectorAll('.project-grid img').forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => {
        const clone = img.cloneNode();
        clone.style.maxWidth = '90%';
        clone.style.maxHeight = '90%';
        clone.style.boxShadow = '0 0 20px rgba(255,255,255,0.5)';
        lightbox.appendChild(clone);
        lightbox.style.visibility = 'visible';
        lightbox.style.opacity = '1';
      });
    });
  });
  const filterButtons = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll(".project-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Bouton actif
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.category;

    projectItems.forEach(item => {
      const itemCategory = item.dataset.category;
      if (category === "All" || category === itemCategory) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
