function displaySalary(event) {
  event.preventDefault();
  let username = document.getElementById("name").value;
  let usersalary = document.getElementById("salary-initial").value;
  usersalary = Number(usersalary).toLocaleString();
  localStorage.setItem("name", username);
  localStorage.setItem("salary", usersalary);

  // window.location.href = "salary.html";
  console.log(username);
  console.log(usersalary);
}

document
  .getElementById("salary-form")
  .addEventListener("submit", displaySalary);


let username = localStorage.getItem("name");
let usersalary = localStorage.getItem("salary");
let date = new Date().toLocaleDateString();

let tr = document.createElement("tr");
let tbody = document.getElementById("table-body");
tr.innerHTML = `<td>${username}</td> <td>₦${usersalary}</td> <td>${date}</td>`;
tbody.appendChild(tr);

function update() {
  // let username = document.getElementById("name").value;
  let usersalary = document.getElementById("salary").value;
  usersalary = Number(usersalary).toLocaleString();
  localStorage.setItem("name", username);
  localStorage.setItem("salary", usersalary);

  let tr = document.createElement("tr");
  let tbody = document.getElementById("table-body");
  tr.innerHTML = `<td>${username}</td> <td>₦${usersalary}</td> <td>${date}</td>`;
  tbody.appendChild(tr);

  // document.getElementById("name").value = "";
  document.getElementById("salary").value = "";
}

// window.onload(() => {
//   let username = localStorage.getItem("name");
//   let usersalary = localStorage.getItem("salary");
//   let date = new Date().toLocaleDateString();

//   let tr = document.createElement("tr");
//   let tbody = document.getElementById("table-body");
//   tr.innerHTML = `<td>${username}</td> <td>₦${usersalary}</td> <td>${date}</td>`;
//   tbody.appendChild(tr);
// });
