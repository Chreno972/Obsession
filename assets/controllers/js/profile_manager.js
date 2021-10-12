import * as m from './main.js';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ! INITIALIZE SELECTED HTML ELEMENTS VARIABLES
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// page manage_profile button
const manage_profile = document.getElementById("manage_profile");
// profile manager container
const profile_manager_close_button = document.getElementById("profile_manager_close_button");
const profile_manager = document.getElementById("profile_manager");
// page profile picture container
const image_container = document.getElementById("avatar");
// page profile picture image
const the_picture = document.getElementById("av_pic");
// profile manager updaters
const upload_input = document.getElementById("the_picture");
const validate_button = document.getElementById("submit_profile_items");
// profile manager informations
const profile_image = document.getElementById("avatar_pic");
const profile_contacts = document.getElementById("contact_infos");
const profile_first_name = document.getElementById("first_name_infos");
const profile_last_name = document.getElementById("last_name_infos");

// ? Manage the container display
// profile manager container is not displayed by default
profile_manager.style.display = "none";
manage_profile.addEventListener("click", () => {
    profile_manager.style.transform = 'translateX(0)';
    profile_manager.style.display = "block";
});


upload_input.addEventListener("change", function(e) {
    const reader = new FileReader()
    reader.onload = ()=> {
        const img = new Image()
        img.src = reader.result
        m.single_localSavings(img.src, "profile_picture")
        let arr;
        if (localStorage.getItem("profile_picture") === null) {
            arr = [];
        } else {
            arr = JSON.parse(localStorage.getItem("profile_picture"));
        }
    }
    reader.readAsDataURL(upload_input.files[0])
}, false);

function update_on_load() {
    the_picture.setAttribute("src", JSON.parse(localStorage.getItem("profile_picture")));
    profile_image.setAttribute("src", JSON.parse(localStorage.getItem("profile_picture")));
    profile_contacts.innerHTML = JSON.parse(localStorage.getItem("contact_infos"));
    profile_first_name.innerHTML = JSON.parse(localStorage.getItem("user_names")).split(" ")[0];
    profile_last_name.innerHTML = JSON.parse(localStorage.getItem("user_names")).split(" ")[1];
    profile_manager_close_button.addEventListener("click", () => {
        profile_manager.style.transform = 'translateX(-10000px)';
        profile_manager.addEventListener('transitionend', () => {
            if (profile_manager.style.display === "block") {
                profile_manager.style.display = "none";
            }
        })
    })
}
document.onload = update_on_load();