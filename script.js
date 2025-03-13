const lenis = new Lenis({
  autoRaf: true,
});
function getUrlParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Récupérer l'ID
const id = getUrlParam("id");

// Afficher l'ID (ou l'utiliser pour autre chose)
console.log("ID reçu :", id);
// Listen for the scroll event and log the event data

const glyphs = [
  // ... (les glyphes précédents sont déjà inclus ci-dessus)
  {
    glyph: "Á",
    description:
      "Une structure équilibrée avec une panse occupant trois quarts de l'espace, surmontée d'un accent aigu qui ajoute une élégance visuelle.",
  },
  {
    glyph: "À",
    description:
      "Une structure équilibrée avec une panse occupant trois quarts de l'espace, accompagnée d'un accent grave qui renforce son ancrage visuel.",
  },
  {
    glyph: "Â",
    description:
      "Une structure équilibrée avec une panse occupant trois quarts de l'espace, marquée par un accent circonflexe qui ajoute une dimension supplémentaire.",
  },
  {
    glyph: "Ä",
    description:
      "Une structure équilibrée avec une panse occupant trois quarts de l'espace, ornée d'un tréma qui apporte une touche de distinction.",
  },
  {
    glyph: "Å",
    description:
      "Une structure équilibrée avec une panse occupant trois quarts de l'espace, surmontée d'un anneau qui lui confère une identité unique.",
  },
  {
    glyph: "Ã",
    description:
      "Une structure équilibrée avec une panse occupant trois quarts de l'espace, accompagnée d'un tilde qui ajoute une fluidité visuelle.",
  },
  {
    glyph: "Æ",
    description:
      "Une ligature majestueuse combinant les formes de A et E, avec une panse oblique qui crée une harmonie visuelle.",
  },
  {
    glyph: "B",
    description:
      "Un hampe vertical robuste, accompagné d'une panse oblique comprenant deux niveaux de la lettre. Des empattements triangulaires marquent la base et le sommet, renforçant son ancrage visuel.",
  },
  {
    glyph: "C",
    description:
      "Une ouverture marquée, soulignée par un empattement triangulaire en haut. Sa base légèrement incurvée rappelle un croissant de lune, ajoutant une dynamique subtile à sa forme.",
  },
  {
    glyph: "Ç",
    description:
      "Une ouverture marquée, soulignée par un empattement triangulaire en haut, accompagnée d'une cédille qui ajoute une touche distinctive.",
  },
  {
    glyph: "D",
    description:
      "Un hampe droit et stable, associé à une panse occupant deux niveaux de la hauteur. Un empattement triangulaire accentue la structure, lui donnant une assise visuelle marquée.",
  },
  {
    glyph: "Ð",
    description:
      "Un hampe droit et stable, associé à une panse occupant deux niveaux de la hauteur, avec une barre transversale qui renforce sa présence.",
  },
  {
    glyph: "E",
    description:
      "Un œil occupant un tiers de l'espace intérieur, favorisant un bon équilibre. L'empattement supérieur triangulaire renforce sa stabilité tout en ajoutant un caractère distinctif.",
  },
  {
    glyph: "É",
    description:
      "Un œil occupant un tiers de l'espace intérieur, surmonté d'un accent aigu qui ajoute une élégance visuelle.",
  },
  {
    glyph: "È",
    description:
      "Un œil occupant un tiers de l'espace intérieur, accompagné d'un accent grave qui renforce son ancrage visuel.",
  },
  {
    glyph: "Ê",
    description:
      "Un œil occupant un tiers de l'espace intérieur, marqué par un accent circonflexe qui ajoute une dimension supplémentaire.",
  },
  {
    glyph: "Ë",
    description:
      "Un œil occupant un tiers de l'espace intérieur, orné d'un tréma qui apporte une touche de distinction.",
  },
  {
    glyph: "F",
    description:
      "Un hampe vertical avec un empattement triangulaire en bas et une barre supérieure légèrement irrégulière, apportant un contraste subtil entre rigueur et fluidité.",
  },
  {
    glyph: "G",
    description:
      "Une panse oblique marquée et un jambage descendant, apportant une dynamique unique. L'ouverture est légèrement inclinée, influençant le mouvement perçu de la lettre.",
  },
  {
    glyph: "Ğ",
    description:
      "Une panse oblique marquée et un jambage descendant, accompagnée d'un brève qui ajoute une fluidité visuelle.",
  },
  {
    glyph: "H",
    description:
      "Deux hampes solides, accompagnés de quatre empattements triangulaires, assurant un bon ancrage visuel. La traverse centrale, plus fine, établit un contraste entre épaisseur et légèreté.",
  },
  {
    glyph: "I",
    description:
      "Un hampe droit et simple, terminé par un empattement triangulaire sur la base, offrant une présence discrète mais affirmée.",
  },
  {
    glyph: "Í",
    description:
      "Un hampe droit et simple, surmonté d'un accent aigu qui ajoute une élégance visuelle.",
  },
  {
    glyph: "Ì",
    description:
      "Un hampe droit et simple, accompagné d'un accent grave qui renforce son ancrage visuel.",
  },
  {
    glyph: "Î",
    description:
      "Un hampe droit et simple, marqué par un accent circonflexe qui ajoute une dimension supplémentaire.",
  },
  {
    glyph: "Ï",
    description:
      "Un hampe droit et simple, orné d'un tréma qui apporte une touche de distinction.",
  },
  {
    glyph: "J",
    description:
      "Un hampe droit prolongé d'un jambage courbé, équilibré par un empattement triangulaire en haut. La courbure adoucit l'aspect géométrique de la lettre.",
  },
  {
    glyph: "K",
    description:
      "Un hampe droit avec deux empattements triangulaires et une diagonale montante fine, créant un contraste entre les traits verticaux et inclinés.",
  },
  {
    glyph: "L",
    description:
      "Un hampe droit avec deux empattements triangulaires. La barre inférieure fine ajoute une asymétrie qui allège la structure globale de la lettre.",
  },
  {
    glyph: "Ł",
    description:
      "Un hampe droit avec deux empattements triangulaires, accompagné d'une barre oblique qui ajoute une dynamique unique.",
  },
  {
    glyph: "M",
    description:
      "Un jeu de diagonales inégales et d'empattements triangulaires, offrant une combinaison entre solidité et mouvement. L'irrégularité en haut du 'M' ajoute une variation visuelle.",
  },
  {
    glyph: "N",
    description:
      "Un hampe fin accompagné d'une diagonale plus épaisse, créant un contraste entre les différentes parties de la lettre. Deux empattements triangulaires assurent sa stabilité.",
  },
  {
    glyph: "Ñ",
    description:
      "Un hampe fin accompagné d'une diagonale plus épaisse, surmontée d'un tilde qui ajoute une fluidité visuelle.",
  },
  {
    glyph: "O",
    description:
      "Une panse oblique qui évoque deux croissants de lune superposés, apportant une structure dynamique et fluide à la lettre.",
  },
  {
    glyph: "Ó",
    description:
      "Une panse oblique qui évoque deux croissants de lune superposés, surmontée d'un accent aigu qui ajoute une élégance visuelle.",
  },
  {
    glyph: "Ò",
    description:
      "Une panse oblique qui évoque deux croissants de lune superposés, accompagnée d'un accent grave qui renforce son ancrage visuel.",
  },
  {
    glyph: "Ô",
    description:
      "Une panse oblique qui évoque deux croissants de lune superposés, marquée par un accent circonflexe qui ajoute une dimension supplémentaire.",
  },
  {
    glyph: "Ö",
    description:
      "Une panse oblique qui évoque deux croissants de lune superposés, ornée d'un tréma qui apporte une touche de distinction.",
  },
  {
    glyph: "Ø",
    description:
      "Une panse oblique qui évoque deux croissants de lune superposés, traversée par une barre oblique qui ajoute une dynamique unique.",
  },
  {
    glyph: "Œ",
    description:
      "Une ligature majestueuse combinant les formes de O et E, avec une panse oblique qui crée une harmonie visuelle.",
  },
  {
    glyph: "P",
    description:
      "Un hampe droit avec un empattement triangulaire, accompagné d'une panse oblique et d'un œil couvrant la moitié de l'espace intérieur, créant un équilibre harmonieux.",
  },
  {
    glyph: "Q",
    description:
      "Similaire au 'O', avec une petite vague fine à la base, apportant un mouvement supplémentaire qui allège la lettre.",
  },
  {
    glyph: "R",
    description:
      "Un hampe droit avec un empattement triangulaire, une panse oblique similaire à celle du B et du P, et une diagonale fine qui contraste avec la structure principale.",
  },
  {
    glyph: "S",
    description:
      "Une courbe fluide, accentuée par des empattements triangulaires aux extrémités, créant un effet de mouvement maîtrisé.",
  },
  {
    glyph: "Š",
    description:
      "Une courbe fluide, accentuée par des empattements triangulaires aux extrémités, surmontée d'un caron qui ajoute une élégance visuelle.",
  },
  {
    glyph: "T",
    description:
      "Une hampe droite surmontée d'une barre horizontale irrégulière, renforcée par des empattements triangulaires qui rappellent le style Elzévir.",
  },
  {
    glyph: "U",
    description:
      "Une structure équilibrée avec deux hampes asymétriques, la première étant légèrement plus large, renforçant la perception de profondeur.",
  },
  {
    glyph: "Ú",
    description:
      "Une structure équilibrée avec deux hampes asymétriques, surmontée d'un accent aigu qui ajoute une élégance visuelle.",
  },
  {
    glyph: "Ù",
    description:
      "Une structure équilibrée avec deux hampes asymétriques, accompagnée d'un accent grave qui renforce son ancrage visuel.",
  },
  {
    glyph: "Û",
    description:
      "Une structure équilibrée avec deux hampes asymétriques, marquée par un accent circonflexe qui ajoute une dimension supplémentaire.",
  },
  {
    glyph: "Ü",
    description:
      "Une structure équilibrée avec deux hampes asymétriques, ornée d'un tréma qui apporte une touche de distinction.",
  },
  {
    glyph: "V",
    description:
      "Une première diagonale plus épaisse que la seconde, marquée par des empattements triangulaires aux extrémités, conférant une certaine assise.",
  },
  {
    glyph: "W",
    description:
      "Une alternance de diagonales aux épaisseurs contrastées, où la première et la troisième diagonales sont plus larges, accentuant le rythme visuel de la lettre.",
  },
  {
    glyph: "X",
    description:
      "Deux diagonales croisées, avec des empattements triangulaires en haut et en bas. La diagonale gauche est plus épaisse, créant un effet d'ancrage.",
  },
  {
    glyph: "Y",
    description:
      "Une diagonale gauche et la base plus épaisses, contrastant avec la diagonale droite plus fine. Des empattements triangulaires discrets assurent un bon équilibre visuel.",
  },
  {
    glyph: "Ý",
    description:
      "Une diagonale gauche et la base plus épaisses, surmontée d'un accent aigu qui ajoute une élégance visuelle.",
  },
  {
    glyph: "Z",
    description:
      "Une diagonale plus épaisse que les autres tracés, accompagnée d'irrégularités triangulaires à ses extrémités, évoquant la structure des Elzévirs.",
  },
  {
    glyph: "Ž",
    description:
      "Une diagonale plus épaisse que les autres tracés, surmontée d'un caron qui ajoute une élégance visuelle.",
  },

  // Lettres minuscules de base
  {
    glyph: "a",
    description:
      "Une panse occupant trois quarts de la hauteur, créant une structure équilibrée et lisible. La courbe est fluide et harmonieuse, idéale pour la continuité du texte.",
  },
  {
    glyph: "á",
    description:
      "Une panse occupant trois quarts de la hauteur, surmontée d'un accent aigu qui ajoute une élégance visuelle.",
  },
  {
    glyph: "à",
    description:
      "Une panse occupant trois quarts de la hauteur, accompagnée d'un accent grave qui renforce son ancrage visuel.",
  },
  {
    glyph: "â",
    description:
      "Une panse occupant trois quarts de la hauteur, marquée par un accent circonflexe qui ajoute une dimension supplémentaire.",
  },
  {
    glyph: "ä",
    description:
      "Une panse occupant trois quarts de la hauteur, ornée d'un tréma qui apporte une touche de distinction.",
  },
  {
    glyph: "å",
    description:
      "Une panse occupant trois quarts de la hauteur, surmontée d'un anneau qui lui confère une identité unique.",
  },
  {
    glyph: "ã",
    description:
      "Une panse occupant trois quarts de la hauteur, accompagnée d'un tilde qui ajoute une fluidité visuelle.",
  },
  {
    glyph: "æ",
    description:
      "Une ligature majestueuse combinant les formes de a et e, avec une panse oblique qui crée une harmonie visuelle.",
  },
  {
    glyph: "b",
    description:
      "Un hampe droit et marqué, surmonté d'un empattement triangulaire, avec une panse couvrant deux niveaux de la hauteur, créant une lettre stable et ancrée.",
  },
  {
    glyph: "c",
    description:
      "Une lettre semi-ouverte, où un sérif triangulaire en haut vient renforcer son identité. Sa base légèrement incurvée laisse apparaître un croissant de lune subtil.",
  },
  {
    glyph: "ç",
    description:
      "Une lettre semi-ouverte, où un sérif triangulaire en haut vient renforcer son identité, accompagnée d'une cédille qui ajoute une touche distinctive.",
  },
  {
    glyph: "d",
    description:
      "Un hampe droit avec un empattement triangulaire, accompagné d'une panse occupant deux niveaux de la hauteur, formant une structure bien équilibrée et lisible.",
  },
  {
    glyph: "ð",
    description:
      "Un hampe droit avec un empattement triangulaire, accompagné d'une barre transversale qui renforce sa présence.",
  },
  {
    glyph: "e",
    description:
      "Un œil occupé à un tiers de la lettre, influençant la perception du plein et du vide, et renforçant la dynamique de la courbe.",
  },
  {
    glyph: "é",
    description:
      "Un œil occupé à un tiers de la lettre, surmonté d'un accent aigu qui ajoute une élégance visuelle.",
  },
  {
    glyph: "è",
    description:
      "Un œil occupé à un tiers de la lettre, accompagné d'un accent grave qui renforce son ancrage visuel.",
  },
  {
    glyph: "ê",
    description:
      "Un œil occupé à un tiers de la lettre, marqué par un accent circonflexe qui ajoute une dimension supplémentaire.",
  },
  {
    glyph: "ë",
    description:
      "Un œil occupé à un tiers de la lettre, orné d'un tréma qui apporte une touche de distinction.",
  },
  {
    glyph: "f",
    description:
      "Un hampe élancé avec un empattement triangulaire à la base et un autre au bout de la barre supérieure, conférant une présence affirmée à la lettre.",
  },
  {
    glyph: "g",
    description:
      "Une panse oblique marquée, avec un jambage courbé, conférant à la lettre un mouvement naturel et une fluidité appréciable en texte continu.",
  },
  {
    glyph: "ğ",
    description:
      "Une panse oblique marquée, avec un jambage courbé, accompagnée d'un brève qui ajoute une fluidité visuelle.",
  },
  {
    glyph: "h",
    description:
      "Un hampe robuste, surmontée d'un sérif triangulaire, accompagné de deux autres empattements triangulaires à sa base, renforçant sa verticalité.",
  },
  {
    glyph: "i",
    description:
      "Une structure simple, marquée par un empattement triangulaire à la base, qui ancre la lettre et accentue son individualité.",
  },
  {
    glyph: "í",
    description:
      "Une structure simple, surmontée d'un accent aigu qui ajoute une élégance visuelle.",
  },
  {
    glyph: "ì",
    description:
      "Une structure simple, accompagnée d'un accent grave qui renforce son ancrage visuel.",
  },
  {
    glyph: "î",
    description:
      "Une structure simple, marquée par un accent circonflexe qui ajoute une dimension supplémentaire.",
  },
  {
    glyph: "ï",
    description:
      "Une structure simple, ornée d'un tréma qui apporte une touche de distinction.",
  },
  {
    glyph: "j",
    description:
      "Une hampe droite prolongée d'un jambage fluide, apportant équilibre et légèreté à la structure de la lettre.",
  },
  {
    glyph: "k",
    description:
      "Un hampe avec un empattement triangulaire à la base, complété par une diagonale haute marquée par un autre empattement, lui conférant une dynamique unique.",
  },
  {
    glyph: "l",
    description:
      "Une hampe droite et élancée, marquée par un empattement triangulaire en haut et en bas, renforçant sa verticalité et sa lisibilité.",
  },
  {
    glyph: "ł",
    description:
      "Une hampe droite et élancée, accompagnée d'une barre oblique qui ajoute une dynamique unique.",
  },
  {
    glyph: "m",
    description:
      "Une lettre structurée, où les empattements triangulaires sur les bases apportent une assise solide et confèrent une élégance naturelle.",
  },
  {
    glyph: "n",
    description:
      "Similaire au 'm', mais avec une diagonale plus marquée, où les empattements triangulaires à la base assurent une présence forte dans le texte.",
  },
  {
    glyph: "ñ",
    description:
      "Similaire au 'm', mais avec une diagonale plus marquée, surmontée d'un tilde qui ajoute une fluidité visuelle.",
  },
  {
    glyph: "o",
    description:
      "Une panse oblique, sans œil interne, ce qui lui confère une silhouette distincte et une fluidité de lecture optimisée.",
  },
  {
    glyph: "ó",
    description:
      "Une panse oblique, sans œil interne, surmontée d'un accent aigu qui ajoute une élégance visuelle.",
  },
  {
    glyph: "ò",
    description:
      "Une panse oblique, sans œil interne, accompagnée d'un accent grave qui renforce son ancrage visuel.",
  },
  {
    glyph: "ô",
    description:
      "Une panse oblique, sans œil interne, marquée par un accent circonflexe qui ajoute une dimension supplémentaire.",
  },
  {
    glyph: "ö",
    description:
      "Une panse oblique, sans œil interne, ornée d'un tréma qui apporte une touche de distinction.",
  },
  {
    glyph: "ø",
    description:
      "Une panse oblique, sans œil interne, traversée par une barre oblique qui ajoute une dynamique unique.",
  },
  {
    glyph: "œ",
    description:
      "Une ligature majestueuse combinant les formes de o et e, avec une panse oblique qui crée une harmonie visuelle.",
  },
  {
    glyph: "p",
    description:
      "Une panse oblique associée à un jambage descendant, équilibrée par un empattement triangulaire, assurant un bon ancrage visuel.",
  },
  {
    glyph: "q",
    description:
      "Une structure proche du 'p', mais inversée, avec un jambage plus affirmé et un empattement triangulaire apportant une stabilité visuelle.",
  },
  {
    glyph: "r",
    description:
      "Une lettre compacte, où un sérif triangulaire à la base vient accentuer l'accroche du regard et dynamiser la lecture.",
  },
  {
    glyph: "s",
    description:
      "Une courbure fluide, marquée par des empattements triangulaires aux extrémités, créant un contraste subtil entre mouvement et stabilité.",
  },
  {
    glyph: "š",
    description:
      "Une courbure fluide, marquée par des empattements triangulaires aux extrémités, surmontée d'un caron qui ajoute une élégance visuelle.",
  },
  {
    glyph: "t",
    description:
      "Une barre supérieure légèrement irrégulière, évoquant les empattements Elzévirs, accompagné d'une hampe droite, créant un effet graphique distinct.",
  },
  {
    glyph: "u",
    description:
      "Une structure arrondie, où les extrémités forment de légers triangles, donnant un effet naturel et équilibré à la lettre.",
  },
  {
    glyph: "ú",
    description:
      "Une structure arrondie, surmontée d'un accent aigu qui ajoute une élégance visuelle.",
  },
  {
    glyph: "ù",
    description:
      "Une structure arrondie, accompagnée d'un accent grave qui renforce son ancrage visuel.",
  },
  {
    glyph: "û",
    description:
      "Une structure arrondie, marquée par un accent circonflexe qui ajoute une dimension supplémentaire.",
  },
  {
    glyph: "ü",
    description:
      "Une structure arrondie, ornée d'un tréma qui apporte une touche de distinction.",
  },
  {
    glyph: "v",
    description:
      "Une première diagonale plus épaisse, où les empattements triangulaires sur les extrémités renforcent son assise et sa présence dans le texte.",
  },
  {
    glyph: "w",
    description:
      "Une combinaison de diagonales contrastées, où la première et la troisième diagonale sont plus épaisses que les autres, créant un effet de mouvement structuré.",
  },
  {
    glyph: "x",
    description:
      "Une croisée de diagonales, où les extrémités triangulaires marquent les points d'ancrage, et où la diagonale gauche est plus épaisse, créant une dynamique unique.",
  },
  {
    glyph: "y",
    description:
      "Une diagonale principale marquée, accompagnée d'une forme triangulaire à la base, et d'une diagonale plus fine, créant un contraste subtil.",
  },
  {
    glyph: "ý",
    description:
      "Une diagonale principale marquée, surmontée d'un accent aigu qui ajoute une élégance visuelle.",
  },
  {
    glyph: "z",
    description:
      "Une structure angulaire, où des déformations triangulaires aux extrémités accentuent l'impact visuel, et où la diagonale centrale plus épaisse renforce son dynamisme.",
  },
  {
    glyph: "ž",
    description:
      "Une structure angulaire, surmontée d'un caron qui ajoute une élégance visuelle.",
  },
  {
    glyph: "0",
    description:
      "Sa structure est proche du O majuscule, avec une forme elliptique stable. La panse est légèrement inclinée, mais moins oblique que celle des lettres, assurant une cohérence avec le reste de la typographie.",
  },
  {
    glyph: "1",
    description:
      "Un trait vertical fin, reposant sur une base marquée par un petit triangle. Ce détail ajoute une signature visuelle discrète qui renforce son ancrage.",
  },
  {
    glyph: "2",
    description:
      "Son tracé fluide se termine par une petite irrégularité en forme de triangle, un détail subtil qui perturbe légèrement la linéarité de la courbe.",
  },
  {
    glyph: "3",
    description:
      "En haut de la lettre, une petite irrégularité triangulaire se détache, créant un léger contraste avec la régularité de ses courbes.",
  },
  {
    glyph: "4",
    description:
      "Sa base est similaire à celle du 1, avec un trait fin souligné par un petit triangle, qui apporte une cohérence graphique entre ces deux chiffres.",
  },
  {
    glyph: "5",
    description:
      "Une irrégularité triangulaire au début du tracé rompt légèrement la continuité de la forme, ajoutant une singularité subtile au chiffre.",
  },
  {
    glyph: "6",
    description:
      "Une panse couvrant la moitié de la hauteur, mais contrairement aux autres lettres de la police, elle n'est pas oblique. Son tracé reste vertical et équilibré.",
  },
  {
    glyph: "7",
    description:
      "À l'extrémité inférieure, une petite irrégularité triangulaire modifie légèrement la fin du trait, créant une variation subtile.",
  },
  {
    glyph: "8",
    description:
      "Son épaisseur reste constante jusqu'au croisement des diagonales, où celle-ci rétrécit des deux côtés, donnant l'impression que l'un des tracés passe sous l'autre. Cela crée un effet de profondeur unique.",
  },
  {
    glyph: "9",
    description:
      "Contrairement au 6, il ne possède pas de panse, mais un œil bien défini. Ce détail structure sa silhouette et assure un équilibre graphique cohérent avec le reste de la police.",
  },
  {
    glyph: "⁄",
    description:
      "Élancée et bien équilibrée, elle divise l'espace avec justesse. Son inclinaison est légèrement marquée, assurant une distinction nette dans les compositions mathématiques et fractionnaires.",
  },
  {
    glyph: ".",
    description:
      "Un cercle parfait, bien ancré dans la ligne de base. Sobre et efficace, il s'adapte à l'équilibre général de la typographie sans jamais rompre l'harmonie.",
  },
  {
    glyph: ",",
    description:
      "Courbée avec délicatesse, elle suit une inclinaison subtile qui lui donne une dynamique propre, contrastant avec la rigidité des autres signes de ponctuation.",
  },
  {
    glyph: ":",
    description:
      "Deux cercles parfaitement alignés, leur espacement pensé pour maintenir un rythme fluide dans la lecture.",
  },
  {
    glyph: ";",
    description:
      "Composé d'une virgule et d'un point alignés avec précision. Sa légèrement courbe plus marquée en fait un trait d'union naturel entre les idées.",
  },
  {
    glyph: "…",
    description:
      "Espacement régulier entre chaque point, créant un effet de continuité visuelle fluide sans rupture brutale.",
  },
  {
    glyph: "!",
    description:
      "Sa hampe verticale s'affine légèrement vers le haut, conférant une présence forte sans rigidité excessive. Le point inférieur conserve l'ancrage circulaire typique de la police.",
  },
  {
    glyph: "¡",
    description:
      "Un reflet parfait du point d'exclamation standard, mais dont l'équilibre visuel est soigneusement ajusté pour ne pas paraître inversé de manière arbitraire.",
  },
  {
    glyph: "?",
    description:
      "Courbe fluide et continue, avec une silhouette légèrement asymétrique qui lui donne une expressivité unique. Le point final conserve un alignement parfait avec la base.",
  },
  {
    glyph: "¿",
    description:
      "Forme identique à son pendant droit, mais avec une légère adaptation de l'inclinaison pour conserver une parfaite lisibilité dans les phrases inversées.",
  },
  {
    glyph: "„",
    description:
      "Inspirés des formes calligraphiques, ces guillemets adoptent une courbure douce qui s'harmonise avec la fluidité des lettres.",
  },
  {
    glyph: "«",
    description:
      "Forme légèrement angulaire, assurant une bonne lisibilité même dans des compositions denses.",
  },
  {
    glyph: "»",
    description:
      "Forme légèrement angulaire, assurant une bonne lisibilité même dans des compositions denses.",
  },
  {
    glyph: "'",
    description:
      "Compactes et bien définies, elles conservent une ouverture subtile qui évite un effet de fermeture trop strict.",
  },
  {
    glyph: "‹",
    description:
      "Plus fins et plus resserrés que les guillemets doubles, ils sont parfaits pour les citations secondaires ou les indications typographiques.",
  },
  {
    glyph: "›",
    description:
      "Plus fins et plus resserrés que les guillemets doubles, ils sont parfaits pour les citations secondaires ou les indications typographiques.",
  },
  {
    glyph: "(",
    description:
      "Arrondies mais légèrement allongées, elles offrent un espace visuel optimal sans écraser le texte qu'elles entourent.",
  },
  {
    glyph: ")",
    description:
      "Arrondies mais légèrement allongées, elles offrent un espace visuel optimal sans écraser le texte qu'elles entourent.",
  },
  {
    glyph: "{",
    description:
      "Forme légèrement anguleuse dans ses courbes, apportant une sensation de structure plus marquée qu'une simple parenthèse.",
  },
  {
    glyph: "}",
    description:
      "Forme légèrement anguleuse dans ses courbes, apportant une sensation de structure plus marquée qu'une simple parenthèse.",
  },
  {
    glyph: "[",
    description:
      "Délibérément droits et rigoureux, ils encadrent leur contenu avec une précision stricte, parfaite pour les techniques d'annotations.",
  },
  {
    glyph: "]",
    description:
      "Délibérément droits et rigoureux, ils encadrent leur contenu avec une précision stricte, parfaite pour les techniques d'annotations.",
  },
  {
    glyph: "-",
    description:
      "Minimaliste et bien proportionné, il reste discret tout en maintenant un bon équilibre visuel.",
  },
  {
    glyph: "–",
    description:
      "Plus allongé, il assure une séparation nette entre les éléments textuels sans paraître trop massif.",
  },
  {
    glyph: "—",
    description:
      "Large et imposant, il marque des ruptures franches dans le texte tout en restant harmonieux avec les autres caractères.",
  },
  {
    glyph: "_",
    description:
      "Fin et parfaitement horizontal, il garde une neutralité visuelle qui permet une intégration fluide dans le texte.",
  },
  {
    glyph: "¢",
    description:
      "Symbole du cent, conçu pour conserver une cohérence avec la typographie.",
  },
  {
    glyph: "$",
    description:
      "Symbole du dollar, bien équilibré, avec ses barres traversantes légèrement affinées.",
  },
  {
    glyph: "€",
    description:
      "Symbole de l'euro, présentant une courbure douce et homogène.",
  },
  {
    glyph: "ƒ",
    description:
      "Symbole du florin, conçu pour s'intégrer naturellement dans les compositions textuelles.",
  },
  {
    glyph: "£",
    description:
      "Symbole de la livre sterling, conservant une structure équilibrée, évitant un effet trop massif.",
  },
  {
    glyph: "¥",
    description:
      "Symbole du yen, bien centré, avec des barres horizontales distinctes.",
  },
  {
    glyph: "+",
    description:
      "Alignement parfait et proportions homogènes, assurant une lisibilité immédiate.",
  },
  {
    glyph: "−",
    description:
      "Alignement parfait et proportions homogènes, assurant une lisibilité immédiate.",
  },
  {
    glyph: "×",
    description:
      "Alignement parfait et proportions homogènes, assurant une lisibilité immédiate.",
  },
  {
    glyph: "÷",
    description:
      "Alignement parfait et proportions homogènes, assurant une lisibilité immédiate.",
  },
  {
    glyph: "=",
    description:
      "Tracés précis, évitant toute confusion dans l'interprétation visuelle.",
  },
  {
    glyph: "≠",
    description:
      "Tracés précis, évitant toute confusion dans l'interprétation visuelle.",
  },
  {
    glyph: ">",
    description:
      "Tracés précis, évitant toute confusion dans l'interprétation visuelle.",
  },
  {
    glyph: "<",
    description:
      "Tracés précis, évitant toute confusion dans l'interprétation visuelle.",
  },
  {
    glyph: "≥",
    description:
      "Tracés précis, évitant toute confusion dans l'interprétation visuelle.",
  },
  {
    glyph: "≤",
    description:
      "Tracés précis, évitant toute confusion dans l'interprétation visuelle.",
  },
  {
    glyph: "±",
    description:
      "Formes bien définies, assurant une clarté optimale même dans des textes mathématiques complexes.",
  },
  {
    glyph: "≈",
    description:
      "Formes bien définies, assurant une clarté optimale même dans des textes mathématiques complexes.",
  },
  {
    glyph: "~",
    description:
      "Courbes harmonieuses et fluides, présentant toute asymétrie qui pourrait perturber l'équilibre du texte.",
  },
  {
    glyph: "¬",
    description:
      "Signe de négation, conçu pour s'intégrer naturellement dans les compositions textuelles.",
  },
  {
    glyph: "^",
    description:
      "Accent circonflexe, conçu pour s'intégrer naturellement dans les compositions textuelles.",
  },
  {
    glyph: "∞",
    description:
      "Symbole de l'infini, avec des courbes harmonieuses et fluides, présentant toute asymétrie qui pourrait perturber l'équilibre du texte.",
  },
  {
    glyph: "%",
    description:
      "Signe pourcentage, conçu pour s'intégrer naturellement dans les compositions textuelles.",
  },
  {
    glyph: "‰",
    description:
      "Signe pour mille, conçu pour s'intégrer naturellement dans les compositions textuelles.",
  },
  {
    glyph: "☀",
    description:
      "Symbole du soleil, avec un design subtil, rappelant les influences calligraphiques visibles dans certaines lettres de la typographie.",
  },
  {
    glyph: "★",
    description:
      "Étoile pleine, légèrement allongée, s'intégrant naturellement à l'ensemble typographique.",
  },
  {
    glyph: "☆",
    description:
      "Étoile creuse, légèrement allongée, s'intégrant naturellement à l'ensemble typographique.",
  },
  {
    glyph: "☽",
    description:
      "Symbole de la lune croissante, avec un design subtil, rappelant les influences calligraphiques visibles dans certaines lettres de la typographie.",
  },
  {
    glyph: "☾",
    description:
      "Symbole de la lune décroissante, avec un design subtil, rappelant les influences calligraphiques visibles dans certaines lettres de la typographie.",
  },
  {
    glyph: "♠",
    description:
      "Symbole de pique, avec des formes nettes et équilibrées, assurant leur lisibilité tout en s'adaptant au style général de la typographie.",
  },
  {
    glyph: "♡",
    description:
      "Symbole de cœur, avec des formes nettes et équilibrées, assurant leur lisibilité tout en s'adaptant au style général de la typographie.",
  },
  {
    glyph: "♢",
    description:
      "Symbole de carreau, avec des formes nettes et équilibrées, assurant leur lisibilité tout en s'adaptant au style général de la typographie.",
  },
  {
    glyph: "♣",
    description:
      "Symbole de trèfle, avec des formes nettes et équilibrées, assurant leur lisibilité tout en s'adaptant au style général de la typographie.",
  },
  {
    glyph: "♤",
    description:
      "Symbole de pique creux, avec des formes nettes et équilibrées, assurant leur lisibilité tout en s'adaptant au style général de la typographie.",
  },
  {
    glyph: "♥",
    description:
      "Symbole de cœur plein, avec des formes nettes et équilibrées, assurant leur lisibilité tout en s'adaptant au style général de la typographie.",
  },
  {
    glyph: "♦",
    description:
      "Symbole de carreau plein, avec des formes nettes et équilibrées, assurant leur lisibilité tout en s'adaptant au style général de la typographie.",
  },
  {
    glyph: "♧",
    description:
      "Symbole de trèfle creux, avec des formes nettes et équilibrées, assurant leur lisibilité tout en s'adaptant au style général de la typographie.",
  },
  {
    glyph: "✦",
    description:
      "Étoile à quatre branches pleine, conçue pour une utilisation graphique, avec un bon équilibre entre finesse et lisibilité.",
  },
  {
    glyph: "✧",
    description:
      "Étoile à quatre branches vide, conçue pour une utilisation graphique, avec un bon équilibre entre finesse et lisibilité.",
  },
  {
    glyph: "✫",
    description:
      "Étoile à cinq branches avec cercle, conçue pour une utilisation graphique, avec un bon équilibre entre finesse et lisibilité.",
  },
  {
    glyph: "✬",
    description:
      "Étoile à cinq branches pleine avec cercle, conçue pour une utilisation graphique, avec un bon équilibre entre finesse et lisibilité.",
  },
  {
    glyph: "✶",
    description:
      "Étoile à six branches, conçue pour une utilisation graphique, avec un bon équilibre entre finesse et lisibilité.",
  },
  {
    glyph: "✷",
    description:
      "Étoile à huit branches, conçue pour une utilisation graphique, avec un bon équilibre entre finesse et lisibilité.",
  },
  {
    glyph: "✹",
    description:
      "Étoile à douze branches, conçue pour une utilisation graphique, avec un bon équilibre entre finesse et lisibilité.",
  },
  {
    glyph: "@",
    description:
      "Tracé fluide, légèrement incliné, en harmonie avec la calligraphie de la police.",
  },
  {
    glyph: "&",
    description:
      "Élégante et bien structurée, elle adopte une approche manuscrite qui la rend particulièrement expressive.",
  },
  {
    glyph: "¶",
    description:
      "Formes nettes et compactes, idéales pour les références textuelles et légales.",
  },
  {
    glyph: "§",
    description:
      "Formes nettes et compactes, idéales pour les références textuelles et légales.",
  },
  {
    glyph: "©",
    description:
      "Symbole de copyright, conçu pour s'intégrer naturellement dans les compositions textuelles.",
  },
  {
    glyph: "°",
    description:
      "Symbole de degré, conçu pour s'intégrer naturellement dans les compositions textuelles.",
  },
  {
    glyph: "|",
    description:
      "Barre verticale, conçue pour s'intégrer naturellement dans les compositions textuelles.",
  },
  {
    glyph: "¦",
    description:
      "Double barre, conçue pour s'intégrer naturellement dans les compositions textuelles.",
  },
  {
    glyph: "†",
    description:
      "Dague, conçue pour s'intégrer naturellement dans les compositions textuelles.",
  },
  {
    glyph: "‡",
    description:
      "Double dague, conçue pour s'intégrer naturellement dans les compositions textuelles.",
  },
];
const fontHistoryList = [
 {
  title: "Onciale",
  class: "onciale",
  img: "./img/Lettrine/Onciale.svg",
  paragraphe:
  "L'Onciale est une écriture manuscrite utilisée principalement entre le IIIe et le VIIIe siècle. Caractérisée par ses lettres arrondies et son tracé fluide, elle est souvent associée aux manuscrits religieux et aux premières formes d'écriture médiévale.",
  },
  {
  title: "Irlandaise-Saxonne",
  class: "gothique",
  img: "./img/Lettrine/Irlandaise.svg",
  paragraphe:
  "Développée entre le VIIe et le Xe siècle, l'écriture irlandaise-saxonne provient de la tradition insulaire des moines copistes. Elle se distingue par ses formes anguleuses et ses ligatures caractéristiques, visibles dans des œuvres comme le Livre de Kells.",
  },
  {
  title: "Basteleur",
  class: "basteleur",
  img: "./img/Lettrine/Basteleur-Bold.svg",
  paragraphe:
  "Créée par Keussel Studio, cette police Serif / Elzevir / Réal s’inspire du Tarot de Marseille, en particulier du Bateleur, symbole de créativité et de renouveau. Irrégulière, ludique et artisanale, elle est idéale pour les titres.",
  },
  {
  title: "Gothique",
  class: "gothique",
  img: "./img/Lettrine/gothique.svg",
  paragraphe:
  "Popularisée à partir du XIIe siècle, l'écriture gothique se caractérise par ses formes anguleuses et compactes. Ce style a été adopté pour l'impression des premiers livres typographiques, comme la Bible de Gutenberg en 1455.",
  },
];

