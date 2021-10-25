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
    },
    {
        nome: "Lotus",
        peso: 1
    }

];


function confrontoBici(lista) {
    const pesoBici = [];

    for (i = 0; i < lista.length; i++) {
        const { peso } = lista[i];
        pesoBici.push(peso);


        //devo stampare la bici con il peso minore

    }
    const pesoMin = Math.min(...pesoBici);
    console.log("questo è il peso minore dele bici", pesoMin);

    for (let i = 0; i < lista.length; i++) {
        const bici = lista[i];

        if (pesoMin === bici["peso"]) {
            return bici;
        }
    }

}


console.log("questa è la lista delle bici ", listaBici);

confrontoBici(listaBici);
console.log(`la bici più leggera è la ${confrontoBici(listaBici).nome} e pesa ${confrontoBici(listaBici).peso} kg`);







