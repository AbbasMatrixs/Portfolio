// Contact Form Validation
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
      alert('Message sent successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  });
// Smooth Scroll for Button
// function scrollToNextSection() {
//     document.getElementById("projects").scrollIntoView({ behavior: 'smooth' });
//   }
//   const reverseButton = document.getElementById('reverse-button');
//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 200) { // Show button after scrolling 200px
//       reverseButton.style.display = 'block';
//     } else {
//       reverseButton.style.display = 'none';
//     }
//   });


// Show the back-to-top button when scrolling
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) { // Show button after scrolling 200px
    backToTopButton.style.display = 'block';
  } else{
    backToTopButton.style.display = 'none';
  }
});
// Function to scroll to the top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}