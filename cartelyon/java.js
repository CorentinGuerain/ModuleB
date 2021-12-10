function positionMarker(x,y){
    let b = document.body;
    let newimg = document.createElement('img');

    newimg.setAttribute("src","img/marker.png");
    newimg.setAttribute("id","marker");
    newimg.setAttribute("style","display: none; position: absolute; width: 3%;");

    b.append(newimg);

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

        var txt ='{"animations" :' + JSON.stringify(request.response) + '}';
        var x;
        var y;

        const animation = JSON.parse(txt, (key, value) => {
                if(key === "_coord__x"){
                    x = value;
                }
                if (key === '_coord__y'){
                    y = value;
                }

                positionMarker(x ,y);
        });
    };
    request.send();
}