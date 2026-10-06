// ======================================================
// DRAGLOW - MAIN JAVASCRIPT
// ======================================================


// ======================================================
// WHATSAPP SELLER
// ======================================================
//
// Nomor WhatsApp penjual.
// Format:
// - Gunakan kode negara
// - Jangan menggunakan tanda +
// - Jangan menggunakan spasi
// - Jangan menggunakan strip
//
// Contoh Indonesia:
// 6281234567890
//
// Nomor yang digunakan saat ini:
// 6282331841589
// ======================================================

const SELLER_WHATSAPP = "6282331841589";


// ======================================================
// 1. PRODUCT ORDER → WHATSAPP
// ======================================================
//
// Digunakan oleh:
// - PESAN SEKARANG
// - PESAN VIA WHATSAPP
//
// Tombol harus memiliki:
// class="order-btn"
// dan:
// data-product="Draglow Dragon Fruit Body Scrub"
// ======================================================

const orderButtons = document.querySelectorAll(".order-btn");


orderButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const product =
      button.dataset.product ||
      "Draglow Dragon Fruit Body Scrub";


    const message =
      `Halo Draglow! 👋\n\n` +
      `Saya ingin memesan ${product}.\n\n` +
      `Nama:\n` +
      `Jumlah:\n` +
      `Alamat pengiriman:\n\n` +
      `Mohon informasi total harga dan ongkir.\n` +
      `Terima kasih!`;


    const url =
      `https://wa.me/${SELLER_WHATSAPP}?text=${encodeURIComponent(message)}`;


    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );

  });

});


// ======================================================
// 2. FAQ → WHATSAPP
// ======================================================
//
// Setiap FAQ menggunakan:
//
// class="faq-card"
//
// dan:
//
// data-question="Pertanyaan FAQ"
//
// Contoh:
//
// <a
//   href="#"
//   class="faq-card"
//   data-question="Berapa harga Draglow?"
// >
//
// Ketika diklik, pengunjung akan langsung diarahkan
// ke WhatsApp penjual dengan pertanyaan tersebut.
// ======================================================

const faqCards = document.querySelectorAll(".faq-card");


faqCards.forEach((card) => {

  card.addEventListener("click", (event) => {

    // Mencegah href="#" membawa halaman kembali ke atas
    event.preventDefault();


    // Mengambil pertanyaan dari data-question
    const question = card.dataset.question;


    // Jika data-question tidak ditemukan,
    // gunakan pertanyaan default.
    const faqQuestion =
      question ||
      "Saya ingin bertanya mengenai Draglow Dragon Fruit Body Scrub.";


    // Pesan yang akan muncul di WhatsApp
    const message =
      `Halo Draglow! 👋\n\n` +
      `Saya ingin menanyakan tentang Draglow Dragon Fruit Body Scrub.\n\n` +
      `Pertanyaan saya:\n` +
      `"${faqQuestion}"\n\n` +
      `Mohon informasinya. Terima kasih!`;


    // Membuat URL WhatsApp
    const url =
      `https://wa.me/${SELLER_WHATSAPP}?text=${encodeURIComponent(message)}`;


    // Membuka WhatsApp pada tab baru
    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );

  });

});


// ======================================================
// 3. SCROLL REVEAL EFFECT
// ======================================================
//
// Beberapa elemen website akan muncul secara perlahan
// ketika masuk ke area layar.
//
// Elemen yang diberi efek:
// - Benefit card
// - Ingredient list
// - Product image
// - Ingredient photo
// ======================================================

const revealItems = document.querySelectorAll(
  ".benefit-card, " +
  ".ingredient-list > div, " +
  ".image-frame, " +
  ".ingredient-photo"
);


// Cek apakah browser mendukung IntersectionObserver
if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("is-visible");

          observerInstance.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  revealItems.forEach((item) => {

    item.style.opacity = "0";

    item.style.transform =
      "translateY(18px)";

    item.style.transition =
      "opacity .6s ease, transform .6s ease";


    observer.observe(item);

  });


  // Saat elemen sudah diberi class is-visible,
  // tampilkan elemen tersebut.
  const revealStyle = document.createElement("style");

  revealStyle.textContent = `
    .is-visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;

  document.head.appendChild(revealStyle);

}


// ======================================================
// 4. NAVBAR ACTIVE LINK
// ======================================================
//
// Ketika pengguna scroll ke bagian tertentu,
// link navbar yang sesuai akan diberi sedikit penekanan.
//
// Tidak wajib, tetapi membuat navigasi terasa lebih hidup.
// ======================================================

const navigationLinks =
  document.querySelectorAll(".navbar nav a");


const sections =
  document.querySelectorAll(
    "main section[id]"
  );


if (
  navigationLinks.length > 0 &&
  sections.length > 0 &&
  "IntersectionObserver" in window
) {

  const navObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            const currentId =
              entry.target.getAttribute("id");


            navigationLinks.forEach((link) => {

              const linkTarget =
                link.getAttribute("href");


              if (
                linkTarget ===
                `#${currentId}`
              ) {

                link.classList.add(
                  "nav-active"
                );

              } else {

                link.classList.remove(
                  "nav-active"
                );

              }

            });

          }

        });

      },
      {
        threshold: 0.35
      }
    );


  sections.forEach((section) => {

    navObserver.observe(section);

  });

}


// ======================================================
// 5. FAQ CARD KEYBOARD ACCESSIBILITY
// ======================================================
//
// Karena FAQ berbentuk <a>, sebenarnya sudah bisa
// menggunakan keyboard.
//
// Bagian ini memastikan tombol Enter/Space tetap
// menjalankan fungsi FAQ dengan baik.
// ======================================================

faqCards.forEach((card) => {

  card.addEventListener("keydown", (event) => {

    if (
      event.key === "Enter" ||
      event.key === " "
    ) {

      event.preventDefault();

      card.click();

    }

  });

});


// ======================================================
// 6. CONSOLE INFORMATION
// ======================================================
//
// Hanya informasi untuk developer.
// Tidak memengaruhi tampilan website.
// ======================================================

console.log(
  "Draglow website loaded successfully."
);

console.log(
  `WhatsApp seller: ${SELLER_WHATSAPP}`
);