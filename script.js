//alert('hola');
var etiqueta;
function onloadFcn(){
etiqueta= document.getElementById("LUCES");
etiqueta.innerHTML = "LUCES";
}
//onload indica q realizeoperacion todo cuando ya esten todas las etiquetas cargadas//
  // Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("postman.cloudmqtt.com", 31098, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
    useSSL: true,
    userName: "botstbxk",
    password: "bDKSMnTpsSoO",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
  topic='led';
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
	
    client.subscribe('test');
    message = new Paho.MQTT.Message("ll:Hello: CloudMQTT");
    message.destinationName = topic;
    
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("Te enviaron:"+message.payloadString);
	action(message.payloadString);
	msg=message.payloadString;
	  if(msg=='encendido'){
		document.getElementById('temp').innerHTML=msg;
	 }
	else if(msg=='apagado'){
		document.getElementById('temp').innerHTML=msg;
	}
	  else{
		  document.getElementById('luz').innerHTML=msg;}
  }
  
    // called when a message arrives
  function sendMessage(msg) {
    message = new Paho.MQTT.Message(msg);
    message.destinationName = topic;
    client.send(message);
	
  }

    // called when a message arrives
	function led() {
sendMessage('estado');
  }
  
  function action(msg) {
	
  }

 
