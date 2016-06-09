window.onload = function () {
  var library = [
    {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
 	   },
 	   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
 	   },
 	   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
 	   }
   ];

   for (var i = 0; i < library.length; i++)
   {
     var book = library[i];

     document.write('Author : ' + book.author);
     document.write("<br />");
     document.write('Book Name : ' + book.title);
     document.write("<br />");
     document.write('Reading Status : ' + book.readingStatus);
     document.write("<br />");
     document.write("<br />");
   }
}
