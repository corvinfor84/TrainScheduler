var config = {
    apiKey: "AIzaSyABwRGkar6BKZDu_D0sV8etPi4JkEMdEoQ",
    authDomain: "traintime-fbb95.firebaseapp.com",
    databaseURL: "https://traintime-fbb95.firebaseio.com",
    projectId: "traintime-fbb95",
    storageBucket: "",
    messagingSenderId: "969853719768"
  };
  firebase.initializeApp(config);

  // Create a variable to reference the database.
  var database = firebase.database();

  // Create variables for input values
  var trainName;
  var destination;
  var firstTrain;
  var frequency;

$(document).ready(function() {

  // When add-activity button is clicked, grab input values and push to Firebase
  $("#submit").on("click", function() {

    // get the input values
    var trainName = $("#trainNameInput").val().trim();
	var destination = $("#destinationInput").val().trim();
	var firstTrain = moment($("#trainInput").val().trim(), "HH:mm").subtract(10, "years").format("X");
	var frequency = $("#frequencyInput").val().trim();

    // Push input values to firebase
    database.ref().push({
      trainName: trainName,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency,
    });
  });

  // Retrieval of Database Info
  var ref = database.ref();

  ref.on('value', getData);

  // function to retrieve data.
  function getData(data) {
    // console.log(data.val());
    var trainGo = data.val();
    var keys = Object.keys(trainGo);
    
    // indexing through the keys;
    for(var i = 0; i < keys.length; i++){
      
      let k = keys[i];

      let trainName = trainGo[k].trainName;
      let destination = trainGo[k].destination;
      let firstTrain = trainGo[k].firstTrain;
      let frequency = trainGo[k].frequency;
 
      // append firebase data to the train schedule table
		$("#trainSchedule > tbody").append("<tr><td>" + trainName + " " + "</td><td>" + " " + destination + " " + "</td><td>" + " " + frequency + " " + "</td><td>" + " " + firstTrain + " " + "</td><td>" + " " + "minutes" + " " + "</td></tr>");
    }

  }

  // Add Momento to retrieve firebase data

  // use momento to calculate time difference and find time of arrival	

	});



