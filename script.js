/*
cose da fare
1 griglia
2 aggiungi id alle celle
3 genera bombe
4 CLICK cella (verifica (bomba === fine gioco)(contare tentativi)(verifica di tentativi finiti(if finiti === game over)

5 game over stampa del risultato
6 congelare la griglia e rivelare le bombe
7 reset (cancello vecchia griglia e bombe) (genero una nuova griglia e nuove bombe)
*/

const main = document.querySelector('.game-wrapper');
const playBtn = document.querySelector('#play');
const level = document.querySelector('#level');

const gridLevels = [100, 81, 49];//quante celle avrà la griglia in base alla difficoltà
const BOMBS_NUMBER = 16;//numero di bombe presenti sempre

let bombs = [];//variabile detta arrayvuoto da riempire con le bombe generate randomicamente

let score = 0;//punteggio che parte da 0 e va incrementandosi

playBtn.addEventListener('click', play);

function play(){
  //con value stabilisto il numero delle celle senza invadere l'html con valori dedicati alla griglia     
  const cellNumbers = gridsLevel(level.value);
  console.log(cellNumbers);
  reset()

  generaGriglia(cellNumbers);//genera una griglia in base ai dati di gridsLevel

  bombs = generateBombs(cellNumbers);//bombe generate(si sovrascrivono ad ogni nuovo ciclo di gioco)
  console.log(bombs);

}

function gridsLevel(selectLevel){

  if(selectLevel === "Hard"){
    return(gridLevels[0]);
  }else if(selectLevel === "Normal"){
    return(gridLevels[1]);
  }else{
    return(gridLevels[2]);
  }
}

function generaGriglia(CN){

  const grid =document.createElement('div');
  grid.className = 'grid'

  for(let i = 1; i <= CN; i++){
    const cell = generateCell(i, CN);
    grid.append(cell);
  }
  main.append(grid);
}

function generateCell(cellId, cellNumbers){
  const cell = document.createElement('div');

  cell.className =/*aggiungi css */

  cell.classList.add(/*fare il css*/);

  cell.cellId = cellId;

  cell.innerHTML = `<span> ${cellId} </span>`;
  cell.addEventListener('click', handleClickCell);
  return(cell);
}

function handleClickCell(){

  console.log(this.cellId);
  //verificare se l'ID della cella è contenuto nell'array globale BOMBS
  if(!bombs.includes(this.cellId)){
    this.classList.add(/*crea il css per accendere la cella*/)
    score++;
    console.log(score);
    const cells =document.getElementsByClassName(/*fai il css di cell*/);
    if(score === cells.length - BOMBS_NUMBER){
      console.log('VINTO');
      //fine del gioco
      endGame()
    }
  }else{
    //fine del gioco
    console.log('FINE')
    endGame()
  }
}

function endGame(isWin){
  let msg;
  const x = document.getElementsByClassName('');
  if(isWin){
    msg =`HAI VINTO!`
    console.log('vinto')
  }else{
    msg =`HAI PERSO, il tuo risultato è :${score} punti`
    console.log('perso')
  }
  document.querySelector('.endMessage').innerHTML =msg;
  showBombs();
  const endLev = document.createElement('div');

  endLev.className = 'end-game-level'//crea questa classe in css
  document.querySelector('.game-wrapper').append(endLev);
}

function showBombs(){
  const y = document.getElementsByClassName(/*fai il css delle celle */);
  for(let i = 0; i < cells.length; i++){

    const cell = cell[i];
    console.log(cell);
    if(bombs.includes(cell.cellId)){
      cell.classList.add(/*css delle bombe */);
    }
  }

}

function generateBombs(cellNumbers){
  //generare id bombe e salvarle come array
  const bombsGenerated = [];
  //ciclo per generare il numero di bombe necessarie senza sforare
  while(bombsGenerated.length < BOMBS_NUMBER){
    const bomb = generateRandom(1, cellNumbers);

    if(!bombsGenerated.includes(bomb)){
      bombsGenerated.push(bomb);
    }
  }
  
  return bombsGenerated;
}

function generateRandom(min, max){
  return Math.floor(Math.random() * (max - min +1)+ min);
}

function reset(){
 //cancello bombe
  main.innerHTML ='';
 // document.querySelector('.endMessage').innerHTML ='';
}