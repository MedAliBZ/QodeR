//read api

let data = document.getElementById("data")
let text = document.getElementById("gen")
let decodeB = document.getElementById("decode")
let spinner=document.getElementById("text-center")



decodeB.addEventListener("click", function decode() {
    spinner.style.display="inherit"
    data.innerHTML =""
    data.style.color="#343a40"
    fetch(`https://api.qrserver.com/v1/read-qr-code/?fileurl=${text.value}`)
        .then(res => {
            if (res.ok)
                return res.json()
            else{
                spinner.style.display="none"
                data.innerHTML = "Invalid link!"
                data.style.color='rgba(179, 3, 3, 0.808)'
            }
        })
        .then(k => { return k[0].symbol[0].data })
        .then(s => {
            spinner.style.display="none"
             data.innerHTML = `Your code says: ${s}` })
})
