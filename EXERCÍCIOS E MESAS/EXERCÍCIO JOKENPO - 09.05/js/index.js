   // Opcoes de jogadas: 1 = pedra, 2 = papel, 3 = tesoura
   var jogador = prompt ('Qual o seu nome?')
   var jogadaUsuario = prompt ("O que voce deseja jogar? 1 = pedra, 2 = papel, 3 = tesoura")
   var jogadaUsuarioConvertida = Number(jogadaUsuario)
   var jogadaScript = Math.floor(Math.random() * 3) + 1
   var vezesUsuario = 0
   var vezesScript = 0

   console.log('Jogada usuario: ' + jogadaUsuarioConvertida)
   console.log('Jogada script: ' + jogadaScript)

   if (jogadaUsuarioConvertida === jogadaScript) {
     alert("Rodada Empatda")
   } else {

     if(jogadaUsuarioConvertida === 1) {
         if(jogadaScript === 2) { 
          alert('Voce perdeu a rodada')
          vezesScript++
         } else {
            alert('Voce ganhou a rodada')
          vezesUsuario++
         }
     }
   }

   if(jogadaUsuarioConvertida === 2) {
       if(jogadaScript === 1) {
         alert('Voce ganhou a rodada')
         vezesUsuario++
       } else {
         alert('Voce perdeu a rodada')
         vezesScript++
       }
   }

   if(jogadaUsuarioConvertida === 3) {
     if(jogadaScript === 2) {
       alert('Voce ganhou a rodada')
       vezesUsuario++

     } else {
       alert('Voce perdeu a rodada')
       vezesScript++

     }
   }

   function quantidadeVitoriasUsuario(vezesUsuario){
      return(vezesUsuario);
   }

   console.log(quantidadeVitoriasUsuario)

   function quantidadeVitoriasScript(vezesScript){
    return(vezesScript);
 }

    console.log(quantidadeVitoriasScript)
