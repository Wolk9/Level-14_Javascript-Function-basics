// Function basics: exercise

// 1: done
// 2: yes it runs

console.log("Make pizza"); // 3

// 4: MakePizza
/* 5:   Create doh
        Roll it out as a circle
        Create sauce
        Apply sauce
        Apply toppings
        Bake the Pizza */
// 6:
const MakePizza = function () {
  console.log("Create doh");
  console.log("Roll it out as a circle");
  console.log("Create sauce");
  console.log("Apply sause");
  console.log("Apply toppings");
  console.log("Bake the Pizza");
};

// 7: Running the code is nog doing anything as it is not called
// 8:
var NumberOfPizza = 2;

for (let i = 0; i < NumberOfPizza; i++) {
  //   console.log(NumberOfPizza);
  //   console.log(i);
  MakePizza();
}

// Part 2: Sushi
// 2:

const MakeSushi = function () {
  console.log("lay down seawead paper");
  console.log("Cook sticky Rice");
  console.log("Put layer rice on seawead");
  console.log("Partion Salmon");
  console.log("drape Salmon on rice");
  console.log("roll the sushi");
  console.log("Cut roll in portions");
};

// 3:

var NumberOfSushi = 3; // part 3, 1

for (let i = 0; i < NumberOfSushi; i++) {
  //   console.log(NumberOfSushi);
  //   console.log(i);
  MakeSushi();
}
