// Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
// Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
// There are multiple ways to change the color of the divs, including:
// adding a new class to the div.
// changing the div’s background color using JavaScript.

let div = document.getElementById("grid-container");

for (let i = 1; i < 257; i++) {
    let span = document.createElement("span");
    span.setAttribute("class", "new");
    // span.innerHTML += i;
    div.appendChild(span);

      
    const boxArray = [];
    boxArray.push(span)
    boxArray.forEach(box =>{
        console.log("this is a box")
        box.addEventListener("mouseover", event =>{
            box.classList.add('red');
            console.log(document.querySelector('span.new.red'))
            
            
            
        })
        box.addEventListener("mouseout", event =>{
            box.classList.add('black')
        })
    })
}

