console.clear();
const prompt = require('prompt-sync')();

let usuario = 0
let computador = 0
let empate = 0


jokenpo()

function jokenpo(){
let rodadas = +prompt('Quantas Rodadas iremos jogar? ');

    for(let i = 0; i < rodadas; i++ ){
   let user = +prompt(' \033[0;32m\Escolha um elemento, sendo 1-Pedra, 2-Papel, e 3-Tesoura: '); 
   console.log()   
   if(user == 1) {
          console.log('\033[0;33mVocê escolheu Pedra!')
      } else if(user == 2){
        console.log('\033[0;33mVocê escolheu Papel!')
      } else{
        console.log('\033[0;33mVocê escolheu Tesoura!')
      }
      console.log()
      let pc = Math.floor(Math.random() * 3+1)
      if(pc == 1) {
        console.log('\033[0;34m\O computador escolheu Pedra!')
    } else if(pc == 2){
      console.log('\033[0;34m\O computador escolheu Papel!')
    } else{
      console.log('\033[0;34m\O computador escolheu Tesoura!')
    }
    console.log()

if(user ==1 && pc == 2 || user == 3 && pc == 1 || user == 2 && pc == 3){
    console.log('\033[0;31m\O computador venceu.')
    computador++
    console.log()
} else if(pc ==1 && user == 2 || pc == 3 && user == 1 || pc == 2 && user == 3){
    console.log('\033[0;31m\O usuário venceu.')
    usuario++
    console.log()
  } else if (user === 1 && pc === 1 || user === 2 && pc === 2 || user === 3 && pc === 3) {
    console.log('\033[0;35m\Empate!')
    empate++
    console.log()
  }
 }
}
console.log()
if(usuario > computador) {
  console.log('RESULTADO: O usuário é o grande vencedor, com: ', usuario, ' ponto(s).')
} else if(usuario < computador) {
  console.log('RESULTADO: O computador é o grande vencedor, com: ', computador, ' ponto(s).')
} else if (usuario === computador ) {
  console.log('RESULTADO: Não houve vencedor, deu empate')
}

let jogarnovamente = +prompt('\033[0;32m\Gostaria de jogar mais uma partida? 1 para SIM / ou aperte outra tecla para sair')
console.log ( "\033[1;36m" )

if (jogarnovamente === 1) {
  jokenpo()
} else {
  console.log('Até uma próxima!')
}
