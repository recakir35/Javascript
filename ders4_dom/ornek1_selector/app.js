//! ============== getElementById ==================
const paragraf=document.getElementById("para").style; // Id ile çağırma
paragraf.backgroundColor="black";
paragraf.color="white";
paragraf.fontSize="20px";

const button=document.getElementById("btn");
button.style.width="100px";
button.style.color="red";
button.style.fontSize="18px";
button.textContent="ARA"; // textContent taglerin içeriğindeki yazıyı değiştirmek istersek



//! ============ getElementsByTagName ===========================
const resim=document.getElementsByTagName("img");

resim[0].style.width="300px";
resim[0].style.height="300px";
resim[1].style.width="320px";
resim[1].style.height="300px"
resim[1].style.border="3px solid red"

//! ============ getElementsByClassName ===========================

const baslik=document.getElementsByClassName("Cs");
baslik[0].style.textAlign="center";
baslik[0].style.color="white";

//! ============ querySelector =========================== 
// en çok kullanılan çağırma yolu

document.querySelector(".arama").textContent="DOM SELECTOR KAVRAMI";
document.querySelector("#govde").style.backgroundImage="linear-gradient(green,blue,pink)"


//! =========== EVENT ( OLAYLAR ) =========================

// Olay	        Açıklaması
// onmouseover	Kullanıcı HTML nesnesinin üzerine geldiğinde tetiklenir.
// onchange	    HTML öğesi değiştirildiğinde tetiklenir.
// onclick	    Kullanıcı HTML nesnesine tıkladığında tetiklenir.
// onmouseout	Kullanıcı HTML nesnesinin üzerinden ayrılınca tetiklenir.
// onkeydown	Kullanıcı klavye tuşuna basınca tetiklenir.
// onload	    Tarayıcı sayfayı yüklemeyi bitirdiğinde tetiklenir.

const h= document.querySelector(".Cs");
h.onmouseover=function(){
    h.style.color="red";
    h.style.backgroundColor="white";
}
h.onmouseout= function(){
    h.style.color="white";
    h.style.backgroundColor="green";
}

//1.resme ve 2. resme tıkladığımızda img ler yer değiştirsin

document.querySelector(".logo").onclick=function(){
    document.querySelector(".logo").src="./img/Js_logo1.png";
    document.querySelector(".logo1").src="./img/Js_logo.png";
}
document.querySelector(".logo1").onclick=function(){
    document.querySelector(".logo1").src="./img/Js_logo1.png";
    document.querySelector(".logo").src="./img/Js_logo.png";
}