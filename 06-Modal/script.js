"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

// console.log(btnOpenModal);
// Here, we get only Show modal-1 in console, it means querySelector have some limitation,
// That is, it only can store one element, doesn't matter how many element are stored in that particular name.
// Hence, to store every element we'll use querySelectorAll() <<==

const openModal = function () {
  console.log("button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  console.log("button clicked");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// WE just made function for the specific task like opening modal, closing modal bu using functions : openModal & closeModal to make our dry.

// How to respond to keypress events.
// Key-board events are so called global events, because they do not happen on one specific event.
// And in global events like keyboard events we usually listen on whole document.

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