const asciiGrid = document.querySelector(".asciiGrid");
const bigLetter = document.getElementById("big-letter");
const letterDesc = document.createElement("p");
letterDesc.textContent = "Sélectionnez un glyphe pour voir son explication.";
letterDesc.classList.add("letter-precision-p")
document.querySelector(".letter-precision").appendChild(letterDesc);

glyphs.forEach((glyph) => {
  const div = document.createElement("div");
  const span = document.createElement("p");
  div.classList.add("ascii-grid-item");
  span.textContent = glyph.glyph;

  div.onclick = () => {
    // Supprimer la classe "selected" de tous les glyphes
    clearSelected();
    const bigLetter = document.getElementById("big-letter");

    // Ajouter la classe "selected" au glyphe cliqué
    div.classList.add("selected");
    const selectedItems = document.querySelector(".ascii-grid-item.selected");
    console.log(selectedItems);
    selectedItems.style.backgroundColor = "#FFFFFF";
    selectedItems.style.color = isBastleurActive ? "#09002B" : "#EDC000";

    bigLetter.style.transform = "rotate(12deg)";
    setTimeout(() => {
      bigLetter.style.transform = "rotate(0deg)";
    }, 400);
    // Mettre à jour le contenu de bigLetter et letterDesc
    bigLetter.textContent = glyph.glyph;
    letterDesc.textContent = glyph.description;
  };

  div.appendChild(span);
  asciiGrid.appendChild(div);
});

