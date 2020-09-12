const userWantsRecipes = "I want recipes"
const userWantsItemsForRecipe = "I want to know where to get the items for my recipe"
const userWantsRecipesFromItems = "I want to know what recipes I can make with the items I have in my pantry"


//need to use barba here somehow
function submit(event) {
    let request = form.elements['want'].value
    if (request == userWantsRecipes){
        window.location.href = "recipes.html"
    }
    else if (request == userWantsItemsForRecipe){
        window.location.href = "itemsforrecipe.html"
    }
    else if (request == userWantsRecipesFromItems){
        window.location.href = "itemsforrecipe.html"
    }
    event.preventDefault();
  }
  
const form = document.getElementById('send');
form.addEventListener('submit', submit);