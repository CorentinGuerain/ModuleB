function positionMarker(x,y){
    map = document.getElementById("map");
    marker = document.getElementById('marker');

    marker.style.left = x +"px";
    marker.style.top = y + "px";
    marker.style.display = 'block';

}

function ChargerMarker(){
    var request = new XMLHttpRequest();

    request.open('POST', "http://localhost/api_animation/public/animation/list");

    request.responseType = 'json';

    request.onload = function() {
        console.log(request.response);
        const obj = JSON.parse(request.response) ;
        alert(obj.id);
        //parcourir le json a chaque occurence de x, y appeler le positionMarker
    };


    request.send();
}