const btn = document.querySelector(".btn-toggle");

btn.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    document.header.classList.toggle("dark-theme");
});