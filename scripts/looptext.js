let outer = document.querySelector("#backtextouter");
let content = outer.querySelector('#backtextcontent');

repeatContent(content, outer.offsetWidth);

let el = outer.querySelector('#backtextloop');
el.innerHTML = el.innerHTML + el.innerHTML;

function repeatContent(el, till) {
    let html = el.innerHTML;
    let counter = 0; // prevents infinite loop
    
    while (el.offsetWidth < till && counter < 100) {
        el.innerHTML += html;
        counter += 1;
    }
}