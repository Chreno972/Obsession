// ? SKULL FUNCTIONS

// event listener's skull function
export function call_an_event_listener(button, elistener, func_to_call) {
    button.addEventListener(elistener, func_to_call);
}

//---------------------------------------------------------------------------------

// ! Local Storage savings
// Records an item in the local storage each time I launch this function
export function multiple_localSavings(item, key_name) {
    let arr;
    if (localStorage.getItem(key_name) === null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem(key_name));
    }

    arr.push(item);
    localStorage.setItem(key_name, JSON.stringify(arr));
}
// Records the item value + its previous value each time I launch this function
export function additioned_localSavings(item, key_name) {
    let arr;
    if (localStorage.getItem(key_name) === null) {
        arr = 0;
    } else {
        arr = JSON.parse(localStorage.getItem(key_name));
    }
    if (item === "" || item === 0) {
        item = 0
        arr = parseInt(arr) + parseInt(item)
        localStorage.setItem(key_name, JSON.stringify(arr));
    } else {
        arr = parseInt(arr) + parseInt(item)
        localStorage.setItem(key_name, JSON.stringify(arr));
    }
}
// each item recorded erases the previous item
export function single_localSavings(item, key_name) {
    let arr;
    if (localStorage.getItem(key_name) === null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem(key_name));
    }

    arr = item;
    localStorage.setItem(key_name, JSON.stringify(arr));
}

//---------------------------------------------------------------------------------

// ! local storage & html containers
// gets a value from local storage then displays it into a given html element
export function local_data_to_html_display(value_to_get, container_to_put_gotten_value) {
    let arr;
    if (localStorage.getItem(value_to_get) === null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem(value_to_get));
    }
    container_to_put_gotten_value.innerHTML = arr;
}
// gets a value from local storage, divides it by 10 then displays it into a given html element
export function local_data_to_html_display_units(value_to_get, container_to_put_gotten_value) {
    container_to_put_gotten_value.innerHTML = Math.floor(JSON.parse(localStorage.getItem(value_to_get) / 10));
}

//---------------------------------------------------------------------------------

// ! LINKING / ROUTING
// redirects the user to a given page by its URL
export function goToPage(docloc) {
    document.location.href = docloc;
}
// The predefined URLs
export const goToStats = "http://127.0.0.1:5500/assets/views/html/view_stats.html";


