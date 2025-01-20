<<<<<<< HEAD
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });
});
function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}

=======
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });
});
function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}

>>>>>>> 7c3f702e6900faefa60f79246b52d9b9505b009c
