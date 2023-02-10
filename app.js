let navbar = document.querySelector('.nav');
let home = document.querySelector('.home');
let about = document.querySelector('.about');
let structure = document.querySelector('.structure');
let impact = document.querySelector('.impact');
let contact = document.querySelector('.contact');


function toggelnav(){
    if(navbar.style.display === 'block'){
        navbar.style.display = 'none'
    }
    else{
        navbar.style.display = 'block';
    }   
}
function colorChecked(){
    home.style.color = '#ffffff';
}
home.addEventListener('click', function (){
    this.style.color = '#ffffff';
    about.style.color = '#857B8B';
    structure.style.color = '#857B8B';
    impact.style.color = '#857B8B';
    contact.style.color = '#857B8B';
});
about.addEventListener('click', function (){
    this.style.color = '#ffffff';
    home.style.color = '#857B8B';
    structure.style.color = '#857B8B';
    impact.style.color = '#857B8B';
    contact.style.color = '#857B8B';
});
structure.addEventListener('click', function (){
    this.style.color = '#ffffff';
    home.style.color = '#857B8B';
    about.style.color = '#857B8B';
    impact.style.color = '#857B8B';
    contact.style.color = '#857B8B';
});
impact.addEventListener('click', function (){
    this.style.color = '#ffffff';
    home.style.color = '#857B8B';
    about.style.color = '#857B8B';
    structure.style.color = '#857B8B';
    contact.style.color = '#857B8B';
});
contact.addEventListener('click', function (){
    this.style.color = '#ffffff';
    home.style.color = '#857B8B';
    about.style.color = '#857B8B';
    structure.style.color = '#857B8B';
    impact.style.color = '#857B8B';
});