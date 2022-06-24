//! meanmbahkan fitur jam
const jam = document.querySelector('.textJam')
setInterval(function () {
    const ambilJam = new Date()
    const jambrp = ambilJam.getHours()
    const menitbrp = ambilJam.getMinutes()
    const detikbrp = ambilJam.getSeconds()
    jam.innerHTML = `jam  : ${jambrp} : ${menitbrp} : ${detikbrp} `
}, 1000)
//!tutup fitur jam
// ! membuat hover pada span
const judul = document.querySelector('.judul h1')
const judul1Text = [...judul.textContent].map(a => { return '<span>' + a + '</span>' }).join('')
console.log(judul1Text);
judul.innerHTML = judul1Text

const span = document.querySelectorAll('h2')
const judul2 = document.querySelector('.judul2 h2')
const judul3 = document.querySelector('.judul3 h2')
const h2 = [...span].forEach((m, b) => {
    //? if untuk menentukan index yang akan membubuat elemen span pada text content judul 2 dan 3
    if (b == 0) {
        //?judul2Text untuk menjadikan array array
        const judul2Text = Array.from(m.textContent)
        //? lalu saya pisahkan textcontent dan menambhkan elemen span
        const htmlJudul2 = judul2Text.map(pisah => {
            return '<span>' + pisah + "</span>"
            //? lalu saya gabung lagi elemen span yang terpisah menjadi index array
        }).reduce((a, b) => a + b)
        //? lalu saya pangiil fungsi ini
        judul2.innerHTML = htmlJudul2
        console.log(htmlJudul2);
        //?cara ini sama seperti yang di bawah
    }
    else {
        const judul3Text = Array.from(m.textContent)
        const htmlJudul3 = judul3Text.map(pisah => {
            return '<span>' + pisah + '</span>'
        }).reduce((a, b) => a + b)
        judul3.innerHTML = htmlJudul3
        console.log(htmlJudul3);
    }

})
//!menutup hover pada span