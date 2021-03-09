var synth = window.speechSynthesis;

var voices = [];

var nxt = document.querySelector('#next');
var gameForm = document.querySelector('#game');

var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var btn3 = document.querySelector('#btn3');

var result = document.querySelector('#success');

var words = [
  "VY Canis Majoris",
  "UY Scuti",
  "Black Hole",
  "Cats Eye Nebula",
  "Helix Nebula",
  "Pillars of Creation",
  "Orion's Belt",
  "Proxima Centuri",
  "The Milky Way",
  "Ice Cloud",
  "Bootes void",
  "The Observable Universe",
  "Sun",
  "Sirius B",
  "Sirius A",
  "Vega",
  "Arcturus",
  "Rigel",
  "Betelgeuse",
  "Mercury",
  "Venus",
  "Earth",
  "Moon",
  "Mars",
  "Deimos",
  "Phobos",
  "Ceres",
  "Jupiter",
  "Metis",
  "Adrastea",
  "Amalthea",
  "Thebe",
  "Io",
  "Europa",
  "Ganymede",
  "Callisto",
  "Themisto",
  "Leda",
  "Himalia",
  "Lysithea",
  "Elara",
  "Carpo",
  "Euporie",
  "Orthosie",
  "Euanthe",
  "Harpalyke",
  "Praxidike",
  "Thyone",
  "Iocaste",
  "Mneme",
  "Hermippe",
  "Thelxinoe",
  "Helike",
  "Ananke",
  "Eurydome",
  "Arche",
  "Herse",
  "Pasithee",
  "Chaldene",
  "Isonoe",
  "Erinome",
  "Kale",
  "Aitne",
  "Taygete",
  "Carme",
  "Sponde",
  "Megaclite",
  "Kalyke",
  "Kore",
  "Pasiphae",
  "Eukelade",
  "Sinope",
  "Hegemone",
  "Aoede",
  "Kallichore",
  "Autonoe",
  "Callirrhoe",
  "Cyllene",
  "Saturn",
  "Tarqeq",
  "Pan",
  "Daphnis",
  "Atlas",
  "Prometheus",
  "Pandora",
  "Epimetheus",
  "Janus",
  "Aegaeon",
  "Mimas",
  "Methone",
  "Anthe",
  "Pallene",
  "Enceladus",
  "Tethys",
  "Calypso",
  "Telesto",
  "Polydeuces",
  "Dione",
  "Helene",
  "Rhea",
  "Titan",
  "Hyperion",
  "Iapetus",
  "Kiviuq",
  "Ijiraq",
  "Phoebe",
  "Paaliaq",
  "Skathi",
  "Albiorix",
  "Bebhionn",
  "Erriapo",
  "Siarnaq",
  "Skoll",
  "Tarvos",
  "Greip",
  "Hyrrokkin",
  "Mundilfari",
  "Jarnsaxa",
  "Narvi",
  "Bergelmir",
  "Suttungr",
  "Hati",
  "Bestla",
  "Farbauti",
  "Thrymr",
  "Aegir",
  "Kari",
  "Fenrir",
  "Surtur",
  "Ymir",
  "Loge",
  "Fornjot",
  "Uranus",
  "Cordelia",
  "Ophelia",
  "Bianca",
  "Cressida",
  "Desdemona",
  "Juliet",
  "Portia",
  "Rosalind",
  "Cupid",
  "Belinda",
  "Perdita",
  "Puck",
  "Mab",
  "Miranda",
  "Ariel",
  "Umbriel",
  "Titania",
  "Oberon",
  "Francisco",
  "Caliban",
  "Stephano",
  "Trinculo",
  "Sycorax",
  "Margaret",
  "Prospero",
  "Setebos",
  "Ferdinand",
  "Neptune",
  "Naiad",
  "Thalassa",
  "Despina",
  "Galatea",
  "Larissa",
  "Proteus",
  "Triton",
  "Nereid",
  "Halimede",
  "Sao",
  "Laomedeia",
  "Psamathe",
  "Neso",
  "Pluto",
  "Charon",
  "Styx",
  "Nix",
  "Kerberos",
  "Hydra",
  "Haumea",
  "Namaka",
  "Hi'iaka",
  "Makemake",
  "Eris",
  "Dysnomia",
];

function populateVoiceList() {
  voices = synth.getVoices().sort(function (a, b) {
      const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
      if ( aname < bname ) return -1;
      else if ( aname == bname ) return 0;
      else return +1;
  });
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speak(words){
  if (synth.speaking) {
    console.error('speechSynthesis.speaking');
    return;
  }
  if (words !== '') {
    var utterThis = new SpeechSynthesisUtterance(words);
    utterThis.onend = function (event) {
      console.log('SpeechSynthesisUtterance.onend');
    }
    utterThis.onerror = function (event) {
      console.error('SpeechSynthesisUtterance.onerror');
    }
    utterThis.voice = voices[26];
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
  }
}

var word = "";

gameForm.onsubmit = function(event) {
  event.preventDefault();
  start();
}

function start(){
  var randomItem = words[Math.floor(Math.random()*words.length)];

  result.innerHTML = "";
  btn1.classList.remove("btn-success");
  btn1.classList.remove("btn-danger");
  btn2.classList.remove("btn-success");
  btn2.classList.remove("btn-danger");
  btn3.classList.remove("btn-success");
  btn3.classList.remove("btn-danger");

  btn1.innerHTML = words[Math.floor(Math.random()*words.length)];
  btn2.innerHTML = words[Math.floor(Math.random()*words.length)];
  btn3.innerHTML = words[Math.floor(Math.random()*words.length)];

  var btns = [btn1, btn2, btn3];
  var btn = btns[Math.floor(Math.random()*btns.length)];

  speak(btn.innerHTML);
  word = btn.innerHTML;
}

btn1.onclick = function(){
  check_button(btn1);
}

btn2.onclick = function(){
  check_button(btn2);
}

btn3.onclick = function(){
  check_button(btn3);
}

function check_button(btn){
  if (btn.innerHTML == word){
    result.innerHTML = "Success!";
    btn.classList.add("btn-success");
  } else {
    btn.classList.add("btn-danger");
    result.innerHTML = "Try again!";
  }
}
