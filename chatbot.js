var première_ouverture = true;



function bulleCLick(){
    // alert("cliquer");

    if($("#chatbot").is(":hidden")){
        $( "#chatbot" ).fadeIn( 200 );
    }else{
        $( "#chatbot" ).fadeOut( 200 );
    }

    setTimeout(() => {  if(première_ouverture){
            animation();
            première_ouverture = false;
        }
    }, 200);
    
}

function animation(){

    $( "#point1" ).fadeIn( 150 );
    setTimeout(() => { $( "#point2" ).fadeIn( 150 ); }, 150);

    setTimeout(() => { $( "#point3" ).fadeIn( 150 );
                        $( "#point1" ).fadeOut( 150 ); }, 300);

    setTimeout(() => { $( "#point2" ).fadeOut( 0 ); 
                        $( "#point3" ).fadeOut( 0 );
                        $( "#bulle_points" ).fadeOut( 0 );
                        $( "#text_input" ).fadeIn( 0 );}, 500);

    setTimeout(() => { $( "#test" ).fadeIn( 150 ); }, 500);

}

