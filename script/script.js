const cell = document.querySelectorAll('.cells')
let nextStep = 'X';
let isFinished = false;
const setGameStatus = message => {
   document.querySelector('.status').innerHTML = message;
}

const winLines = [
   //horinzontal
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   //Vertical 
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   //Diagonal
   [0, 4, 8],
   [2, 4, 6]
];

const checkWin = () => {
   // const win = winLines.find(winLine =>{
   //    const first = cell[winLine[0]].innerHTML
   //    const second = cell[winLine[1]].innerHTML
   //    const third = cell[winLine[2]].innerHTML
   //    console.log(first);
   //    return first === second && second === third && third === ''
   // })
   // console.log(win);
   // if (!win) {
   //    return false;
   // }
   // setGameStatus('Finish!')
   let win = false;
   for (let i = 0; i < winLines.length; i++) {



      let first = cell[winLines[i][0]].innerHTML
      let second = cell[winLines[i][1]].innerHTML
      let third = cell[winLines[i][2]].innerHTML
      win = first === second && second === third && third === first && first !== '' && second !== '' && third !== ''
      if (win) {
         let winner = nextStep === 'X' ? '0' : 'X';
         setGameStatus('Game finished !!!, Winner is: ' + winner);
         isFinished = true;
         return true
      }

   }

}




const handleClick = cells => {
   if (cells.innerHTML === '' && !isFinished) {
      cells.innerHTML = nextStep === 'X' ? 'X' : '0';
      nextStep = nextStep === 'X' ? '0' : 'X';
      setGameStatus('Next Move:' + nextStep)
      checkWin()
   } else {
      alert(isFinished ? 'O`yin tugadi'  : 'Bu yacheyka belgilangan');
   }

};


cell.forEach((cells) => {
   cells.addEventListener('click', () => handleClick(cells))
});