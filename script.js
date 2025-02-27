const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data

const glyphs = [
    { glyph: 'A', description: 'Lettre majuscule latine A' },
    { glyph: 'Á', description: 'Lettre majuscule latine A avec accent aigu' },
    { glyph: 'Ă', description: 'Lettre majuscule latine A avec brève' },
    { glyph: 'Ǎ', description: 'Lettre majuscule latine A avec caron' },
    { glyph: 'Â', description: 'Lettre majuscule latine A avec accent circonflexe' },
    { glyph: 'Ä', description: 'Lettre majuscule latine A avec tréma' },
    { glyph: 'À', description: 'Lettre majuscule latine A avec accent grave' },
    { glyph: 'Ā', description: 'Lettre majuscule latine A avec macron' },
    { glyph: 'Ą', description: 'Lettre majuscule latine A avec ogonek' },
    { glyph: 'Å', description: 'Lettre majuscule latine A avec anneau' },
    { glyph: 'Ã', description: 'Lettre majuscule latine A avec tilde' },
    { glyph: 'Æ', description: 'Ligature latine majuscule AE' },
    { glyph: 'B', description: 'Lettre majuscule latine B' },
    { glyph: 'C', description: 'Lettre majuscule latine C' },
    { glyph: 'Ć', description: 'Lettre majuscule latine C avec accent aigu' },
    { glyph: 'Č', description: 'Lettre majuscule latine C avec caron' },
    { glyph: 'Ç', description: 'Lettre majuscule latine C avec cédille' },
    { glyph: 'Ċ', description: 'Lettre majuscule latine C avec point en chef' },
    { glyph: 'D', description: 'Lettre majuscule latine D' },
    { glyph: 'Ð', description: 'Lettre majuscule latine Eth' },
    { glyph: 'Ď', description: 'Lettre majuscule latine D avec caron' },
    { glyph: 'Đ', description: 'Lettre majuscule latine D barré' },
    { glyph: 'E', description: 'Lettre majuscule latine E' },
    { glyph: 'É', description: 'Lettre majuscule latine E avec accent aigu' },
    { glyph: 'Ě', description: 'Lettre majuscule latine E avec caron' },
    { glyph: 'Ê', description: 'Lettre majuscule latine E avec accent circonflexe' },
    { glyph: 'Ë', description: 'Lettre majuscule latine E avec tréma' },
    { glyph: 'Ė', description: 'Lettre majuscule latine E avec point en chef' },
    { glyph: 'È', description: 'Lettre majuscule latine E avec accent grave' },
    { glyph: 'Ē', description: 'Lettre majuscule latine E avec macron' },
    { glyph: 'Ę', description: 'Lettre majuscule latine E avec ogonek' },
    { glyph: 'F', description: 'Lettre majuscule latine F' },
    { glyph: 'G', description: 'Lettre majuscule latine G' },
    { glyph: 'Ğ', description: 'Lettre majuscule latine G avec brève' },
    { glyph: 'Ģ', description: 'Lettre majuscule latine G avec cédille' },
    { glyph: 'Ġ', description: 'Lettre majuscule latine G avec point en chef' },
    { glyph: 'H', description: 'Lettre majuscule latine H' },
    { glyph: 'Ħ', description: 'Lettre majuscule latine H barré' },
    { glyph: 'I', description: 'Lettre majuscule latine I' },
    { glyph: 'Í', description: 'Lettre majuscule latine I avec accent aigu' },
    { glyph: 'Ǐ', description: 'Lettre majuscule latine I avec caron' },
    { glyph: 'Î', description: 'Lettre majuscule latine I avec accent circonflexe' },
    { glyph: 'Ï', description: 'Lettre majuscule latine I avec tréma' },
    { glyph: 'İ', description: 'Lettre majuscule latine I avec point en chef' },
    { glyph: 'Ì', description: 'Lettre majuscule latine I avec accent grave' },
    { glyph: 'Ī', description: 'Lettre majuscule latine I avec macron' },
    { glyph: 'Į', description: 'Lettre majuscule latine I avec ogonek' },
    { glyph: 'J', description: 'Lettre majuscule latine J' },
    { glyph: 'K', description: 'Lettre majuscule latine K' },
    { glyph: 'Ķ', description: 'Lettre majuscule latine K avec cédille' },
    { glyph: 'L', description: 'Lettre majuscule latine L' },
    { glyph: 'Ĺ', description: 'Lettre majuscule latine L avec accent aigu' },
    { glyph: 'Ľ', description: 'Lettre majuscule latine L avec caron' },
    { glyph: 'Ļ', description: 'Lettre majuscule latine L avec cédille' },
    { glyph: 'Ł', description: 'Lettre majuscule latine L barré' },
    { glyph: 'M', description: 'Lettre majuscule latine M' },
    { glyph: 'N', description: 'Lettre majuscule latine N' },
    { glyph: 'Ń', description: 'Lettre majuscule latine N avec accent aigu' },
    { glyph: 'Ň', description: 'Lettre majuscule latine N avec caron' },
    { glyph: 'Ņ', description: 'Lettre majuscule latine N avec cédille' },
    { glyph: 'Ŋ', description: 'Lettre majuscule latine Eng' },
    { glyph: 'Ñ', description: 'Lettre majuscule latine N avec tilde' },
    { glyph: 'O', description: 'Lettre majuscule latine O' },
    { glyph: 'Ó', description: 'Lettre majuscule latine O avec accent aigu' },
    { glyph: 'Ǒ', description: 'Lettre majuscule latine O avec caron' },
    { glyph: 'Ô', description: 'Lettre majuscule latine O avec accent circonflexe' },
    { glyph: 'Ö', description: 'Lettre majuscule latine O avec tréma' },
    { glyph: 'Ò', description: 'Lettre majuscule latine O avec accent grave' },
    { glyph: 'Ő', description: 'Lettre majuscule latine O avec double accent aigu' },
    { glyph: 'Ō', description: 'Lettre majuscule latine O avec macron' },
    { glyph: 'Ø', description: 'Lettre majuscule latine O barré' },
    { glyph: 'Õ', description: 'Lettre majuscule latine O avec tilde' },
    { glyph: 'Œ', description: 'Ligature latine majuscule OE' },
    { glyph: 'P', description: 'Lettre majuscule latine P' },
    { glyph: 'Þ', description: 'Lettre majuscule latine Thorn' },
    { glyph: 'Q', description: 'Lettre majuscule latine Q' },
    { glyph: 'R', description: 'Lettre majuscule latine R' },
    { glyph: 'Ŕ', description: 'Lettre majuscule latine R avec accent aigu' },
    { glyph: 'Ř', description: 'Lettre majuscule latine R avec caron' },
    { glyph: 'Ŗ', description: 'Lettre majuscule latine R avec cédille' },
    { glyph: 'S', description: 'Lettre majuscule latine S' },
    { glyph: 'Ś', description: 'Lettre majuscule latine S avec accent aigu' },
    { glyph: 'Š', description: 'Lettre majuscule latine S avec caron' },
    { glyph: 'Ş', description: 'Lettre majuscule latine S avec cédille' },
    { glyph: 'Ș', description: 'Lettre majuscule latine S avec virgule souscrite' },
    { glyph: 'T', description: 'Lettre majuscule latine T' },
    { glyph: 'Ŧ', description: 'Lettre majuscule latine T barré' },
    { glyph: 'Ť', description: 'Lettre majuscule latine T avec caron' },
    { glyph: 'Ţ', description: 'Lettre majuscule latine T avec cédille' },
    { glyph: 'Ț', description: 'Lettre majuscule latine T avec virgule souscrite' },
    { glyph: 'U', description: 'Lettre majuscule latine U' },
    { glyph: 'Ú', description: 'Lettre majuscule latine U avec accent aigu' },
    { glyph: 'Ǔ', description: 'Lettre majuscule latine U avec caron' },
    { glyph: 'Û', description: 'Lettre majuscule latine U avec accent circonflexe' },
    { glyph: 'Ü', description: 'Lettre majuscule latine U avec tréma' },
    { glyph: 'Ǘ', description: 'Lettre majuscule latine U avec tréma et accent aigu' },
    { glyph: 'Ǚ', description: 'Lettre majuscule latine U avec tréma et caron' },
    { glyph: 'Ǜ', description: 'Lettre majuscule latine U avec tréma et accent grave' },
    { glyph: 'Ǖ', description: 'Lettre majuscule latine U avec tréma et macron' },
    { glyph: 'Ù', description: 'Lettre majuscule latine U avec accent grave' },
    { glyph: 'Ű', description: 'Lettre majuscule latine U avec double accent aigu' },
    { glyph: 'Ū', description: 'Lettre majuscule latine U avec macron' },
    { glyph: 'Ų', description: 'Lettre majuscule latine U avec ogonek' },
    { glyph: 'Ů', description: 'Lettre majuscule latine U avec anneau' },
    { glyph: 'V', description: 'Lettre majuscule latine V' },
    { glyph: 'W', description: 'Lettre majuscule latine W' },
    { glyph: 'Ẃ', description: 'Lettre majuscule latine W avec accent aigu' },
    { glyph: 'Ŵ', description: 'Lettre majuscule latine W avec accent circonflexe' },
    { glyph: 'Ẅ', description: 'Lettre majuscule latine W avec tréma' },
    { glyph: 'Ẁ', description: 'Lettre majuscule latine W avec accent grave' },
    { glyph: 'X', description: 'Lettre majuscule latine X' },
    { glyph: 'Y', description: 'Lettre majuscule latine Y' },
    { glyph: 'Ý', description: 'Lettre majuscule latine Y avec accent aigu' },
    { glyph: 'Ŷ', description: 'Lettre majuscule latine Y avec accent circonflexe' },
    { glyph: 'Ÿ', description: 'Lettre majuscule latine Y avec tréma' },
    { glyph: 'Ỳ', description: 'Lettre majuscule latine Y avec accent grave' },
    { glyph: 'Z', description: 'Lettre majuscule latine Z' },
    { glyph: 'Ź', description: 'Lettre majuscule latine Z avec accent aigu' },
    { glyph: 'Ž', description: 'Lettre majuscule latine Z avec caron' },
    { glyph: 'Ż', description: 'Lettre majuscule latine Z avec point en chef' },
    { glyph: 'a', description: 'Lettre minuscule latine a' },
    { glyph: 'á', description: 'Lettre minuscule latine a avec accent aigu' },
    { glyph: 'ă', description: 'Lettre minuscule latine a avec brève' },
    { glyph: 'ǎ', description: 'Lettre minuscule latine a avec caron' },
    { glyph: 'â', description: 'Lettre minuscule latine a avec accent circonflexe' },
    { glyph: 'ä', description: 'Lettre minuscule latine a avec tréma' },
    { glyph: 'à', description: 'Lettre minuscule latine a avec accent grave' },
    { glyph: 'ā', description: 'Lettre minuscule latine a avec macron' },
    { glyph: 'ą', description: 'Lettre minuscule latine a avec ogonek' },
    { glyph: 'å', description: 'Lettre minuscule latine a avec anneau' },
    { glyph: 'ã', description: 'Lettre minuscule latine a avec tilde' },
    { glyph: 'æ', description: 'Ligature latine minuscule ae' },
    { glyph: 'b', description: 'Lettre minuscule latine b' },
    { glyph: 'c', description: 'Lettre minuscule latine c' },
    { glyph: 'ć', description: 'Lettre minuscule latine c avec accent aigu' },
    { glyph: 'č', description: 'Lettre minuscule latine c avec caron' },
    { glyph: 'ç', description: 'Lettre minuscule latine c avec cédille' },
    { glyph: 'ċ', description: 'Lettre minuscule latine c avec point en chef' },
    { glyph: 'd', description: 'Lettre minuscule latine d' },
    { glyph: 'ð', description: 'Lettre minuscule latine eth' },
    { glyph: 'ď', description: 'Lettre minuscule latine d avec caron' },
    { glyph: 'đ', description: 'Lettre minuscule latine d barré' },
    { glyph: 'e', description: 'Lettre minuscule latine e' },
    { glyph: 'é', description: 'Lettre minuscule latine e avec accent aigu' },
    { glyph: 'ě', description: 'Lettre minuscule latine e avec caron' },
    { glyph: 'ê', description: 'Lettre minuscule latine e avec accent circonflexe' },
    { glyph: 'ë', description: 'Lettre minuscule latine e avec tréma' },
    { glyph: 'ė', description: 'Lettre minuscule latine e avec point en chef' },
    { glyph: 'è', description: 'Lettre minuscule latine e avec accent grave' },
    { glyph: 'ē', description: 'Lettre minuscule latine e avec macron' },
    { glyph: 'ę', description: 'Lettre minuscule latine e avec ogonek' },
    { glyph: 'f', description: 'Lettre minuscule latine f' },
    { glyph: 'g', description: 'Lettre minuscule latine g' },
    { glyph: 'ğ', description: 'Lettre minuscule latine g avec brève' },
    { glyph: 'ģ', description: 'Lettre minuscule latine g avec cédille' },
    { glyph: 'ġ', description: 'Lettre minuscule latine g avec point en chef' },
    { glyph: 'h', description: 'Lettre minuscule latine h' },
    { glyph: 'ħ', description: 'Lettre minuscule latine h barré' },
    { glyph: 'i', description: 'Lettre minuscule latine i' },
    { glyph: 'í', description: 'Lettre minuscule latine i avec accent aigu' },
    { glyph: 'ǐ', description: 'Lettre minuscule latine i avec caron' },
    { glyph: 'î', description: 'Lettre minuscule latine i avec accent circonflexe' },
    { glyph: 'ï', description: 'Lettre minuscule latine i avec tréma' },
    { glyph: 'ì', description: 'Lettre minuscule latine i avec accent grave' },
    { glyph: 'ī', description: 'Lettre minuscule latine i avec macron' },
    { glyph: 'į', description: 'Lettre minuscule latine i avec ogonek' },
    { glyph: 'j', description: 'Lettre minuscule latine j' },
    { glyph: 'k', description: 'Lettre minuscule latine k' },
    { glyph: 'ķ', description: 'Lettre minuscule latine k avec cédille' },
    { glyph: 'l', description: 'Lettre minuscule latine l' },
    { glyph: 'ĺ', description: 'Lettre minuscule latine l avec accent aigu' },
    { glyph: 'ľ', description: 'Lettre minuscule latine l avec caron' },
    { glyph: 'ļ', description: 'Lettre minuscule latine l avec cédille' },
    { glyph: 'ł', description: 'Lettre minuscule latine l barré' },
    { glyph: 'm', description: 'Lettre minuscule latine m' },
    { glyph: 'n', description: 'Lettre minuscule latine n' },
    { glyph: 'ń', description: 'Lettre minuscule latine n avec accent aigu' },
    { glyph: 'ň', description: 'Lettre minuscule latine n avec caron' },
    { glyph: 'ņ', description: 'Lettre minuscule latine n avec cédille' },
    { glyph: 'ŋ', description: 'Lettre minuscule latine eng' },
    { glyph: 'ñ', description: 'Lettre minuscule latine n avec tilde' },
    { glyph: 'o', description: 'Lettre minuscule latine o' },
    { glyph: 'ó', description: 'Lettre minuscule latine o avec accent aigu' },
    { glyph: 'ǒ', description: 'Lettre minuscule latine o avec caron' },
    { glyph: 'ô', description: 'Lettre minuscule latine o avec accent circonflexe' },
    { glyph: 'ö', description: 'Lettre minuscule latine o avec tréma' },
    { glyph: 'ò', description: 'Lettre minuscule latine o avec accent grave' },
    { glyph: 'ő', description: 'Lettre minuscule latine o avec double accent aigu' },
    { glyph: 'ō', description: 'Lettre minuscule latine o avec macron' },
    { glyph: 'ø', description: 'Lettre minuscule latine o barré' },
    { glyph: 'õ', description: 'Lettre minuscule latine o avec tilde' },
    { glyph: 'œ', description: 'Ligature latine minuscule oe' },
    { glyph: 'p', description: 'Lettre minuscule latine p' },
    { glyph: 'þ', description: 'Lettre minuscule latine thorn' },
    { glyph: 'q', description: 'Lettre minuscule latine q' },
    { glyph: 'r', description: 'Lettre minuscule latine r' },
    { glyph: 'ŕ', description: 'Lettre minuscule latine r avec accent aigu' },
    { glyph: 'ř', description: 'Lettre minuscule latine r avec caron' },
    { glyph: 'ŗ', description: 'Lettre minuscule latine r avec cédille' },
    { glyph: 's', description: 'Lettre minuscule latine s' },
    { glyph: 'ś', description: 'Lettre minuscule latine s avec accent aigu' },
    { glyph: 'š', description: 'Lettre minuscule latine s avec caron' },
    { glyph: 'ş', description: 'Lettre minuscule latine s avec cédille' },
    { glyph: 'ș', description: 'Lettre minuscule latine s avec virgule souscrite' },
    { glyph: 'ß', description: 'Lettre minuscule latine sharp s (eszett)' },
    { glyph: 't', description: 'Lettre minuscule latine t' },
    { glyph: 'ŧ', description: 'Lettre minuscule latine t barré' },
    { glyph: 'ť', description: 'Lettre minuscule latine t avec caron' },
    { glyph: 'ţ', description: 'Lettre minuscule latine t avec cédille' },
    { glyph: 'ț', description: 'Lettre minuscule latine t avec virgule souscrite' },
    { glyph: 'u', description: 'Lettre minuscule latine u' },
    { glyph: 'ú', description: 'Lettre minuscule latine u avec accent aigu' },
    { glyph: 'ǔ', description: 'Lettre minuscule latine u avec caron' },
    { glyph: 'û', description: 'Lettre minuscule latine u avec accent circonflexe' },
    { glyph: 'ü', description: 'Lettre minuscule latine u avec tréma' },
    { glyph: 'ǘ', description: 'Lettre minuscule latine u avec tréma et accent aigu' },
    { glyph: 'ǚ', description: 'Lettre minuscule latine u avec tréma et caron' },
    { glyph: 'ǜ', description: 'Lettre minuscule latine u avec tréma et accent grave' },
    { glyph: 'ǖ', description: 'Lettre minuscule latine u avec tréma et macron' },
    { glyph: 'ù', description: 'Lettre minuscule latine u avec accent grave' },
    { glyph: 'ű', description: 'Lettre minuscule latine u avec double accent aigu' },
    { glyph: 'ū', description: 'Lettre minuscule latine u avec macron' },
    { glyph: 'ų', description: 'Lettre minuscule latine u avec ogonek' },
    { glyph: 'ů', description: 'Lettre minuscule latine u avec anneau' },
    { glyph: 'v', description: 'Lettre minuscule latine v' },
    { glyph: 'w', description: 'Lettre minuscule latine w' },
    { glyph: 'ẃ', description: 'Lettre minuscule latine w avec accent aigu' },
    { glyph: 'ŵ', description: 'Lettre minuscule latine w avec accent circonflexe' },
    { glyph: 'ẅ', description: 'Lettre minuscule latine w avec tréma' },
    { glyph: 'ẁ', description: 'Lettre minuscule latine w avec accent grave' },
    { glyph: 'x', description: 'Lettre minuscule latine x' },
    { glyph: 'y', description: 'Lettre minuscule latine y' },
    { glyph: 'ý', description: 'Lettre minuscule latine y avec accent aigu' },
    { glyph: 'ŷ', description: 'Lettre minuscule latine y avec accent circonflexe' },
    { glyph: 'ÿ', description: 'Lettre minuscule latine y avec tréma' },
    { glyph: 'ỳ', description: 'Lettre minuscule latine y avec accent grave' },
    { glyph: 'z', description: 'Lettre minuscule latine z' },
    { glyph: 'ź', description: 'Lettre minuscule latine z avec accent aigu' },
    { glyph: 'ž', description: 'Lettre minuscule latine z avec caron' },
    { glyph: 'ż', description: 'Lettre minuscule latine z avec point en chef' },
    { glyph: 'fi', description: 'Ligature latine minuscule fi' },
    { glyph: 'fl', description: 'Ligature latine minuscule fl' },
    { glyph: 'ª', description: 'Indicateur ordinal féminin' },
    { glyph: 'º', description: 'Indicateur ordinal masculin' },
    { glyph: '0', description: 'Chiffre zéro' },
    { glyph: '1', description: 'Chiffre un' },
    { glyph: '2', description: 'Chiffre deux' },
    { glyph: '3', description: 'Chiffre trois' },
    { glyph: '4', description: 'Chiffre quatre' },
    { glyph: '5', description: 'Chiffre cinq' },
    { glyph: '6', description: 'Chiffre six' },
    { glyph: '7', description: 'Chiffre sept' },
    { glyph: '8', description: 'Chiffre huit' },
    { glyph: '9', description: 'Chiffre neuf' },
    { glyph: '¹', description: 'Exposant un' },
    { glyph: '²', description: 'Exposant deux' },
    { glyph: '³', description: 'Exposant trois' },
    { glyph: '⁄', description: 'Barre de fraction' },
    { glyph: '.', description: 'Point' },
    { glyph: ',', description: 'Virgule' },
    { glyph: ':', description: 'Deux-points' },
    { glyph: ';', description: 'Point-virgule' },
    { glyph: '…', description: 'Points de suspension' },
    { glyph: '!', description: 'Point d\'exclamation' },
    { glyph: '¡', description: 'Point d\'exclamation inversé' },
    { glyph: '?', description: 'Point d\'interrogation' },
    { glyph: '¿', description: 'Point d\'interrogation inversé' },
    { glyph: '·', description: 'Point médian' },
    { glyph: '•', description: 'Puces ou point médian utilisé pour les listes' },    { glyph: '*', description: 'Astérisque' },
    { glyph: '#', description: 'Dièse' },
    { glyph: '/', description: 'Barre oblique' },
    { glyph: '\\', description: 'Barre oblique inversée' },
    { glyph: '(', description: 'Parenthèse ouvrante' },
    { glyph: ')', description: 'Parenthèse fermante' },
    { glyph: '{', description: 'Accolade ouvrante' },
    { glyph: '}', description: 'Accolade fermante' },
    { glyph: '[', description: 'Crochet ouvrant' },
    { glyph: ']', description: 'Crochet fermant' },
    { glyph: '-', description: 'Trait d\'union' },
    { glyph: '–', description: 'Tiret demi-cadratin' },
    { glyph: '—', description: 'Tiret cadratin' },
    { glyph: '_', description: 'Tiret bas' },
    { glyph: '‚', description: 'Virgule basse' },
    { glyph: '„', description: 'Guillemet bas' },
    { glyph: '“', description: 'Guillemet ouvrant' },
    { glyph: '”', description: 'Guillemet fermant' },
    { glyph: '‘', description: 'Apostrophe ouvrant' },
    { glyph: '’', description: 'Apostrophe fermant' },
    { glyph: '«', description: 'Guillemet français ouvrant' },
    { glyph: '»', description: 'Guillemet français fermant' },
    { glyph: '‹', description: 'Guillemet simple ouvrant' },
    { glyph: '›', description: 'Guillemet simple fermant' },
    { glyph: '»’', description: 'Guillemet français fermant suivi d\'une apostrophe' },
    { glyph: '¢', description: 'Symbole du cent' },
    { glyph: '$', description: 'Symbole du dollar' },
    { glyph: '€', description: 'Symbole de l\'euro' },
    { glyph: 'ƒ', description: 'Symbole du florin' },
    { glyph: '£', description: 'Symbole de la livre sterling' },
    { glyph: '¥', description: 'Symbole du yen' },
    { glyph: '+', description: 'Signe plus' },
    { glyph: '−', description: 'Signe moins' },
    { glyph: '×', description: 'Signe de multiplication' },
    { glyph: '÷', description: 'Signe de division' },
    { glyph: '=', description: 'Signe égal' },
    { glyph: '≠', description: 'Signe différent de' },
    { glyph: '>', description: 'Signe supérieur à' },
    { glyph: '<', description: 'Signe inférieur à' },
    { glyph: '≥', description: 'Signe supérieur ou égal à' },
    { glyph: '≤', description: 'Signe inférieur ou égal à' },
    { glyph: '±', description: 'Signe plus ou moins' },
    { glyph: '≈', description: 'Signe approximativement égal à' },
    { glyph: '~', description: 'Tilde' },
    { glyph: '¬', description: 'Signe de négation' },
    { glyph: '^', description: 'Accent circonflexe' },
    { glyph: '∞', description: 'Symbole de l\'infini' },
    { glyph: '%', description: 'Signe pourcentage' },
    { glyph: '‰', description: 'Signe pour mille' },
    { glyph: '☀', description: 'Symbole du soleil' },
    { glyph: '★', description: 'Étoile pleine' },
    { glyph: '☆', description: 'Étoile vide' },
    { glyph: '☽', description: 'Symbole de la lune croissante' },
    { glyph: '☾', description: 'Symbole de la lune décroissante' },
    { glyph: '♠', description: 'Symbole de pique' },
    { glyph: '♡', description: 'Symbole de cœur' },
    { glyph: '♢', description: 'Symbole de carreau' },
    { glyph: '♣', description: 'Symbole de trèfle' },
    { glyph: '♤', description: 'Symbole de pique vide' },
    { glyph: '♥', description: 'Symbole de cœur plein' },
    { glyph: '♦', description: 'Symbole de carreau plein' },
    { glyph: '♧', description: 'Symbole de trèfle vide' },
    { glyph: '✦', description: 'Étoile à quatre branches pleine' },
    { glyph: '✧', description: 'Étoile à quatre branches vide' },
    { glyph: '✫', description: 'Étoile à cinq branches avec cercle' },
    { glyph: '✬', description: 'Étoile à cinq branches pleine avec cercle' },
    { glyph: '✶', description: 'Étoile à six branches' },
    { glyph: '✷', description: 'Étoile à huit branches' },
    { glyph: '✹', description: 'Étoile à douze branches' },
    { glyph: '@', description: 'Arobase' },
    { glyph: '&', description: 'Esperluette' },
    { glyph: '¶', description: 'Symbole de paragraphe' },
    { glyph: '§', description: 'Symbole de section' },
    { glyph: '©', description: 'Symbole de copyright' },
    { glyph: '°', description: 'Symbole de degré' },
    { glyph: '|', description: 'Barre verticale' },
    { glyph: '¦', description: 'Barre verticale discontinue' },
    { glyph: '†', description: 'Croix de obèle' },
    { glyph: '‡', description: 'Double croix de obèle' }
];

