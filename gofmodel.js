

var size = 100;
var cells;
var htmlelement;
const ALIVE = 1;
const DEAD = 0;
const SPEED = 200;
var gen=1;
var shift=20;




/* var element = document.querySelector('#gamefield')

panzoom, but it didn't work



var instance = panzoom(element, {
  maxZoom: 1,
  minZoom: 0.1,
  bounds: true,

}); */

function createField(){
        
    cells= [];
    htmlelement= [];

    var field= document.getElementById('gamefield');

    for( y=0 ; y< size ; y++){

        cells.push( new Array(size).fill(DEAD));
        
         var tr= document.createElement('tr');
         field.appendChild(tr);
         tdelement= [];
         htmlelement.push(tdelement);

         for (x=0 ; x<size ; x++){

            var td= document.createElement('td');
            tdelement.push(td);
            field.appendChild(td);

         }
        }
    }

    function draw() {
        for (var y = 0; y < size; y++) {
          for (var x = 0; x < size; x++) {
            htmlelement[y][x].setAttribute('class', 'cell ' + (cells[y][x] == 1 ? 'filled' : 'dead'));
          }
        }
      }

    
      function init() {

        createField();
        for (var i = 0; i < Math.floor(size * size * 0.3); i++) {
          var x, y;
          do {
            x = Math.floor(Math.random() * size), y = Math.floor(Math.random() * size);

            if (cells[y][x] == DEAD) {
              cells[y][x] = ALIVE;
              break;
            }
          } while (true);
        }
        draw();

        setInterval(newGeneration, SPEED);

      }

    function newGeneration(){

        newCells= [];
        for( i=0; i<size; i++){
        newCells.push(new Array(size).fill(DEAD));
        }
    
 
/*      if(gen%shift==0){

            
        for (y=0; y<size; y++){
        
            for(x=0; x<size; x++){

             neigh= countNeibhours(x,y);

             if ((cells[y][x]==ALIVE && (neigh==2 || neigh==3)) || cells[y][x]==DEAD &&  neigh==3 ){


            var nx = (x + 2 + size) % size;
            var ny = (y + 2 + size) % size;
            newCells[ny][nx]=ALIVE;

            
            }

            }

          }
          cells = newCells;     
        
    } 
 */
        for (y=0; y<size; y++){
        
            for(x=0; x<size; x++){

                
                neigh= countNeibhours(x,y);
                

                if (cells[y][x]==DEAD &&  neigh==3){
                    newCells[y][x]=ALIVE;
                }

                if (cells[y][x]==ALIVE && (neigh==2 || neigh==3)){
                    newCells[y][x]=ALIVE;
                }

                if (cells[y][x]==ALIVE && neigh>3){
                    newCells[y][x]= DEAD;
                }

                
            }
        }
    
        cells = newCells;
        gen++;
        
        draw();
    }


    function countNeibhours(x, y) {
        var count = 0;
        for (dy = -1; dy <= 1; dy++) {
          for (dx = -1; dx <= 1; dx++) {

            var nx = (x + dx + size) % size;
            var ny = (y + dy + size) % size;

            count = count + cells[ny][nx];
          }
        }
        return count - cells[y][x];
      }


init();



    


