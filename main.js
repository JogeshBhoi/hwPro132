prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

//create your model and store it in var classifier 
function classifyCanvas() {
    classifier.classify//teachablemachine.withgoogle.com/models/hfsUGGCXK/
  }

//define function modelLoaded
function modelLoaded() {
    console.log('Model Loaded!');
}

//define function check() 


//define function gotResult(error, results)
function gotResult(error, results) {
    if (error) {
      console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML = 'Label: ' + results[0].label;
  
    document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';
  
    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
  }