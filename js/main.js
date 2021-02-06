// CLASES
class Fighter {
  constructor(nombre, nacionalidad, hp, str, def, suerte) {
    this.nombre = nombre;
    this.nacionalidad = nacionalidad;
    this.hp = hp;
    this.str = str;
    this.def = def;
    this.suerte = suerte;
  }
}

// INSTANCIAS Y VARIABLES GLOBALES
let fighter0 = new Fighter("Anna", "Irlanda", 600, 50, 45, 2);
let fighter1 = new Fighter("Bryan", "EEUU", 550, 65, 50, 2);
let fighter2 = new Fighter("Eddy", "Brazil", 650, 65, 55, 4);
let fighter3 = new Fighter("Heihachi", "Japon", 700, 75, 50, 2);
let fighter4 = new Fighter("Hwoarang", "KoreaDelSur", 650, 80, 60, 3);
let fighter5 = new Fighter("Jack", "Rusia", 800, 30, 80, 2);
let fighter6 = new Fighter("Jin", "Japon", 700, 80, 50, 3);
let fighter7 = new Fighter("Julia", "EEUU", 650, 45, 50, 2);
let fighter8 = new Fighter("King", "Mexico", 700, 75, 40, 2);
let fighter9 = new Fighter("Kuma", "Japon", 800, 30, 85, 3);
let fighter10 = new Fighter("Law", "EEUU", 600, 70, 55, 2);
let fighter11 = new Fighter("Lei", "China", 600, 70, 55, 2);
let fighter12 = new Fighter("Mokujin", "Japon", 1000, 10, 100, 5);
let fighter13 = new Fighter("Nina", "Irlanda", 550, 55, 50, 2);
let fighter14 = new Fighter("Ogre", "Mexico", 750, 70, 60, 2);
let fighter15 = new Fighter("Panda", "China", 800, 30, 85, 3);
let fighter16 = new Fighter("Paul", "EEUU", 700, 80, 50, 3);
let fighter17 = new Fighter("Xiaoyu", "China", 550, 60, 60, 2);
let fighter18 = new Fighter("Yoshimitsu", "Desconocido", 900, 40, 25, 8);

let allFighter = [
  "Anna",
  "Bryan",
  "Eddy",
  "Heihachi",
  "Hwoarang",
  "Jack",
  "Jin",
  "Julia",
  "King",
  "Kuma",
  "Law",
  "Lei",
  "Mokujin",
  "Nina",
  "Ogre",
  "Panda",
  "Paul",
  "Xiaoyu",
  "Yoshimitsu",
];

let p1 = "";
let p2 = "";

// TRADUCTOR
let allplayers = {
  Anna: fighter0,
  Bryan: fighter1,
  Eddy: fighter2,
  Heihachi: fighter3,
  Hwoarang: fighter4,
  Jack: fighter5,
  Jin: fighter6,
  Julia: fighter7,
  King: fighter8,
  Kuma: fighter9,
  Law: fighter10,
  Lei: fighter11,
  Mokujin: fighter12,
  Nina: fighter13,
  Ogre: fighter14,
  Panda: fighter15,
  Paul: fighter16,
  Xiaoyu: fighter17,
  Yoshimitsu: fighter18,
};

// FUNCIONES

let RellenarStats = (fighter) => {
  document.getElementById(
    "fighterSelP1"
  ).innerHTML = ` <img class="fighterFocus" src="img/personajes/${fighter.nombre}.png"></img> `;
  document.getElementById(
    "nacionalidad"
  ).innerHTML = ` <img class="nacionalidadFocus" src="img/banderas/${fighter.nacionalidad}.png"></img> `;
  document.getElementById(
    "fighter1name"
  ).innerHTML = ` <p>${fighter.nombre}</p> `;
  document.getElementById("hp").innerHTML = ` <p>HP: ${fighter.hp}</p> `;
  document.getElementById("str").innerHTML = ` <p>STR: ${fighter.str}</p> `;
  document.getElementById("def").innerHTML = ` <p>DEF: ${fighter.def}</p> `;
  document.getElementById(
    "luck"
  ).innerHTML = ` <p>LUCK: ${fighter.suerte}</p> `;
};

ataque = (enemigo) => {
  enemigo.hp -= this.str - ((enemigo.def / (100 + enemigo.def))*100);
};

critico = (enemigo) => {
    enemigo.hp -= (this.str - ((enemigo.def / (100 + enemigo.def))*100)) * 2;
};

let startGame = () => {
  p1 = "";
  p2 = "";
};

let cambiaPantalla = (faseAhora, faseFutura) => {
  let pantallaActual = document.getElementById(faseAhora);
  let pantallaDestino = document.getElementById(faseFutura);

  pantallaActual.style.display = "none";
  pantallaDestino.style.display = "block";
};

let selectFighter = (personaje) => {
  if (p1 == "") {
    p1 = allplayers[personaje];
    console.log(p1);
    document.getElementById(personaje).className = "avatarSel";
    document.getElementById(personaje).className = "marcoSel";
    document.getElementById(personaje).onclick = "";
    document.getElementById(
      "fighterSelP1"
    ).innerHTML = ` <img class="fighterFocus" src="img/personajes/${p1.nombre}.png"></img> `;
    document.getElementById(
      "nacionalidad"
    ).innerHTML = ` <img class="nacionalidadFocus" src="img/banderas/${p1.nacionalidad}.png"></img> `;
    document.getElementById("fighter1name").innerHTML = ` <p>${p1.nombre}</p> `;
    document.getElementById("hp").innerHTML = ` <p>HP: ${p1.hp}</p> `;
    document.getElementById("str").innerHTML = ` <p>STR: ${p1.str}</p> `;
    document.getElementById("def").innerHTML = ` <p>DEF: ${p1.def}</p> `;
    document.getElementById("luck").innerHTML = ` <p>LUCK: ${p1.suerte}</p> `;
  } else {
    p2 = allplayers[personaje];
    document.getElementById(personaje).className = "avatarSel";
    document.getElementById(personaje).className = "marcoSel";
    document.getElementById(personaje).onclick = "";
  }
};
