//alert ('Hello')



$('.tweet').hide();


$('#SO').click(function() {
    location.reload();
});


//function load_script(){
//	$('#myscript').remove();
//	$.getScript('script.js');
//	load_script();
//};




	$(document).ready(function CNNclick(){
		$(".button2").on({
			click:function(){
				//var script= load_script();
				$("#p1").hide(200);
				$('.button3').hide(200);
				$('.button4').hide(200);
				$('.button5').hide(200);
				$('.button6').hide(200);
				//$('.emotions').hide();
				$(".emotions").fadeIn(300);
				//$(".tweet").hide();

				$('.happy').click(happyCNN);
				$('.neutral').click(neuCNN);
				$('.mad').click(madCNN);
				$('.angry').click(angryCNN);


				
				
			},
		});
	});

$(document).ready(function NYTclick(){
	$(".button3").on({
		click:function(){
			$("#p1").hide(200);
				$('.emotions').hide();
				$(".emotions").fadeIn(300);
				$('.button2').hide(200);
				$('.button4').hide(200);
				$('.button5').hide(200);
				$('.button6').hide(200);
				//$(".tweet").hide();
				$('.happy').click(happyNYT);
				$('.neutral').click(neuNYT);
				$('.mad').click(madNYT);
				$('.angry').click(angryNYT);
		},
	});
});

$(document).ready(function FOXclick(){
	$(".button4").on({
		click:function(){
			$("#p1").hide(200);
				$('.emotions').hide();
				$(".emotions").fadeIn(300);
				$('.button2').hide(200);
				$('.button3').hide(200);
				$('.button5').hide(200);
				$('.button6').hide(200);
				//$(".tweet").hide();
				$('.happy').click(happyFOX);
				$('.neutral').click(neuFOX);
				$('.mad').click(madFOX);
				$('.angry').click(angryFOX);
		},
	});
});

$(document).ready(function FORDclick(){
	$(".button5").on({
		click:function(){
			$("#p1").hide(200);
				$('.emotions').hide();
				$(".emotions").fadeIn(300);
				$('.button2').hide(200);
				$('.button3').hide(200);
				$('.button4').hide(200);
				$('.button6').hide(200);
				//$(".tweet").hide();
				$('.happy').click(happyFORD);
				$('.neutral').click(neuFORD);
				$('.mad').click(madFORD);
				$('.angry').click(angryFORD);
		},
	});
});

$(document).ready(function BOEclick(){
	$(".button6").on({
		click:function(){
			$("#p1").hide(200);
				$('.emotions').hide();
				$(".emotions").fadeIn(300);
				$('.button2').hide(200);
				$('.button3').hide(200);
				$('.button4').hide(200);
				$('.button5').hide(200);
				//$(".tweet").hide();

				$('.happy').click(happyBOE);
				$('.neutral').click(neuBOE);
				$('.mad').click(madBOE);
				$('.angry').click(angryBOE);

		},
	});
});



$(document).ready(function(){
	$(".emotions").on({
		click: function(){
			$("#pe").hide(200);
			$('.tweet').show (300);

			

		},
	});
});



	//$(".button2").on({
	//	mouseenter: function(){
	//		$(this).css("background-color" , "e60000")
	//	},
	//	click: function(){
	//		$(this).css("background-color" , "e60000");
	//	},
	//	blur: function(){
	//		$(this).css("background-color", "#b62f2f");
	//	},
	//	mouseleave: function(){
	//		$(this).css("background-color" , "b62f2f");
	//	},
	//});







//setInterval(function() {
//    var newVal = parseInt($('#meter').val()) + 1;
//    $('#meter').val(newVal);
//}, 500);



function happyCNN (){

	var newTweet= (cnnData[0].HAPPY);
	$('div#content').html(newTweet);


	var date= (cnnData[0].HDATE);
	$('div#date').html(date);


	var range= HCmeter();

	var text= updateTextInputHC();

	//$('.tweet').hide();
	//$('.tweet').show (300);
};

function HCmeter(){
	document.getElementById('meter').value=(cnnData[0].HAR);
};

function updateTextInputHC(val) {
          document.getElementById('textInput').value=(cnnData[0].HAR); 
        };



//$('.tweet').hide();

//function tweetValue(string, number){
//	this.string= string; 
//	this.number= number;
//}

//tweetValue.prototype.amount = 0.05;

//var fred= new tweetValue("Fred", 1970);
//document.getElementById("demo")= fred.salary;

//	document.getElementById("demo").innerHTML= neutralCNN.ar;

//document.getElementById("#meter").innerHTML= neutralCNN.ar;



function neuCNN () {
	newTweet= (cnnData[0].NEUTRAL);
	$('div#content').html(newTweet);
	//$('.tweet').hide();
	//$('.tweet').show (300);
	//meter = setInputValue("#meter", 0.05);
	//$('#meter').appendTo($("0.05").parent());
	//$('#meter').val($('#test').val());
	var date= (cnnData[0].NDATE);
	$('div#date').html(date);
	var range= NCmeter();
	var text= updateTextInputNC();
};

