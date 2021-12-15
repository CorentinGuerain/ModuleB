<!DOCTYPE html>

<html>

<head>
    <link rel="stylesheet" href="chatbot.css">
</head>

<body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script rel="javascript/text" src="chatbot.js"></script>


<div id="chatbot_div">
    <div id="chatbot" hidden>
        
        <div id="bulle_points_1" class="bulles" hidden>
            <img src="point.png" id="point1_1" class="points" hidden>
            <img src="point.png" id="point2_1" class="points" hidden>
            <img src="point.png" id="point3_1" class="points" hidden>
        </div>
        <textarea id="test_1" hidden disabled>Bienvenue ! Laissez-moi vous guider</textarea>
        <div id="bulle_points_2"  class="bulles" hidden>
            <img src="point.png" id="point1_2" class="points" hidden>
            <img src="point.png" id="point2_2" class="points" hidden>
            <img src="point.png" id="point3_2" class="points" hidden>
        </div>
        <textarea id="test_2" hidden disabled>Vous pouvez concevoir votre parcours vous-même, ou vous laisser guidersur un parcours que nous vous avons sélectionné</textarea>
        <div id="bulle_points_3"  class="bulles" hidden>
            <img src="point.png" id="point1_3" class="points" hidden>
            <img src="point.png" id="point2_3" class="points" hidden>
            <img src="point.png" id="point3_3" class="points" hidden>
        </div>
        <button id="btn_3" onclick="clickButton()" hidden>Afficher le parcours recommandé</button>
    </div>
    <img src="bulle.png" id="bulle" onclick="bulleCLick()">
</div>

    
    

</body>
</html>