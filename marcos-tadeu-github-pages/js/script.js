const phone = "5519988742048";
const message = "Olá, gostaria de saber mais";
const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

document.querySelectorAll(".whatsapp-link").forEach(link => {
  link.href = whatsappUrl;
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
