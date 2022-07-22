import db from "../database/db.js"
let id = 0

class Dica {
    constructor() {

    }

    tipValida = (tip) => {
        if (tip.length != "") {
            return tip
        } else {
            throw new Error("Inserir dica!")
        }
    }

    tipInsere = (tip) => {
        this.id = id++
        this.tip = this.tipValida(tip)

        db.tip.push(this)
    }

    tipPegar = () => {
        return db.tip[(Math.random() * db.tip.length) | 0]
    }

    tipDeletar = () => {

    }
}

export default Dica;