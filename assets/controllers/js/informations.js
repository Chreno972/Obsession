const access_informations_nav_button = document.getElementById("view_data");
const access_informations_container = document.getElementById("infos_section");
const info_close_button = document.getElementById("informations_close_button");

access_informations_container.style.display = "none";

access_informations_nav_button.addEventListener("click", () => {
    if (access_informations_container.style.display === "none") {
        access_informations_container.style.display = "block";

    }
});

info_close_button.addEventListener("click", () => {
    access_informations_container.style.display = "none";
})