// ? THE TOTAL WORKED HOURS CHART'S STATISTICS

// ! variables made from localStorage values
const js_twh_stats = JSON.parse(localStorage.getItem('javascript_hours'));
const py_twh_stats = JSON.parse(localStorage.getItem('python_hours'));
const db_twh_stats = JSON.parse(localStorage.getItem('data_hours'));
const mt_twh_stats = JSON.parse(localStorage.getItem('sport_hours'));
const rb_twh_stats = JSON.parse(localStorage.getItem('robot_hours'));
// const en_twh_stats = JSON.parse(localStorage.getItem('en_total_hours'));

// ! the variable made from the html total worked hours chart container
const stats_total_hours_chart = document.getElementById('total_worked_hours_chart').getContext('2d');

// ! the chart informations and configs
let my_js_Chart = new Chart(
    stats_total_hours_chart, {
    type: "pie",
    data: {
        labels: [
            "PYTHON", "JAVASCRIPT", "DATA / MATHS", "SPORTS", "ELEC / ROBOTS",
        ],
        datasets: [
            {
                label: '',
                data: [
                    py_twh_stats,
                    js_twh_stats,
                    db_twh_stats,
                    mt_twh_stats,
                    rb_twh_stats,
                ],
                backgroundColor: [
                    '#008000',
                    '#ffa500',
                    '#0d6efd',
                    '#dc3545',
                    'purple',

                ],
                borderWidth: 0,
                hoverBorderWidth: 3,
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            width: 100,
            backgroundSize: 30,
        },
        
    }
});

