var myJokes = new Array();
myJokes[0] = "What time did Sean Connery arrive at Wimbledon?";
myJokes[1] = "What did the Zero say to the Eight?";
myJokes[2] = "What's brown and rhymes with Snoop?";
myJokes[3] = "How can you tell if a man is blind at a nude beach?";
myJokes[4] = "What did the clam do on his birthday?";
myJokes[5] = "What's brown and sticky?";
myJokes[6] = "How many potatoes does it take to kill an Irishman?";
myJokes[7] = "Why did the scarecrow win the Nobel Prize?";
myJokes[8] = "I used to have a deaf girlfriend. She talked in her sleep sometimes.";
myJokes[9] = "What did the ghost order at the Italian restaurant?";
myJokes[10] = "Why was the 6 scared of the 7?";
myJokes[11] = "What kind of bees give milk?";
myJokes[12] = "I was at the zoo the other day. All they had was one dog.";
myJokes[13] = "Which is faster, hot or cold?"


var myPunchlines = new Array();
myPunchlines[0] = "tennish";
myPunchlines[1] = "Nice belt!";
myPunchlines[2] = "Dr. Dre";
myPunchlines[3] = "It's not hard";
myPunchlines[4] = "He shell-ebrated!!";
myPunchlines[5] = "A stick!";
myPunchlines[6] = "Zero";
myPunchlines[7] = "He was outstanding in his field";
myPunchlines[8] = "Almost poked my eye out!";
myPunchlines[9] = "Fettuccine Afraid-O!";
myPunchlines[10] = "because 7-8-9";
myPunchlines[11] = "boo-bees!";
myPunchlines[12] = "It was a shit-zoo";
myPunchlines[13] = "Hot, because you can catch cold!"






$(document).ready(function(){

	var myRandom = Math.floor(Math.random()*myJokes.length);
	
	$('#joke').html(myJokes[myRandom]);
	$('#punchline').html(myPunchlines[myRandom]);

	if(myRandom==0){
		$('<img src="sirconnery.gif"/>').appendTo('#content');
	}

});