const fontHistory = document.querySelector(".font-history");
const font_histor_contanier = document.querySelector(".font-histor-contanier");
fontHistoryList.forEach((font) => {

  const div = document.createElement("div");
  const img = document.createElement("img");
  img.id = font.class
  img.src = font.img;
  img.classList.add(`.${font.class}`);
  // div.classList.add("ascii-grid-item");
  div.appendChild(img);
  const divText = document.createElement("div");
  const etoile = document.createElement("p");
  const title = document.createElement("p");
  const paragraphe = document.createElement("p");

  div.appendChild(divText);
  etoile.classList.add("font-etoile");
  title.classList.add("font-etoile-title");

  etoile.textContent = "*";
  title.textContent = font.title;
  paragraphe.textContent = font.paragraphe;

  divText.appendChild(etoile);
  divText.appendChild(title);
  divText.appendChild(paragraphe);
  font_histor_contanier.appendChild(div);
});

document.addEventListener("DOMContentLoaded", function () {
  const editableText = document.getElementById("editableText");

  const sizeSlider = document.getElementById("sizeSlider");
  const sizeValue = document.getElementById("sizeValue");

  const spacingSlider = document.getElementById("spacingSlider");
  const spacingValue = document.getElementById("spacingValue");

  const lineHeightSlider = document.getElementById("lineHeightSlider");
  const lineHeightValue = document.getElementById("lineHeightValue");

  const justificationButtons = document.querySelectorAll(
    ".justification button"
  );

  // Taille du texte
  sizeSlider.addEventListener("input", function () {
    let fontSize = sizeSlider.value;
    editableText.style.fontSize = fontSize + "px"; // Appliquer la taille du texte
    sizeValue.textContent = fontSize; // Afficher la valeur de la taille dans l'élément "sizeValue"
  });

  // Espacement des lettres
  spacingSlider.addEventListener("input", function () {
    let letterSpacing = spacingSlider.value;
    editableText.style.letterSpacing = letterSpacing + "px"; // Appliquer l'espacement des lettres
    spacingValue.textContent = letterSpacing; // Afficher la valeur de l'espacement dans "spacingValue"
  });

  // Hauteur de ligne
  lineHeightSlider.addEventListener("input", function () {
    let lineHeight = lineHeightSlider.value;
    editableText.style.lineHeight = lineHeight; // Appliquer la hauteur de ligne
    lineHeightValue.textContent = lineHeight; // Afficher la valeur de la hauteur de ligne dans "lineHeightValue"
  });

  // Justification du texte
  justificationButtons.forEach((button) => {
    button.addEventListener("click", function () {
      let align = button.getAttribute("data-align");

      // Désélectionner tous les autres boutons
      justificationButtons.forEach((btn) => {
        btn.classList.remove("active");
        btn.style.opacity = "0.5"; // Déactiver l'opacité des autres boutons
      });

      // Sélectionner le bouton cliqué
      button.classList.add("active");
      button.style.opacity = "1"; // Appliquer l'opacité au bouton sélectionné

      // Appliquer l'alignement du texte
      editableText.style.textAlign = align;
    });
  });

  // Initialisation
  editableText.style.fontSize = sizeSlider.value + "px"; // Appliquer la taille de la police
  editableText.style.letterSpacing = spacingSlider.value + "px"; // Appliquer l'espacement des lettres
  editableText.style.lineHeight = lineHeightSlider.value; // Appliquer la hauteur de ligne

  // Initialiser la classe active sur le bouton de justification "left" (gauche)
  const defaultLeftButton = document.querySelector(
    ".justification button[data-align='left']"
  );
  defaultLeftButton.classList.add("active");
  defaultLeftButton.style.opacity = "1"; // S'assurer que le bouton "left" est sélectionné par défaut
});

