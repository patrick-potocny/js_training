const result = document.getElementById('result')
const victorySound = document.getElementById('victory')



// eslint-disable-next-line no-unused-vars
function reset() {
    location.reload()
}

function updateDOM(player){
    const playerName = player.id
    document.getElementById(`${playerName}Health`).innerText = player.health
}


class Player {
    constructor(name, id){
        this.name = name
        this.id = id
        this.health = 100
    }

    endGame(winner) {
        result.innerText = `${winner} WON!`
        victorySound.play()
    }

    attack(player) {
        player.health -= Math.floor(Math.random() * 20);
        updateDOM(player)
        document.getElementById(`${this.id}attack`).play()
        if (player.health <= 0) {
            this.endGame(this.name)
        }
    }

    heal(player) {
        // stops playing the sound when player has full health
        if (player.health == 100) {
            return
        } else {
            player.health += Math.floor(Math.random() * 20);
            // stops the health from going over 100
            player.health = player.health > 100 ? 100 : player.health
            updateDOM(player)
            document.getElementById(`${this.id}heal`).play()
        }
    }
}


let p1 = new Player('Player 1', 'p1');
let p2 = new Player('Player 2', 'p2');

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'q':
            p1.attack(p2)
            break;
        case 'a':
            p1.heal(p1)
            break;
        case 'p':
            p2.attack(p1)
            break;
        case 'l':
            p2.heal(p2)
            break;
        default:
            break;
    }
})

