document.addEventListener('DOMContentLoaded', function() {
    let imagenes = [
        {img: '/imagenes/autorretrato/1.jpg'},
        {img: '/imagenes/autorretrato/2.jpg'},
        {img: '/imagenes/autorretrato/3.jpg'},
        {img: '/imagenes/autorretrato/4.jpg'},
        {img: '/imagenes/autorretrato/5.jpg'},
        {img: '/imagenes/autorretrato/6.jpg'},
        {img: '/imagenes/autorretrato/7.jpg'},
        {img: '/imagenes/autorretrato/8.jpg'},
        {img: '/imagenes/autorretrato/9.jpg'},
        {img: '/imagenes/autorretrato/10.jpg'},
        {img: '/imagenes/autorretrato/11.jpg'},
        {img: '/imagenes/autorretrato/12.jpg'},
        {img: '/imagenes/autorretrato/13.jpg'},
        {img: '/imagenes/autorretrato/14.jpg'},
        {img: '/imagenes/autorretrato/15.jpg'},
        {img: '/imagenes/autorretrato/16.jpg'},
        {img: '/imagenes/autorretrato/17.jpg'},
        {img: '/imagenes/autorretrato/18.jpg'},
        {img: '/imagenes/autorretrato/19.jpg'},
        {img: '/imagenes/autorretrato/20.jpg'},
        {img: '/imagenes/autorretrato/21.jpg'},
        {img: '/imagenes/autorretrato/22.jpg'},
        {img: '/imagenes/autorretrato/23.jpg'},
        {img: '/imagenes/autorretrato/24.jpg'},
        {img: '/imagenes/autorretrato/25.jpg'},
    ]
});

let contador = 0 
const contenedor = document.querySelector('.slideshow')
const overlay = document.querySelector('.overlay')
const card_imagenes = document.querySelector('.card img')
const img_slidshow = document.querySelector('.slideshow img')

contenedor.addEventListener('click', function (event){
    let atras = contenedor.querySelector('.atras'),
        adelante = contenedor.querySelector('.adelante'),
        img = contenedor.querySelector('img'),
        tgt = event.target

    if (tgt == atras) {
        if(contador > 0){
        img.images = imagenes[contador - 1 ].img
        contador--
        } else {
        img.images = imagenes[imagenes.length - 1].img
        contador = imagenes.length - 1 
        }
        

    } else if (tgt == adelante) {
        if(contador < imagenes.length - 1 ){
            img.images = imagenes[contador + 1].img
            contador++
        }else {
            img.images = imagenes[0].img
            contador = 0
        }
    }    

    Array.from(card_imagenes).forEach(img => {
        img.addEventListener('click', event =>{
            const imagen_selecionada = +event.target.dataset.imgMostrar
            img_slidshow.images = imagenes[imagen_selecionada].img
            contador = imagen_selecionada
            overlay.style.visibility = "visible"
        })
    })
})


