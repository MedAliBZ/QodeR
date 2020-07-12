//generate code

let textbox = document.getElementById("gen")
let codethisB = document.getElementById("codethis")
let QRsrc = document.querySelector('#QRcode[src]')

codethisB.addEventListener("click", function change() {
    QRsrc.setAttribute("src", `http://api.qrserver.com/v1/create-qr-code/?data=${textbox.value}`)
    copyB.removeAttribute("disabled")
    downloadB.removeAttribute("disabled")
    downloadB.innerHTML="Download QR code"
    copyB.innerHTML="Copy image URL"
})

//download generate code

let downloadB = document.getElementById("download")

downloadB.addEventListener("click",() => {
    saveAs(QRsrc.getAttribute('src'),`QodeR-code`)
    downloadB.setAttribute("disabled","true")
    downloadB.innerHTML="Downloaded ✔"
})

//Copy url

let copyB=document.getElementById("copy")



copyB.addEventListener("click",function nakel(){
    let url=QRsrc.getAttribute('src')
    navigator.clipboard.writeText(url)
    copyB.setAttribute("disabled","true")
    copyB.innerHTML="Copied ✔"
})
