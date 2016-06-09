window.onload = function () {
  for(var i = 1; i < 101; i++)
  {
    if(i % 15 == 0)
      document.write("foobar<br />");

    else if(i % 5 == 0)
      document.write("bar<br />");

    else if(i % 3 == 0)
      document.write("foo<br />");

    else
      document.write(i + "<br />");
  }
}
