//Problem: doesn't size to small devices properly
//Solution: hide the text links and swap them out with more 
//appropriate navigation

//Create a select and append to menu
//This adds a variable (nothing special about the '$' there) named $select
//This variable is actually a jQuery string object
var $select = $('<select></select>');
$("#menu").append($select);

//Cycyle an option
$("#menu a").each(function() {
  //Create an anchor
  var $anchor = $(this);
  //Create an option
  var $option = $('<option></option>');
  //Deal with selected options depending on the current page
  //"selected" is not a key word here.  It could be called anything, but this is what that class was called in the CSS
  if ($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }
  //option's value is the href
  $option.val($anchor.attr('href'));
  //option's text is the text of link
  $option.text($anchor.text());
  //append option to select
  $select.append($option);
});

//Bind click to button
$select.change(function() {
  //Go to select's location
  window.location = $select.val();
});
//Modify CSS to hide links on small resolution and show button and select
//Also hides select and button on larger resolutions
