function myfunction(){
 var div=document.createElement("div")
 div.innerHTML="Div Element";
 // div.id="divTag"
 div.setAttribute('style','padding-top:40px,font-size:40px ')
 
let hTag=document.createElement("H1");
hTag.innerHTML="Welcome";
hTag.setAttribute('style','color:gray','margin:20px');
div.appendChild(hTag);

document.body.prepend(div);
}   