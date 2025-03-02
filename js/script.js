// random body color change
document.getElementById("colorBtn").addEventListener("click", function () {
  let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = color;
});

// redirect blog page
document.getElementById("discover").addEventListener("click", function () {
  window.location.href = "../blog.html";
});

// current time zone
function updateClock() {
  document.getElementById("clock-zone").innerText =
    new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// completed button
const buttons = document.querySelectorAll(".update");
for (const btn of buttons) {
  btn.addEventListener("click", function (event) {
    alert("board updated successful");
    event.target.classList.add("disabled");
    event.target.disabled = true;

    // task count decremental
    let taskCount = parseInt(document.getElementById("task-count").innerText);
    if (taskCount > 0) {
      taskCount--;
      //   console.log(taskCount);
      document.getElementById("task-count").innerText = taskCount
        .toString()
        .padStart(2, "0");
    }
    if (taskCount === 0) {
      alert("Congratulations! You have completed all the current tasks.");
    }

    // task count incremental
    let taskCountUp = parseInt(document.getElementById("count-up").innerText);
    if (taskCount < 23) {
      taskCountUp++;
      document.getElementById("count-up").innerText = taskCountUp
        .toString()
        .padStart(2, "0");
      //   console.log("Task Count:", taskCountUp);
    }

    // Side bar added the box title
    const newContent = document.getElementById("new-content");
    if (newContent) {
      const boxTitle = event.target
        .closest(".col-span-3")
        .querySelector(".box-title");
      if (boxTitle) {
        const newTitle = document.createElement("li");
        const currentTime = new Date().toLocaleTimeString();
        newTitle.innerText = `You have Complete The Task: ${boxTitle.innerText} - Added at: ${currentTime}`;
        newContent.appendChild(newTitle);
      }
    }

    // Clear History
    document.getElementById("clear-btn").addEventListener("click", function () {
      const newContent = document.getElementById("new-content");
      newContent.innerHTML = "";
    });
  });
}