const asciiGrid = document.querySelector(".asciiGrid");
const bigLetter = document.getElementById("big-letter");
const letterDesc = document.createElement("p");
letterDesc.textContent = "Sélectionnez un glyphe pour voir son explication.";
document.querySelector(".letter-precision").appendChild(letterDesc);

// Fonction pour supprimer la classe "selected" de tous les glyphes
function clearSelected() {
    const selectedItems = document.querySelectorAll(".ascii-grid-item.selected");
    selectedItems.forEach(item => item.classList.remove("selected"));
}

glyphs.forEach(glyph => {
    const div = document.createElement("div");
    const span = document.createElement("span");
    div.classList.add("ascii-grid-item", "basteleur");
    span.textContent = glyph.glyph;

    div.onclick = () => {
        // Supprimer la classe "selected" de tous les glyphes
        clearSelected();

        // Ajouter la classe "selected" au glyphe cliqué
        div.classList.add("selected");

        // Mettre à jour le contenu de bigLetter et letterDesc
        bigLetter.textContent = glyph.glyph;
        letterDesc.textContent = glyph.description;
    };

    div.appendChild(span);
    asciiGrid.appendChild(div);
});
// const listAsciiGrid = [
//     { name: "ASCII", start: 33, end: 126, off: "", id: "ascii" },
//     { name: "Latin Extended A", start: 0x0100, end: 0x017F, off: "", id: "latin-extended-a" },
//     // { name: "Latin Extended B", start: 0x0180, end: 0x024F, off: "", id: "latin-extended-b" },
//     { name: "Greek and Coptic", start: 0x0391, end: 0x03CE, off: "", id: "greek-coptic" },
//     // { name: "Cyrillic", start: 0x0400, end: 0x04FF, off: "", id: "cyrillic" },
//     // Ajouter d'autres extensions Unicode si nécessaire
// ];

