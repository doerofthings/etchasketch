const topSectionContainer = document.querySelector('.top-section');
const btnAndInputContainer = document.querySelector('.btn-and-input')
const clearBtn = document.createElement('a');
clearBtn.textContent = "Clear Grid";
clearBtn.classList.add('clear-btn');
btnAndInputContainer.append(clearBtn);

let div = document.getElementById("grid-container");


const userInput = document.createElement('input');
btnAndInputContainer.append(userInput);

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
        if(event.currentTarget.value < 0 || event.currentTarget.value === 0){
            return
        } else if(event.currentTarget.value > 100){
            return
        } 


   
        console.log(document.querySelectorAll('span.new.red'))
        let checkers = document.querySelectorAll('span.new.red');
        checkers.forEach(checker => {
        checker.classList.remove('red')
     
        })
        etchBoxes(event.currentTarget.value)
    });

document.onload = etchBoxes(16);




