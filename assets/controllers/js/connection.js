// linkpages skull function
function goToPage(docloc) {
    document.location.href = docloc;
}
// ? LINK SELECTORS
const goToStats = "http://127.0.0.1:5500/assets/views/html/view_stats.html";

// GET USER INFORMATIONS
const user_first_name = document.getElementById("user_first_name");
const user_last_name = document.getElementById("user_last_name");
const validate_connection = document.getElementById("the_validation");

function copy_paste_user_name() {
    let all_names;
    if (localStorage.getItem("user_names") === null) {
        all_names = [];
    } else {
        all_names = JSON.parse(localStorage.getItem("user_names"));
    }
    all_names = user_first_name.value + " " + user_last_name.value
    localStorage.setItem("user_names", JSON.stringify(all_names));
}

window.onload = function give_data_if_none() {
    if (localStorage.getItem("user_names")) {
        user_first_name.style.display = "none";
        user_last_name.style.display = "none";
        validate_connection.addEventListener("click", () => {
            alert(`Bienvenue ${JSON.parse(localStorage.getItem("user_names"))} !`)
            window.setTimeout(() => {
                goToPage(goToStats)
            }, 200);
        })
    } else {
        validate_connection.addEventListener("click", () => {
            if (user_first_name.value && user_last_name.value) {
                copy_paste_user_name()
                alert(`Bienvenue ${user_first_name.value} ${user_last_name.value} !`)
                window.setTimeout(() => {
                    goToPage(goToStats)
                }, 200);
            } else {
                alert("Veuillez renseigner vos noms et prénoms!")
            }
        })
    }
}

