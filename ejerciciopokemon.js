// Codear dos objetos asignados a las variables Pikachu y Charmander. Cada uno tiene tres propiedades: nombre, vida y ataque.
// nombre es un string, vida y ataque son números.

var jugador1 = prompt('Elegí a tu Pokemon: Pikachu o Charmander', '')
jugador1 = jugador1.toLowerCase();
var jugador2 = prompt('Elegí a tu Pokemon: Pikachu o Charmander', '')
jugador2 = jugador2.toLowerCase();

var pokemones = [
    {
        nombre: 'pikachu',
        vida: 200,
        ataque: 20,
        atacar: function (atacado) {
            atacado.vida -= this.ataque
        }
    },
    {
        nombre: 'charmander',
        vida: 200,
        ataque: 5,
        atacar: function (atacado) {
            atacado.vida -= this.ataque
        }
    },
    {
        nombre: 'bulbasaur',
        vida: 200,
        ataque: 15,
        atacar: function (atacado) {
            atacado.vida -= this.ataque
        }
    },
]


for (var i = 0; i < pokemones.length; i++) {
    console.log(pokemones[i])
    if (jugador1 === pokemones[i].nombre) {
        console.log("jugadorUno tiene asignado un pokemon")
        jugador1 = pokemones[i]
    }


    if (jugador2 === pokemones[i].nombre) {
        console.log("jugadorDos tiene asignado un pokemon")
        jugador2 = pokemones[i]
    }
}

jugador1.atacar(jugador2)
jugador2.atacar(jugador1)


while (pikachu.vida !== 0 && charmander.vida !== 0 && bulbasaur.vida !== 0) {

    jugador1.atacar(jugador2)
    console.log('La vida de', jugador2.nombre, 'ahora es', jugador2.vida);
    jugador2.atacar(jugador1);
    console.log('La vida de', jugador1.nombre, 'ahora es', jugador1.vida);
}

if (jugador1.vida === 0) {
    console.log(jugador2.nombre + ' ha ganado la partida');
    alert(jugador2.nombre + ' ha ganado la partida')
} else {
    console.log(jugador1.nombre + ' ha ganado la partida');
    alert(jugador1.nombre + ' ha ganado la partida')
}