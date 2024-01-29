/**-----FUNCION MENU-----**/
function menu(){
    document.querySelector("html").style.setProperty('--menu', 'grid');
    document.querySelector("html").style.setProperty('--menu_top', '0px');
    document.querySelector("html").style.setProperty('--menu_left', '70px');
}
/**---------------------------------------------------------------------**/



/**FUNCIONES DE TECLADO**/
function escribir_q(){var texto = document.getElementById('text1').innerHTML + 'Q';document.getElementById('text1').innerHTML = texto;}
function escribir_w(){var texto = document.getElementById('text1').innerHTML + 'W';document.getElementById('text1').innerHTML = texto;}
function escribir_e(){var texto = document.getElementById('text1').innerHTML + 'E';document.getElementById('text1').innerHTML = texto;}
function escribir_r(){var texto = document.getElementById('text1').innerHTML + 'R';document.getElementById('text1').innerHTML = texto;}
function escribir_t(){var texto = document.getElementById('text1').innerHTML + 'T';document.getElementById('text1').innerHTML = texto;}
function escribir_y(){var texto = document.getElementById('text1').innerHTML + 'Y';document.getElementById('text1').innerHTML = texto;}
function escribir_u(){var texto = document.getElementById('text1').innerHTML + 'U';document.getElementById('text1').innerHTML = texto;}
function escribir_i(){var texto = document.getElementById('text1').innerHTML + 'I';document.getElementById('text1').innerHTML = texto;}
function escribir_o(){var texto = document.getElementById('text1').innerHTML + 'O';document.getElementById('text1').innerHTML = texto;}
function escribir_p(){var texto = document.getElementById('text1').innerHTML + 'P';document.getElementById('text1').innerHTML = texto;}
/**---------------------------------------------------------------------------------------------------------------------------------**/
function escribir_a(){var texto = document.getElementById('text1').innerHTML + 'A';document.getElementById('text1').innerHTML = texto;}
function escribir_s(){var texto = document.getElementById('text1').innerHTML + 'S';document.getElementById('text1').innerHTML = texto;}
function escribir_d(){var texto = document.getElementById('text1').innerHTML + 'D';document.getElementById('text1').innerHTML = texto;}
function escribir_f(){var texto = document.getElementById('text1').innerHTML + 'F';document.getElementById('text1').innerHTML = texto;}
function escribir_g(){var texto = document.getElementById('text1').innerHTML + 'G';document.getElementById('text1').innerHTML = texto;}
function escribir_h(){var texto = document.getElementById('text1').innerHTML + 'H';document.getElementById('text1').innerHTML = texto;}
function escribir_j(){var texto = document.getElementById('text1').innerHTML + 'J';document.getElementById('text1').innerHTML = texto;}
function escribir_k(){var texto = document.getElementById('text1').innerHTML + 'K';document.getElementById('text1').innerHTML = texto;}
function escribir_l(){var texto = document.getElementById('text1').innerHTML + 'L';document.getElementById('text1').innerHTML = texto;}
function escribir_ñ(){var texto = document.getElementById('text1').innerHTML + 'Ñ';document.getElementById('text1').innerHTML = texto;}
/**---------------------------------------------------------------------------------------------------------------------------------**/
function escribir_z(){var texto = document.getElementById('text1').innerHTML + 'Z';document.getElementById('text1').innerHTML = texto;}
function escribir_x(){var texto = document.getElementById('text1').innerHTML + 'X';document.getElementById('text1').innerHTML = texto;}
function escribir_c(){var texto = document.getElementById('text1').innerHTML + 'C';document.getElementById('text1').innerHTML = texto;}
function escribir_v(){var texto = document.getElementById('text1').innerHTML + 'V';document.getElementById('text1').innerHTML = texto;}
function escribir_b(){var texto = document.getElementById('text1').innerHTML + 'B';document.getElementById('text1').innerHTML = texto;}
function escribir_n(){var texto = document.getElementById('text1').innerHTML + 'N';document.getElementById('text1').innerHTML = texto;}
function escribir_m(){var texto = document.getElementById('text1').innerHTML + 'M';document.getElementById('text1').innerHTML = texto;}
/**---------------------------------------------------------------------------------------------------------------------------------**/

/**PALABRAS WORDLE-------!!Todo En Mayusculas!!**/
var word1 = "CHICA";
var word2 = "Hermosa";
var word3 = "TEAMO";
/**--------------**/

let e = 0;

function borrar(){
	var texto = document.getElementById('text1');
	texto.innerHTML = texto.innerHTML.substring(0, texto.innerHTML.length - 1);
};
function aceptar(){
	if(document.getElementById('text1').innerHTML == word1){
		alert('bien hecho :) este es el word1')
	}else if(document.getElementById('text1').innerHTML == word2){
		alert('bien hecho :) este es el word2')
	}else if(document.getElementById('text1').innerHTML == word3){
		alert('bien hecho :) este es el word3')}
	else alert('Ta mal pendejo')
};


