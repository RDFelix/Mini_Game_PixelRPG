/**--------------------EPISODIO 1--------------------**/
var ep1_dig1 = "Hola...";
var ep1_dig2 = "esta oscuro...";
var ep1_dig3 = "odio la oscuridad, es muy oscura y me asusta";
var ep1_dig4 = "enciende la luz porfavor!!";

var ep1_dig5 = "muchas gracias, mi nombre es flip, es un placer conocerte...";
var ep1_dig6 = "¿cual es tu nombre?";
var ep1_dig7 = "¿entonces cual es?";
var ep1_dig8 = "hermoso nombre!!";
var ep1_dig9 = "Te estaras preguntando quien soy y que es todo esto...";
var ep1_dig10 = "estas en un mini mundo virtual creado por felix, el fue quien me diseño y sere tu guia en esta aventura...";
var ep1_dig11 = "lo primero es enseñarte la mecanica del mundo...";
var ep1_dig12 = "este es el calendario de misiones, cada dia habra un nuevo juego o mision que deberas completar";
var ep1_dig13 = "En la tienda de recompenzas podras reclamar los puntos conseguidos con las misiones diarias";
var ep1_dig14 = "Comenzemos por este juego..se llama wordle...";
var ep1_dig15 = "consiste en adivinar la palabara oculta, tienes derecho a tres pisas pero al usarlas ganaras menos puntos";
var ep1_dig16 = "intenta ganar muchos puntos, estare al pendiente al calendario y cuando haya nuevas misiones te llamare";
var ep1_dig17 = "haz clic sobre mi para ir al wordle..."

/**--------------------------------CONTADOR DE EPISODIO--------------------------------**/
var ep = localStorage.getItem('ep');
if (ep > 0){console.log('---contador de episodio ya existe como: '+ ep);
}else localStorage.setItem('ep', '1');  console.log('   se ha creado contador de episodio');

/**----------------------------------CONTADOR DE DIAS----------------------------------**/
var dia = localStorage.getItem('dia');
if (dia > 0){console.log('---contador de dias ya existe como: '+ dia);
}else localStorage.setItem('dia', '1');  console.log('   se ha creado contador de dia');

/**-----------------------------------VARIABLES GENERALES----------------------------------**/
var dig = 1;
var velocidad_text = 50;

/**---------------------------------------EPISODIO 1---------------------------------------**/
/**-----Cinematica de aparicion y objetivo de  encender la luz-----**/
if (ep == 1){
    if (dig == 1){
    document.querySelector("html").style.setProperty('--show', 'none')
    document.querySelector("html").style.setProperty('--sprite', 'none')
    let escribir = str =>{
    let arrFromStr = str.split('');
    let i = 0;
    let printStr = setInterval(function(){
        document.getElementById('text').innerHTML += arrFromStr[i];
        i++;
        if (i === arrFromStr.length) {
            clearInterval(printStr);
            document.querySelector("html").style.setProperty('--press', 'grid');
        }
    },velocidad_text)};escribir(ep1_dig1)}
let click = 0;
function press() {
    document.querySelector("html").style.setProperty('--press', 'none');
    let clicks = click;
    document.getElementById('text').innerHTML = '';
    var d = dig++;
    var text = ep1_dig2;
    if (d == 1){
        var text = ep1_dig2;
    }else if(d == 2){
        var text = ep1_dig3;
    }else if(d == 3){
        var text = ep1_dig4;
        document.getElementById('press').innerHTML = 'Preciona el fuego para iluminar'; 
    }else if(d>4){
        var d = 6;
        console.log(d);
        var text = ep1_dig4;
    }

    let escribir = str =>{
    let arrFromStr = str.split('');
    let i = 0;
    let printStr = setInterval(function(){
        document.getElementById('text').innerHTML += arrFromStr[i];
        i++;
        if (i === arrFromStr.length) {
            clearInterval(printStr);
            document.querySelector("html").style.setProperty('--press', 'grid');
            if(d == 3){
                document.querySelector("html").style.setProperty('--h_lamp', '1px');
            }
        }
    },velocidad_text)};escribir(text);};
function luz(){
    let e = dig;
    let clicks = click++;
    var screenWidth = screen.width / 4;
    var screenHeight = screen.height /4;

    var altP = Math.round(Math.random()*1);
    var altY = Math.round(Math.random()* screenWidth);
    var altX = Math.round(Math.random()* screenHeight);
    if(altP == 0){
        document.querySelector("html").style.setProperty('--altY', altY+'px');
        document.querySelector("html").style.setProperty('--altX', altX+'px');
    }else if(altP == 1){
        document.querySelector("html").style.setProperty('--altY', '-'+altY+'px');
        document.querySelector("html").style.setProperty('--altX', '-'+altX+'px');
    };
    if(clicks == 0){
        document.getElementById('press').innerHTML = 'El fuego puede ser escurridiso, siguelo!'; 
    }
    if(clicks == 1){
        dig = 6;
        var cont = 0;
            document.querySelector("html").style.setProperty('--altX', '0');
            document.querySelector("html").style.setProperty('--altY', '0');
            setInterval(fire_anim, 10);
            let width = document.getElementById('fire').width;
            let height = document.getElementById('fire').height;
                function fire_anim() {
                        width--;
                        height--;
                        document.querySelector("html").style.setProperty('--h_fire', width+'px');
                        document.querySelector("html").style.setProperty('--w_fire', width+'px');
                        if (width === 0){
                            document.querySelector("html").style.setProperty('--display_lamp', 'none');
                            clicks == 2;
                            document.querySelector("html").style.setProperty('--sprite', 'flex');
                            document.querySelector("html").style.setProperty('--anim_sprite', 'anim_sprite 2s');
                            document.getElementById('sprite').onclick = "";


                            document.querySelector("html").style.setProperty('--press', 'none');
                            document.querySelector("html").style.setProperty('--bg_dig', '#BDBDBD');
                            document.querySelector("html").style.setProperty('--boder_dig', 'double');
                            document.querySelector("html").style.setProperty('--color_body', 'black'); 
                            document.getElementById('text').innerHTML = '';
                            
                                let escribir = str =>{
                                let arrFromStr = str.split('');
                                let i = 0;
                                let printStr = setInterval(function(){
                                    document.getElementById('text').innerHTML += arrFromStr[i];
                                    i++;
                                    if (i === arrFromStr.length) {
                                        clearInterval(printStr);
                                        document.querySelector("html").style.setProperty('--show', 'flex');
                                        
                                    }
                                },velocidad_text)};escribir(ep1_dig5)};
                        };
                        document.getElementById('luz_lamp').onclick = "";
                };
        };};
