let biciclette = [

    bici1 = {
        nome: "Bianchi",
        peso: 20
    } ,

    bici2 = {
        nome: "Rossi",
        peso: 21
    } ,

    bici3 = {
        nome: "Gialli",
        peso: 12
    } ,

    bici4 = {
        nome: "Turchesi",
        peso: 16
    } ,

    bici5 = {
        nome: "Verdi",
        peso: 19
    } 
]

let biciclettaLeggera = biciclette[0]

for (i = 0; i < biciclette.length; i++) {
    if (biciclette[i].peso < biciclettaLeggera.peso) {
        biciclettaLeggera = biciclette[i]
    }
}

console.log(biciclettaLeggera)

var {nome, peso} = biciclettaLeggera

console.log(`La bicicletta più leggera è la ${nome}, visto che pesa ${peso} kg`)