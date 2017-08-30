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
  let html = '';
  let orderedLeague = randomDraftOrder(theLeague);
  orderedLeague.forEach(function(player) {
    let listItem = `<li>${player}</li>`;
    html += listItem;
  });
  $("#draft-list").html(html);
})
