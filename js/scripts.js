$(document).ready(function() {

  $(".btn").click(function(event) {
    $(".btn").hide();
    $(".form-group1").hide();
    $(".form-group2").hide();
    $(".form-group3").hide();

    var items =['item1', 'item2', 'item3'];

    var itemArray = [];

    items.forEach(function(sofa) {
      var userInput = $("input#" + sofa).val();
      itemArray.push(userInput.toUpperCase());
    });
    itemArray.sort();

    itemArray.forEach(function(sofa) {
      $(".listItems").append('<li>' + sofa + '</li>');
    });
      alert(itemArray);

      event.preventDefault();
  });
});
