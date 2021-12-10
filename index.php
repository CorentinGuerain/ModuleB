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
        
        <div id="bulle_points">
            <img src="point.png" id="point1" hidden>
            <img src="point.png" id="point2" hidden>
            <img src="point.png" id="point3" hidden>
        </div>
        <textarea id="test" hidden disabled> Test dedans</textarea>
    </div>
    <img src="bulle.png" id="bulle" onclick="bulleCLick()">
</div>

    
    

</body>
</html>