//Getting results array from previous page
var result3 = JSON.parse(localStorage.getItem("result3"));

//Displaying message if no matches are found
if (result3.length == 0) {
  var msg = document.createElement('div');
  msg.className = "msg";
  msg.innerHTML = "Sorry, we currently couldn't find any matching oppurtunities for you. But we're always adding new oppurtunities, so please check back in a few weeks!";
  document.body.appendChild(msg);
}

//Displaying matching oppurtunities

for (var i of result3) {
  var newElement = document.createElement('div');
  newElement.className = "resultbox";
  newElement.id = i.name;
  document.body.appendChild(newElement);

  var newElement1 = document.createElement('h3');
  newElement1.className = "name";
  newElement1.innerHTML = i.name;
  document.getElementById(i.name).appendChild(newElement1);

  var newElement2 = document.createElement('div');
  newElement2.className = "descp";
  newElement2.innerHTML = i.descp;
  document.getElementById(i.name).appendChild(newElement2);

  var newElement3 = document.createElement('div');
  newElement3.className = "skills";
  newElement3.innerHTML = ("Skills needed: " + i.skill);
  document.getElementById(i.name).appendChild(newElement3);

  var newElement4 = document.createElement('div');
  newElement4.className = "req";
  if (i.requirements == 1) {
    newElement4.innerHTML = "Time requirements: flexible";
  } else {
    newElement4.innerHTML = ("Time requirements: " + i.requirements + "+ hours per week");
  }
  document.getElementById(i.name).appendChild(newElement4);

  var newElement5 = document.createElement('a');
  newElement5.className = "contact";
  newElement5.href = i.contactlink;
  newElement5.innerHTML = ("Contact: " + i.contact);
  document.getElementById(i.name).appendChild(newElement5);
}
