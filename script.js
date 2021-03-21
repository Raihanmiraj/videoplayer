var imdbid=document.getElementById("imdbid");
imdbid.addEventListener("change",ifChange);
function ifChange(){
 var imdbId =  document.getElementById("imdbid").value;
 document.querySelector(".novideo").classList.add("videoframe");
 if(imdbId!=null){
    playerJS(imdbId)
 }

}

function playerJS(imdbId){
    var player = new Playerjs({id:"player", file:imdbId});
}
var pl="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8";