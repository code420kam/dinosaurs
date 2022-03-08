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
        shuffleArray(saurier);
        shuffleObject(saurier);
        for(let i = 0; i<saurier.length; i++)
        {
        //Create Elements
        let infoCard = document.createElement("div");
        let imgContainer = document.createElement("img");
        let details = document.createElement("h5");
        let factContainer = document.createElement("p");
        let dinoHeader = document.createElement("h2");
        //set attributes of created elements
        details.innerText = `Weight: ${saurier[i].weight} lbs. Height: ${saurier[i].height} inches.
        Diet: ${saurier[i].diet}. Where: ${saurier[i].where}. When: ${saurier.when}`;
        dinoHeader.innerText = `Species: ${saurier[i].species}`;
        factContainer.innerText= saurier[i].fact[0];
        imgContainer.setAttribute("src", saurier[i].avatar);
        infoCard.setAttribute("class", "grid-item");
        //append elements to infocard and infocard to maingrid
        infoCard.appendChild(dinoHeader);
        infoCard.appendChild(details)
        infoCard.appendChild(imgContainer);
        infoCard.appendChild(factContainer);
        mainGrid.appendChild(infoCard);
        }
        /*create and set human in the middle
        create Elements*/
        let infoCard = document.createElement("div");
        let imgContainer = document.createElement("img");
        let factContainer = document.createElement("p");
        let humanHeader = document.createElement("h3");
        //set attributes of created elements
        humanHeader.style.color = "black";
        humanHeader.innerText = `Human: ${human.name}`;
        factContainer.setAttribute("class", "human")
        infoCard.setAttribute("class", "grid-item");
        infoCard.setAttribute("id", "humanDinoCompare")
        imgContainer.setAttribute("src", "images/human.png");
        factContainer.innerText = `Weight: ${human.weight} lbs. Height: ${human.inches} inches and ${human.feet} 
        feet. Diet: ${human.diet}. ${compareMethodHeight()} ${compareMethodWeight()} ${compareMethodeDiet()}`;
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
    //Import all Dinos from JSON Data 
    fetch("dino.json").then((response) =>{
        return response.json();
    })
    .then((dino) => {
        saurier = dino
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
    //Make facts random
    function shuffleObject(inputArray){
        for(let i=0;i<saurier.length; i++)
        {
            inputArray[i].fact.sort(()=>Math.random() -0.5)
            
        }
        
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
// eventlistener to add a refresh button on the page
btn.addEventListener("click", function()
{
    //get position of Element where the Refresher will be appended
    let el = document.getElementById("topHead");
    //create refresher with properties and functions
    let refersherEl = document.createElement("div");
    refersherEl.setAttribute("class", "refresher");
    refersherEl.innerText = "Refresh Comparing";
    el.appendChild(refersherEl);
    //Click-Event to reload the Form for a new user input
    refersherEl.addEventListener("click", function()
    {
        location.reload();
    })
})