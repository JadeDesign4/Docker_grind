const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".task-list");

// Handle starting a drag
draggables.forEach((task) => {
  task.addEventListener("dragstart", () => {
    task.classList.add("is-dragging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging");
  });
});

// Handle dropping into lanes
droppables.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault(); // Necessary to allow a drop
    
    const curTask = document.querySelector(".is-dragging");
    zone.appendChild(curTask); // Moves the actual DOM element
  });
});
