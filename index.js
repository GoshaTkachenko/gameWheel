

// Универсальная функция взятия нашего рандомного числа
function getRandom() {

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max - min);
        return Math.round(rand);
    }

    let randomDigit = randomInteger(1, 100);
    let result;

    if (randomDigit >= 0 && randomDigit <= 30) {
        result = 1;
    } else if (randomDigit >= 31 && randomDigit <= 60) {
        result = 2;
    } else if (randomDigit >= 61 && randomDigit <= 80) {
        result = 3;
    } else if (randomDigit >= 81 && randomDigit <= 100) {
        result = 4;
    };

    return result;
}


let countBite = 1;
let resultBite = '';

function bite(coldWeapon, autoWeapon) {
    let randomStep = getRandom();

    if (randomStep === 2) {
        countBite++
        bite(coldWeapon, autoWeapon);

    } else if (randomStep === 1) {
        resultBite = 'убегаете на ' + getRandom() + ' шагов.';

    } else if (randomStep === 3) {
        if (coldWeapon) {
            resultBite = 'применяете холодное оружие.';
        } else {
            bite(coldWeapon, autoWeapon);
        }

    } else if (randomStep === 4) {
        if (autoWeapon) {
            resultBite = 'применяете огнестрельное оружие.';
        } else {
            bite(coldWeapon, autoWeapon);
        }
    }

    return 'Вас укусили ' + countBite + ' раз. Затем вы ' + resultBite;
}

let resultFight;

function fight(coldWeapon, autoWeapon) {

    let rnd = getRandom();

    if (rnd === 1) {
        resultFight = 'Вы убегаете ' + getRandom() + ' шага';

    } else if (rnd === 2) {
        resultFight = bite(coldWeapon, autoWeapon);

    } else if (rnd === 3) {
        if (coldWeapon) {
            resultFight = 'Вы используете холодное оружие';
        } else {
            fight(coldWeapon, autoWeapon)
        }

    } else if (rnd === 4) {
        if (autoWeapon) {
            resultFight = 'Вы используете авто оружие ';
        } else {
            fight(coldWeapon, autoWeapon)
        }        
    };

    return resultFight;
}

function main (mode = 'step', coldWeapon, autoWeapon) {    
    if (mode == 'step') {
        return 'Вы ходите на ' + getRandom() + ' шага';
    
    } else if (mode == 'fight') {
        return fight(coldWeapon, autoWeapon);
    }
}


let btn = document.querySelector('#btn');
let resultField = document.querySelector('#resultField');

let modeCoice = document.querySelector('#modeChoice');
let modeChoiceStep = document.querySelector('#step');
let modeChoiceFight = document.querySelector('#fight');

let weaponsChoice = document.querySelector('#weaponsChoice');
let coldWeaponCheck = document.querySelector('#coldWeapon');
let autoWeaponCheck = document.querySelector('#autoWeapon');


modeCoice.addEventListener('click', function(){
    if (modeChoiceStep.checked) {
        weaponsChoice.classList.remove('visible');
        weaponsChoice.classList.add('hide');
    } else {
        weaponsChoice.classList.remove('hide');
        weaponsChoice.classList.add('visible');
    }
});

btn.addEventListener('click', function(){
    let mode = (modeChoiceStep.checked) ? 'step' : 
        (modeChoiceFight.checked) ? 'fight' :
            'step';

    resultField.innerText = main(mode, coldWeaponCheck.checked, autoWeaponCheck.checked);
});
