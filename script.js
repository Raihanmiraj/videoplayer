var x=0;
var y=0;
var imdbid=document.getElementById("imdbid");
 function useImdbID(x){
x=1;
y=x;

var player = new Playerjs({id:"player", file:""});
document.querySelector(".videoframe").classList.replace("videoframe","novideo");
 }
function useLink(x){
    x=0;   
    y=x; 
  
 document.querySelector(".yesframe").classList.replace("yesframe","notframe");
 document.getElementById("myFrameVideo").src="";
 }

function ifChange(){
    var imdbId =  document.getElementById("imdbid").value;
    if(imdbId!=null){
       playerJS(imdbId)
    }
   
   }
 function playerJS(){
       console.log(y);
       var imdbId =  document.getElementById("imdbid").value;
       if(y==0){
        var pl="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8";
     
   var player = new Playerjs({id:"player", file:imdbId});
  document.getElementById("myFrameVideo").src="";
document.querySelector(".novideo").classList.replace("novideo","videoframe");
 console.log(imdbId);
 document.getElementById("myFrameVideo").src="";
console.log(y);
       }else{
           var url = 'https://www.2embed.ru/embed/imdb/movie?id='+imdbId;
           console.log(url);
  document.querySelector(".notframe").classList.replace("notframe","yesframe");
  document.getElementById("myFrameVideo").src="https://www.2embed.ru/embed/imdb/movie?id="+imdbId;
  var player = new Playerjs({id:"player", file:""});
 
       }
  }

   document.querySelector(".tab1p").addEventListener("click", useLink);
   document.querySelector(".tab2p").addEventListener("click", useImdbID);

   imdbid.addEventListener("change",ifChange);

    