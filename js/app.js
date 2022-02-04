// Add a button to the top of the screen which will clear the current grid and send the user a popup asking for the number of squares per side for the new grid. Once entered, the new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
const topSectionContainer = document.querySelector('.top-section');
const clearBtn = document.createElement('a');
clearBtn.textContent = "Clear Grid";
clearBtn.classList.add('clear-btn');
topSectionContainer.append(clearBtn);

let div = document.getElementById("grid-container");
let gridLength = 257
for (let i = 1; i < gridLength; i++) {
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
        })
        clearBtn.addEventListener("click", event =>{
            if(document.querySelector('span')){
          
               let remover = document.querySelectorAll('span.new.red');
               box.classList.remove('red')
            }
         
         })
 
    })

}

