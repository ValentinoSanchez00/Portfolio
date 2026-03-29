// Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay ? el.dataset.delay * 100 : 0;
        setTimeout(() => el.classList.add('visible'), delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.timeline-item, .skill-card, .edu-card, .cert-card').forEach(el => observer.observe(el));