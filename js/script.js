function toggleBagian(id) {
    const section = document.getElementById(id);
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
}

function tampilkanBagian(sectionId) {
    document.querySelectorAll('.bagian-kalkulasi').forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

tampilkanBagian('bagianLuasSegitiga');

function hitungLuasSegitiga() {
    const alas = parseFloat(document.getElementById('alas_segitiga').value);
    const tinggi = parseFloat(document.getElementById('tinggi_segitiga').value);
    const luas = 0.5 * alas * tinggi;
    document.getElementById('hasilLuasSegitiga').textContent = `Luas: ${luas}`;
}

function hitungKelilingSegitiga() {
    const sisi1 = parseFloat(document.getElementById('sisi_satu').value);
    const sisi2 = parseFloat(document.getElementById('sisi_dua').value);
    const sisi3 = parseFloat(document.getElementById('sisi_tiga').value);
    const keliling = sisi1 + sisi2 + sisi3;
    document.getElementById('hasilKelilingSegitiga').textContent = `Keliling: ${keliling}`;
}

function hitungLuasJajarGenjang() {
    const alas = parseFloat(document.getElementById('alasJajarGenjang1').value);
    const tinggi = parseFloat(document.getElementById('tinggiJajarGenjang1').value);
    const luas = alas * tinggi;
    document.getElementById('hasilLuasJajarGenjang').textContent = `Luas: ${luas}`;
}

function hitungKelilingJajarGenjang() {
    const alas = parseFloat(document.getElementById('alasJajarGenjang2').value);
    const sisi = parseFloat(document.getElementById('tinggiJajarGenjang2').value);
    const keliling = 2 * (alas + sisi);
    document.getElementById('hasilKelilingJajarGenjang').textContent = `Keliling: ${keliling}`;
}

function hapusHasil() {
    document.getElementById('hasilKelilingJajarGenjang').textContent = '';
    document.getElementById('hasilLuasJajarGenjang').textContent = '';
    document.getElementById('hasilKelilingSegitiga').textContent = '';
    document.getElementById('hasilLuasSegitiga').textContent = '';
}
