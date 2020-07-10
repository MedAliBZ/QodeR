var textbox=document.getElementById("gen")
var codethisB=document.getElementById("codethis")
var QRsrc=document.querySelector('#QRcode[src]')


// if(textbox.innerHTML.length!=0){
    codethisB.addEventListener("click",function change(){
        QRsrc.setAttribute("src",`http://api.qrserver.com/v1/create-qr-code/?data=${textbox.value}`)
    })


// QRsrc.setAttribute("src","tst")
