//! =============  FONKSİYONLAR ===============

//? 1. YÖNTEM : FUNCTİON DECLARATİON
   // DECLARATİON yöntemi ile fonksiyonun tanımlanması çağırılmasından önce veya sonra olabilir

   // fonsiyonun tanımlanması
   /*function yazdirAd() {
    console.log("Hakan");
   }

 // fonksiyonun çağrılması
 yazdirAd(); // Hakan*/

//TODO =======================================================

 // Kullanıcıdan istenen sayının tekmi çiftmi olduğunu belirten bir fonksiyon yazdırınız.

 /*const sayiniz=prompt("Sayı giriniz");

console.log(tekCift(sayiniz));

 function tekCift(sayiniz) {
   return sayiniz % 2 ==0 ? `${sayiniz} Çifttir` : `${sayiniz} Tektir`;
 }*/

//? 2.YÖNTEM: FUNCTİON EXPRESSİON (bu yöntem daha yaygın)
 
 /*const tekCift1=function (sayi) {
   return sayi % 2 == 0 ? "Çift" : "Tek";
 }

 const sayi=prompt("Sayı giriniz");
 console.log(tekCift1(sayi));*/

//TODO =================================================================

 // Verilen 3 sayıdan Enbüyük sayıyı bulma

 /*let buyukBul=function (x,y,z) {
    let Enbüyük;
    if (x>y && x>z) {
       Enbüyük=x; 
    } else if (y>x && y>z) {
        Enbüyük=y;
    } else if (z>x && z>y) {
        Enbüyük=z;
    }
    return Enbüyük;
 }
 
 console.log(buyukBul(5,3,8));*/

//? 3.YÖNTEM: FUNCTİON ARROW (OK)

const ciftMi=(sayi) => (sayi % 2 ==0 ? "Çift" : "Tek");

console.log(ciftMi(7));

//TODO ====================================================

const taban=prompt("taban gir");
const ust=prompt("üst giriniz");

const ustAl=(taban,ust) => taban**ust;

console.log(ustAl(taban,ust));