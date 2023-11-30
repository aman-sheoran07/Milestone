// Any JavaScript functionality can be added here if needed
// For example, smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Calculate figures
const TAM = 100 * (20 / 100);
const SAM = TAM * (30 / 100);
const SOM = SAM * (5 / 100);

// Display results
document.addEventListener("DOMContentLoaded", function() {
  const figureItems = document.querySelectorAll('.figure-item');
  
  figureItems[0].innerHTML += `<p>TAM = $${TAM.toFixed(2)} billion</p>`;
  figureItems[1].innerHTML += `<p>SAM = $${SAM.toFixed(2)} billion</p>`;
  figureItems[2].innerHTML += `<p>SOM = $${SOM.toFixed(2)} million</p>`;
});
