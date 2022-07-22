import Tips from "../model/model.js"

const controllerDicas = (app) => {

    app.get('/tips', (req, res) => {
        const tip = new Tips()

        res.json({
            "msg": tip.tipPegar()
        })
    })

    app.post('/tips ', (req, res) => {
        const body = req.body
        const tip = new Tips()
        tip.tipInsere(body.tip)
        res.json(tip)

    })
}

export default controllerDicas