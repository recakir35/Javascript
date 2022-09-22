//! ==== KARAR YAPILARI ========
//? ********** IF-ELSE **********

// Toplama işlemi yapmaya kalktığımızda concatination yapar o yüzden işi baştan sağlam tutalım 
//  ve prompt lara number eklemeliyiz
// bölen 0 olmayı göstermek zorunda değiliz

/*const s1=Number(prompt("birinci sayı:"));
const islem=prompt("işlem giriniz:");
const s2=Number(prompt("ikinci sayı: "));

let sonuc=0;

if (islem=="+") {
    sonuc=s1+s2;
} else if (islem=="-") {
    sonuc=s1-s2;
} else if (islem=="*") {
    sonuc=s1*s2;
} else if(islem=="/") {
    sonuc=s1/s2;
}

console.log(sonuc); */

//? =========== TERNARY ================

/*const name1=prompt("Adınızı giriniz: "); //name yazınca uyarı veriyor. o yüzden name1 yazdık
const age=prompt("Yaş Giriniz:");
const healt=prompt("Sağlıklımısınız? (E/H)");

console.log(age>=18 && healt=="E" ? `${name1} ehliyet alabilir.` : `${name1} ehliyet alamaz`);

const result=age>= 18 && healt=="E" ? `${name1} ehliyet alabilir.` : `${name1} ehliyet alamaz`; // değişkene atadık
console.log(result);
alert(result);*/

//TODO =========================================================================================

/*const borç=0;
const maaş=3000;
console.log(!borç && maaş>2825 ? "Kredi alabilir" : "Kredi alamaz") ;
// Emojiler Window + . 😜 (emojisense eklentisi eklenmeli)*/

//? =============== SWİTCH - CASE ============

// Girilen bir sayının onlar ve birler basamağındaki rakamlarını yazı ile yazdıran program

/*var sayi=prompt("İki basamaklı bir sayı giriniz:");
var birler=sayi%10;

switch (birler) {
    case 1:
        rakamismi="Bir";
        break;
    case 2:
        rakamismi="İki";
        break;
    case 3:
        rakamismi="Üç";
        break;
    case 4:
        rakamismi="Dört";
        break;
    case 5:
        rakamismi="Beş";
        break;
    case 6:
        rakamismi="Altı";
        break;
    case 7:
        rakamismi="Yedi";
        break;
    case 8:
        rakamismi="Sekiz";
        break;
    case 9:
        rakamismi="Dokuz";
        break;
    case 0:
        rakamismi="Sıfır";
        break;                          
    default:
        break;
}

console.log(rakamismi);*/

//? ====================== FOR ===============

// Asal Sayı tespiti

/*const number=prompt("Bir Sayı Giriniz:");

let asal=true;
for (let i = 2; i < number; i++) {
   if (number % i ==0) {
    asal = false;
    break;
   }    
}
console.log(asal);
console.log(asal==true ? "ASAL" : "Asal Değil");*/

//? ============ DO - WHİLE ==============

/*let adi= prompt("Başlat yaz")
let i=1;

while (adi!="end") {
    adi=prompt(i + ".kişinin adını giriniz. (Durdurmak için 'end' giriniz)");
    i++;
    console.log(adi);
}*/

//TODO ============================================

let not;
do{
    not=prompt("Lütfen Do - While için 0-100 arasında bir not giriniz:")
}while (not < 0 || not > 100);
console.log("Girdiğiniz not 0-100 arasındadır");