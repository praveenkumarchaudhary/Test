// # JavaScript Implementation Tasks

// You must create `script.js` and implement the following:

// 1. When the "Submit" button is clicked, display:

//    * "Hello, [name]! You are [age] years old."
//    * Show it inside `#output`.

// 2. Validate the form:

//    * If name is empty, show an alert.
//    * If age is less than 1 or empty, show an alert.

// 3. Implement the counter:

//    * Increase button increments the number.
//    * Decrease button decrements the number.
//    * Reset button sets it back to 0.

// 4. Change the counter color:

//    * Green if value > 0
//    * Red if value < 0
//    * Black if value = 0

// 5. Implement To-Do List:

//    * Add a task when `Add Task` button is clicked.
//    * Append it as a new `<li>` inside `#taskList`.

// 6. Add delete functionality:

//    * Each task should have a Delete button.
//    * Clicking it removes that task.

// 7. Mark task as completed:

//    * Clicking a task text should strike it through.

// 8. Toggle dark mode:

//    * Clicking `Toggle Dark Mode` should add/remove the `dark-mode` class on the body.

// 9. Show image preview:

//    * Take URL from `#imageUrl`.
//    * Set it as the `src` of `#previewImage`.
//    * Make the image visible.

// 10. Add keyboard interaction:

// * Pressing Enter inside the task input should automatically add the task.
// * Pressing Enter inside the name input should trigger submit.

// ---

// # Bonus Questions (Optional)

// * Store tasks in localStorage so they remain after refresh.
// * Count total tasks and display the number.
// * Disable the decrease button if counter is already 0.
// * Add a clear all tasks button.
// * Add a live character count for the name input.



//<--------------- Question 1--------------->

const submitBtn = document.getElementById('submitBtn');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const outputDiv = document.getElementById('output');

submitBtn.addEventListener('click', function () {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();

    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    if (age === '' || age <= 0) {
        alert('Enter a valid age');
        return;
    }

    outputDiv.innerHTML = `hello, ${name}! you are ${age} years old.`;
})




//<--------------- Question 3--------------->

let count = 0;
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn")
const counterValue = document.getElementById("counterValue");

function updateColor() {
    if (count > 0) {
        counterValue.style.color = "green";
    } 
    else if (count < 0) {
        counterValue.style.color = "red";
    } 
    else {
        counterValue.style.color = "black";
    }
}


increaseBtn.addEventListener("click", function () {
    count++;
    counterValue.innerHTML = count;
    updateColor();

})

decreaseBtn.addEventListener("click", function () {
    count--;
    counterValue.innerText = count;
    updateColor();
})

resetBtn.addEventListener("click", function () {
    count=0;
    counterValue.innerText = count;
    updateColor();
})




//<--------------- Question 4--------------->

const card = document.getElementsByClassName("card");
const themeBtn = document.getElementById("themeBtn")

themeBtn.addEventListener("click", function () {
    card[3].style.backgroundColor = "black";
});



//<--------------- to do list--------------->

const input = document.getElementById("taskInput");
const btn = document.getElementById("addTaskBtn")
const ul = document.getElementById("taskList")

btn.addEventListener("click", function () {
    const item = document.createElement("li");
    item.innerHTML = input.value;
    ul.appendChild(item);
    input.value = "";




})


// <----------image generation ---------->

const imageUrl = document.getElementById("imageUrl")
const showImageBtn = document.getElementById("showImageBtn")
const previewImage = document.getElementById("previewImage")

showImageBtn.addEventListener("click", function () {

    previewImage.src = imageUrl.value;
    previewImage.style.display = "block";
})








