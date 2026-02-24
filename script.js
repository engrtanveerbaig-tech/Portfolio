// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});
});
});

// Scroll Reveal
const reveals = document.querySelectorAll(".panel, .project-card, .column");

window.addEventListener("scroll",()=>{
reveals.forEach(el=>{
const top = el.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if(top < windowHeight - 100){
el.classList.add("active");
el.classList.add("reveal");
}
});
});

// Animate Skill Bars
const skills = document.querySelectorAll(".bar div");

window.addEventListener("scroll",()=>{
skills.forEach(skill=>{
const top = skill.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
skill.style.width = skill.getAttribute("style").replace("width:","");
}
});
});

// Active Navbar Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{
let current = "";

sections.forEach(section=>{
const sectionTop = section.offsetTop;
if(pageYOffset >= sectionTop - 200){
current = section.getAttribute("id");
}
});

navLinks.forEach(link=>{
link.classList.remove("active");
if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}
});
});

// Parallax Hero
window.addEventListener("scroll",()=>{
const hero = document.querySelector(".hero");
let offset = window.pageYOffset;
hero.style.backgroundPositionY = offset * 0.5 + "px";
});
// Smooth Fade Reveal on Scroll
const faders = document.querySelectorAll(".fade-section");

const appearOptions = {
threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
entries.forEach(entry=>{
if(!entry.isIntersecting){
return;
}else{
entry.target.classList.add("show");
observer.unobserve(entry.target);
}
});
}, appearOptions);

faders.forEach(fader=>{
appearOnScroll.observe(fader);
});