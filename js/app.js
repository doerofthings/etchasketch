// Create a webpage with a 16x16 grid of square divs.
// Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your html file!
// It’s best to put your grid squares inside another “container” div (which can go directly in your html).

let div = document.getElementById("grid-container");

for (let i = 1; i < 257; i++) {
    let span = document.createElement("span");
    span.setAttribute("class", "new");
    // span.innerHTML += i;
    div.appendChild(span);
    
}