let lastScrollPosition = 0; // Stocke la dernière position de défilement

const basteleurItems = document.querySelectorAll(".basteleur");
const body = document.querySelector(".body");
const style = document.querySelector(".style");
// const rast = document.querySelector(".rast");
const character = document.querySelector(".character");
const visuels = document.querySelector(".visuels");
const footer = document.querySelector(".footer");
const character_flex = document.querySelector(".character-flex");
const img = document.querySelector(".img");
const info = document.querySelector(".info");
const text_explication = document.querySelector(".text_explication-container");
const font_history = document.querySelector(".font-history");
const section_images2 = document.querySelector(".section-images2");

const button = document.getElementById("changeFont");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const font_historyBasteleur = document.getElementById("basteleur");

const text_explication1 = document.getElementById("text_explication1");
const text_explication2 = document.getElementById("text_explication2");
const text_explication3 = document.getElementById("text_explication3");

const paragraphe1 = document.querySelector(".info-paragraphe1");
const paragraphe2 = document.querySelector(".info-paragraphe2");
const paragraphe3 = document.querySelector(".info-paragraphe3");

const visuels1 = document.getElementById("visuels1");
const visuels2 = document.getElementById("visuels2");
const visuels3 = document.getElementById("visuels3");


const textCercle = document.querySelector(".text-cercle");
const texteDefilement = document.querySelector(".text-defilement");

