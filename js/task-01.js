const categoryList = document.querySelector("#categories"); //szukamy daną kategorię
const categoryItems = categoryList.querySelectorAll("li.item"); // szukamy li z klasą item

for (const item of categoryItems) {
  
  const tittle = item.querySelector("h2").textContent; //Użycie queryselector do wyciągnięcia h2 
  

  const categoryElements = item.querySelectorAll("ul li");   // Wyciągnięcie wszystkich elementy <li> 
  
  const numberOfElements = categoryElements.length; // Oblicz liczbę elementów w kategorii
  
  
  console.log("Category " + tittle);
 console.log("Number of categories: ", numberOfElements); //Wynik
}