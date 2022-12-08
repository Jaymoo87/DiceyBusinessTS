var randomRoll = function (min, max) { return Math.floor(Math.random() * (max - min) + min); };
var arrayOfDice = [];
//made a container for the divs
$("body").append('<div id="container"></div');
//$("#container").append(arrayOfDice);
//create class Die ('this.' within the brackets  refers to Die, the parent class.)
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.div = $("<div class='shadow' id='die'></div>");
        this.roll();
        //places the new div into an empty array
        Die.arrayOfDice.push(this);
        $("#container").append(this.div);
        //double click removes div
        $(this.div).on("dblclick", function () {
            $(_this.div).remove();
            //got some questions about splice and it's format.
            Die.arrayOfDice.splice($.inArray(_this, Die.arrayOfDice), 1);
        });
    }
    Die.prototype.roll = function () {
        var _this = this;
        // sets up conditions for a random roll's value and inserts it into the new Die.
        this.value = randomRoll(1, 7);
        $(this.div).text(this.value);
        //just a click and a roll
        $(this.div).on("click", function () { return _this.roll(); });
    };
    Die.arrayOfDice = [];
    return Die;
}());
console.log(Die.arrayOfDice);
$("#createdie").on("click", function () {
    new Die();
});
$("#rolldie").on("click", function () {
    for (var i = 0; i < Die.arrayOfDice.length; i++) {
        Die.arrayOfDice[i].roll();
    }
});
$("#sumDice").on("click", function () {
    addDice();
});
// function removeDie() {
//   $(this.div).remove();
//   let index = arrayOfDice.indexOf(this);
//   arrayOfDice.splice(index, 1);
// }
function addDice() {
    var sum = 0;
    for (var i = 0; i < Die.arrayOfDice.length; i++) {
        sum += Die.arrayOfDice[i].value;
    }
    if (sum > 40) {
        alert("".concat(sum, ": That's big numbers right there! \n      Look at all them dots! Don't hurt your head!"));
    }
    else {
        alert("".concat(sum, ": gotta do better than that, that's baby numbers"));
    }
}
