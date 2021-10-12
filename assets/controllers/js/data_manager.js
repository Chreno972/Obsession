import * as m from './main.js';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ! INITIALIZE SELECTED HTML ELEMENTS VARIABLES
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// data manager container items
const manage_data_button = document.getElementById("manage_data");
const data_manager = document.getElementById("appear_data_container");
const send_button = document.getElementById("submit_records");
// data manager html items capturing numbers containers
const learning_date = document.getElementById("the_date");
const javascript_hours = document.getElementById("the_js_units");
const python_hours = document.getElementById("the_python_units");
const data_hours = document.getElementById("the_data_units");
const sport_hours = document.getElementById("the_sports_units");
const robot_hours = document.getElementById("the_elec_units");
// recaps section html items returned numbers containers
const data_close_button = document.getElementById("close_button");
const validate_date = document.getElementById("validate_date");
const total_learning_hours = document.getElementById("stats_tlt_number");
const javascript_learning_units = document.getElementById("stats_fthc_int_number");
const python_learning_units = document.getElementById("stats_sthc_int_number");
const data_learning_units = document.getElementById("stats_tthc_int_number");
const sports_learning_units = document.getElementById("stats_fothc_int_number");
const electronics_robotics_units = document.getElementById("stats_fithc_int_number");
const max_learnt_topic_hours = document.getElementById("stats_sithc_str_topic");
const average_learning_time_day = document.getElementById("stats_sethc_str_topic");
// others
const imported_user_name = document.getElementById("imported_user_name");


// ! html elements status
// by default don't display the data manager html container
data_manager.style.display = "none";
imported_user_name.innerHTML = JSON.parse(localStorage.getItem("user_names"))

// ! Click listeners
// Display the data manager container
manage_data_button.addEventListener("click", () => {
    if (data_manager.style.display === "none") {
        data_manager.style.display = "block";
        data_manager.style.transform = 'translateX(0)';

    }
});

// record hours in localstorage
send_button.addEventListener("click", () => {
    m.additioned_localSavings(javascript_hours.value, "javascript_hours")
    m.additioned_localSavings(python_hours.value, "python_hours")
    m.additioned_localSavings(data_hours.value, "data_hours")
    m.additioned_localSavings(sport_hours.value, "sport_hours")
    m.additioned_localSavings(robot_hours.value, "robot_hours")
});

validate_date.addEventListener("click", () => {
    m.multiple_localSavings(learning_date.value, "date")
})

data_close_button.addEventListener("click", () => {
    data_manager.style.transform = 'translateX(10000px)';
    data_manager.addEventListener('transitionend', () => {
        if (data_manager.style.display === "block") {
            data_manager.style.display = "none";
        }
    })
})

// ! localhost values to html elements values
m.local_data_to_html_display_units('javascript_hours', javascript_learning_units);
m.local_data_to_html_display_units('python_hours', python_learning_units);
m.local_data_to_html_display_units('data_hours', data_learning_units);
m.local_data_to_html_display_units('sport_hours', sports_learning_units);
m.local_data_to_html_display_units('robot_hours', electronics_robotics_units);

// local storage units values
const js_units = JSON.parse(localStorage.getItem('javascript_hours'));
const py_units = JSON.parse(localStorage.getItem('python_hours'));
const dt_units = JSON.parse(localStorage.getItem('data_hours'));
const sp_units = JSON.parse(localStorage.getItem('sport_hours'));
const rb_units = JSON.parse(localStorage.getItem('robot_hours'));
const the_date = JSON.parse(localStorage.getItem('date'));
let add_local = [`${js_units}`, `${py_units}`, `${dt_units}`, `${sp_units}`, `${rb_units}`]

// ! html elements value
total_learning_hours.innerHTML = js_units + py_units + dt_units + sp_units + rb_units;
max_learnt_topic_hours.innerHTML = Math.max(...add_local)
average_learning_time_day.innerHTML = Math.ceil((js_units + py_units + dt_units + sp_units + rb_units) / the_date.length);

