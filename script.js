// Mobile nav toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
  });

  // Smooth scrolling and active link highlight
  const links = document.querySelectorAll('nav ul.nav-links a');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetID = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetID);
      if(targetSection){
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
      // Close mobile menu on link click if open
      if(navLinks.classList.contains('open')){
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
      }
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Contact form validation and simple submission handler
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if(form.checkValidity()){
      alert('Thank you for your message, I will get back to you soon!');
      form.reset();
    } else {
      alert('Please fill out the form correctly.🤷‍♂️🤷‍♂️');
    }
  });

  // Reveal animation using Intersection Observer
  const sections = document.querySelectorAll('main section');
  const observerOptions = {
    threshold: 0.15
  };
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    revealObserver.observe(section);
  });