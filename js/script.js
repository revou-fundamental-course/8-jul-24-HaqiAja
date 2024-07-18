// ini js
// Menentukan Constanta
const tinggiBadan = document.getElementById('input-tinggi-badan');
const usia = document.getElementById('input-usia');
const beratBadan = document.getElementById('input-berat-badan');
const hasilBmiElement = document.querySelector('.hasil-bmi');
const kategoriBmiElement = document.querySelector('.kategori-bmi');
const dataUserElement = document.querySelector('.data-user .usia');
const jenisKelaminElement = document.querySelector('.data-user .jenis-kelamin');
const hasiImputlElement = document.getElementById('hasil-input');
const keteranganElement = document.getElementById('keterangan');

// Klasifikasi hasil BMI
function klasifikasiBmi(bmi) {
    if (bmi < 18.50) {
        return "Kekurangan Berat Badan";
    } else if (bmi >= 18.50 && bmi <= 24.99) {
        return "Normal (Ideal)";
    } else if (bmi >= 25 && bmi <= 29.99) {
        return "Kelebihan Berat Badan";
    } else if (bmi > 30){
        return "Kegemukan (Obesitas)";
    }
}

// Perhitungan dan menampilkan hasil pada html page
function hitungBmi(event) {
    event.preventDefault(); // Mencegah form dari submit secara default

    const tbad = parseFloat(tinggiBadan.value) / 100;
    const bbad = parseFloat(beratBadan.value);
    const usi = parseInt(usia.value, 10);
    const jenisKelamin = document.querySelector('input[name="jeniskelamin"]:checked');

    if (isNaN(tbad) || isNaN(bbad) || isNaN(usi) || !jenisKelamin) {
        alert('Pastikan semua input terisi dengan benar');
        return;
    }

    let bmi = bbad / (tbad * tbad);
    bmi = bmi.toFixed(2);
    let bmih = bbad / (tbad * tbad);
    let bmik = bbad / (tbad * tbad);
    let keterangan = getBMIKeterangan(bmik);
    let hasil = getBMIHasil(bmih);

    hasilBmiElement.textContent = bmi;
    kategoriBmiElement.textContent = `${klasifikasiBmi(parseFloat(bmi))}`;
    dataUserElement.textContent = `${usi}`;
    jenisKelaminElement.textContent = jenisKelamin.value;
    document.getElementById('hasil-input').textContent = `Hasil BMI anda adalah: ${hasil}`;
    document.getElementById('keterangan').textContent = `${keterangan}`;
}

function getBMIHasil(bmih) {
    if (bmih < 18.50) return 'kurang dari 18.5';
    if (bmih >= 18.50 && bmih <= 24.99) return '18.5 dan 24.9';
    if (bmih >= 25 && bmih <= 29.99) return '25 dan 29.9';
    if (bmih > 30) return 'Lebih dari 30';
    return ''
 }

 function getBMIKeterangan(bmik) {
    if (bmik < 18) return 'Anda berada dalam kategori kekurangan berat badan. Jika Anda kekurangan berat badan, penting bagi Anda untuk mengonsumsi makanan dengan energi yang cukup untuk menambah berat badan, protein untuk memperbaiki tubuh dan membangun otot, serta vitamin dan mineral untuk membuat Anda sehat.';
    if (bmik >= 18.50 && bmik <= 24.99) return 'Anda berada dalam kategori normal (ideal). Jaga kesehatan anda dan pola makan anda agara berat badan anda selalu normal (ideal).';
    if (bmik >= 25 && bmik <= 29.99) return 'Anda berada dalam kategori kelebihan berat badan. Memiliki pola makan sehat, diet rendah kalori, dan olahraga secara teratur adalah cara terbaik untuk mengobati kelebihan berat badan. Lakukan diet berisi makanan seimbang, mengontrol kalori, dan juga melakukan aktivitas fisik untuk meningkatkan pembakaran energi dan cadangan energi.';
    if (bmik > 30) return 'Anda berada dalam kategori obesitas. Memiliki pola makan sehat, diet rendah kalori, dan olahraga secara teratur adalah cara terbaik untuk mengobati obesitas. Lakukan diet berisi makanan seimbang, mengontrol kalori, dan juga melakukan aktivitas fisik untuk meningkatkan pembakaran energi dan cadangan energi.';
    return ''
 }


// Reset Button 
function resetForm() {
    document.getElementById('bmi-form').reset();
    hasilBmiElement.textContent = '0.0';
    kategoriBmiElement.textContent = '';
    dataUserElement.textContent = '';
    jenisKelaminElement.textContent = '';
    hasiImputlElement.textContent = '';
    keteranganElement.textContent = '';
}

// Event Submit dan Reset
document.getElementById('bmi-form').addEventListener('submit', hitungBmi);
document.getElementById('reset-button').addEventListener('click', resetForm);