/**----------------------------------------------------------------------------------------**/

/**---------------------------------------EPISODIO 2---------------------------------------**/
/**-----Enseñar el menu, mecanicas y aparicion de mundo**/
if (ep == 2){
    var dig = 6;
    document.querySelector("html").style.setProperty('--sprite', 'flex');
    document.querySelector("html").style.setProperty('--anim_sprite', 'anim_sprite 2s');
    document.querySelector("html").style.setProperty('--press', 'none');
    document.querySelector("html").style.setProperty('--bg_dig', '#BDBDBD');
    document.querySelector("html").style.setProperty('--boder_dig', 'double');
    document.querySelector("html").style.setProperty('--color_body', 'black');
        let escribir = str =>{
        let arrFromStr = str.split('');
        let i = 0;
        let printStr = setInterval(function(){
            document.getElementById('text').innerHTML += arrFromStr[i];
            i++;
        if (i === arrFromStr.length) {
        clearInterval(printStr);
        document.querySelector("html").style.setProperty('--show', 'flex');
        }
        },velocidad_text)};escribir(ep1_dig5);};
/**----------------------------------------------------------------------------------------**/

/**---------------------------------------EPISODIO 3---------------------------------------**/
/**-----Enseñar el menu, mecanicas y aparicion de mundo**/
if (ep == 3){
    var dig = 10;
    document.querySelector("html").style.setProperty('--luz', 'luz 3s');
    document.querySelector("html").style.setProperty('--img', 'url("wallpaper.png")');
    document.querySelector("html").style.setProperty('--sprite', 'flex');
    document.querySelector("html").style.setProperty('--anim_sprite', 'anim_sprite 2s');
    document.querySelector("html").style.setProperty('--press', 'none');
    document.querySelector("html").style.setProperty('--bg_dig', '#BDBDBD');
    document.querySelector("html").style.setProperty('--boder_dig', 'double');
    document.querySelector("html").style.setProperty('--color_body', 'black');
        let escribir = str =>{
        let arrFromStr = str.split('');
        let i = 0;
        let printStr = setInterval(function(){
            document.getElementById('text').innerHTML += arrFromStr[i];
            i++;
        if (i === arrFromStr.length){
        clearInterval(printStr);
        document.querySelector("html").style.setProperty('--show', 'flex');}
        },velocidad_text)};escribir(ep1_dig10);}
/**----------------------------------------------------------------------------------------**/

