// let salary2 = usersalary.toLocaleString();


function displaySalary() {

  let username = document.getElementById("name").value;
  let usersalary = document.getElementById("salary-initial").value;
  if (username == "" || usersalary == "") {
    let error = document.getElementById("error");
    error.innerHTML = "Input complete entry data before adding";
    error.style.color = "red";
    setTimeout(() => {
      error.style.display = "none";
    }, 2000);
    // return false;
  } else {
    localStorage.setItem("name", username);
    localStorage.setItem("salary", usersalary);
    console.log(username);
    console.log(usersalary);
    showTable();
  }
}
// document
//   .getElementById("salary-form")
//   .addEventListener("submit", displaySalary);

function update() {
  // let username = document.getElementById("name").value;
  let date = new Date().toLocaleDateString();

  let username = localStorage.getItem("name");
  let usersalary = document.getElementById("salary").value;
  usersalary = Number(usersalary).toLocaleString();
  // localStorage.setItem("name", username);
  localStorage.setItem("salary", usersalary);

  let tr = document.createElement("tr");
  let tbody = document.getElementById("table-body");
  tr.innerHTML = `<td>${username}</td> <td>₦${usersalary}</td> <td>${date}</td>`;
  tbody.appendChild(tr);

  // document.getElementById("name").value = "";
  document.getElementById("salary").value = "";
}
function showTable() {
  let div = document.getElementById("form-container");
  div.style.display = "none";
  let contain = document.getElementById("table");
  contain.style.display = "block";
  //  let salaryUpdate = document.getElementById("salary-update");
  //  salaryUpdate.style.display = "block";
  let username = localStorage.getItem("name");
  let usersalary = localStorage.getItem("salary");
  usersalary = Number(usersalary).toLocaleString();
  let date = new Date().toLocaleDateString();

  let tr = document.createElement("tr");
  let tbody = document.getElementById("table-body");
  tr.innerHTML = `<td>${username}</td> <td>₦${usersalary}</td> <td>${date}</td>`;
  tbody.appendChild(tr);
  //  let salaryUpdate = document.getElementById("salary-update");
  //  salaryUpdate.style.display = "block";
}

// function appear() {
//  let contain = document.getElementById("table");
//  contain.
// }
// window.onload(() => {
//   let username = localStorage.getItem("name");
//   let usersalary = localStorage.getItem("salary");
//   let date = new Date().toLocaleDateString();

//   let tr = document.createElement("tr");
//   let tbody = document.getElementById("table-body");
//   tr.innerHTML = `<td>${username}</td> <td>₦${usersalary}</td> <td>${date}</td>`;
//   tbody.appendChild(tr);
// });
