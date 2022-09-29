//! ara butonuna tıklandığında çalan telefon çıksın ve zil çalsın
let resim=document.querySelector(".resim"); // resme ulaştım
let ring=document.querySelector(".ses");    // sese ulaştım


document.querySelector(".on").onclick=function(){
    resim.src="./img/calantel.gif"; // resmi değiştirdim
    ring.play(); // sesi açtım
}

//! Bağlat butonuna tıklayınca gif gelsin ve ses kesilsin

document.querySelector(".off").onclick= function(){
    resim.src="./img/baglama.jpg";
    ring.pause(); //tel sesini susturduk
}

//! Konuş butonuna tıklayınca gif gelsin

document.querySelector(".speak").onclick=function(){
    resim.src="./img/konus.gif";
}

//! Ekle butonuna basıldığında yeni bir li ekleme
const liste= document.querySelector(".liste");
document.querySelector(".ekle").onclick= function () {
  const giris= document.querySelector(".dil");

  liste.innerHTML=liste.innerHTML + `<li>${giris.value}</li>`; // li ekleme
  giris.value="";
}

//! Sil butonuna basıldığında li silinsin
document.querySelector(".sil").onclick=function () {
   liste.removeChild(liste.lastChild);// listeden son üyesini sil
}