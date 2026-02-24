const produkData = [
    { img:"produk1.png", title:"PSU", desc:"Power Supply Unit berkualitas tinggi untuk suplai daya stabil, aman, dan tahan lama bagi seluruh komponen PC." },
    { img:"produk2.png", title:"CPU Cooler", desc:"Pendingin prosesor efisien untuk menjaga suhu tetap stabil saat gaming dan aktivitas berat." },
    { img:"produk3.png", title:"VGA", desc:"Kartu grafis performa tinggi untuk gaming, desain grafis, dan rendering profesional." },
    { img:"produk4.png", title:"MotherBoard", desc:"Motherboard original dengan fitur lengkap dan stabilitas tinggi untuk berbagai kebutuhan PC." },
    { img:"produk5.png", title:"laptop", desc:"Laptop modern untuk kerja, belajar, dan gaming dengan performa optimal dan desain elegan." },
    { img:"produk6.png", title:"RAM", desc:"RAM berkualitas tinggi untuk multitasking lancar dan performa sistem yang responsif." },
    { img:"produk7.png", title:"CPU", desc:"Processor bertenaga untuk performa cepat, efisiensi tinggi, dan pengalaman komputasi maksimal." },
    { img:"produk8.png", title:"SSD", desc:"Penyimpanan SSD super cepat untuk booting instan dan loading aplikasi tanpa delay." },
    { img:"produk9.png", title:"Monitor", desc:"Monitor dengan tampilan jernih dan warna akurat untuk produktivitas dan hiburan." },
    { img:"produk10.png", title:"Fan cooler", desc:"Kipas pendingin dengan airflow optimal untuk menjaga suhu PC tetap dingin dan stabil." }
];

let indexProduk = 0;

const imgEl = document.getElementById("produkImage");
const titleEl = document.getElementById("produkTitle");
const descEl = document.getElementById("produkDesc");

function renderProduk() {
    imgEl.style.opacity = 0;
    setTimeout(() => {
        imgEl.src = produkData[indexProduk].img;
        titleEl.textContent = produkData[indexProduk].title;
        descEl.textContent = produkData[indexProduk].desc;
        imgEl.style.opacity = 1;
    }, 300);
}

function nextProduk() {
    indexProduk = (indexProduk + 1) % produkData.length;
    renderProduk();
}

function prevProduk() {
    indexProduk = (indexProduk - 1 + produkData.length) % produkData.length;
    renderProduk();
}

setInterval(nextProduk, 6000);
