# DRAGLOW — Website Promosi & Pemesanan via WhatsApp

Project website desktop-first untuk tugas web promosi produk **Draglow Dragon Fruit Body Scrub**.

## Struktur
- `index.html` — halaman utama
- `style.css` — seluruh desain
- `script.js` — fungsi tombol Pesan Sekarang
- `assets/` — foto referensi/produk yang diberikan

## Cara menjalankan di Visual Studio Code
1. Extract ZIP ini.
2. Buka folder `draglow_web` di Visual Studio Code.
3. Buka `index.html`.
4. Klik kanan → **Open with Live Server** jika extension Live Server sudah terpasang.
   Alternatif: buka `index.html` langsung di browser.

## WAJIB sebelum demo
Buka `script.js`, lalu ubah:
`const SELLER_WHATSAPP = "6281234567890";`

menjadi nomor WhatsApp penjual yang sebenarnya, tanpa `+`, spasi, atau strip.

Contoh:
`const SELLER_WHATSAPP = "6281234567890";`

## Alur website
Halaman utama → lihat informasi produk → klik **PESAN SEKARANG** → WhatsApp terbuka dengan pesan order yang sudah disiapkan.

Tidak ada database, registrasi, login, atau checkout internal.
