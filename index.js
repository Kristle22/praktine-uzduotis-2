// 1.
console.log('-------------------------')
let a = 6;
let b = 6;

if (a > b) {
    console.log('Skaicius a yra didesnis uz skaiciu b.');
} else if (a < b) {
    console.log('Skaicius a yra mazesnis uz skaiciu b.');
} else {
    console.log('Abu skaiciai yra lygus');
}

// 2.
console.log('-------------------------')
for (i = 1; i < 11; i++) {
    console.log(i);
}

// 3.
console.log('-------------------------')
for (i = 0; i < 11; i+=2) {
    console.log(i);
}

// 4.
console.log('-------------------------')
let random;
for (i = 0; i < 10; i++) {
    random = Math.floor(Math.random()* 10) +1;
    console.log(random);
}

// 5.
console.log('-------------------------')

let rand;
while (rand !== 5) {
    rand = Math.floor(Math.random()*10) + 1;
    console.log(rand);
}

// 6.
console.log('-------------------------')

let masIlgis = 25;
const masyvas = [];
let randNumber;
let maxNumber = 10;
for (let i = 0; i < masIlgis; i++) {
    randNumber = Math.floor(Math.random()*(30 - 10 + 1) + 10);
    masyvas.push(randNumber);
    let number = masyvas[i];
    if (number > maxNumber) {
        maxNumber = number;
    }
}
console.log(masyvas);
console.log(maxNumber);

// 7.
console.log('-------------------------')

const masyvas2 = [];
const raides = 'ABCD'.split('');

let index;
let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;
for (i = 0; i < 100; i++) {
    index = Math.floor(Math.random()*4);
    masyvas2.push(raides[index]);
    if (masyvas2[i] === 'A') {
        countA++;
    }
    if (masyvas2[i] === 'B') {
        countB++;
    }
    if (masyvas2[i] === 'C') {
        countC++;
    }
    if (masyvas2[i] === 'D') {
        countD++;
    }
}
console.log(masyvas2);
console.log(`Siame masyve raidziu 'A': ${countA}, 'B': ${countB}, 'C': ${countC}, 'D': ${countD}.`);

// 8.
console.log('-------------------------')

function lygineSuma (reiksme1, reiksme2) {
    if (typeof reiksme1 === 'number' && typeof reiksme2 !== 'number' || typeof reiksme2 === 'number' && typeof reiksme1 !== 'number') {
        console.log('Abu kintamieji turi buti skaiciai');
    }
    if (typeof reiksme1 === 'object' && typeof reiksme2 !== 'object' || typeof reiksme2 === 'object' && typeof reiksme1 !== 'object') {
        console.log('Abu kintamieji turi buti masyvai');
    }
    if (typeof reiksme1 === 'number' && typeof reiksme2 === 'number') {
        let sum = reiksme1 + reiksme2;
        if (sum % 2) {
            return 'Abieju kintamuju suma yra nelygine';
        } else {
            return sum;
        }
    }
    if (typeof reiksme1 === 'object' && typeof reiksme2 === 'object') {
        let sum = reiksme1.length + reiksme2.length;
        if (sum % 2) {
            return 'Abieju kintamuju reiksmiu suma yra nelygine';
        } else {
            return sum;
        }
    }
}
console.log(lygineSuma(5, 8));

// 9.
console.log('-------------------------')

function pirminisSkaicius (skaicius) {
    if (typeof skaicius !== 'number' && !isFinite(skaicius)) {
        console.log('Kintamasis turi buti tikras skaicius.')
    }
    if (skaicius === 2) {
        return true;
    } else if (skaicius > 1) {
        for (let i = 2; i < skaicius; i++) {
            if (skaicius % i) {
                return true;
            } else if (skaicius === i*i) {
                return false
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}

console.log(pirminisSkaicius(13));

// 10.
console.log('-------------------------')

function telefonoNumeris (numeris) {

    if (typeof(numeris) !== 'object' || !Array.isArray(numeris)) {
        console.log('Prasau iveskite skaiciu masyva.');
    } else if (numeris.length < 10 || numeris.length > 10) {
        console.log('Masyve turi buti 10 skaitmenu.');
    } else {
        return `(${numeris[0]}${numeris[1]}${numeris[2]}) ${numeris[3]}${numeris[4]}${numeris[5]}-${numeris[6]}${numeris[7]}${numeris[8]}${numeris[9]}`;
    }
}

console.log(telefonoNumeris([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));