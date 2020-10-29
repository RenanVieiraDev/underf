const mapa = document.querySelector('#mapa');
const contextMapa = mapa.getContext('2d');
let intervaLoLoopMovePlayer;
let playersOnline = [{},{},{},{}];
let cordenadaXAtualDoPlay = 0,cordenadaYAtualDoPlay = 0;
let speed = 1;
//ciclo start do jogo

function startGame(){
    cordenadaXAtualDoPlay = 100;
    cordenadaYAtualDoPlay = 100;
    renderizaPlayers(cordenadaXAtualDoPlay,cordenadaYAtualDoPlay);
}

function renderizaPlayers(cordenadaX,cordenadaY){
   contextMapa.fillRect (cordenadaX, cordenadaY, 1, 1);
}

function limpaUltimoPassoPlayer(){
    contextMapa.clearRect(cordenadaXAtualDoPlay, cordenadaYAtualDoPlay,2,2);
}


function andar(para){
    if(para === 'up'){
        limpaUltimoPassoPlayer();
        cordenadaYAtualDoPlay -= speed;
        renderizaPlayers(cordenadaXAtualDoPlay,cordenadaYAtualDoPlay)
    }else if(para === 'down'){
        limpaUltimoPassoPlayer();
        cordenadaYAtualDoPlay += speed;
        renderizaPlayers(cordenadaXAtualDoPlay,cordenadaYAtualDoPlay)
    }else if(para === 'left'){
        limpaUltimoPassoPlayer();
        cordenadaXAtualDoPlay -= speed;
        renderizaPlayers(cordenadaXAtualDoPlay,cordenadaYAtualDoPlay)
    }else if(para === 'right'){
        limpaUltimoPassoPlayer();
        cordenadaXAtualDoPlay += speed;
        renderizaPlayers(cordenadaXAtualDoPlay,cordenadaYAtualDoPlay)
    }
}

function movePlayer(para){
    andar(para);
    intervaLoLoopMovePlayer = setInterval(()=>{andar(para)},200);
}

function stopPlayer(){
    clearInterval(intervaLoLoopMovePlayer);
}


startGame();