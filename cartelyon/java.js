function positionMarker(x,y,i){


    map = document.getElementById("map");
    marker = document.getElementById('marker'+i);

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
        //"_coord__y"
        //"_coord__x"
        const animation = JSON.parse(txt);

        for (let i = 0; i <= animation.animations.length; i++) {
            x = animation.animations[i]._coord__x;
            y = animation.animations[i]._coord__y;

            let b = document.body
            let lien = document.createElement('a');
            lien.setAttribute('href',"#"+i);
            let newimg = document.createElement('img');
            newimg.setAttribute("src","img/marker.png");
            newimg.setAttribute("id","marker"+i);
            newimg.setAttribute("style","display: none; position: absolute; width: 3%;");
            b.append(lien);
            lien.append(newimg);

            positionMarker(x,y,i);
        }
    };
    request.send();
}