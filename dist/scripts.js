document.querySelector("#about").addEventListener("click", () => {
  appendAbout();
});

document.querySelector("#home").addEventListener("click", () => {
  appendHome();
});

function appendHome() {
  var home = `<h3>Welcome to the new site just created now.</h3>
<div id="img-container">
  <img id="img1" src="img1.jpg" />
  This is the image of a chip processor in the CPU.
</div>`;
  document.title = "Home";
  document.querySelector("#content").innerHTML = home;
  document.querySelector("#content").innerHTML += appendForm();
  document.querySelector("#getData").addEventListener("click", (e) => {
    displayDB();
  });
}

function appendAbout() {
  var text = "<h1>Hello</h1>";
  document.title = "About";
  document.querySelector("#content").innerHTML = text;
}

function appendForm() {
  var form = `<br />
  <form id="form" method="POST" action ="/post"  >
    <label for="title" >Title</label>
    <input type="text" id="title" name="title" required /><br />
    <br />
    <label for="date" >Choose Date</label>
    <input type="date" id="date" name="date" required /><br />
    <br />
    <label for="rem" >Write Reminder</label>
    <textarea row="4" col="5" id="rem" name="rem" required></textarea>
    <br /><br /><br>
    <label for="myFile">Upload File</label>
    <input type="file" id="myFile" name="filename"> <br /><br />
    <button type="submit" form="form" value="Submit" id="submit">Submit</button>
  
  </form>
  <br>
  <div id="showData">
  <button  id="getData">Get Data</button></div>`;
  return form;
}

function displayDB() {
  fetch("/get")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      document.querySelector("#showData").innerHTML = "";
      var showTable = `<table style="width:100%">
      <tr>
      <th>Title</th>
      <th>Date</th>
      <th>Reminder</th>
      </tr>
      `;
      for (var i = 0; i < res.length; i++) {
        showTable += `<tr ><td>${res[i].title}</td>
        <td>${new Date(res[i].date).toDateString()}</td>
        <td>${res[i].reminder}</td>
        </tr>`;
      }
      showTable += "</table>";

      document.querySelector("#showData").innerHTML += showTable;
    
    })
    .catch((err) => console.log(err));
}

//document.querySelector("#navbar").style.display = "none";

document.querySelector("#icon").addEventListener("click", () => {
  document.querySelector("#navbar").style.display = "block";
});
