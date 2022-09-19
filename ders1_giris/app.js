//================== KONSOL MESAJLARI =========================================

console.log("Hello javascript"); // log kareli olanı tıklarsak otomatik yazar
alert("Dikkat"); // Alert(İlk çıkan mesaj) Mesaj Yazdırmak için
console.warn("Bu biruyarıdır"); // warn uyarı mesajı için 
console.error("Bu bir hatadır"); // error ile hata mesajı için
prompt("Adınızı giriniz:"); // Prompt dışarıdan bir veri almak için


//================== DEĞİŞKEN TANIMLAMA =========================================

// VAR:
var isim="Recep"; // heryerden çağrılabilir hem string hemde integer olabilir.
                  // sadece var ile herşey tanımlanabiliyor.Tercih edilmiyor.
                  // Global değişken gibi düşünülebilir. 
console.log(typeof isim);

// CONST:

const piSayisi=3.14; // Yazıldığı yerde geçerli oluyor. 
                     // Başlangıçta atanan değişken asla değiştirilemez.
// piSayisi=3;  // Bu hata döndürür değiştirmek istediğimiz için
console.log("const 1: " +typeof piSayisi)

// LET:
let fiyat; // Yazıldığı yerde geçerli oluyor.
fiyat=10;
console.log("Let 1: " + typeof fiyat);
fiyat="Erdem";
console.log("Let 2: " + typeof fiyat);

// string tanımlamak için 3 farklı karakter kullanılabilir.

let name1="Alaattin";
let name2='Faruk';
let name3=`Oğuzhan` //Altgr + virgül

console.log(name3);

// Template literal
console.log(`Benim adım ${name1} yasşım ${name2}`);

// ARİTMETİK OPERATÖRLER

//  Operatör	Açıklaması
//  +	        Toplama
//  –	        Çıkarma
//  *	        Çarpma
//  /	        Bölme
//  %	        Mod alma
//  ++	        Arttırma
//  —	        Azaltma

// üs alma
const taban=2;
const us=3;
console.log(taban**us) //8

// mod alma %
const sayi=123;
const birler=sayi%10;
console.log(birler);

// KARŞILAŞTIRMA OPERATÖRLERİ

/*  Operatör	Açıklaması
    a == b	    a ve b eşit mi?
    a === b	    a ve b değerleri ve değer türleri eşit mi?
    a != b	    a ve b değerleri eşit değil mi?
    a !== b	    a ve b değerleri veya değer türleri eşit mi?
    a > b	    a değeri b değerinden büyük mü?
    a < b	    a değeri b değerinden küçük mü?
    a >= b	    a değeri b değerinden büyük veya eşit mi?
    a <= b	    a değeri b değerinden küçük veya eşit mi?
    ?	        kısaltılmış koşul operatörü */

// TİP DEĞİŞİMLERİ

const para="100";
console.log(para + 15);10015
console.log(Number(para)+15);