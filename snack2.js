let squadre = [
    squadra1 = {
        nome: "Milan",
        punti_fatti: 0,
        falli_subiti: 0
    },

    squadra2 = {
        nome: "Inter",
        punti_fatti: 0,
        falli_subiti: 0
    },

    squadra3 = {
        nome: "Juventus",
        punti_fatti: 0,
        falli_subiti: 0
    },

    squadra4 = {
        nome: "Casalpusterlengo",
        punti_fatti: 0,
        falli_subiti: 0
    }
]


const nomiFalli = [] 


for (i = 0; i < squadre.length; i++) {
    squadre[i].punti_fatti = Math.floor(Math.random() * 11)
    squadre[i].falli_subiti = Math.floor(Math.random() * 11)
}

for (key in squadre) {
    let {nome, falli_subiti} = squadre[key]

    nomiFalli.push(nome, falli_subiti)
}

console.log(nomiFalli)






