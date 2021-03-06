// Add a button to the top of the screen which will clear the current grid and send the user a popup asking for the number of squares per side for the new grid. Once entered, the new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
const topSectionContainer = document.querySelector('.top-section');
const clearBtn = document.createElement('a');
clearBtn.textContent = "Clear Grid";
clearBtn.classList.add('clear-btn');
topSectionContainer.append(clearBtn);

let div = document.getElementById("grid-container");


const userInput = document.createElement('input');
topSectionContainer.append(userInput);
let etchBoxes = (number) =>{
    for (let i = 0; i < number * number; i++) {
        let span = document.createElement("span");
        span.setAttribute("class", "new");
        div.appendChild(span);
        const boxArray = [];
        boxArray.push(span)
        boxArray.forEach(box =>{
            console.log("this is a box")
            box.addEventListener("mouseover", event =>{
                box.classList.add('red');  
            })
            clearBtn.addEventListener("click", event =>{
                if(document.querySelector('span')){
                   box.classList.remove('red')
                   
                } 
             })
        })
    }
}


document.onload = etchBoxes(16);


// for (let i = 1; i < gridLength; i++) {
//     let span = document.createElement("span");
//     span.setAttribute("class", "new");
//     div.appendChild(span);
//     const boxArray = [];
//     boxArray.push(span)
//     boxArray.forEach(box =>{
//         console.log("this is a box")
//         box.addEventListener("mouseover", event =>{
//             box.classList.add('red');  
//         })
//         clearBtn.addEventListener("click", event =>{
//             if(document.querySelector('span')){
//                box.classList.remove('red')
//             }
//          })
//     })
// }

        // document.getElementById("grid-container").style.gridTemplateColumns = `repeat(${number}, minmax(10px, 40px))`
        // document.getElementById("grid-container").style.gridTemplateRows = `repeat(${number}, minmax(10px, 40px))`