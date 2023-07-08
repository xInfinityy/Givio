//Setting Event Listener for quiz buttons
document.querySelectorAll('.quizbox').forEach(item => {
  item.addEventListener('click', event => {
    item.classList.add("is-active")
  })
})

//Getting result1 array from previous page
var result1 = JSON.parse(localStorage.getItem("result1"));

//Declaring array to store new matches
var result2 = [];

//Filtering for skills needed
function filterSkills(skill) {
  var i;
  for (i of result1) {
    if (i.skill == skill) {
      result2.push(i);
    }
  }
};

//Passing on array to next page
function next(){
  localStorage.setItem("result2", JSON.stringify(result2));
};
