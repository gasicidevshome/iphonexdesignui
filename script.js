let screen = document.getElementById('screen');
let on = document.getElementById('on');
let off = document.getElementById('off');
let logo = document.getElementById('logo');
let tim = document.querySelector('.time1');
let time = document.querySelector('.time');
let info = document.querySelector('.info');
let s_info = document.querySelector('.show_info');
let pourcentt = document.querySelector('.prc1');
let pourcent = document.querySelector('.prc');
let win = document.querySelector('.window');
let back = document.querySelector('.back');

//Afficher l'heure 
// Créer un nouvel objet Date
let date = new Date();

// Obtenir l'heure actuelle
let hours = date.getHours();
let minutes = date.getMinutes();
tim.innerText=(hours + ":" + minutes);
time.innerText=(hours + ":" + minutes);

// Afficher pourcentage 
navigator.getBattery().then(function(battery){
    let batteryCalc = battery.level * 100 + '%';
   // pourcentage.style.with = batteryCalc;
    pourcentt.innerText = batteryCalc;
    pourcent.innerText = batteryCalc;

})

//Allumage 
on.onclick = function(){
    screen.style.display = "block"
    logo.style.width = "0";
    logo.style.height = "0";
    tim.style.display = "none";
    pourcentt.style.display = "none";
}

//extinction 
off.onclick = function(){
    screen.style.display = "none";
    logo.style.width = "100%";p
    logo.style.height = "100%"; 
    tim.style.display = "inline";
    pourcentt.style.display = "inline";
}

info.onclick = function(){
    let nav = "Navigateur : " + navigator.userAgent;
    let os = "Système d'exploitation : " + navigator.platform;
    let lang = "Langue du navigateur : " + navigator.language;
    let width = "Largeur de l'écran : " + window.screen.width;
    let height = "Hauteur de l'écran : " + window.screen.height;
    let color = "Profondeur de couleur de l'écran : " + window.screen.colorDepth;
    let coockies = "Cookies activés : " + navigator.cookieEnabled;
    let connexion = "Type de connexion : " + navigator.connection.type;
    
    let informations = nav + "\n"+ "\n" + os + "\n"+ "\n" + lang + "\n"+ "\n" +  width + "\n"+ "\n" + height + "\n"+ "\n" + color + "\n"+ "\n" + coockies + "\n"+ "\n" + connexion;
    s_info.innerText = informations;
    
    screen.style.display = "none";
    win.style.display = "block";

}

back.onclick = function(){
    screen.style.display = "block";
    win.style.display = "none";

}