// // Sélectionne l'élément où ajouter les caractères

// // Fonction pour générer les caractères à partir des codes Unicode
// const lettterGrid = document.getElementById("lettter-grid");
// listAsciiGrid.map((item, index) => {
//     console.log(index);
//     const letterExplanation = document.createElement("div"); // Créer une div
//     lettterGrid.appendChild(letterExplanation); 

//     const title = document.createElement("h5"); // Créer une div
//     title.classList.add("letter-title"); // Ajouter une classe CSS
//     title.textContent = item.name; // Ajouter le caractère à la div
//     letterExplanation.appendChild(title); // Ajouter la div au conteneur
    
//     const asciiGrid = document.createElement("div"); // Créer une div
//     asciiGrid.classList.add("asciiGrid"); // Ajouter une classe CSS
//     letterExplanation.appendChild(asciiGrid); // Ajouter la div au conteneur
    
//     for (let i = item.start; i <= item.end; i++) {  
//         const char = String.fromCharCode(i); // Convertir le code Unicode en caractère
//         const div = document.createElement("div"); // Créer une div
        
//         div.classList.add("ascii-grid-item"); // Ajouter une classe CSS
//         div.textContent = char; // Ajouter le caractère à la div
//         asciiGrid.appendChild(div); // Ajouter la div au conteneur
//     }

