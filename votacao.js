var h_vote = 0
var l_vote = 0
var z_vote = 0
var res = document.getElementById('res')

    function votar() {
    var vote = document.getElementById('numV').value
        if (vote > 3 || vote < 0){
            window.alert('Voto inválido! Digite seu voto corretamente, de acordo com o número das coligações')
        } else if (vote == 1) {
                    h_vote = h_vote + 1
                } else if (vote == 2){
                    l_vote = l_vote + 1
                    } else if (vote == 3){
                        z_vote = z_vote + 1
                    }
        res.innerHTML = `Os votos de Huguinho foram ${h_vote} <br> Os votos de Luizinho foram ${l_vote} <br> Os votos de Zezinho foram ${z_vote}`
        document.getElementById('numV').value = ''            
    }
    function resultado(){
        var resT = document.getElementById('resT')
        var lista = document.getElementById('lista')
        if (h_vote > l_vote && z_vote){
            resT.innerHTML = `O novo presidente do Brasil é <strong>Huginho</strong>, com ${h_vote} votos!<br><img src="hugo-pres.png" alt="Huguinho">`
        } else if (l_vote > h_vote && z_vote){
            resT.innerHTML = `O novo presidente do Brasil é <strong>Luizinho</strong>, com ${l_vote} votos!<br><img src="luis-pres.png" alt="Huguinho">`
        } else if (z_vote > h_vote && l_vote) {
            resT.innerHTML = `O novo presidente do Brasil é <strong>Zezinho</strong>, com ${z_vote} votos!<br><img src="ze-pres.png" alt="Huguinho">`
        }
    }
        
                