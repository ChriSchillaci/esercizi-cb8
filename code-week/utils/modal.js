const bgModal = document.querySelector(".bg-modal");
const modal = document.querySelector(".modal");

const closeModal = (e) => {
  if (e.target.id === "bg" || e.target.id === "cancel") {
    bgModal.classList.remove("active-bg");
    modal.classList.remove("active-modal");
    document.body.style.overflow = "auto";
  }
};

const openModal = () => {
  if (!bgModal.classList.contains("active-bg")) {
    bgModal.classList.add("active-bg");
    modal.classList.add("active-modal");
    document.body.style.overflow = "hidden";
  }
};
export { closeModal, openModal };
