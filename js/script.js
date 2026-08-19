const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOutput1 = document.getElementById("output-one")
let passwordOutput2 = document.getElementById("output-two")
let copyEl = document.getElementById("copy-text")


function getRandomPassword() {

    passwordOutput1.textContent = ""
    passwordOutput2.textContent = ""

    for (let i = 0; i < 15; i++) {
        let randomItem1 = Math.floor( Math.random() * characters.length )
        passwordOutput1.textContent += characters[randomItem1]
    }

    for (let j = 0; j < 15; j++) {
        let randomItem2 = Math.floor( Math.random() * characters.length )
        passwordOutput2.textContent += characters[randomItem2]
    }
}

function copyPassword(event) {

    const passwordText = event.target.textContent;

    if (!passwordText) {
        copyEl.textContent = "Firstly generate a password!";
        return;
    }

    navigator.clipboard.writeText(passwordText)
        .then(() => {
            copyEl.textContent = "Copied!";
        })
        .catch(err => {
            console.error("Error: ", err);
        });
}

passwordOutput1.addEventListener("click", copyPassword);
passwordOutput2.addEventListener("click", copyPassword);