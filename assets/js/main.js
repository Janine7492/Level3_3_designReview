function darkLight(event) {
    event.preventDefault();
    const darkMode = document.getElementById("darkMode");
    darkMode.classList.toggle("sun");

    const all = document.getElementById("all");
    all.classList.toggle("dark");

}