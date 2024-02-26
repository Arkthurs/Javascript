/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

// 1.00 € = 1.08 $

let eurai = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;  // Sugeneruojam nuo 1 iki 1000 skaičių
let kursas = 1.08

function pinigu_keitimas(eurai, kursas) {
    let doleriai = eurai * kursas  // 1 Euras keiciasi i 1.08 $
    console.log(`${doleriai.toFixed(2)}$`)  // Išvedus palieka du skaicius po kablelio
}

pinigu_keitimas(eurai, kursas)


/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

let doleriai = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;  // Sugeneruojam nuo 1 iki 1000 skaičių
let kursas2 = 0.92

function pinigu_keitimas2(doleriai, kursas2) {
    let eurai = doleriai * kursas2  // 1 $ keiciasi i 0.92 €
    console.log(`${eurai.toFixed(2)}€`)  // Išvedus palieka du skaičius po kablelio
}

pinigu_keitimas2(doleriai, kursas2)


/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

let ugis = 1.75
let svoris = 87
let virssvoris = 25
let normalus = 18.5

function bmiSkaiciuokle(ugis, svoris, virssvoris, normalus) {
    let bmi = svoris / (ugis**2)
    if (bmi > virssvoris) {
        return `Jūsų BMI (${bmi.toFixed(2)}) - Viršsvoris`
    }
    else if (bmi < virssvoris && bmi >= normalus) {
        return `Jūsų BMI (${bmi.toFixed(2)}) - Normalus`
    }
    else {
        return `Jūsų BMI (${bmi.toFixed(2)}) - Per mažas svoris`
    }
}

let rezultatas = bmiSkaiciuokle(ugis, svoris, virssvoris, normalus)
console.log(rezultatas)


/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/

let amzius = 28
let dienu = 365
let paraH = 24
let sekundesMinutej = 60

function amziausKeitimas_s_m_h(amzius, dienu, paraH, sekundesMinutej) {
    let sekundes = amzius * dienu * paraH * (sekundesMinutej**2)
    let minutes = amzius * dienu * paraH * sekundesMinutej
    let valandos = amzius * dienu * paraH
        return `Sekundės: ${sekundes}, Minutės: ${minutes}, Valandos: ${valandos}`
}

let amziusRezultatas =  amziausKeitimas_s_m_h(amzius, dienu, paraH, sekundesMinutej)
console.log(amziusRezultatas)


/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

// Farenheit to Celsius : (32°F − 32) × 5/9
// Celsius to Farenheit : (32°C × 9/5) + 32

function farenheito_to_celsijus_converteris(farenheitas) {
    celsijus = (farenheitas - 32) * 5/9
    return celsijus
}

function celsijus_to_farenheito_converteris(celsijus) {
    farenheitas = (celsijus * 9/5) + 32
    return farenheitas
}

// Variantas su ivestais skaiciais
let celsijus = 25
let farenheitas = 32

let atsakymas_to_celsijus = farenheito_to_celsijus_converteris(farenheitas)
console.log(atsakymas_to_celsijus.toFixed(0) + '°C')
let atsakymas_to_farenhaitas = celsijus_to_farenheito_converteris(celsijus)
console.log(atsakymas_to_farenhaitas.toFixed(0) + '°F')
//

/* Variantas naudojant prompt()
// let variant = prompt("Norite konvertuoti 'Celsiju' ar 'Farenhaita'? ")
// if (variant == 'Celsiju') {
//     let celsijus = prompt("Pateikite celcijaus verte ")
//     let atsakymas = celsijus_to_farenheito_converteris(celsijus)
//     console.log(atsakymas.toFixed(0) + '°F')
// } 
// else if (variant == 'Farenhaita') {
//     let farenheitas = prompt("Pateikite farenhaito verte ")
//     let atsakymas = farenheito_to_celsijus_converteris(farenheitas)
//     console.log(atsakymas.toFixed(0) + '°C')
// }
// else {
//     console.log('Blogas pasirinkimas')
// }
*/


/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

let tekstas = ""
let i = 1
let skaiciuKiekis = 10

while(i <= skaiciuKiekis) {
    if (i < skaiciuKiekis) {
        tekstas += `${i}-`
        i++
    }
    else {
        tekstas += `${i}`
        i++
    }
}
console.log(tekstas)


/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

let zvaigzdutes = ""

for(let j = 0; j < 5; j++) {
    console.log(zvaigzdutes += "*")
}


/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

let Data = new Date()

let dienu_iki_kaledu = Math.round((new Date(2024, 11, 25) - Data) / 86400000)

console.log(dienu_iki_kaledu)


/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

const masyvas = ['Tomas', 'Dainius', 'Paulius', 'Jonas']

let variantas1 = masyvas.join(',')
let variantas2 = masyvas.join('+')

console.log(`${variantas1}\n${variantas2}`)


/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/

let N = 12
let n = 0
const raidziuMasyvas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z']
const simboliuMasyvas = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '_', '+', '?', ',', '.', '/', ':', ';', '"', '`', '{', '}', '[', ']']
let slaptazodis = ""
let containsBigLetter = 0
let containsSmolLetter = 0
let containsNumber = 0
let containsSpecial = 0

function password_generator(slaptazodis, n, raidziuMasyvas, simboliuMasyvas, containsBigLetter, containsSmolLetter, containsNumber, containsSpecial) {
    for (n = 0; n < N; n++) {
        switch(Math.floor(Math.random() * 4)) {  // Naudojamas switch, kad pasirinkti viena is 4 variantu, paprasciau nei naudoti IFs
            case 0:
                slaptazodis += raidziuMasyvas[Math.floor(Math.random()*raidziuMasyvas.length)]
                containsBigLetter++
                break
            case 1:
                slaptazodis += simboliuMasyvas[Math.floor(Math.random()*simboliuMasyvas.length)]
                containsSpecial++
                break
            case 2:
                slaptazodis += Math.floor(Math.random()*10)
                containsNumber++
                break
            case 3:
                slaptazodis += raidziuMasyvas[Math.floor(Math.random()*raidziuMasyvas.length)].toLowerCase()
                containsSmolLetter++
                break
        }
    }
    // console.log(slaptazodis) // Patikrinimui koks buvo pirminis sugeneruotas slaptazodis
    if (containsBigLetter > 0 && containsSpecial > 0 && containsNumber > 0 && containsSmolLetter > 0) {  // Tikrinimas ar atitinka reikalavimus
        console.log(slaptazodis)
    } 
    else {  // Jei ne viska nunulinti ir generuot is naujo
        password_generator(slaptazodis = "", n = 0, raidziuMasyvas, simboliuMasyvas, containsBigLetter = 0, containsSmolLetter = 0, containsNumber = 0, containsSpecial = 0)
    }
}

password_generator(slaptazodis, n, raidziuMasyvas, simboliuMasyvas, containsBigLetter, containsSmolLetter, containsNumber, containsSpecial)

