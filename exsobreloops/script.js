// contador de passos interativos
// preciso de 3 variaveis que vai ser do input
// preciso de uma funçao onclick contar()

function contar() {
    let ini = document.getElementById('valorinicial');
    let fim = document.getElementById('valorfinal');
    let passo = document.getElementById('passos');
    let res = document.getElementById('resposta');

        if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
            res.innerHTML = 'Impossível contar!'
        } else {
            res.innerHTML = 'Contando: <br>'
            let i = Number(ini.value); //importante para pegar o valor em numero
            let f = Number(fim.value);
            let p = Number(passo.value);
            if(p <= 0){
                window.alert('Passo inválido! Considerando PASSO 1');
                p = 1
            }
            if(i < f){
            // CONTAGEM CRESCENTE
                for (let c = i; c <= f; c += p){
                    res.innerHTML += ` ${c} \u{1F449}`/*jeito de adicionar emoji*/ } 
            } else {
            // CONTAGEM DECRESCENTE
                for (let c = i; c >= f; c -= p){
                    res.innerHTML += ` ${c} \u{1F449}`
                }
            }
            res.innerHTML += `\u{1F6A9}`
        }
    
}
    


    
       
