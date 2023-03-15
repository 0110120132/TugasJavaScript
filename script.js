function perkalian() {
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 * a2;
    frm.display.value = total;
    let no_total = 'Masukan Angka !!!'
    let hasil = (a1 && a2 != '') ? '' : no_total;
    document.getElementById('hasil').innerHTML = hasil;
}

function pembagian() {
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 / a2;
    frm.display.value = total;
    let no_total = 'Masukan Angka !!!'
    let hasil = (a1 && a2 != '') ? '' : no_total;
    document.getElementById('hasil').innerHTML = hasil;
}

function pangkat() {
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 ** a2;
    frm.display.value = total;
    let no_total = 'Masukan Angka !!!'
    let hasil = (a1 && a2 != '') ? '' : no_total;
    document.getElementById('hasil').innerHTML = hasil;
}