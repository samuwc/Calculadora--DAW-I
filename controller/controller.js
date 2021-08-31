async function abreCalculadora(req, res) {
    res.render("calculadora.ejs", {})
}

async function abreResultado(req, res) {
    var resultado
    if(req.body.op=='adi'){
        resultado = parseInt(req.body.num1) + parseInt(req.body.num2)
    }
    else if(req.body.op=='sub'){
        resultado = parseInt(req.body.num1) - parseInt(req.body.num2)
    }
    else if(req.body.op=='mul'){
        resultado = req.body.num1 * req.body.num2
    }
    else{
        resultado = req.body.num1 / req.body.num2
    }
    res.render("resultado.ejs", {resultado})
}

module.exports = {
    abreCalculadora,
    abreResultado}