$(document).ready(function() {
  $("#button").click(function() {
    let inputValue = $("input:radio[name=animal]:checked").val();

    if (inputValue === "turtle") {
      $(".turtle").show();
      $(".snake, .frog").hide();
    } else if (inputValue === "snake") {
      $(".snake").show();
      $(".turtle, .frog").hide();
    } else if (inputValue === "frog") {
      $(".frog").show();
      $(".snake, .turtle").hide();
    }
  });
});