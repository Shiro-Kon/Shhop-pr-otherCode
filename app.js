//add to card
let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");
console.log(addToCartBtns);

// for (let i = 0; i < addToCartBtns.length; i++) {
//   addToCartBtns[i].addEventListener("click", function () {
//     // let prevProductCount = +productsCountEl.textContent;
//     productsCountEl.textContent = +productsCountEl.textContent + 1;
//   });
// }

addToCartBtns.forEach((item) => {
  item.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  });
});

/////////////////////////////////

// let likeBtns = document.querySelectorAll(".like");
// let colors = [""];
// let images = ["images/icon-like-blue.png", "images/icon-like-white.png"];
// let currentImageIndex = 0;

// like.addEventListener("click", function () {
//   like.style.backgroundImage = "url('" + images[currentImageIndex] + "')";
//   currentImageIndex = (currentImageIndex + 1) % images.length;
// });

let likeBtns = document.querySelectorAll(".like");
console.log(likeBtns);
likeBtns.forEach((item) => {
  item.addEventListener("click", function () {
    // if (item.classList.contains("liked")) {
    //   item.classList.remove("liked");
    // } else {
    //   item.classList.add("liked");
    // }
    item.classList.toggle("liked"); //перемикач класів
  });
});

//more details
let moreDetailBtns = document.querySelectorAll(".btn-more-details");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

moreDetailBtns.forEach((item) => {
  item.addEventListener("click", openModal);
});

btnClose.addEventListener("click", closeModal);

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});
// modal.addEventListener("keydown", function (e) {
//   if (e.code === "Escape") {
//     closeModal();
//   }
// });

//slick
$(".slider").slick({
  dots: true,
});
