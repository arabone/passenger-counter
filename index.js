// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
//change the count-el in the HTML to reflect the new count


let countEl = document.getElementById("count-el") ;
let saveEl = document.getElementById("save-el");
console.log(countEl)

let count = 0

function increment() {
    count  += 1 ;
    countEl.textContent = count ;
}

// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  // 3. Render the variable in the saveEl using innerText
function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
   countEl.textContent = 0;
   count = 0;
}
