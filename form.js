const button = document.querySelector(".outer")
const box = document.querySelector(".box")

button.addEventListener("click", () => {
    box.classList.toggle("addWidth")
})