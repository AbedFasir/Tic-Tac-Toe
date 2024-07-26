let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newBtn = document.querySelector('#new-btn');
let msg = document.querySelector('.msg');
let msgContainer = document.querySelector('.msg-container');

let turn0 = true;

let winPatterns = [
   [0, 1, 2],
   [0, 3, 6],
   [0, 4, 8],
   [1, 4, 7],
   [2, 5, 8],
   [2, 4, 6],
   [3, 4, 5],
   [6, 7, 8]
]


// boxes.forEach(box => {
//    box.addEventListener('click', console.log('print'));
// })

for (let box of boxes) {
   box.addEventListener('click', () => {
      if(turn0) {
         box.innerText = 'O';
         box.disabled = true;
         turn0 = false;
      }else {
         box.innerText = 'X';
         box.disabled = true;
         turn0 = true;
      }

      checkWin();
   })
}

const disabled = () => {
   for(let box of boxes) {
      if(box.innerText === '') {
         box.disabled = true;
      }
   }
}

const winner = (val) => {
   msgContainer.classList.remove('hide');
   msg.innerText = 'Congratulations '+ val;
}

const reset = () => {
   for(let box of boxes) {
      box.innerText = '';
      box.disabled = false;
   }
   msgContainer.classList.add('hide');
}



const checkWin = () => {
   for(let pattern of winPatterns) {
      pos1 = boxes[pattern[0]].innerText;
      pos2 = boxes[pattern[1]].innerText;
      pos3 = boxes[pattern[2]].innerText;

      if(pos1 != '' && pos2 != '' && pos3 != '') {
         if(pos1 === pos2 && pos2 === pos3) {
            winner(pos1);
            disabled();
         }
      }
   }
}

resetBtn.addEventListener('click', reset);
newBtn.addEventListener('click', reset);