let storage = window.localStorage;
storage.setItem("police", "18");

storage.setItem("type", "Material");

storage.setItem("theme", "Black");

let value = storage.getItem("police");
console.log(value);

let value2 = storage.getItem("type");
console.log(value2);

let value3 = storage.getItem("theme");
console.log(value3);

function afficheText() {
    document.getElementById("result").innerHTML = "Le thème de l'utilisateur est " + value3;
    console.log("Thème " + value3 + ", type " + value2 + " et " + "police de caractères " + value + " px");
}

afficheText()

storage.setItem("police", "32");
value = storage.getItem("police");

storage.setItem("type", "Coton");
value2 = storage.getItem("type");

storage.setItem("theme", "Red");
value3 = storage.getItem("theme");

afficheText();