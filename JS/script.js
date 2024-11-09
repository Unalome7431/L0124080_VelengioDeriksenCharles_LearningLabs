const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");

function showText(w, x, y, z){
    if (window.getComputedStyle(w).display === "none") {
        w.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedbackForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you for your feedback!");
            form.reset();
        });
    }
});