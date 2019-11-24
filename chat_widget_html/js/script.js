let active = false;
function openChatWindow() {
  var currentstate = document.getElementById("chat-window").style.visibility;
  //Make newstate the opposite of the current state.
  var newstate = currentstate == "hidden" ? "visible" : "hidden";
  var popupicon = newstate == "hidden" ? "visible" : "hidden";

  //Apply the new state.
  document.getElementById("chat-window").style.visibility = newstate;
  console.log("popupicon", popupicon);

  document.getElementById("chat_icon").style.visibility = popupicon;
}

window.onload = function() {
  //Start with the div visible
  document.getElementById("chat-window").style.visibility = "hidden";
  document.getElementById("chat_icon").style.visibility = "visible";

  //Listen for click on button.
  // document.getElementById('chat_icon').addEventListener('click', function() {
  // 	//Get current state of CSS display property.
  // });
};

const userAction = async () => {
  let user_message = $("#input").val();
  $("#input").val("");
  //   console.log(myJson);
  $(".chats").append(
    $(`
  <div class="user-message">
	<div class="user-text">
	  <strong>User</strong><br />
	  ${user_message}
	</div>
	<div class="user-message-info">user at 1.20 p.m</div>
  </div>`)
  );
  const response = await fetch("https://d6d1d083.ngrok.io");
  const myJson = await response.json(); //extract JSON from the http response
  console.log(myJson);
  $(".chats").append(
    $(` <div class="received-message">
  <div class="received-text">
	<strong>Bot</strong><br />

	yayyy
  </div>
  <div class="message-info">Bot at 1.20 p.m</div>
</div>
`)
  );
  // do something with myJson
};
