let randomRoll = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);
let arrayOfDice: [] = [];
//made a container for the divs
$("body").append('<div id="container"></div');
//$("#container").append(arrayOfDice);



//create class Die ('this.' within the brackets  refers to Die, the parent class.)
class Die  {
  static arrayOfDice: Die[] = [];
  div: JQuery<HTMLDivElement>;
  value: number;
  constructor() {
    this.div = $("<div class='shadow' id='die'></div>");
    this.roll();
    //places the new div into an empty array
    Die.arrayOfDice.push(this);
    $("#container").append(this.div);

    //double click removes div
    $(this.div).on("dblclick", () => {
      $(this.div).remove();
      //got some questions about splice and it's format.
      Die.arrayOfDice.splice($.inArray(this, Die.arrayOfDice), 1);
    });
  }
  roll() {
    
    // sets up conditions for a random roll's value and inserts it into the new Die.
    this.value = randomRoll(1, 7);
    $(this.div).text(this.value);
    //just a click and a roll
    $(this.div).on("click", () => this.roll());
  }
}

console.log(Die.arrayOfDice);

$("#createdie").on("click", () => {
  new Die();
});
$("#rolldie").on("click", function () {
  for (let i = 0; i < Die.arrayOfDice.length; i++) {
    Die.arrayOfDice[i].roll();
  }
});

$("#sumDice").on("click", () => {
  addDice();
});

// function removeDie() {
//   $(this.div).remove();
//   let index = arrayOfDice.indexOf(this);
//   arrayOfDice.splice(index, 1);
// }

function addDice() {
  let sum: number = 0;
  for (let i = 0; i < Die.arrayOfDice.length; i++) {
    sum += Die.arrayOfDice[i].value;
  }
  if (sum > 40) {
    alert(
      `${sum}: That's big numbers right there! 
      Look at all them dots! Don't hurt your head!`
    );
  } else {
    alert(`${sum}: gotta do better than that, that's baby numbers`);
  }
}
