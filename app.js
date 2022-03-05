    //Create global Variables and Objects
    let saurier = [];
    const human = {};
    const btn = document.getElementById("btn");
    const mainGrid = document.getElementById("grid");
    const form = document.getElementById("dino-compare");
    // Create Dino Objects
    class CreateDino
    {
        constructor(species, weight, height, diet, where, when, fact, avatar)
        {
            this.species = species;
            this.weight = weight;
            this.height = height;
            this.diet = diet;
            this.where = where;
            this.when = when;
            this.fact = fact;
            this.avatar = avatar;
        }
    }
    // Give Human Object values from user input
    btn.addEventListener("click", function()
    {
        human.name = document.querySelector("#name").value;
        human.feet = document.querySelector("#feet").value;
        human.inches = document.querySelector("#inches").value;
        human.weight = document.querySelector("#weight").value;
        human.diet = document.querySelector("#diet").value;   
    })
    //Make the Grid output and set human object in the middle
    btn.addEventListener("click", function()
    {
        shuffleArray(saurier)
        for(let i = 0; i<saurier.length; i++)
        {
        //Create Elements
        let infoCard = document.createElement("div");
        let imgContainer = document.createElement("img");
        let factContainer = document.createElement("p");
        let dinoHeader = document.createElement("h4");
        //set attributes of created elements
        dinoHeader.innerText = saurier[i].species;
        factContainer.innerText= saurier[i].fact;
        imgContainer.setAttribute("src", saurier[i].avatar);
        infoCard.setAttribute("class", "grid-item");
        //append elements to infocard and infocard to maingrid
        infoCard.appendChild(dinoHeader);
        infoCard.appendChild(imgContainer);
        infoCard.appendChild(factContainer);
        mainGrid.appendChild(infoCard);
        }
        //set human in the middle
        //create Elements
        let infoCard = document.createElement("div");
        let imgContainer = document.createElement("img");
        let factContainer = document.createElement("p");
        let humanHeader = document.createElement("h4");
        //set attributes of created elements
        humanHeader.style.color = "black"
        humanHeader.innerText = `Human: ${human.name}`;
        infoCard.setAttribute("class", "grid-item");
        imgContainer.setAttribute("src", "images/human.png");
        factContainer.innerText = compareMethodHeight() + compareMethodWeight() + compareMethodeDiet();
        //append all elements to infocard and infocard to maingrid
        infoCard.appendChild(humanHeader);
        infoCard.appendChild(factContainer);
        infoCard.appendChild(imgContainer);
        mainGrid.appendChild(infoCard);
        //change position of childnode to set human in the middle
        let fullNode = document.getElementById("grid").childNodes;
        fullNode[8].parentNode.insertBefore(fullNode[8], fullNode[4]);
        //remove form from display
        form.style.display = "none";
    })
    // Use IIFE taso get human data from form
    //Import all Dinos from JSON Data 
    fetch("dino.json").then((response) =>{
        return response.json();
    })
    .then((dino) => {
        saurier = dino
        console.log(saurier)
        //make all dinos to a object of CreateDino Class
       for(var i = 0; i<=saurier.lenght; i++)
       {
           saurier[i] = new CreateDino(saurier[i])
       }
       });
       //Make the dinos random
       function shuffleArray(inputArray){
        inputArray.sort(()=> Math.random() - 0.5);
    }
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareMethodHeight()
    {
        let counter=0;
        for (let i=0; i<saurier.length;i++)
        {
            if(human.inches>saurier[i].height)
            {
                counter++;
            }
        }
        return `You are bigger than ${counter} Dinosaurs.`;
    }
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareMethodWeight()
    {
        let counter=0;
        for(let i=0; i<saurier.length;i++)
        {
            if(human.weight > saurier[i].weight)
            {
                counter++;
            }
        }
        return `You'r weigh more than ${counter} Dinosaurs.`;
    }
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareMethodeDiet()
    {
        let counter = 0;
        for(let i=0;i<saurier.length;i++)
        {
            if(human.diet===saurier[i].diet)
            counter++;
        }
        return `You share the same diet as ${counter} Dinosaurs.`
    }
    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
