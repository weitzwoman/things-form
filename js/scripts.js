var food;
var animal;
var book;
var movie;
var park;

var total;
var total2 = [];

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    food = $("input#food").val();
    animal = $("input#animal").val();
    book = $("input#book").val();
    movie = $("input#movie").val();
    park = $("input#park").val();

    total = [food, animal, book, movie, park];
    total2.push(total[1], total[0], total[2]);
    $(".output1").text(total2[0]);
    $(".output2").text(total2[1]);
    $(".output3").text(total2[2]);
    $(".results").show();
  })
})
