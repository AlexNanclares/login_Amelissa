let arrayImg = [
                'https://wallpaperaccess.com/full/2786602.jpg',
                'https://www.teahub.io/photos/full/351-3518660_fondos-de-pantalla-de-perros-pug.jpg',
                'https://www.desnivel.com/images/2019/10/kilian-jornet-por-encima-del-collado-sur-everest-960x960.jpg',
                'https://wallpapercave.com/wp/wp3788126.jpg',
                'https://wallpaperaccess.com/full/327434.jpg',
                'https://cdn.shopify.com/s/files/1/0005/8739/9204/collections/ARAMILA_1_RENDER_WEB_1200x1200.jpg?v=1605741943',
                'https://s1.1zoom.me/b5050/302/273702-alexfas01_1920x1200.jpg'
            ]
let i = 0;

function changeImg(){
    let imagen = document.getElementsByClassName('image_full')[0];

    imagen.setAttribute('style', `background: url(${arrayImg[i]}) no-repeat center;`);
    imagen.style.animationName = 'changeOpacity'
    imagen.style.animationDuration = '1s'
    imagen.style.backgroundSize = 'cover'

    i++

    if(arrayImg.length <= i){
        i = 0
    }

    changeOpacity()
}

setInterval(function(){ changeImg() }, 3000);

function changeOpacity(){
    let imagen = document.getElementsByClassName('image_full')[0];
    setTimeout(function(){ imagen.style.animationName = '' }, 1000);
}

function questionAlert(){
    /** 
    bootbox.alert({
        title: '¿Eres nuevo(a)?', 
        message: 'Si es tu primera vez ingresando a esta plataforma, ingresa tu cédula y selecciona la opción "Validar cédula", luego digita tu clave. Si no la tienes, escribe una clave, confírmala y selecciona "Generar clave". Una vez realizado el proceso, ingresarás de inmediato a nuestro sistema de pedidos.'
    })
    */
   alert('hola')
}

function hideNavbar(){ 
    if (screen.height <= 480){
        document.getElementsByClassName('image_full')[0].style.zIndex = "-1";
    } 
} 

function showNavbar(){ 
    if (screen.height <= 480) { 
        document.getElementsByClassName('image_full')[0].style.zIndex = "1"; 
    } 
} 

let inputCedula = document.getElementsByClassName('general_input')[0];


