function imgchange() {

  var myImages1 = new Array();
  myImages1[1] = "red-arrow-left-pointing-5.png";
  myImages1[2] = "red-arrow-right-pointing-5 copy.png";
  var rnd = Math.floor(Math.random() * myImages1.length);
  if (rnd == 0) {
    rnd = 1;
  }

  document.getElementById("gen-img").src = myImages1[rnd];
console.log(rnd)
}

var body = document.getElementById("the-body")

var openingTag = '<div class="something"><p><img id="gen-img" src="red-arrow-left-pointing-5.png"></p>';
var closingTag = "<div>";

body.innerHTML += openingTag + closingTag;

body.addEventListener("click", function (e) {
  imgchange()
})
