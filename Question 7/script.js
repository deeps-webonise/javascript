window.onload = function () {
  var studentRecord = [
     {
      name : 'David',
      marks : 80
    },
     {
      name : 'Vinoth',
      marks : 77
    },
     {
      name : 'Divya',
      marks : 88
    },
     {
      name : 'Ishitha',
      marks : 95
    },
     {
      name : 'Thomas',
      marks : 68
    }
  ]

  var numberOfStudent = studentRecord.length;
  var sum = 0;

  for(var i = 0; i < numberOfStudent; i++)
  {
    sum += studentRecord[i].marks;

    if(studentRecord[i].marks < 60)
      document.write(studentRecord[i].name + ' : ' + 'F' + '<br />');

    else if(studentRecord[i].marks < 70)
      document.write(studentRecord[i].name + ' : ' + 'D' + '<br />');

    else if(studentRecord[i].marks < 80)
      document.write(studentRecord[i].name + ' : ' + 'C' + '<br />');

    else if(studentRecord[i].marks < 90)
      document.write(studentRecord[i].name + ' : ' + 'B' + '<br />');

    else if(studentRecord[i].marks < 100)
      document.write(studentRecord[i].name + ' : ' + 'A' + '<br />');
  }

  document.write('<br />Average Marks : ' + (sum / numberOfStudent).toFixed(2));
  document.write('<br />');
}