function updateTextInputNC(val) {
          document.getElementById('textInput').value=(cnnData[0].NAR); 
        };

function NCmeter(){
	document.getElementById('meter').value=(cnnData[0].NAR);
		
};

//$('.neutral').click(neuCNN);



function madCNN () {	
	var newTweet= (cnnData[0].MAD);
	$('div#content').html(newTweet);
	//$('.tweet').hide();
	//$('.tweet').show (300);
	var date= (cnnData[0].MDATE);
	$('div#date').html(date);
	var range= MCmeter();
	var text= updateTextInputMC();
};

function MCmeter(){
	document.getElementById('meter').value=(cnnData[0].MAR);
		
	
};

function updateTextInputMC(val) {
          document.getElementById('textInput').value=(cnnData[0].MAR); 
        };



function angryCNN() {
	var newTweet= (cnnData[0].ANGRY);
	$('div#content').html(newTweet);
	//$('.tweet').hide();
	//$('.tweet').show (300);
	var date= (cnnData[0].ADATE);
	$('div#date').html(date);
	var range= ACmeter();
	var text= updateTextInputAC();
};

function ACmeter(){
	document.getElementById('meter').value=(cnnData[0].AAR);
		
	
};

function updateTextInputAC(val) {
          document.getElementById('textInput').value=(cnnData[0].AAR); 
        };



function happyNYT(){
	var newTweet= (nytData[0].HAPPY);
	$('div#content').html(newTweet);
	//$('.tweet').hide();
	//$('.tweet').show (300);
	var date= (nytData[0].HDATE);
	$('div#date').html(date);
	var range= HNmeter();
	var text= updateTextInputHN();
};

function HNmeter(){
	document.getElementById('meter').value=(nytData[0].HAR);
		
	
};
function updateTextInputHN(val) {
          document.getElementById('textInput').value=(nytData[0].HAR); 
        };




function neuNYT () {
	newTweet= (nytData[0].NEUTRAL);
	$('div#content').html(newTweet);
	//$('.tweet').hide();
	//$('.tweet').show (300);
	var date= (nytData[0].NDATE);
	$('div#date').html(date);
	var range= NNmeter();
	var text= updateTextInputNN();
};

function NNmeter(){
	document.getElementById('meter').value=(nytData[0].NAR);
		
	
};
function updateTextInputNN(val) {
          document.getElementById('textInput').value=(nytData[0].NAR); 
        };



function madNYT () {
	newTweet= (nytData[0].MAD);
	$('div#content').html(newTweet);
	//$('.tweet').hide();
	//$('.tweet').show (300);
	var date= (nytData[0].MDATE);
	$('div#date').html(date);
	var range= MNmeter();
	var text= updateTextInputMN();
};

function MNmeter(){
	document.getElementById('meter').value=(nytData[0].MAR);
		
	
};

function updateTextInputMN(val) {
          document.getElementById('textInput').value=(nytData[0].MAR); 
        };


function angryNYT () {
	newTweet= (nytData[0].ANGRY);
	$('div#content').html(newTweet);
	//$('.tweet').hide();
	//$('.tweet').show (300);
	var date= (nytData[0].ADATE);
	$('div#date').html(date);
	var range= ANmeter();
	var text= updateTextInputAN();
};

function ANmeter(){
	document.getElementById('meter').value=(nytData[0].AAR);
		
	
};
function updateTextInputAN(val) {
          document.getElementById('textInput').value=(nytData[0].AAR); 
        };



function happyFOX () {
	newTweet= (foxData[0].HAPPY);
	$('div#content').html(newTweet);
	//$('.tweet').hide();
	//$('.tweet').show (300);
	var date= (foxData[0].HDATE);
	$('div#date').html(date);
	var range= HFmeter();
	var text= updateTextInputHF();
};

function HFmeter(){
	document.getElementById('meter').value=(foxData[0].HAR);
		
	
};

function updateTextInputHF(val) {
          document.getElementById('textInput').value=(foxData[0].HAR); 
        };



function neuFOX () {
	newTweet= (foxData[0].NEUTRAL);
	$('div#content').html(newTweet);
	//$('.tweet').hide();
	//$('.tweet').show (300);
	var date= (foxData[0].NDATE);
	$('div#date').html(date);
	var range= NFmeter();
	var text= updateTextInputNF();
};

function NFmeter(){
	document.getElementById('meter').value=(foxData[0].NAR);
		
	
};
function updateTextInputNF(val) {
          document.getElementById('textInput').value=(foxData[0].NAR); 
        };



function madFOX () {
	newTweet= (foxData[0].MAD);
	$('div#content').html(newTweet);
	//$('.tweet').hide();
	//$('.tweet').show (300);
	var date= (foxData[0].MDATE);
	$('div#date').html(date);
	var range= MFmeter();
	var text= updateTextInputMF();
};

function MFmeter(){
	document.getElementById('meter').value=(foxData[0].MAR);
		
	
};
function updateTextInputMF(val) {
          document.getElementById('textInput').value=(foxData[0].MAR); 
        };