let isBastleurActive =  id =="basteleur" ?  true : false; // Suivi de l'état actuel
const MoonlightImages = [
  "./img/Magicien/img1.png",
  "./img/Magicien/img2.png",
  "./img/Magicien/img3.png",
  "./img/Magicien/img4.png",
  "./img/Magicien/img5.png",
  ,
];
const basteleurImages = [
  "./img/Basteleur/img1.png",
  "./img/Basteleur/img2.png",
  "./img/Basteleur/img3.png",
  "./img/Basteleur/img4.png",
  "./img/Basteleur/img5.png",
];
function clearSelected() {
  const selectedItems = document.querySelectorAll(".ascii-grid-item.selected");
  const selectedListItems = document.querySelectorAll(".ascii-grid-item");
  selectedItems.forEach(
    (item) => (item.style.backgroundColor = "rgba(255, 255, 255, 0)")
  );
  selectedListItems.forEach(
    (item) => (item.style.color = isBastleurActive ? "#FFFFFF" : "#FFFFFF")
  );
  selectedItems.forEach((item) => item.classList.remove("selected"));
}

const buttonBg = document.querySelector(".button-bg");
const buttonMoonlight = document.querySelector(".button-moonlight");
const buttonBasteleur = document.querySelector(".button-basteleur");

