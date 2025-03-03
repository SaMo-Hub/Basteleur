// const container = document.querySelector(".letter-container");
// const alphabet = "AÁĂǍÂÄÀĀĄÅÃÆBCCCCĆČÇĊDÐĎĐEÉĚÊËĖÈĒĘFGĞĢĠHĦIÍǏÎÏİÌĪĮJKĶLĹĽĻŁMNŃŇŅŊÑOÓǑÔÖÒŐŌØÕŒPÞQRŔŘŖSŚŠŞȘTŦŤŢȚUÚǓÛÜǗǙǛǕÙŰŪŲŮVWẂŴẄẀXYZÝŶŸỲZŹŽŻaáăǎâäàāąåãæbcćčçċdðďdeéěêëėèēęfgğģġhħiıíǐîïìīįjkķlĺľļłmnbńňņŋñoóǒôöòőōøõœpþqrŕřŗsśšşșßtŧťţțuúǔûüǘǚǜǖùűūųůvwẃŵẅẁxyýŷÿỳzźžżfiflªº0123456789¹²³⁄.,:;…¡¿·•#/(){}[]-–—_‚„“”‘’«»‹›»’¢$€ƒ£¥+−×÷=≠><≥≤±≈~¬^∞%‰☀★☆☽☾♠♡♢♣♤♥♦♧✦✧✫✬✶✷✹@&¶§©°|¦†‡".split("");

// function createLetter() {
//   const letter = document.createElement("div");
//   letter.classList.add("letter");
//   letter.textContent = alphabet[Math.floor(Math.random() * alphabet.length)];

//   // Position aléatoire en hauteur
//   let startY = Math.random() * window.innerHeight;
//   let startX = -150; // Commence hors de l'écran à gauche
//   let endX = window.innerWidth + 50; // Sort par la droite
//   // let duration = 2 + Math.random() * 3; // Entre 2s et 5s
//   let amplitude = (Math.random() * 1000) - 500; // Génère un nombre entre -500 et 500
//   console.log(amplitude);
  
//   // letter.style.top = `${startY}px`;
//   letter.style.left = `${startX}px`;

//   container.appendChild(letter);

//   // Animation avec GSAP
//   gsap.to(letter, {
//     x: endX,
//     y: `+=${amplitude}`, // Ajoute un mouvement vertical aléatoire
//     opacity: 1,
//     duration: 3,
//     ease: "power3.inOut",
//     onComplete: () => letter.remove(), // Supprime la lettre une fois hors écran
//   });
// }

// // Générer des lettres toutes les 200ms
// setInterval(createLetter, 90);


const el = document.querySelector(".card");
const wrap = document.querySelector(".card__wrapper");
let w = el.clientWidth;
let h = el.clientHeight;
let b = el.getBoundingClientRect();
console.log('gfgdgfd');

el.addEventListener("mousemove", (e) => {
  
  let X = (e.clientX - b.left) / w;
  let Y = (e.clientY - b.top) / h;
  // Calcul de la rotation en fonction de la souris
  let rX = -(X - 0.5) * 26; // Rotation sur l'axe X
  let rY = (Y - 0.5) * 26;  // Rotation sur l'axe Y

  // Calcul de la position du background pour un effet de parallaxe
  let bgX = 40 + 20 * X;
  let bgY = 40 + 20 * Y;

  // Mise à jour des variables CSS
  document.documentElement.style.setProperty("--x", 100 * X + "%");
  document.documentElement.style.setProperty("--y", 100 * Y + "%");

  document.documentElement.style.setProperty("--bg-x", bgX + "%");
  document.documentElement.style.setProperty("--bg-y", bgY + "%");

  document.documentElement.style.setProperty("--r-x", rX + "deg");
  document.documentElement.style.setProperty("--r-y", rY + "deg");
});
