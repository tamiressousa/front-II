   // Opcoes de jogadas: 1 = pedra, 2 = papel, 3 = tesoura
   var jogador = prompt ('Qual o seu nome?')
   var jogadaUsuario = prompt ("O que voce deseja jogar? 1 = pedra, 2 = papel, 3 = tesoura")
   var jogadaUsuarioConvertida = Number(jogadaUsuario)
   var jogadaScript = Math.floor(Math.random() * 3) + 1
   var vencedorPartida = 

   console.log('Jogada usuario: ' + jogadaUsuarioConvertida)
   console.log('Jogada script: ' + jogadaScript)

   if (jogadaUsuarioConvertida === jogadaScript) {
     alert("Empatou")
   } else {

     if(jogadaUsuarioConvertida === 1) {
         if(jogadaScript === 2) {
             alert('Voce perdeu')
         } else {
             alert('Voce ganhou')
         }
     }
   }

   if(jogadaUsuarioConvertida === 2) {
       if(jogadaScript === 1) {
         alert('Voce ganhou')
       } else {
         alert('Voce perdeu')
       }
   }

   if(jogadaUsuarioConvertida === 3) {
     if(jogadaScript === 2) {
       alert('Voce ganhou')
     } else {
       alert('Voce perdeu')
     }
   }

   function vencedor(){
    
   }
