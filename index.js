  var messages = ['Watch your favorite show', 'Have a spa day', "Play relaxing music", "Put on a face mask","Do yoga", "Have some chocolate", "Hang out with your best friend", "Sing your heart out"];
var button = $("button");
var random = $('.random');
button.on("click", sendMessage);

function sendMessage() {

  var randomNumber = Math.random() * 8;
  console.log(randomNumber);
  var randomIndex = Math.floor(randomNumber);
  var randomMessage = messages[randomIndex];
  console.log(randomMessage);
  random.text(randomMessage);
}
