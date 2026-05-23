function addNote() {

  let note = document.getElementById("note").value;

  if (note === "") {
    alert("Write something");
    return;
  }

  let li = document.createElement("li");

  li.innerText = note;

  document.getElementById("list").appendChild(li);

  document.getElementById("note").value = "";
}