function next(){
    document.querySelector("html").style.setProperty('--show', 'none');
    document.getElementById('text').innerHTML = '';
/**-----------------------ORDEN DE DIALOGOS-----------------------**/
if (dig == 6){
    var texto = ep1_dig6;
    localStorage.setItem('ep', '2')
    localStorage.setItem('dia', '2')
    console.log('se cambio ep a: 2')
    document.getElementById('text').innerHTML = '';
    document.querySelector("html").style.setProperty('--show', 'none');}
else if (dig == 8){
    var texto = ep1_dig8;
    document.getElementById('text').innerHTML = '';}
else if (dig == 9){
    var texto = ep1_dig9;
    document.getElementById('text').innerHTML = '';}
else if (dig == 10){
    localStorage.setItem('ep', '3')
    var texto = ep1_dig10;
    document.getElementById('text').innerHTML = '';}
else if (dig == 11){
    var texto = ep1_dig11;
    document.getElementById('text').innerHTML = '';}
else if (dig == 12){
    var texto = ep1_dig12;
    document.getElementById('text').innerHTML = '';}
else if (dig == 13){
    var texto = ep1_dig13;
    document.getElementById('text').innerHTML = '';}
else if (dig == 14){
    var texto = ep1_dig14;
    document.getElementById('text').innerHTML = '';}
else if (dig == 15){
    var texto = ep1_dig15;
    document.getElementById('text').innerHTML = '';}
else if (dig == 16){
    var texto = ep1_dig16;
    document.getElementById('text').innerHTML = '';}
else if(dig == 17){
    var texto = ep1_dig17;
    document.getElementById('text').innerHTML = '';}
else if (dig > 17){
    var texto = ep1_dig17;
    document.getElementById('text').innerHTML = '';}
/**----------------------------------------------------------------**/
let escribir = str =>{
    let arrFromStr = str.split('');
    let i = 0;
    let printStr = setInterval(function(){
        document.getElementById('text').innerHTML += arrFromStr[i];
        i++;
/**--------------------------------OPCIONES DE DIALOGO---------------------------------**/

        if (dig == 6){
            if (i == arrFromStr.length-1){
                document.querySelector("html").style.setProperty('--op_dig', 'grid');
                document.getElementById('option1').innerHTML = "NINGUNO";
                document.getElementById('option2').innerHTML = "NINGUNO";
                document.getElementById('option3').innerHTML = "NINGUNO";}
        }else document.querySelector("html").style.setProperty('--op_dig', 'none');
/**------------------------------------ANIMACIONES-------------------------------------**/
        if (dig == 10){
            if (i == arrFromStr.length-1){
                document.querySelector("html").style.setProperty('--luz', 'luz 3s');
                document.querySelector("html").style.setProperty('--img', 'url("wallpaper.png")');}
            }


        if (i === arrFromStr.length) {
            dig++;
            if (dig == 7){
                document.querySelector("html").style.setProperty('--show', 'none');
            }else document.querySelector("html").style.setProperty('--show', 'grid');
            clearInterval(printStr);
            };

},velocidad_text)};escribir(texto)};
/**--FUNCION - OPTION--**/
function option1(){
    document.querySelector("html").style.setProperty('--show', 'grid');
    document.querySelector("html").style.setProperty('--op_dig', 'none');
    if(dig == 7){
    var texto = ep1_dig7;
    document.getElementById('text').innerHTML = '';}
    let escribir = str =>{
    let arrFromStr = str.split('');
    let i = 0;
    let printStr = setInterval(function(){
        document.getElementById('text').innerHTML += arrFromStr[i];
        i++;
        if (i === arrFromStr.length) {
            dig++;
        clearInterval(printStr);}
},velocidad_text)};escribir(texto)};
function option2(){
    dig++;
    document.querySelector("html").style.setProperty('--show', 'grid');
    document.querySelector("html").style.setProperty('--op_dig', 'none');
    if(dig == 7){
    var texto = ep1_dig7;
    document.getElementById('text').innerHTML = '';}
    let escribir = str =>{
    let arrFromStr = str.split('');
    let i = 0;
    let printStr = setInterval(function(){
        document.getElementById('text').innerHTML += arrFromStr[i];
        i++;
        if (i === arrFromStr.length) {
            dig++;
        clearInterval(printStr);}
},velocidad_text)};escribir(texto)};
function option3(){
    dig++;
    document.querySelector("html").style.setProperty('--show', 'grid');
    document.querySelector("html").style.setProperty('--op_dig', 'none');
    if(dig == 7){
    var texto = ep1_dig7;
    document.getElementById('text').innerHTML = '';}
    let escribir = str =>{
    let arrFromStr = str.split('');
    let i = 0;
    let printStr = setInterval(function(){
        document.getElementById('text').innerHTML += arrFromStr[i];
        i++;
        if (i === arrFromStr.length) {
            dig++;
        clearInterval(printStr);}
},velocidad_text)};escribir(texto)};
/**--------------------**/


    
/**-----FUNCION MENU-----**/
let show = 'esconder';
function menu(){
    if (show === 'esconder'){
        document.querySelector("html").style.setProperty('--menu', 'grid');
        document.querySelector("html").style.setProperty('--menu_left', '50px'); 
        show = 'mostrar';
        console.log(show)
    }else if(show === 'mostrar'){
        document.querySelector("html").style.setProperty('--menu', 'none');
        document.querySelector("html").style.setProperty('--menu_left', '0');
        show = 'esconder';
        console.log(show)
    }else show = 'esconder';};
/**---------------------------------------------------------------------**/