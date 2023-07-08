//Setting Event Listener for quiz buttons
document.querySelectorAll('.quizbox').forEach(item => {
  item.addEventListener('click', event => {
    item.classList.add("is-active")
  })
})

//Getting result2 array from previous page
var result2 = JSON.parse(localStorage.getItem("result2"));

//Declaring array to store new matches
var result3 = [];

//Filtering by time requirements
function filterTime(time) {
  result3 = result2.filter(position => (position.requirements <= time));
};

//Passing on array to next page
function next(){
  localStorage.setItem("result3", JSON.stringify(result3));
};
