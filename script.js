// ===============================
// DRAGLOW - simple WhatsApp order
// ===============================
// Ganti nomor berikut dengan nomor WhatsApp penjual.
// Format: kode negara tanpa tanda +, spasi, atau strip.
// Contoh Indonesia: 6281234567890
const SELLER_WHATSAPP = "6282331841589";

document.querySelectorAll(".order-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product || "Draglow Dragon Fruit Body Scrub";
    const message =
      `Halo Draglow! Saya ingin memesan ${product}.%0A%0A` +
      `Nama:%0AJumlah:%0AAlamat pengiriman:%0A%0A` +
      `Mohon informasi total harga dan ongkir. Terima kasih!`;

    const url = `https://wa.me/${SELLER_WHATSAPP}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
});

// Small reveal effect when sections enter the viewport.
const revealItems = document.querySelectorAll(".benefit-card, .ingredient-list > div, .image-frame, .ingredient-photo");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(18px)";
  item.style.transition = "opacity .6s ease, transform .6s ease";
  observer.observe(item);
});

document.addEventListener("scroll", () => {
  document.querySelectorAll(".is-visible").forEach((item) => {
    item.style.opacity = "1";
    item.style.transform = "translateY(0)";
  });
}, { passive: true });
