//Default set the arrow to closed on page load
var open = false;

$(".arrow-button").click(function() {
  if(open) {
    //Allows bootstrap animation to finish before resetting background
    setTimeout(function() {
      $(".arrow-button").attr('src', 'Assets/Collapse_Arrow.png');
      $(".header-container-style").css("border", "1.5pt solid #8da8bf");
      $(".header-container-style").css("background-color", "#8da8bf");
    });
    open = false;
  } else {
    $(".arrow-button").attr('src', 'Assets/Expand_Arrow.png');
    $(".header-container-style").css("background-color", "#fff");
    open = true;
  }
})
