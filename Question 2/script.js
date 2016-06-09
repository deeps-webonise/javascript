window.onload = function () {
  var input = document.getElementById('array');
  var btnInput = document.getElementById('btn');

  btnInput.addEventListener('click', function (event) {
    var inputArray = input.value.split(',');
    var array = [];

    for(var i = 0; i < inputArray.length; i++)
      array.push(parseInt(inputArray[i].trim()));

    var answer = checkDuplicates(array);
    var result = document.getElementById('result');

    if(answer)
      result.innerHTML = 'The array is unique';

    else
      result.innerHTML = 'The array contains duplicates';
  });
}

function checkDuplicates(inputArray) {
  var answer = true;

  for (var i = 0; i < inputArray.length; i++)
  {
    var item = inputArray[i];

    console.log(item);
    var startIndex = inputArray.indexOf(item);
    var endIndex = inputArray.lastIndexOf(item);

    console.log('start index : ' + startIndex);
    console.log('end index : ' + endIndex);
    console.log('\n');

    if(startIndex != endIndex)
    {
      answer = false;
      return false;
    }
  }

  return answer;
}
