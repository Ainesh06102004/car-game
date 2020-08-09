var database;
var form;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  form = new Form();

}

function draw(){
  background("white");
  
  form.display();
}