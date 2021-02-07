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

  ataque(enemigo) {
    enemigo.hp -= Math.round(
      this.str - (enemigo.def / (100 + enemigo.def)) * 100
    );
  }

  critico(enemigo) {
    enemigo.hp -= Math.round(
      (this.str - (enemigo.def / (100 + enemigo.def)) * 100) * 2
    );
  }
}

// INSTANCIAS Y VARIABLES GLOBALES
let fighter0 = new Fighter("Anna", "Irlanda", 600, 60, 45, 20);
let fighter1 = new Fighter("Bryan", "EEUU", 550, 70, 55, 18);
let fighter2 = new Fighter("Eddy", "Brazil", 650, 65, 55, 23);
let fighter3 = new Fighter("Heihachi", "Japon", 700, 70, 40, 21);
let fighter4 = new Fighter("Hwoarang", "KoreaDelSur", 650, 80, 50, 35);
let fighter5 = new Fighter("Jack", "Rusia", 800, 30, 80, 33);
let fighter6 = new Fighter("Jin", "Japon", 700, 80, 50, 30);
let fighter7 = new Fighter("Julia", "EEUU", 650, 55, 50, 23);
let fighter8 = new Fighter("King", "Mexico", 700, 75, 40, 25);
let fighter9 = new Fighter("Kuma", "Japon", 800, 35, 85, 35);
let fighter10 = new Fighter("Law", "EEUU", 600, 70, 55, 22);
let fighter11 = new Fighter("Lei", "China", 600, 70, 55, 22);
let fighter12 = new Fighter("Mokujin", "Japon", 1000, 10, 100, 75);
let fighter13 = new Fighter("Nina", "Irlanda", 550, 65, 55, 27);
let fighter14 = new Fighter("Ogre", "Mexico", 750, 70, 60, 23);
let fighter15 = new Fighter("Panda", "China", 800, 35, 85, 35);
let fighter16 = new Fighter("Paul", "EEUU", 700, 80, 50, 27);
let fighter17 = new Fighter("Xiaoyu", "China", 550, 60, 60, 23);
let fighter18 = new Fighter("Yoshimitsu", "Desconocido", 950, 40, 40, 85);

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
  if (p1 == "") {
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
  } else {
    document.getElementById(
      "fighterSelP2"
    ).innerHTML = ` <img class="fighterFocus" src="img/personajes/${fighter.nombre}.png"></img> `;
    document.getElementById(
      "nacionalidad2"
    ).innerHTML = ` <img class="nacionalidadFocus" src="img/banderas/${fighter.nacionalidad}.png"></img> `;
    document.getElementById(
      "fighter2name"
    ).innerHTML = ` <p>${fighter.nombre}</p> `;
    document.getElementById("hp2").innerHTML = ` <p>HP: ${fighter.hp}</p> `;
    document.getElementById("str2").innerHTML = ` <p>STR: ${fighter.str}</p> `;
    document.getElementById("def2").innerHTML = ` <p>DEF: ${fighter.def}</p> `;
    document.getElementById(
      "luck2"
    ).innerHTML = ` <p>LUCK: ${fighter.suerte}</p> `;
  }
};

let startGame = () => {
  p1 = "";
  p2 = "";
};

let cambiaPantalla = () => {
  document.getElementById("fila1").style.visibility = "hidden";
  document.getElementById("fila2").style.visibility = "hidden";
  document.getElementById("fila3").style.visibility = "hidden";
  document.getElementById("playerStatus").style.visibility = "hidden";
};

let selectFighter = (personaje) => {
  if (p1 == "") {
    p1 = allplayers[personaje];

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
    document.getElementById(
      "fighterSelP2"
    ).innerHTML = ` <img class="fighterFocus" src="img/personajes/${p2.nombre}.png"></img> `;
    document.getElementById(
      "nacionalidad2"
    ).innerHTML = ` <img class="nacionalidadFocus" src="img/banderas/${p2.nacionalidad}.png"></img> `;
    document.getElementById("fighter2name").innerHTML = ` <p>${p2.nombre}</p> `;
    document.getElementById("hp2").innerHTML = ` <p>HP: ${p2.hp}</p> `;
    document.getElementById("str2").innerHTML = ` <p>STR: ${p2.str}</p> `;
    document.getElementById("def2").innerHTML = ` <p>DEF: ${p2.def}</p> `;
    document.getElementById("luck2").innerHTML = ` <p>LUCK: ${p2.suerte}</p> `;

    resolveIn(0).then((delay) => {
      cambiaPantalla();
      combate();
    });
  }
};

let combate = () => {
  let log = [];
  document.getElementById("log").style.visibility = "visible";
  do {
    let turno = Math.floor(Math.random() * 2);
    let gCrit = Math.floor(Math.random() * 100);

    if (turno == 0) {
      if (gCrit <= p1.suerte) {
        console.log("Golpe critico !");
        p1.critico(p2);
      } else {
        p1.ataque(p2);
      }
    } else {
      if (gCrit <= p2.suerte) {
        console.log("Golpe critico !");
        p2.critico(p1);
      } else {
        p2.ataque(p1);
      }
    }

    log.push(` <p>${p1.nombre} ${p1.hp} / ${p2.nombre} ${p2.hp}</p> `);

    document.getElementById("log").innerHTML = ` <p>${log}</p> `;

    if (p1.hp <= 0) {
      document.getElementById("result").style.visibility = "visible";
      document.getElementById(
        "result"
      ).innerHTML = ` <p>${p2.nombre} WINS !</p> `;
    }
    if (p2.hp <= 0) {
      document.getElementById("result").style.visibility = "visible";
      document.getElementById(
        "result"
      ).innerHTML = ` <p>${p1.nombre} WINS</p> `;
    }
  } while (p1.hp > 0 && p2.hp > 0);
};

// Funcion de delay

const resolveIn = (delay) =>
  new Promise((res) => setTimeout(() => res(delay), delay));
