window.onload = function () {
  var person = prompt("Please enter your name", "Deep Sodhi");

  if (person)
  {
    document.write("<h1>Hello " + person + "</h1>");

    alert('Hello ' + person + '!');
  }
}
