var memory_array =
['CSS','CSS','HTML','HTML','H3','H3','Var','Var','While','While','Java<br>Script','Java<br>Script','P','P','Br','Br','Li','Li','Style','Style'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
	var movimientos1=0;
	var movimientos2=0;
	var marcadores1=0;
	var marcadores2=0;
	var textofinal="";
	var cambio=1;
var cambios=0;
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }

}
function newBoard(){

	tiles_flipped = 0;
	var output = '';
    memory_array.memory_tile_shuffle();
	for(var i = 0; i < memory_array.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;

}

function memoryFlipTile(tile,val){
if(cambio==1){
	 		if(cambios==0){
 			cambios=1;
 					 		$("#jugador1").toggleClass('black');
 		}


				document.getElementById("turno1").innerHTML = "Mi turno";
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
												document.getElementById("movimiento1").innerHTML = (movimientos1=movimientos1+1);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;

				// Clear both arrays
document.getElementById("marcador1").innerHTML = (marcadores1=marcadores1+1);
				memory_values = [];
            	memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array.length){
					if(marcadores1<marcadores2){
textofinal="Felicidades jugador 2 !!!"
					}
					if(marcadores1>marcadores2){
						textofinal="Felicidades jugador 1!!!"
					}
					if(marcadores1==marcadores2){
						textofinal="EMPATE <br> Vuelvan a intenatarlo!!!!";
					}
					alert("FIN DEL JUEGO: \n\n"+textofinal);
					document.getElementById('memory_board').innerHTML = "";
					newBoard();							document.getElementById("marcador1").innerHTML = 0;
							document.getElementById("marcador2").innerHTML = 0;
							document.getElementById("movimiento1").innerHTML = 0;
							document.getElementById("movimiento2").innerHTML = 0;
				}
			} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = 'url(tile_bg.jpg) no-repeat';
            	    tile_1.innerHTML = "";
 cambio=2;

 		 		$("#jugador1").toggleClass('black');
 		$("#jugador2").toggleClass('black');
 			document.getElementById("turno1").innerHTML = "";
				    tile_2.style.background = 'url(tile_bg.jpg) no-repeat';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}


if(cambio==2){


				document.getElementById("turno2").innerHTML = "Mi turno";
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
												document.getElementById("movimiento2").innerHTML = (movimientos2=movimientos2+1);
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				// Clear both arrays
				document.getElementById("marcador2").innerHTML = (marcadores2=marcadores2+1);
				memory_values = [];
            	memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array.length){
					if(marcadores1<marcadores2){
textofinal="Felicidades jugador 2 !!!"
					}
					if(marcadores1>marcadores2){
						textofinal="Felicidades jugador 1 !!!"
					}
					if(marcadores1==marcadores2){
						textofinal=" EMPATE <br> Vuelvan a intenatarlo!!!";
					}
					alert("FIN DEL JUEGO \n\n"+textofinal);

					newBoard();
												document.getElementById("marcador1").innerHTML = 0;
							document.getElementById("marcador2").innerHTML = 0;
							document.getElementById("movimiento1").innerHTML = 0;
							document.getElementById("movimiento2").innerHTML = 0;
					document.getElementById('memory_board').innerHTML = "";
				}
			} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = 'url(tile_bg.jpg) no-repeat';
            	    tile_1.innerHTML = "";
 cambio=1
 		$("#jugador2").toggleClass('black');
 				$("#jugador1").toggleClass('black');
 				 			document.getElementById("turno2").innerHTML = "";
				    tile_2.style.background = 'url(tile_bg.jpg) no-repeat';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}

}
