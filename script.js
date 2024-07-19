function calculateBill() {
    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const usage = parseInt(document.getElementById('usage').value);

    const categories = {
        "Sosial": { "abodemen": 10000, "tarif_per_kwh": 300, "pajak": 0 },
        "Rumah": { "abodemen": 30000, "tarif_per_kwh": 500, "pajak": 10 },
        "Industri": { "abodemen": 50000, "tarif_per_kwh": 1000, "pajak": 30 },
    };

    const abodemen = categories[category].abodemen;
    const tarif_per_kwh = categories[category].tarif_per_kwh;
    const pajak_percentage = categories[category].pajak;

    let subtotal = usage * tarif_per_kwh;
    let total_before_tax = subtotal + abodemen;
    let tax = total_before_tax * (pajak_percentage / 100);
    let total = total_before_tax + tax;

    let result = `
        <h3>Rincian Tagihan</h3>
        <p>Nama Pelanggan: ${name}</p>
        <p>Kategori: ${category}</p>
        <p>Jumlah Pemakaian: ${usage} kWh</p>
        <p>Abodemen: Rp ${abodemen}</p>
        <p>Subtotal: Rp ${subtotal}</p>
        <p>Pajak: Rp ${tax}</p>
        <p>Total Bayar: Rp ${total}</p>
    `;

    document.getElementById('result').innerHTML = result;
}
