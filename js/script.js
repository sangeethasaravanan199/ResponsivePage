// 🌐 Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// 📩 Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
  const name = document.querySelector('input[type="text"]').value.trim();
  const email = document.querySelector('input[type="email"]').value.trim();
  const message = document.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    alert("தயவுசெய்து எல்லா புலங்களையும் நிரப்புங்கள்.");
    e.preventDefault();
  } else {
    alert("உங்கள் செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!");
  }
});

// 🌙 Light/Dark Mode Toggle
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});