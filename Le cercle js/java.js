let monCarre = document.getElementById("monCarre");
let boutons = document.querySelectorAll("button");

boutons.forEach(function(bouton) {
  bouton.addEventListener("click", function() {
    let radius = this.getAttribute("border-radius");
    monCarre.style.borderRadius = radius + "px";
    
    monCarre.classList.add("cercle");
    
    setTimeout(function() {
      monCarre.classList.remove("cercle");
      monCarre.style.borderRadius = "10px"; 
    }, 1500); 
  });
});

// monCarre.addEventListener("mouseenter", function() {
//   monCarre.classList.add("cercle");
// });

// monCarre.addEventListener("mouseleave", function() {
//   monCarre.classList.remove("cercle");
// });
