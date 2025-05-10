const calendar = document.getElementById("calendar");
const startDate = new Date("2025-01-01");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

for (let i = 0; i < 53 * 7; i++) {
  const date = new Date(startDate);
  date.setDate(startDate.getDate() + i);

  const div = document.createElement("div");
  div.className = "day";

  // const level = Math.floor(Math.random() * 5);
  const level = 0;
  if (level > 0) div.classList.add(`level-${level}`);

  const dateStr = `${date.getDate().toString().padStart(2, "0")}-${months[date.getMonth()]}-${date.getFullYear()}`;
  div.setAttribute("data-tooltip", `${dateStr} - Level ${level}`);
  div.id = `day-${dateStr.replace(/-/g, "")}`;

  if (date.toDateString() === new Date().toDateString()) {
    div.style.backgroundColor = "orange";
  }

  div.onclick = () => {
    document.getElementById("modalText").innerText = `Date: ${dateStr} | Level: ${level}`;
    const myModal = new bootstrap.Modal(document.getElementById("activityModal"));
    myModal.show();
  };

  calendar.appendChild(div);
}
