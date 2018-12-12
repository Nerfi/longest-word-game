// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
//
//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);


// USING API
fetch("https://wagon-dictionary.herokuapp.com/")
  .then(response => response.json())
  .then((data) => {
    console.log(data);
  });

// NO CLUE IF IT'LL WORK
// se llama random pq el nombre del id de mi <ul> es random
const random = document.getElementById("random");

fetch("https://wagon-dictionary.herokuapp.com/")
  .then(response => response.json())
  .then((data) => {
    data.results.forEach((person) => {
      const item = `<li>${.name}</li>`;
      people.insertAdjacentHTML("beforeend", item);
    });
  });
