//https://teachablemachine.withgoogle.com/models/4gjPvOlIq///https://teachablemachine.withgoogle.com/models/4gjPvOlIq/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true, video:false});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xitBUlV_S/model.json',{ probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
    
var temaki = 0;
var sushi = 0;
var hotroll = 0;
var resultado ='';
function gotResults(error, results){

    if(error) {
        console.error(error);
    }else{
        console.log(results);
        //random_number_r = Math.floor(Math.random() * 255) + 1;
        //random_number_g = Math.floor(Math.random() * 255) + 1;
        //random_number_b = Math.floor(Math.random() * 255) + 1;

        resultado = results[0].label;
        document.getElementById("result_label").innerHTML = 'Som detectado de - '+ results[0].label;
       // document.getElementById("resul_count").innerHTML = 'Amor detectado - '+amor+ ' Dançando detectado - '+dancando+ ' Felicidade detectado - '+felicidade;
        //document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
       // document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        //img = document.getElementById('animal_image');
        var img = document.getElementById('animal_image');
        
        console.log(resultado);

        if(resultado == 'sushi') {
            img.src = 'sushi.gif';
             //img.setAttribute('src','https://c.tenor.com/WmefaP0mX8AAAAAC/happy-hearts.gif');
              sushi = sushi+1;
          } else if (resultado == 'temaki') {
              img.src= 'temaki.gif';
              temaki = temaki+1;
  
          } else if(resultado == 'hotroll') {
              img.src = 'hotroll.gif';
              hotroll = hotroll+1;
  
          } else {
              img.src = 'ouvindo.gif';
              console.log("else");


            }
        }
    }