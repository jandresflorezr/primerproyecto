window.addEventListener('load', function () {


    var imagenes = [];
    var tiempo = 3000;

    imagenes[0] = 'img/slider11.jpg';
    imagenes[1] = 'img/slider22.jpg';
    imagenes[2] = 'img/slider33.jpg';
    imagenes[3] = 'img/slider44.jpg';
    imagenes[4] = 'img/slider55.jpg';

    var indiceImagenes=0;

    function cambiarImagenes(){
        document.slidersection.src = imagenes[indiceImagenes];
        if (indiceImagenes < 4){
            indiceImagenes++;
        } else {
            indiceImagenes = 0;
        }
    }

    setInterval(cambiarImagenes, tiempo);

});