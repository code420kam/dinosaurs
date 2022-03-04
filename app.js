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
        const infoCard = document.createElement("div");
        const imgContainer = document.createElement("img");
        const factContainer = document.createElement("p");
        factContainer.innerText= saurier[i].fact;
        imgContainer.setAttribute("src", saurier[i].avatar);
        infoCard.setAttribute("class", "grid-item");
        infoCard.innerText = saurier[i].species;
        infoCard.appendChild(imgContainer);
        infoCard.appendChild(factContainer);
        mainGrid.appendChild(infoCard);
        }
        //set human in the middle
        const infoCard = document.createElement("div");
        infoCard.setAttribute("class", "grid-item");
        let imgContainer = document.createElement("img");
        let factContainer = document.createElement("p");
        factContainer.innerText = "Hallo Mensch";
        infoCard.appendChild(factContainer);
        imgContainer.setAttribute("src", "images/human.png");
        infoCard.appendChild(imgContainer);
        mainGrid.appendChild(infoCard);
        let fullNode = document.getElementById("grid").childNodes;
        fullNode[8].parentNode.insertBefore(fullNode[8], fullNode[4]);
        form.style.display = "none";
        compareMethodWeight()

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
    function compareMethodWeight()
    {
        let humanWeight;
        if(human.inches)
        {
            humanWeight = human.feet/30.48
        }
        else if(human.feet)
        {
            humanWeight = human.inches*2.54
        }
        let counter=0;
        for(let i=0; i<saurier.length;i++)
        {
            if(humanWeight > saurier[i].weight)
            {
                counter++;
            }
        }
        return `you are weigh more than ${counter} Dinosaurs.`;
    } 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareMethodHeight()
    {
        let counter=0;
        for(let i=0; i<saurier.length;i++)
        {
            if(human.height > saurier[i].height)
            {
                counter++;
            }
        }
        return `you are bigger than ${counter} Dinosaurs.`;
    } 
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
