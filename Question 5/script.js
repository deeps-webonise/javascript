window.onload = function () {
  var person = prompt("Please enter your name", "Deep Sodhi");

  if (person)
  {
    var result = [];

    for (var i = 0; i < 5; i++)
    {
      result.push(prompt('Enter a word', "hello"));
    }

    for(var i = 0; i < 5; i++)
    {
      document.write("This is word " + (i + 1) + " : " + result[i]);
      document.write('<br />');
    }

    var color = prompt('Enter the color name in hex value', 'ff0000');

    setTimeout(function () {
      document.body.style.color = color;
    }, 2000);
  }
}
