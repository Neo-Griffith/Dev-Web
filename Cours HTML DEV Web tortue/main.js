console.log('Hello World!');

let date1 = new Date();

let jourSemaine = date1.getDay();
let jourMois = date1.getDate();
let mois = date1.getMonth();
let annee = date1.getFullYear();
let heures = date1.getHours();
let heuresUTC = date1.getUTCHours();
let minutes = date1.getMinutes();
let secondes = date1.getSeconds();
let ms = date1.getMilliseconds();

document.getElementById('p1').innerHTML =
  'Date : ' + date1 +
  '<br>Jour de la semaine : ' + jourSemaine +
  '<br>Jour du mois : ' + jourMois +
  '<br>Numéro du mois : ' + mois +
  '<br>Année : ' + annee +
  '<br>Heures : ' + heures + ' (heure UTC : ' + heuresUTC + ')' +
  '<br>Minutes : ' + minutes +
  '<br>Secondes : ' + secondes +
  '<br>Millisecondes : ' + ms;
  
  