// });


document.addEventListener("DOMContentLoaded", function () {
    const editableText = document.getElementById("editableText");

    const sizeSlider = document.getElementById("sizeSlider");
    const sizeValue = document.getElementById("sizeValue");

    const spacingSlider = document.getElementById("spacingSlider");
    const spacingValue = document.getElementById("spacingValue");

    const lineHeightSlider = document.getElementById("lineHeightSlider");
    const lineHeightValue = document.getElementById("lineHeightValue");

    const justificationButtons = document.querySelectorAll(".justification button");

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
    justificationButtons.forEach(button => {
        button.addEventListener("click", function () {
            let align = button.getAttribute("data-align");

            // Désélectionner tous les autres boutons
            justificationButtons.forEach(btn => {
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
    const defaultLeftButton = document.querySelector(".justification button[data-align='left']");
    defaultLeftButton.classList.add("active");
    defaultLeftButton.style.opacity = "1"; // S'assurer que le bouton "left" est sélectionné par défaut
});



function toggleInfo(id) {
    const infoDiv = document.getElementById(id);
    infoDiv.classList.toggle("open"); // Bascule entre ajouter/retirer la classe "open"
  }


function changeText(buttonNumber) {
    const textElement = document.getElementById('rast-text');
    
    switch(buttonNumber) {
      case 1:
        textElement.innerHTML = "The counters (inner forms) are based on gemometric rules and most counters can be mirrored on at least one axis.";
        break;
      case 2:
        textElement.innerHTML = "The shapes of the counters are designed to create a harmonious balance with the rest of the font.";
        break;
      case 3:
        textElement.innerHTML = "Each counter in the font family serves as a key design element to maintain clarity and readability.";
        break;
      case 4:
        textElement.innerHTML = "The geometric nature of the counters adds a modern and clean feel to the typography.";
        break;
      default:
        textElement.innerHTML = "The counters (inner forms) are based on geometric rules and most counters can be mirrored on at least one axis."; // Default text
    }
  }
  let lastScrollPosition = 0; // Stocke la dernière position de défilement

  window.addEventListener('scroll', function () {
      const bigLetter = document.getElementById('big-letter');
      const scrollPosition = window.scrollY; // Position actuelle du défilement
  
      // Déterminer la direction du défilement
      if (scrollPosition > lastScrollPosition) {
          // Défilement vers le bas : rotation +20 degrés
          bigLetter.style.transform = 'rotate(12deg)';
      } else if (scrollPosition < lastScrollPosition) {
          // Défilement vers le haut : rotation -20 degrés
          bigLetter.style.transform = 'rotate(-12deg)';
      }
  
      // Revenir à 0 degré après un court délai (par exemple, 200ms)
      setTimeout(() => {
          bigLetter.style.transform = 'rotate(0deg)';
      }, 100); // Délai en millisecondes
  
      // Mettre à jour la dernière position de défilement
      lastScrollPosition = scrollPosition;
  });

  document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY-2000;
    
    const mooImage = document.querySelector('.moo img');
    const darImage = document.querySelector('.dar img');
  
    // Parallax effect: Moo image moves upwards, Dar image moves downwards
    mooImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    darImage.style.transform = `translateY(-${scrollPosition * 0.1}px)`;
  });

  const basteleurItems = document.querySelectorAll(".basteleur");
  const button = document.getElementById("changeFont");
  let isBastleurActive = false; // Variable pour suivre l'état actuel
  const textCercle = document.querySelector('.text-cercle');
  const texteDefilement = document.querySelector('.text-defilement');

  button.addEventListener("click", () => {
    console.log(isBastleurActive);
    
    isBastleurActive = !isBastleurActive; // Alterner entre true et false
  
    basteleurItems.forEach(item => {
      item.style.fontFamily = isBastleurActive ? "Basteleur" : "Basteleur-Bold"; // Changer entre deux polices
    });
  
    // Changer le texte du bouton
    button.textContent = isBastleurActive ? "Moonlight" : "Basteleur";
    textCercle.style.display = isBastleurActive ? "none" : "block";
    texteDefilement.style.display = isBastleurActive ? "flex" : "none";
  });