// =======================
// DATA
// =======================
const logoData = [
  {
    title: "Elegant Premium Logo",
    description:
      "Handwritten script typography with chocolate dripping cupcake icon forming the letter 'A'.",
    src: "/assets/img/kly2.png",
  },
  {
    title: "Minimal Instagram Logo",
    description: "Clean modern typography with cupcake and whisk icons.",
    src: "/assets/img/kly.png",
  },
];

// =======================
// ELEMENTS
// =======================
const modal = document.getElementById("logoModal");
const modalContent = document.querySelector(".modal-content");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

let currentIndex = 0;
let autoSlideInterval;

// =======================
// OPEN MODAL
// =======================
function openModal(index) {
  currentIndex = index;
  updateModal();

  modal.style.display = "flex";

  setTimeout(() => {
    modal.classList.add("show");
    modalContent.classList.add("zoom");
  }, 10);

  startAutoSlide();
}

// =======================
// UPDATE
// =======================
function updateModal() {
  const logo = logoData[currentIndex];

  modalImage.src = logo.src;
  modalTitle.textContent = logo.title;
  modalDescription.textContent = logo.description;

  highlightThumbnail();
}

// =======================
// CLOSE
// =======================
function closeModal(event) {
  if (event.target === modal) closeModalBtn();
}

function closeModalBtn() {
  modal.classList.remove("show");
  modalContent.classList.remove("zoom");

  stopAutoSlide();

  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

// =======================
// KEYBOARD
// =======================
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "flex") {
    if (e.key === "Escape") closeModalBtn();
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  }
});

// =======================
// CAROUSEL
// =======================
function nextSlide() {
  currentIndex = (currentIndex + 1) % logoData.length;
  animateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + logoData.length) % logoData.length;
  animateSlide();
}

function animateSlide() {
  modalContent.classList.remove("zoom");

  setTimeout(() => {
    updateModal();
    modalContent.classList.add("zoom");
  }, 150);
}

// =======================
// AUTO SLIDESHOW
// =======================
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// =======================
// SWIPE (MOBILE)
// =======================
let startX = 0;

modal.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

modal.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) nextSlide();
  if (endX - startX > 50) prevSlide();
});

// =======================
// DOWNLOAD
// =======================
function downloadLogo() {
  const link = document.createElement("a");
  link.href = modalImage.src;
  link.download = modalImage.src.split("/").pop();
  link.click();
}

function downloadAssets() {
  alert("Downloading all assets...");

  logoData.forEach((logo, i) => {
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = logo.src;
      link.download = logo.src.split("/").pop();
      link.click();
    }, i * 800);
  });
}

// =======================
// THUMBNAILS
// =======================
function createThumbnails() {
  const thumbContainer = document.createElement("div");
  thumbContainer.className = "thumbnails";

  logoData.forEach((logo, index) => {
    const img = document.createElement("img");
    img.src = logo.src;
    img.onclick = () => {
      currentIndex = index;
      updateModal();
    };
    thumbContainer.appendChild(img);
  });

  modalContent.appendChild(thumbContainer);
}

function highlightThumbnail() {
  const thumbs = document.querySelectorAll(".thumbnails img");

  thumbs.forEach((img, i) => {
    img.classList.toggle("active", i === currentIndex);
  });
}

// run once
createThumbnails();
