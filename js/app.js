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
        document.getElementById("grid-container").style.gridTemplateColumns = `repeat(${number}, minmax(auto, 1fr))`
        document.getElementById("grid-container").style.gridTemplateRows = `repeat(${number}, minmax(5px, 600px))`
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


userInput.addEventListener('keyup', event =>{
    if(event.currentTarget.value === 1 || event.currentTarget.value === 2){
           document.getElementById("grid-container").style.gridTemplateColumns = `repeat(${number}, minmax(auto, 1fr))`
        document.getElementById("grid-container").style.gridTemplateRows = `repeat(${number}, minmax(5px, 960px))`
    }
etchBoxes(event.currentTarget.value);
    //looks like a 40 X 4 grid is created when the new grid is created
});

document.onload = etchBoxes(15);



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

