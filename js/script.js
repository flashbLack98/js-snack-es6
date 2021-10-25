/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */

const listaBici = [
    {
        nome: "Bici da montagna",
        peso: 13
    },
    {
        nome: "Graziella",
        peso: 15
    },
    {
        nome: "Riot",
        peso: 5
    },
    {
        nome: "Yonshu",
        peso: 4
    }

];


function confrontoBici(...listaBici) {
    for (i = 0; i < listaBici.length; i++) {
        const { peso } = listaBici[i];
        pesoBici.push(peso);


        //devo stampare la bici con il peso minore

    }

}


const pesoBici = [];

console.log("questa è la lista delle bici ", listaBici);

confrontoBici(...listaBici);


console.log("questo è il peso minore dele bici", Math.min(...pesoBici));




