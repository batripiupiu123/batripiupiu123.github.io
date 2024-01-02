// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0rjFVdiUe1IrV-lwr_91RzJplQ86Abjk",
  authDomain: "esp32aptrung.firebaseapp.com",
  databaseURL: "https://esp32aptrung-default-rtdb.firebaseio.com",
  projectId: "esp32aptrung",
  storageBucket: "esp32aptrung.appspot.com",
  messagingSenderId: "45988116062",
  appId: "1:45988116062:web:fb5080c54bcb84b0faa6cf",
  measurementId: "G-DBSZXN3GRF"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

//************************************************************************
//************************************************************************
//************************************************************************
database.ref("/Sensor/Temp").on("value", function (snapshot) {
    var ss = snapshot.val();
	document.getElementById("nhietdo").innerHTML = ss;
});
database.ref("/Sensor/Humi").on("value", function (snapshot) {
    var ss = snapshot.val();
	document.getElementById("doam").innerHTML = ss;
});
database.ref("/Set/Temp").on("value", function (snapshot) {
    var ss = snapshot.val();
	document.getElementById("nhietdoSet").value = ss;
});
database.ref("/Set/Humi").on("value", function (snapshot) {
    var ss = snapshot.val();
	document.getElementById("doamSet").value = ss;
});
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
var box1 = document.getElementById("btSetDoAm");
box1.addEventListener("click", function () {
	database.ref("/Set").update({
        "Humi": document.getElementById("doamSet").value,
    });
});
var box2 = document.getElementById("btSetNhietDo");
box2.addEventListener("click", function () {
	database.ref("/Set").update({
        "Temp": document.getElementById("nhietdoSet").value,
    });
});
