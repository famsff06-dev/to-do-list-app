let button = document.getElementById("button");
button.addEventListener("click", function () {
    let input = document.getElementById("list"); // input ko access karne ke liye
    const inputValue = input.value; // input value ko store karne ke liye constant banaya
    if (inputValue.trim() === "") {
        alert("Please enter a task");
        return;
    }
    let li = document.createElement("li"); // list bananane ke liye hmne new element create kiya
    li.innerHTML = inputValue; // jo new element banaya usme value ko store krdeya 

    let task = document.getElementById("task");
    let ul = document.getElementsByTagName("ul")[0];
    ul.appendChild(li);

    let doneButton = document.createElement("button");
    doneButton.innerHTML = "✅";
    li.appendChild(doneButton);
    doneButton.addEventListener("click", function () {
        // li.style.textDecoration = "line-through";
        li.classList.toggle("completed");
    });

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "❌";
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", function () {
        ul.removeChild(li);
    });


    console.log("input value is: " + inputValue);
    input.value = "";
    alert("Your task added sucessfully");
});



