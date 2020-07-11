//read api

var data=document.getElementById("data")


fetch("https://api.qrserver.com/v1/read-qr-code/?fileurl=https://pics.me.me/no-dont-scan-me-71846083.png")
    .then (res => res.json())
    .then (k => {return k[0].symbol[0].data})
        .then(s=>data.innerHTML=s)
    