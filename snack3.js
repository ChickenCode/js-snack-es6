const arrIniziale = [ 1, 3, 5, 45, 18, 36, 12, 18, 65, 121, 87, 635];

alert("Il programma ti chierà di inserire due numeri.")
alert("Il primo dovra essere più piccolo del secondo.")
alert("Alla fine, il programma ti restiturià tutti i numeri il cui indice all'interno dell'array presente al suo interno stanno tra il primo numero digitato, e is secondo (entrambi compresi)")
alert("Bada bene, l'array ha " + arrIniziale.length + " indici, e si inizia e contare dallo 0")

var a = parseInt(prompt("Incerisci ora il primo numero (il più piccolo dei due)"))
var b = parseInt(prompt("inserisci ora il secondo numero (il più grande dei due)"))

const arrFiltrato = arrIniziale.filter((element, index) => {
    if (index >= a && index <= b) {
        return true
    }

    return false
})

console.log(arrFiltrato)
alert(`I numeri compresi tra gli indici da te digitati sono ${arrFiltrato}`)