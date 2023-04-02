function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("item", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const el = ev.dataTransfer.getData("item");
  ev.target.appendChild(document.getElementById(el));
}