function isBastleurActivepage (isBastleurActive) {
  console.log(isBastleurActive,"dshffdjgs");

  buttonBg.style.transform = isBastleurActive
    ? "translateX(00%)"
    : "translateX(100%)";
  buttonMoonlight.style.color = isBastleurActive ? "#edc000" : "#ffffff";
  buttonBasteleur.style.color = isBastleurActive ? "#ffffff" : "#07002b";

  isBastleurActive = !isBastleurActive; // Alterner entre true et false
  const selectedItems = document.querySelector(".ascii-grid-item.selected");

  // Changer la police des éléments basteleur
  basteleurItems.forEach((item) => {
    item.style.fontFamily = isBastleurActive ? "Basteleur" : "Basteleur-Bold";
  });

  font_historyBasteleur.src = isBastleurActive ? "./img/Lettrine/Basteleur-Moonlight.svg" :  "./img/Lettrine/Basteleur-Bold.svg"
   body.style.fontFamily = isBastleurActive ? "NeuMontreal" : "Pally"
  // Alterner les images
  isBastleurActive;
  img1.src = isBastleurActive ? MoonlightImages[0] : basteleurImages[0];
  img2.src = isBastleurActive ? MoonlightImages[1] : basteleurImages[1];
  img3.src = isBastleurActive ? MoonlightImages[2] : basteleurImages[2];
  img4.src = isBastleurActive ? MoonlightImages[3] : basteleurImages[3];
  img5.src = isBastleurActive ? MoonlightImages[4] : basteleurImages[4];
  
  
  visuels1.src = isBastleurActive ? "./img/Magicien/visuel1.jpg" : "./img/Basteleur/visuel1.png";
  visuels2.src = isBastleurActive ? "./img/Magicien/visuel2.jpg" : "./img/Basteleur/visuel2.png";
  visuels3.src = isBastleurActive ? "./img/Magicien/visuel3.png" : "./img/Basteleur/visuel3.jpg";

  text_explication1.textContent = isBastleurActive
    ? "Je suis Basteleur Moonlight, une typographie oscillant entre ombre et lumière, inspirée du Tarot de Marseille et plus particulièrement du Bateleur. Créée en 2022 par le studio Keussel, je suis le fruit d’un mariage entre influences ésotériques, traditions typographiques et modernité"
    : "Je suis Basteleur Bold, une écriture sculptée entre mystère et lumière, entre charme ancien et modernité éclatante. Francis Chouquet, maître en lettrage, m’a donné vie en 2022, inspiré par les grands glyphes d’antan et les symboles ésotériques du Tarot de Marseille.";
  text_explication2.textContent = isBastleurActive
    ? "Le Magicien, figure du Tarot, incarne la transformation et la création. De cette essence mystique, chaque lettre devient une incantation graphique, un jeu subtil entre formes et symboles, évoquant un univers empli de secrets."
    : "Mon nom vient du Bateleur, ce jongleur des possibles. Comme lui, le designer navigue entre inspiration et doute, projets inachevés et éclairs de génie. Ainsi suis-je née : une typographie audacieuse, captivante, gravée comme une incantation sur le papier.";
  text_explication3.textContent = isBastleurActive
   ?  "Mon style puise dans les lettres gothiques et les capitales romaines, alliant rigidité médiévale et équilibre classique. Mon appartenance aux Elzévirs, famille typographique du XVIe siècle, scelle mon lien entre tradition et renouveau."
  : "Je suis un mélange savant : la douceur arrondie de la Cooper Black, combinée aux lettres irrégulières des manuscrits médiévaux. Une alchimie typographique où tradition et modernité s’unissent.";
  
  paragraphe1.innerHTML = isBastleurActive
  ? "Je suis Basteleur Moonlight, une typographie qui danse entre ombre et lumière, fusionnant mysticisme et formes ancestrales. Née en 2022 sous la main du studio Keussel, mon essence puise dans le Tarot de Marseille, où le Bateleur incarne transformation et illusion.<br/><br/>Mes lettres portent l’héritage des gothiques et des capitales romaines, équilibrant tradition et modernité à travers l’influence des Elzévirs du XVIe siècle. Mon écriture vibre, jamais figée. Pances inclinées, traits irréguliers, je défie la rigidité, oscillant entre équilibre et mouvement.<br/><br/>Sculptée avec soin, chaque lettre est une incantation visuelle. Artisanale, imprévisible, imprégnée de brisures subtiles et de détails cachés, je suis une écriture qui insuffle une âme, une magie propre."
  :" Je suis Basteleur Bold, une typographie façonnée entre douceur et puissance, entre charme ancien et modernité éclatante. Créée en 2022 par Francis Chouquet, mon design s’inspire des glyphes d’autrefois et des signes mystiques du Tarot de Marseille.<br/><br/>Mon nom provient de la carte du Bateleur, ce jongleur des possibles, symbole du créateur jonglant entre inspiration et doute. Tout comme lui, je suis une typographie audacieuse, captivant le regard et imposant ma présence comme une incantation gravée.<br/><br/>Je suis un mélange de formes rondes et accueillantes, inspirées de la Cooper Black, et de lettres anciennes, issues des manuscrits médiévaux, où l’irrégularité était reine. Une typographie où la douceur rencontre la force et l’histoire."
  paragraphe2.innerHTML = isBastleurActive
  ? "Laissez-moi vous guider à travers mes formes, ces glyphes mystérieux que seul un esprit curieux saura apprivoiser. Je suis faite pour être vue, ressentie, et utilisée lors des grandes occasions, là où chaque mot compte. Parfaite pour les titres puissants, logos emblématiques, affiches théâtrales et tout projet nécessitant une présence visuelle forte. <br/><br/>Ma fluidité et mes détails subtils brillent dans des contextes ludiques, créatifs et artistiques, ajoutant une dimension magique et mystérieuse. Idéale pour le branding, les affiches événementielles, les couvertures de livres, et même les cartes de tarot, j’apporte un soupçon d’énigme et de charme.<br/><br/>Ma fluidité et mes détails subtils brillent dans des contextes ludiques, créatifs et artistiques, ajoutant une dimension magique et mystérieuse. Idéale pour le branding, les affiches événementielles, les couvertures de livres, et même les cartes de tarot, j’apporte un soupçon d’énigme et de charme.Cependant, ne me sollicitez pas pour des contextes stricts ou formels, où la lisibilité est essentielle. Je ne suis pas faite pour les longs corps de texte ou les projets nécessitant une clarté immédiate. Dans ces cas, la lisibilité prime sur la magie."
  : "Laissez-moi vous révéler mes secrets. Mon écriture ancienne, façonnée par le temps, ne se fige jamais. Elle vibre, elle vit… Rien chez moi n’est parfaitement droit. Mes pances et mes yeux s’inclinent, défiant la rigidité des typographies classiques. En équilibre, en mouvement, mes lettres dansent comme une incantation.<br/><br/>Chaque détail est soigneusement ciselé, inspiré des anciens grimoires. Pourtant, mes traits portent des irrégularités maîtrisées, des brisures subtiles. Ludique et imprévisible, je suis une formule magique insaisissable. Artisanale, marquée du geste humain. Traditionnelle, puisant sa force dans les écritures d’autrefois.<br/><br/>Observez bien… Dans mon C majuscule, une lune se cache, fragment d’ombre figé dans l’encre. Mes empattements Elzévirs ancrent chaque lettre, défiant le temps et les modes. Entre rigueur et chaos, équilibre et spontanéité, ma dualité me rend unique.<br/><br/>Me choisir, c’est invoquer une écriture qui ne se contente pas d’exister… Elle insuffle une âme, une magie propre.";
  paragraphe3.innerHTML = isBastleurActive
  ? "Laissez-moi vous guider à travers mes formes, ces glyphes mystérieux que seul un esprit curieux saura apprivoiser. Je suis faite pour être vue, ressentie, et utilisée lors des grandes occasions, là où chaque mot compte. Parfaite pour les titres puissants, logos emblématiques, affiches théâtrales et tout projet nécessitant une présence visuelle forte. <br/><br/>Ma fluidité et mes détails subtils brillent dans des contextes ludiques, créatifs et artistiques, ajoutant une dimension magique et mystérieuse. Idéale pour le branding, les affiches événementielles, les couvertures de livres, et même les cartes de tarot, j’apporte un soupçon d’énigme et de charme.<br/><br/>Ma fluidité et mes détails subtils brillent dans des contextes ludiques, créatifs et artistiques, ajoutant une dimension magique et mystérieuse. Idéale pour le branding, les affiches événementielles, les couvertures de livres, et même les cartes de tarot, j’apporte un soupçon d’énigme et de charme.Cependant, ne me sollicitez pas pour des contextes stricts ou formels, où la lisibilité est essentielle. Je ne suis pas faite pour les longs corps de texte ou les projets nécessitant une clarté immédiate. Dans ces cas, la lisibilité prime sur la magie."
  : "Quand une écriture puissante et envoûtante est requise, je réponds à l’appel !<br/><br/>Faites-moi danser dans des titres flamboyants, où je capte l’œil comme un héraut sur la place du marché.<br/><br/>Je brillerai sur des blasons graphiques, des identités visuelles pleines de panache et de caractère.<br/><br/>Je m’épanouirai sur des affiches d’aventure et de mystère, m’intégrant aux légendes et aux récits.<br/><br/>Enfin, je serai l’âme des brandings audacieux, apportant un cachet unique grâce à mon esprit médiéval et magique.";
  console.log(isBastleurActive);
  

  // Changer le texte du bouton

  // Alterner l'affichage des textes
  bigLetter.style.color = isBastleurActive ? "#09002B" : "#EDC000";
  textCercle.style.display = isBastleurActive ? "none" : "block";
  texteDefilement.style.display = isBastleurActive ? "flex" : "none";

  // Appliquer les styles aux éléments
  const listChangeColor = [
    { name: body, class: ".body", secondaryColor: "#9C0204" },
    {
      name: text_explication,
      class: ".text_explication-container",
      secondaryColor: "#00569d",
    },
    // { name: rast, class: ".rast", secondaryColor: "#EDC000" },
    { name: character, class: ".character", secondaryColor: "#EDC000" },
    { name: img, class: ".img", secondaryColor: "#9C0204" },
    { name: info, class: ".info", secondaryColor: "#00569d" },
    { name: style, class: ".info", secondaryColor: "#EDC000" },
    { name: visuels, class: ".visuels", secondaryColor: "#EDC000" },
    { name: footer, class: ".footer", secondaryColor: "#9C0204" },
    {
      name: section_images2,
      class: ".section-images2",
      secondaryColor: "#9C0204",
    },
    { name: fontHistory, class: ".font-history", secondaryColor: "#00569d" },
  ];

  listChangeColor.forEach((item) => {
    item.name.style.backgroundColor = isBastleurActive
      ? "#07002b"
      : item.secondaryColor;
    let stylesSelection = document.createElement("style");

    console.log(item.class);
    stylesSelection.innerHTML = `
      ${item.class} p::selection {
        background-color: ${
          isBastleurActive ? "#FFFFFF" : "#FFFFFF"
        }; /* Nouvelle couleur de fond */
        color: ${
          isBastleurActive ? "#09002B" : item.secondaryColor
        }; /* Nouvelle couleur du texte */
      }
    `;
    document.head.appendChild(stylesSelection);
  });

  // Appliquer la couleur du texte aux éléments sélectionnés
  if (selectedItems) {
    selectedItems.style.color = isBastleurActive ? "#09002B" : "#EDC000";
  }
}

