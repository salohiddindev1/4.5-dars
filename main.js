let ism = prompt("Ismingizni kiriting")
let harf = prompt("Birorta harf kiriting")

if(ism.includes(harf)){
    alert(ism + " ismining ichida " + harf + " harfi mavjud" )
}else{ 
     alert(ism + " ismining ichida " + harf  + " harfi mavjud emas" )
}