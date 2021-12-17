var première_ouverture = true;
var $int_position = 1;
var $repeat_bool = true;



function bulleCLick(){
    // alert("cliquer");

    if($("#chatbot").is(":hidden")){
        $( "#chatbot" ).fadeIn( 200 );
    }else{
        $( "#chatbot" ).fadeOut( 200 );
    }

    console.log(("_"+$int_position));

    setTimeout(() => {  if(première_ouverture){
            animation(("_"+$int_position), $repeat_bool);
            première_ouverture = false;
        }
    }, 200);
    
}

function clickButton(){

}

function animation($position, $repeat){


    
    $( "#point1"+$position ).fadeIn( 150 );
    $( "#bulle_points"+$position ).fadeIn( 150 );
    setTimeout(() => { $( "#point2"+$position ).fadeIn( 150 ); }, 150);

    setTimeout(() => { $( "#point3"+$position ).fadeIn( 150 );
                        $( "#point1"+$position ).fadeOut( 150 ); }, 300);

    setTimeout(() => { $( "#point2"+$position ).fadeOut( 0 ); 
                        $( "#point3"+$position ).fadeOut( 0 );
                        $( "#bulle_points"+$position ).fadeOut( 0 );
                        $( "#text_input"+$position ).fadeIn( 0 );
                        $( "#btn"+$position ).fadeIn( 0 );}, 500);
 
    setTimeout(() => { $( "#test"+$position ).fadeIn( 150 ); 
                        if($repeat){
                            if($int_position==2){
                                $repeat_bool  =false;
                            }
                            $int_position++;
                            animation(("_"+$int_position), $repeat_bool);
                        }
                    }, 500);
    
}



// function animation($position, $repeat){

//     // console.log($position);

    
//     $( "#point1_1" ).fadeIn( 150 );
//     setTimeout(() => { $( "#point2_1" ).fadeIn( 150 ); }, 150);

//     setTimeout(() => { $( "#point3_1" ).fadeIn( 150 );
//                         $( "#point1_1" ).fadeOut( 150 ); }, 300);

//     setTimeout(() => { $( "#point2_1" ).fadeOut( 0 ); 
//                         $( "#point3_1" ).fadeOut( 0 );
//                         $( "#bulle_points_1" ).fadeOut( 0 );
//                         $( "#text_input_1" ).fadeIn( 0 );}, 500);
 
//     setTimeout(() => { $( "#test_1" ).fadeIn( 150 ); }, 500);
//     // if($repeat){
//     //     $int_position++;
//     //     animation(("_"+$int_position), false);
//     // }
// }