isBastleurActivepage(isBastleurActive)
button.addEventListener("click", () => {
  buttonBg.style.transform = isBastleurActive
    ? "translateX(00%)"
    : "translateX(100%)";
  buttonMoonlight.style.color = isBastleurActive ? "#edc000" : "#ffffff";
  buttonBasteleur.style.color = isBastleurActive ? "#ffffff" : "#07002b";

  isBastleurActive = !isBastleurActive; // Alterner entre true et false
  const selectedItems = document.querySelector(".ascii-grid-item.selected");

  // Changer la police des éléments basteleur
  basteleurItems.forEach((item) => {
    item.style.fontFamily = isBastleurActive ? "Basteleur" : "Basteleur-Bold";
  });

  font_historyBasteleur.src = isBastleurActive ? "./img/Lettrine/Basteleur-Moonlight.svg" :  "./img/Lettrine/Basteleur-Bold.svg"
   body.style.fontFamily = isBastleurActive ? "NeuMontreal" : "Pally"
  // Alterner les images
  isBastleurActive;
  img1.src = isBastleurActive ? MoonlightImages[0] : basteleurImages[0];
  img2.src = isBastleurActive ? MoonlightImages[1] : basteleurImages[1];
  img3.src = isBastleurActive ? MoonlightImages[2] : basteleurImages[2];
  img4.src = isBastleurActive ? MoonlightImages[3] : basteleurImages[3];
  img5.src = isBastleurActive ? MoonlightImages[4] : basteleurImages[4];
  
  
  visuels1.src = isBastleurActive ? "./img/Magicien/visuel1.jpg" : "./img/Basteleur/visuel1.png";
  visuels2.src = isBastleurActive ? "./img/Magicien/visuel2.jpg" : "./img/Basteleur/visuel2.png";
  visuels3.src = isBastleurActive ? "./img/Magicien/visuel3.png" : "./img/Basteleur/visuel3.jpg";

  text_explication1.textContent = isBastleurActive
    ? "Je suis Basteleur Moonlight, une typographie oscillant entre ombre et lumière, inspirée du Tarot de Marseille et plus particulièrement du Bateleur. Créée en 2022 par le studio Keussel, je suis le fruit d’un mariage entre influences ésotériques, traditions typographiques et modernité"
    : "Je suis Basteleur Bold, une écriture sculptée entre mystère et lumière, entre charme ancien et modernité éclatante. Francis Chouquet, maître en lettrage, m’a donné vie en 2022, inspiré par les grands glyphes d’antan et les symboles ésotériques du Tarot de Marseille.";
  text_explication2.textContent = isBastleurActive
    ? "Le Magicien, figure du Tarot, incarne la transformation et la création. De cette essence mystique, chaque lettre devient une incantation graphique, un jeu subtil entre formes et symboles, évoquant un univers empli de secrets."
    : "Mon nom vient du Bateleur, ce jongleur des possibles. Comme lui, le designer navigue entre inspiration et doute, projets inachevés et éclairs de génie. Ainsi suis-je née : une typographie audacieuse, captivante, gravée comme une incantation sur le papier.";
  text_explication3.textContent = isBastleurActive
   ?  "Mon style puise dans les lettres gothiques et les capitales romaines, alliant rigidité médiévale et équilibre classique. Mon appartenance aux Elzévirs, famille typographique du XVIe siècle, scelle mon lien entre tradition et renouveau."
  : "Je suis un mélange savant : la douceur arrondie de la Cooper Black, combinée aux lettres irrégulières des manuscrits médiévaux. Une alchimie typographique où tradition et modernité s’unissent.";
  
  paragraphe1.innerHTML = isBastleurActive
  ? "Je suis Basteleur Moonlight, une typographie qui danse entre ombre et lumière, fusionnant mysticisme et formes ancestrales. Née en 2022 sous la main du studio Keussel, mon essence puise dans le Tarot de Marseille, où le Bateleur incarne transformation et illusion.<br/><br/>Mes lettres portent l’héritage des gothiques et des capitales romaines, équilibrant tradition et modernité à travers l’influence des Elzévirs du XVIe siècle. Mon écriture vibre, jamais figée. Pances inclinées, traits irréguliers, je défie la rigidité, oscillant entre équilibre et mouvement.<br/><br/>Sculptée avec soin, chaque lettre est une incantation visuelle. Artisanale, imprévisible, imprégnée de brisures subtiles et de détails cachés, je suis une écriture qui insuffle une âme, une magie propre."
  :" Je suis Basteleur Bold, une typographie façonnée entre douceur et puissance, entre charme ancien et modernité éclatante. Créée en 2022 par Francis Chouquet, mon design s’inspire des glyphes d’autrefois et des signes mystiques du Tarot de Marseille.<br/><br/>Mon nom provient de la carte du Bateleur, ce jongleur des possibles, symbole du créateur jonglant entre inspiration et doute. Tout comme lui, je suis une typographie audacieuse, captivant le regard et imposant ma présence comme une incantation gravée.<br/><br/>Je suis un mélange de formes rondes et accueillantes, inspirées de la Cooper Black, et de lettres anciennes, issues des manuscrits médiévaux, où l’irrégularité était reine. Une typographie où la douceur rencontre la force et l’histoire."
  paragraphe2.innerHTML = isBastleurActive
  ? "Laissez-moi vous guider à travers mes formes, ces glyphes mystérieux que seul un esprit curieux saura apprivoiser. Je suis faite pour être vue, ressentie, et utilisée lors des grandes occasions, là où chaque mot compte. Parfaite pour les titres puissants, logos emblématiques, affiches théâtrales et tout projet nécessitant une présence visuelle forte. <br/><br/>Ma fluidité et mes détails subtils brillent dans des contextes ludiques, créatifs et artistiques, ajoutant une dimension magique et mystérieuse. Idéale pour le branding, les affiches événementielles, les couvertures de livres, et même les cartes de tarot, j’apporte un soupçon d’énigme et de charme.<br/><br/>Ma fluidité et mes détails subtils brillent dans des contextes ludiques, créatifs et artistiques, ajoutant une dimension magique et mystérieuse. Idéale pour le branding, les affiches événementielles, les couvertures de livres, et même les cartes de tarot, j’apporte un soupçon d’énigme et de charme.Cependant, ne me sollicitez pas pour des contextes stricts ou formels, où la lisibilité est essentielle. Je ne suis pas faite pour les longs corps de texte ou les projets nécessitant une clarté immédiate. Dans ces cas, la lisibilité prime sur la magie."
  : "Laissez-moi vous révéler mes secrets. Mon écriture ancienne, façonnée par le temps, ne se fige jamais. Elle vibre, elle vit… Rien chez moi n’est parfaitement droit. Mes pances et mes yeux s’inclinent, défiant la rigidité des typographies classiques. En équilibre, en mouvement, mes lettres dansent comme une incantation.<br/><br/>Chaque détail est soigneusement ciselé, inspiré des anciens grimoires. Pourtant, mes traits portent des irrégularités maîtrisées, des brisures subtiles. Ludique et imprévisible, je suis une formule magique insaisissable. Artisanale, marquée du geste humain. Traditionnelle, puisant sa force dans les écritures d’autrefois.<br/><br/>Observez bien… Dans mon C majuscule, une lune se cache, fragment d’ombre figé dans l’encre. Mes empattements Elzévirs ancrent chaque lettre, défiant le temps et les modes. Entre rigueur et chaos, équilibre et spontanéité, ma dualité me rend unique.<br/><br/>Me choisir, c’est invoquer une écriture qui ne se contente pas d’exister… Elle insuffle une âme, une magie propre.";
  paragraphe3.innerHTML = isBastleurActive
  ? "Laissez-moi vous guider à travers mes formes, ces glyphes mystérieux que seul un esprit curieux saura apprivoiser. Je suis faite pour être vue, ressentie, et utilisée lors des grandes occasions, là où chaque mot compte. Parfaite pour les titres puissants, logos emblématiques, affiches théâtrales et tout projet nécessitant une présence visuelle forte. <br/><br/>Ma fluidité et mes détails subtils brillent dans des contextes ludiques, créatifs et artistiques, ajoutant une dimension magique et mystérieuse. Idéale pour le branding, les affiches événementielles, les couvertures de livres, et même les cartes de tarot, j’apporte un soupçon d’énigme et de charme.<br/><br/>Ma fluidité et mes détails subtils brillent dans des contextes ludiques, créatifs et artistiques, ajoutant une dimension magique et mystérieuse. Idéale pour le branding, les affiches événementielles, les couvertures de livres, et même les cartes de tarot, j’apporte un soupçon d’énigme et de charme.Cependant, ne me sollicitez pas pour des contextes stricts ou formels, où la lisibilité est essentielle. Je ne suis pas faite pour les longs corps de texte ou les projets nécessitant une clarté immédiate. Dans ces cas, la lisibilité prime sur la magie."
  : "Quand une écriture puissante et envoûtante est requise, je réponds à l’appel !<br/><br/>Faites-moi danser dans des titres flamboyants, où je capte l’œil comme un héraut sur la place du marché.<br/><br/>Je brillerai sur des blasons graphiques, des identités visuelles pleines de panache et de caractère.<br/><br/>Je m’épanouirai sur des affiches d’aventure et de mystère, m’intégrant aux légendes et aux récits.<br/><br/>Enfin, je serai l’âme des brandings audacieux, apportant un cachet unique grâce à mon esprit médiéval et magique.";
  console.log(isBastleurActive);
  

  // Changer le texte du bouton

  // Alterner l'affichage des textes
  bigLetter.style.color = isBastleurActive ? "#09002B" : "#EDC000";
  textCercle.style.display = isBastleurActive ? "none" : "block";
  texteDefilement.style.display = isBastleurActive ? "flex" : "none";

  // Appliquer les styles aux éléments
  const listChangeColor = [
    { name: body, class: ".body", secondaryColor: "#9C0204" },
    {
      name: text_explication,
      class: ".text_explication-container",
      secondaryColor: "#00569d",
    },
    // { name: rast, class: ".rast", secondaryColor: "#EDC000" },
    { name: character, class: ".character", secondaryColor: "#EDC000" },
    { name: img, class: ".img", secondaryColor: "#9C0204" },
    { name: info, class: ".info", secondaryColor: "#00569d" },
    { name: style, class: ".info", secondaryColor: "#EDC000" },
    { name: visuels, class: ".visuels", secondaryColor: "#EDC000" },
    { name: footer, class: ".footer", secondaryColor: "#9C0204" },
    {
      name: section_images2,
      class: ".section-images2",
      secondaryColor: "#9C0204",
    },
    { name: fontHistory, class: ".font-history", secondaryColor: "#00569d" },
  ];

  listChangeColor.forEach((item) => {
    item.name.style.backgroundColor = isBastleurActive
      ? "#07002b"
      : item.secondaryColor;
    let stylesSelection = document.createElement("style");

    console.log(item.class);
    stylesSelection.innerHTML = `
      ${item.class} p::selection {
        background-color: ${
          isBastleurActive ? "#FFFFFF" : "#FFFFFF"
        }; /* Nouvelle couleur de fond */
        color: ${
          isBastleurActive ? "#09002B" : item.secondaryColor
        }; /* Nouvelle couleur du texte */
      }
    `;
    document.head.appendChild(stylesSelection);
  });

  // Appliquer la couleur du texte aux éléments sélectionnés
  if (selectedItems) {
    selectedItems.style.color = isBastleurActive ? "#09002B" : "#EDC000";
  }

  // Appliquer la couleur de la sélection du texte
});

