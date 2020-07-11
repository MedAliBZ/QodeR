//read api

let data = document.getElementById("data")
let text = document.getElementById("gen")
let decodeB = document.getElementById("decode")
//data.innerHTML="Sorry we failed to decode your link."
decodeB.addEventListener("click", function decode() {
    fetch(`https://api.qrserver.com/v1/read-qr-code/?fileurl=${text.value}`)
        .then(res => {
            if (res.ok)
                return res.json()
            else{
                data.innerHTML = "Invalid link!"
                data.style.color='rgba(179, 3, 3, 0.808)'
            }
        })
        .then(k => { return k[0].symbol[0].data })
        .then(s => { data.innerHTML = `Your code says: ${s}` })
})





// fetch("https://qr-code-scanner.p.rapidapi.com/qr-code-scan/", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "qr-code-scanner.p.rapidapi.com",
// 		"x-rapidapi-key": "34d319fce6msh24364e0e0846afbp16acf3jsneb303f62097d"
// 	}
// })

// .then(response => {
// 	return response.json()
// })
//     .then(body => {
//         console.log(body)
//         if (response.status === 200) {
//             return body
//         }
//   })

// .catch(err => {
// 	console.log(err);
// })