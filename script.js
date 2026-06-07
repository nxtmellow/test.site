console.log("Website Loaded");

document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", () => {
        console.log("Discord button clicked");
    });
});
