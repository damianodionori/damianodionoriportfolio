// Animazione delle progress bar
document.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress');
  
  const animateProgressBars = () => {
    progressBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = width;
      }, 200);
    });
  };

  // Anima le progress bar quando la sezione skills è visibile
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateProgressBars();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const skillsSection = document.querySelector('.skills');
  if (skillsSection) {
    observer.observe(skillsSection);
  }
});

// Gestione del form di contatto
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simula l'invio del form
    contactForm.style.display = 'none';
    successMessage.style.display = 'block';
    
    // Resetta il form dopo 5 secondi
    setTimeout(() => {
      contactForm.reset();
      contactForm.style.display = 'block';
      successMessage.style.display = 'none';
    }, 5000);
  });
}

// Smooth scroll per i link della navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    navbar.style.boxShadow = 'none';
  } else {
    navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  }
  
  lastScroll = currentScroll;
});
