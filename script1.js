


const $input = document.getElementById('number')
const $game = document.getElementById('game')
const $start = document.getElementById('start')
const $app = document.querySelector('.app')


// add

$start.addEventListener('click', startgame)
$game.addEventListener('click', add)
let num = $input.value



// start game


function startgame(e){
 
  e.preventDefault()
  let num = $input.value
 
 $game.innerHTML = ''
  for(let i = 0; i<num**2; i++){
    $game.innerHTML += '<div class ="block"></div>'
  }
  $game.style.width = $game.style.height = (num * 50) + 'px'




  
}

let n = 0
function add(e){

  $input.setAttribute('disabled', 'true')
 
  if (n % 2 == 0) {
    if (e.target.innerHTML !== '') return;
    e.target.innerHTML = 'X';
  } else if (n % 2 != 0) {
    if (e.target.innerHTML !== '') return;
    e.target.innerHTML = 'O';
  }
  n++;

  stugel();

}



function getMatrix(v) {
  v = $input.value
  const arr = document.querySelectorAll('.block'); // 2 array
  
  const matrix = [];
  let k = [];
  for (let i = 0; i < arr.length; i++) {
      k.push(arr[i]);
      if (k.length == v) {
          matrix.push(k);
          k = [];
      }
  }
  return matrix;
}
  



function stugel(){


  const cvadrat = getMatrix();
  const v = $input.value;


// havasar

let havasar = 0;
    for (let i = 0; i < cvadrat.length; i++) {
        for (let j = 0; j < cvadrat[i].length; j++) {
            if (cvadrat[i][j].innerHTML == 'X' || cvadrat[i][j].innerHTML == 'O') havasar++;
        }
        if (havasar == v*v) end('eror');
    }

    
  // tox@ x - i

  let toxX;
  for (let i = 0; i < cvadrat.length; i++) {
      toxX = 0;
      for (let j = 0; j < cvadrat[i].length; j++) {
          if (cvadrat[i][j].innerHTML == 'X') {
              toxX++;
          }
      }
      if (toxX == v) {
          end('X');
          break;
      }
  }

  // toxY syuni 

  let syunX;
  for(let i = 0; i<cvadrat.length; i++){
    syunX = 0
    for(let j = 0; j<cvadrat.length; j++){
      if(cvadrat[j][i].innerHTML == 'X'){
        syunX++
      }
    }
    if(syunX == v){
      end('X')
      break
    }
  }

  /// Ankuynagcer

  let glxavorankyunagicX = 0;
  
  for(let i = 0; i<cvadrat.length; i++){
    if(cvadrat[i][i].innerHTML == 'X'){
      glxavorankyunagicX++
    }
  }
  if(glxavorankyunagicX == v) end('X')


  let Ojadakankyunagic = 0
  for(let i = 0; i<cvadrat.length; i++){
    if(cvadrat[i][cvadrat.length - 1 - i].innerHTML == 'X'){
      Ojadakankyunagic++
    }
  }
  if(Ojadakankyunagic == v) end('X')


  // 0 hamar stufum

  let tox0;
  for (let i = 0; i < cvadrat.length; i++) {
      tox0 = 0;
      for (let j = 0; j < cvadrat[i].length; j++) {
          if (cvadrat[i][j].innerHTML == 'O') {
              tox0++;
          }
      }
      if (tox0 == v) {
          end('O');
          break;
      }
  }


  // syun 0


  let syun0;
  for(let i = 0; i<cvadrat.length; i++){
    syun0 = 0
    for(let j = 0; j<cvadrat.length; j++){
      if(cvadrat[j][i].innerHTML == 'O'){
        syun0++
      }
    }
    if(syun0 == v){
      end('O')
      break
    }
  }


  // ankyunagcer

  let glxavorankyunagic0 = 0;
  
  for(let i = 0; i<cvadrat.length; i++){
    if(cvadrat[i][i].innerHTML == 'O'){
      glxavorankyunagic0++
    }
  }
  if(glxavorankyunagic0 == v) end('O')
  

  let Ojadakankyunagic0 = 0
  for(let i = 0; i<cvadrat.length; i++){
    if(cvadrat[i][cvadrat.length - 1 - i].innerHTML == 'O'){
      Ojadakankyunagic0++
    }
  }
  if(Ojadakankyunagic0 == v) end('O')


}


function end(item){
  if(item == 'X'){
    alert('haxtec X-@')
  }else if(item == 'O'){
    alert('haxtec O-@')
  } else if(item == 'eror'){
    alert('vochvoki')
    $game.innerHTML = ''
  }
  $input.removeAttribute('disabled')
}

