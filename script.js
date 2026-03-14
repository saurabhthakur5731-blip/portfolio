alert("welcome to my portfolio website!");

document.querySelector(".logo").addEventListener
("click", function(){
    alert("logo clicked");
});
document.querySelectorAll(".menu a").forEach(function(link){
  link.addEventListener("click", function(e){
    e.preventDefault();

    let target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});
const words = ["Web Developer", "Frontend Developer", "Freelancer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect(){

  currentWord = words[i];

  if(isDeleting){
    document.getElementById("typing").textContent = currentWord.substring(0,j--);
  } else {
    document.getElementById("typing").textContent = currentWord.substring(0,j++);
  }

  if(!isDeleting && j === currentWord.length){
    isDeleting = true;
    setTimeout(typeEffect,1000);
    return;
  }

  if(isDeleting && j === 0){
    isDeleting = false;
    i++;
    if(i === words.length){
      i = 0;
    }
  }

  setTimeout(typeEffect,150);
}
/* Navbar Scroll Effect */
window.addEventListener("scroll", function(){

let navbar = document.querySelector(".navbar");

if(window.scrollY > 50){
navbar.classList.add("scrolled");
}
else{
navbar.classList.remove("scrolled");
}

});


/* Typing Effect */

const text = ["Frontend Developer","Web Designer","Freelancer"];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
}

setTimeout(type,150);

})();

// Scroll Reveal Animation

ScrollReveal({
distance: "60px",
duration: 2000,
delay: 200,
reset: false
});

ScrollReveal().reveal(".hero-content", {origin: "left"});
ScrollReveal().reveal(".hero-image", {origin: "right"});
ScrollReveal().reveal(".about", {origin: "bottom"});
ScrollReveal().reveal(".skills-container", {origin: "bottom"});
ScrollReveal().reveal(".projects", {origin: "bottom"});
ScrollReveal().reveal(".contact", {origin: "bottom"});

const skills = document.querySelectorAll(".progress");



window.addEventListener("scroll", function(){

let skills = document.querySelector(".skills");

let position = skills.getBoundingClientRect().top;

let screenPosition = window.innerHeight / 1.3;

if(position < screenPosition){

document.querySelector(".html").style.width="90%";
document.querySelector(".css").style.width="85%";
document.querySelector(".js").style.width="80%";

}

});

function toggleMenu(){
document.getElementById("menu").classList.toggle("active");
}

/* menu link click → menu close */

let links = document.querySelectorAll(".menu a");

links.forEach(link => {
link.addEventListener("click", function(){
document.getElementById("menu").classList.remove("active");
});
});



document.addEventListener("click", function(e){

let menu = document.getElementById("menu");
let icon = document.querySelector(".menu-icon");

if(!menu.contains(e.target) && !icon.contains(e.target)){
menu.classList.remove("active");
}

});