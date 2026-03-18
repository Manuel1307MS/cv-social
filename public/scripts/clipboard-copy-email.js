function showToast(message = "Hecho") {
  const toast = document.querySelector(".toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    toast.textContent = "";
  }, 3000);
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".copy-email-btn");
  if (!btn) return;

  const email = btn.dataset.email;
  if (!email) return;

  navigator.clipboard.writeText(email)
    .then(() => showToast("Correo copiado al portapapeles"))
    .catch(console.error);
});