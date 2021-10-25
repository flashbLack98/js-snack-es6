/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */


const squadreCalcio = [
    {
        nome: "Inter",
        falliSubiti: 0,
        punti: 0
    },
    {
        nome: "Milan",
        falliSubiti: 0,
        punti: 0
    },
    {
        nome: "Napoli",
        falliSubiti: 0,
        punti: 0
    },
    {
        nome: "Roma",
        falliSubiti: 0,
        punti: 0
    },
];

const squadreNew = [];

function generazioneRandom() {
    return Math.ceil(Math.random() * 10);
}

for (let i = 0; i < squadreCalcio.length; i++) {
    let { nome, falliSubiti, punti } = squadreCalcio[i];
    squadreCalcio[i].falliSubiti = generazioneRandom();
    squadreCalcio[i].punti = generazioneRandom();
    falli = squadreCalcio[i].falliSubiti;
    punti = squadreCalcio[i].punti;


    const squadra = { nome, punti };
    squadreNew.push(squadra);


}
console.log("questa è il vecchio array", squadreCalcio);
console.log("questa è il nuovo array", squadreNew);



