
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ulCategories = document.querySelector("#ingredients");  //// Znajdowanie elementu listy o id "ingredients"

const ingredientsArr = ingredients.map((ingredient) => {       
  const li = document.createElement("li");     // Tworzenie tablicy i elementów li
  li.textContent = ingredient;              
  li.classList.add("item");   // Dodawanie klasy Item 
  return li;                  //Zwrot li 
});
ulCategories.append(...ingredientsArr); // operator spread dodaje elementy li do categories