function toggleInfo(id) {
  const infoDiv = document.getElementById(id);
  infoDiv.classList.toggle("open"); // Bascule entre ajouter/retirer la classe "open"
}

const Rastlist = [
  {
    style: "Basteleur",
    img: "./Rast.svg",
    details: {
      1: {
        title: "NumeroBold",
        paragraphe:
          "The counters (inner forms) are based on geometric rules and most counters can be mirrored on at least one axis.",
      },
      2: {
        title: "FormeBold",
        paragraphe:
          "The shapes of the counters are designed to create a harmonious balance with the rest of the font.",
      },
      3: {
        title: "UtilisationBold",
        paragraphe:
          "Each counter in the font family serves as a key design element to maintain clarity and readability.",
      },
      4: {
        title: "Nature géométriqueBold",
        paragraphe:
          "The geometric nature of the counters adds a modern and clean feel to the typography.",
      },
    },
  },
];

// function changeText(buttonNumber) {
//   // Récupérer les éléments HTML
//   // const textElement = document.getElementById("rast-text");
//   const titleElement = document.getElementById("rast-title"); // Ajoute cet élément dans ton HTML si besoin

//   // Sélectionner le style actif (ici, "Basteleur" par défaut)
//   const selectedStyle = Rastlist.find((item) => item.style === "Basteleur");

//   // Vérifier si le bouton correspond à une entrée valide
//   if (selectedStyle.details[buttonNumber]) {
//     const { title, paragraphe } = selectedStyle.details[buttonNumber];

//     // Mettre à jour le texte
//     if (titleElement) titleElement.innerHTML = title;
//     textElement.innerHTML = paragraphe;
//   } else {
//     textElement.innerHTML = "Invalid selection.";
//   }
// }

