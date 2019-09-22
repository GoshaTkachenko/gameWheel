

// Универсальная функция взятия нашего рандомного числа
function getRandom() {

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max - min);
        return Math.round(rand);
    }

    let randomDigit = randomInteger(1, 100);
    let countStep;
    
    if (randomDigit >= 0 && randomDigit <= 30) {
        countStep = 1;
    } else if (randomDigit >= 31 && randomDigit <= 60) {
        countStep = 2;
    } else if (randomDigit >= 61 && randomDigit <= 80) {
        countStep = 3;
    } else if (randomDigit >= 81 && randomDigit <= 100) {
        countStep = 4;
    };

    return countStep;
}


let countBite = 1;
let resultBite = '';

function bite() {
    let randomStep = getRandom();

    if (randomStep === 2) {
        countBite++
        bite();

    } else if (randomStep === 1) {
        resultBite = 'убегаете на ' + getRandom() + ' шагов';

    } else if (randomStep === 3) {
        if (coldWeapon) {
            resultBite = 'применяете холодное оружие.';
        } else {
            bite();
        }
        
    } else if (randomStep === 4) {
        if (autoWeapon) {
            resultBite = 'применяете огнестрельное оружие.';
        } else {
            bite();
        }

    }

    return 'Вас укусили ' + countBite + ' раз. Затем вы ' + resultBite;
}

function fight() {
    let result;

    let rnd = getRandom;
    
    if (rnd === 1) {
        result = 'Вы убегаете ' + getRandom() + ' шага';
    
    } else if (rnd === 2) {
        result = 'Вас укусили ' + bite() + 'раз(а)';
        
    } else if (rnd === 3) {
        result = 'Вы используете холодное оружие';
    
    } else if (rnd === 4) {
        result = 'Вы используете авто оружие ';
    };

    return result;
}

let result;
let mode = 'fight'; // 'run'
let coldWeapon = false;
let autoWeapon = false;

if (mode == 'run') {
    result = 'Вы ходите на ' + run() + ' шага';

} else if (mode == 'fight') {
     result = fight();

}

console.log(bite());