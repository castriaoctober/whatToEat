//TODO:语言内容修改
//TODO:代码检查精简\populate the select dropdown with canteen
//TODO:add functions（自定义）

//import the json data
fetch("./food.json")
  .then((response) => response.json())
  .then((json) => (AllData = json));

//generate randomly
function generateItem(arr) {
  things = arr[Math.floor(Math.random() * arr.length)];
  return things;
}

//generate the canteen
function canteenGenerator() {
  return generateItem(AllData.canteens);
}

//get the selected canteen and the result
const canteenSelector = document.querySelector("#canteenSelector");
const resultCanteen = document.querySelector("#resultCanteen");
const resultFood = document.querySelector("#resultFood");

//show the selected canteen
canteenSelector.addEventListener("change", (e) => {
  let selectedCanteen = canteenSelector.value;
  if (selectedCanteen) {
    resultCanteen.textContent = `${selectedCanteen}`;
  } else {
    selectedCanteen = generateItem(AllData.canteens);
    resultCanteen.textContent = `${selectedCanteen}`;
  }
});

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let selectedCanteen = canteenSelector.value;
  let generatedFood = resultFood.value;
  if (selectedCanteen) {
    console.log(selectedCanteen);
    generatedFood = generateItem(AllData.foodOptions[selectedCanteen]);
  } else {
    selectedCanteen = canteenGenerator();
    generatedFood = generateItem(AllData.foodOptions[selectedCanteen]);
  }
  resultCanteen.textContent = `${selectedCanteen}`;
  resultFood.textContent = `${generatedFood}`;
});
