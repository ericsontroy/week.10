const paintballEventInput = document.getElementById("paintball-event-input");
const stateInput = document.getElementById("state-input");
const startDateInput = document.getElementById("start-date-input");
const endDateInput = document.getElementById("end-date-input");
const paintballEventList = document.getElementById("paintball-event-list");

// this is for my send it or submit button, I went off some the examples I saw in class and made my own version.
function sendIt(event) {
  event.preventDefault();
  let eventList = [];
  //the logs are left cause i think its fun to see in the console.
  console.log(paintballEventInput.value);
  console.log(stateInput.value);
  console.log(startDateInput.value);
  console.log(endDateInput.value);
  // this makes the event appear in the table plus adding a button that doesnt work.
  const addEvent = document.createElement("tr");
  addEvent.innerHTML = `<td> ${paintballEventInput.value}</td>
    <td> ${stateInput.value}</td>
    <td> ${startDateInput.value}</td>
    <td> ${endDateInput.value}</td>
    <td><input type="checkbox" name="check" id="item" /><label
    for="item"
    >Ready for Event!</label
  ></td>
  <td> <button  class= "btn btn-sm btn-outline-primary" onclick="removeRow()" >Event Over</td>`;
  //appending the newly added event to the existing paintball event list
  paintballEventList.appendChild(addEvent);
  //Reseting the values of the inputs for the user
  paintballEventInput.value = "";
  stateInput.value = "";
  startDateInput.value = "";
  endDateInput.value = "";
}

//this was copy and pasted from the example from lab, I just thought it was a cool way to show the user some action
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
//Finally figured out how to make the rows go away! this was a big win for me, I was having a lot of trouble.
function removeRow() {
  document.getElementsByTagName("tr")[1].remove();
}

//Figured out how to make the delete buttons now I need to pull the correct tr on the table to delete//
