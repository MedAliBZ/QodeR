//generate code

let textbox = document.getElementById("gen")
let codethisB = document.getElementById("codethis")
let QRsrc = document.querySelector('#QRcode[src]')

codethisB.addEventListener("click", function change() {
    QRsrc.setAttribute("src", `http://api.qrserver.com/v1/create-qr-code/?data=${textbox.value}`)
})

//download generate code

let downloadB = document.getElementById("download")

downloadB.addEventListener("click",() => {
    saveAs(QRsrc.getAttribute('src'),`QodeR-code`)
})