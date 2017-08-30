function randomDraftOrder(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let theLeague = ["Jake", "Jack", "Kathy", "David", "Tonya", "Karen", "Scott", "Vanessa", "Michael", "Matthew"];

$("#randomize").click(function () {
  $("#opening-theme")[0].pause();
  $("#closing-theme")[0].play();

  let html = '';
  let orderedLeague = randomDraftOrder(theLeague);
  let i = 0;
  let count = 10;

  orderedLeague.forEach(function(player) {
    let listItem = `<li id="order-${i}" style="display: none">${i+1}. ${player}</li>`;
    html += listItem;
    i++;
  });
  $("#draft-list").html(html);
  setInterval(function(){
    $(`#order-${count}`).removeAttr("style");
    count--;
  }, 2000)

})
