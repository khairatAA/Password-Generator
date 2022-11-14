const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let passwordLength = document.getElementById("password-length")
let numberEl = document.getElementById("number")
let symbolEl = document.getElementById("symbols")
let resultEl1 = document.getElementById("result 1")
let resultEl2 = document.getElementById("result 2")
let letterEl = document.getElementById("words")
let PasswordEl = document.getElementById("Password-el")

const randomFunc = {
    alphabet: getAlphabet,
    number: getNumber,
    symbol: getSymbol
};

PasswordEl.addEventListener('click', function () {
    const length = +passwordLength.value;
    const hasAlphabet = letterEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;
    resultEl1.innerText = generatePassword(hasAlphabet,hasNumber,hasSymbol,length);
})

resultEl1.addEventListener("click", function () {
    const textarea = document.createElement('textarea');
    const password = resultEl1.innerText

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    alert("Password copied to clipboard");
});

resultEl2.addEventListener("click", function () {
    const textarea = document.createElement('textarea');
    const password = resultEl2.innerText

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    alert("Password copied to clipboard");
});


function generatePassword(alphabet, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = alphabet + number + symbol;
    // console.log("typesCount: ", typesCount);
    const typeArr = [{ alphabet }, { number }, { symbol }].filter
    (
        item => Object.values(item)[0]
    );
    // console.log("typeArr: ", typeArr)

    if (typesCount===0) {
        return '';
    }

    for (let i = 0; i < length; i+= typesCount) {
        typeArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            // console.log("funcName: ", funcName);

            generatedPassword += randomFunc[funcName]();
        });
    }
    const finalPassword = (generatedPassword.slice(0, length));
    return finalPassword
}



PasswordEl.addEventListener('click', function (){
    const length2 = +passwordLength.value;
    const hasAlphabet2 = letterEl.checked;
    const hasNumber2 = numberEl.checked;
    const hasSymbol2 = symbolEl.checked;
    resultEl2.innerText = generatePassword2(hasAlphabet2,hasNumber2,hasSymbol2,length2)
})
function generatePassword2(alphabet, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = alphabet + number + symbol;
    // console.log("typesCount: ", typesCount);
    const typeArr = [{ alphabet }, { number }, { symbol }].filter
    (
        item => Object.values(item)[0]
    );
    // console.log("typeArr: ", typeArr)

    if (typesCount===0) {
        return '';
    }

    for (let i = 0; i < length; i+= typesCount) {
        typeArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            // console.log("funcName: ", funcName);

            generatedPassword += randomFunc[funcName]();
        });
    }
    const finalPassword = (generatedPassword.slice(0, length));
    return finalPassword
}


function getAlphabet() {
    let alphabetEl = Math.floor(Math.random() * alphabet.length)
    return alphabet[alphabetEl]
}

function getNumber() {
    let genNumber = Math.floor(Math.random() * numbers.length)
    return numbers[genNumber]
}

function getSymbol() {
    let genSymbol = Math.floor(Math.random() * symbols.length)
    return symbols[genSymbol]
}