function angryFOX () {
	newTweet= (foxData[0].ANGRY);
	$('div#content').html(newTweet);
	//$('.tweet').hide();
	//$('.tweet').show (300);
	var date= (foxData[0].ADATE);
	$('div#date').html(date);
	var range= AFmeter();
	var text= updateTextInputAF();
};

function AFmeter(){
	document.getElementById('meter').value=(foxData[0].AAR);
	
	
};

function updateTextInputAF(val) {
          document.getElementById('textInput').value=(foxData[0].AAR); 
        };


function happyFORD () {
	newTweet= (fordData[0].HAPPY);
	$('div#content').html(newTweet);
	//$('.tweet').hide();
	//$('.tweet').show (300);
	var date= (fordData[0].HDATE);
	$('div#date').html(date);
	var range= HOmeter();
	var text= updateTextInputHO();
};

function HOmeter(){
	document.getElementById('meter').value=(fordData[0].HAR);
		
	
};
function updateTextInputHO(val) {
          document.getElementById('textInput').value=(fordData[0].HAR); 
        };



function neuFORD () {
	newTweet= (fordData[0].NEUTRAL);
	$('div#content').html(newTweet);
	//$('.tweet').hide();
	//$('.tweet').show (300);
	var date= (fordData[0].NDATE);
	$('div#date').html(date);
	var range= NOmeter();
	var text= updateTextInputNO();
};

function NOmeter(){
	document.getElementById('meter').value=(fordData[0].NAR);
		
	
};

function updateTextInputNO(val) {
          document.getElementById('textInput').value=(fordData[0].NAR); 
        };


function madFORD () {
	newTweet= (fordData[0].MAD);
	$('div#content').html(newTweet);
	//$('.tweet').hide();
	//$('.tweet').show (300);
	var date= (fordData[0].MDATE);
	$('div#date').html(date);
	var range= MOmeter();
	var text= updateTextInputMO();
};

function MOmeter(){
	document.getElementById('meter').value=(fordData[0].MAR);
		
	
};
function updateTextInputMO(val) {
          document.getElementById('textInput').value=(fordData[0].MAR); 
        };



function angryFORD () {
	newTweet= (fordData[0].ANGRY);
	$('div#content').html(newTweet);
	//$('.tweet').hide();
	//$('.tweet').show (300);
	var date= (fordData[0].ADATE);
	$('div#date').html(date);
	var range= AOmeter();
	var text= updateTextInputAO();
};

function AOmeter(){
	document.getElementById('meter').value=(fordData[0].AAR);
		
	
};
function updateTextInputAO(val) {
          document.getElementById('textInput').value=(fordData[0].AAR); 
        };



function happyBOE () {
	newTweet= (boeingData[0].HAPPY);
	$('div#content').html(newTweet);
	//$('.tweet').hide();
	//$('.tweet').show (300);
	var date= (boeingData[0].HDATE);
	$('div#date').html(date);
	var range= HBmeter();
	var text= updateTextInputHB();
};

function HBmeter(){
	document.getElementById('meter').value=(boeingData[0].HAR);
		
	
};
function updateTextInputHB(val) {
          document.getElementById('textInput').value=(boeingData[0].HAR); 
        };



function neuBOE () {
	newTweet= (boeingData[0].NEUTRAL);
	$('div#content').html(newTweet);
	//$('.tweet').hide();
	//$('.tweet').show (300);
	var date= (boeingData[0].NDATE);
	$('div#date').html(date);
	var range= NBmeter();
	var text= updateTextInputNB();
};

function NBmeter(){
	document.getElementById('meter').value=(boeingData[0].NAR);
		
	
};

function updateTextInputNB(val) {
          document.getElementById('textInput').value=(boeingData[0].NAR); 
        };


function madBOE () {
	newTweet= (boeingData[0].MAD);
	$('div#content').html(newTweet);
	//$('.tweet').hide();
	//$('.tweet').show (300);
	var date= (boeingData[0].MDATE);
	$('div#date').html(date);
	var range= MBmeter();
	var text= updateTextInputMB();
};

function MBmeter(){
	document.getElementById('meter').value=(boeingData[0].MAR);
		
	
};
function updateTextInputMB(val) {
          document.getElementById('textInput').value=(boeingData[0].MAR); 
        };



function angryBOE () {
	var newTweet= (boeingData[0].ANGRY);
	$('div#content').html(newTweet);
	//$('.tweet').hide();
	//$('.tweet').show (300);
	var date= (boeingData[0].ADATE);
	$('div#date').html(date);
	var range= ABmeter();
	var text= updateTextInputAB();
};

function ABmeter(){
	document.getElementById('meter').value=(boeingData[0].AAR);
		
	
};
function updateTextInputAB(val) {
          document.getElementById('textInput').value=(boeingData[0].AAR); 
        };
//$('.mad').click(madCNN);

//function madCNNbutton () {
//	if ($('.button2').click ()) {
//		$('.mad').click(madCNN);

//	},
//};

//function meter{

//	var input= document.getElementById("#meter");

//}
//function setInputValue(input_id, val) {
//    document.getElementById(input_id).setAttribute('value', val);
//}

//var numbers = [
//	"0.05",
//	]
