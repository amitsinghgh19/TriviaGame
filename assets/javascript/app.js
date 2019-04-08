

//  Global Variables
timeRemaning= 120;
correctAns=0;
incorrectAns=0;
unAns=0;

var refreshIntervalId= null;

//Hide Jombotron after selecting START GAME
$(document).ready(function() {

    $("#startBtn").click(function(){
    $("#welcomeContainer").hide();
    $("#gameContainer").show();
    $("#submitBtn").show();
    $("#timerDiv").show();
    $("#resultContainer").hide();
    startCountdown();
    })
   
});

$("#doneBtn").click(function(){
    $("#gameContainer").hide();
    $("#doneBtn").hide();
    $("#timerDiv").hide();
    $("#resultContainer").show();
    getResult();
    clearInterval(refreshIntervalId);
    })

$("#playAgainBtn").click(function(){
    location.reload();
    })

// Counts down and displays the time to the user
function countdown(){

    // Decrement the timeRemaning, down from 120 seconds
    timeRemaning--;

    // Display the timeRemaning to the user in the DOM
    $('#timeRemaning').html(timeRemaning + " Seconds");
    console.log(timeRemaning);
   
    /* if timeRemaning <=0 then stop the timer */
    if(timeRemaning <= 0){
        clearInterval(refreshIntervalId);
        $("#gameContainer").hide();
        $("#doneBtn").hide();
        $("#resultContainer").show();
        getResult();
    }
}

// Show the countdown, increment is 1 second
function startCountdown(){
    refreshIntervalId = setInterval(countdown, 1000);
}

//Get Result
function getResult(){

    // Checked values of Radio Buttons
    var Q1 = $('input:radio[name="q1"]:checked').val();
    // console.log("Value of Q1 is : "+Q1);
    var Q2 = $('input:radio[name="q2"]:checked').val();
    var Q3 = $('input:radio[name="q3"]:checked').val();
    var Q4 = $('input:radio[name="q4"]:checked').val();
    var Q5 = $('input:radio[name="q5"]:checked').val();
    var Q6 = $('input:radio[name="q6"]:checked').val();
    var Q7 = $('input:radio[name="q7"]:checked').val();
    var Q8 = $('input:radio[name="q8"]:checked').val();
    var Q9 = $('input:radio[name="q9"]:checked').val();
    var Q10 = $('input:radio[name="q10"]:checked').val();
    console.log("Value of Q10 is:"+Q10+".");

    // var Q1 = $('input[name="q1"]:radio:checked').val();
    // console.log("Value of Q1 is : "+Q1);
    // var Q1 = $('input[name="q2"]:radio:checked').val();
    // var Q2 = $('input[name="q3"]:radio:checked').val();
    // var Q3 = $('input[name="q4"]:radio:checked').val();
    // var Q4 = $('input[name="q5"]:radio:checked').val();
    // var Q5 = $('input[name="q6"]:radio:checked').val();
    // var Q6 = $('input[name="q7"]:radio:checked').val();
    // var Q7 = $('input[name="q8"]:radio:checked').val();
    // var Q8 = $('input[name="q9"]:radio:checked').val();
    // var Q9 = $('input[name="q10"]:radio:checked').val();
        
    // Determine the right/wrong/unanswered counts 
    if(Q1 == undefined){
        unAns++;
    }
    else if(Q1 == "Treacle tart"){
        correctAns++;
    }
    else{
        incorrectAns++;
    }


    if(Q2 == undefined){
        unAns++;
    }
    else if(Q2 == "Filius Flitwick"){
        correctAns++;
    }
    else{
        incorrectAns++;
    }


    if(Q3 == undefined){
        unAns++;
    }
    else if(Q3 == "The dungeons"){
        correctAns++;
    }
    else{
        incorrectAns++;
    }


    if(Q4 == undefined){
        unAns++;
    }
    else if(Q4 == "Secrets of the Darkest Art"){
        correctAns++;
    }
    else{
        incorrectAns++;
    }


    if(Q5 == undefined){
        unAns++;
    }
    else if(Q5 == "The Fat Friar"){
        correctAns++;
    }
    else{
        incorrectAns++;
    }


    if(Q6 == undefined){
        unAns++;
    }
    else if(Q6 == "Thestrals"){
        correctAns++;
    }
    else{
        incorrectAns++;
    }


    if(Q7 == undefined){
        unAns++;
    }
    else if(Q7 == "The Room of Requirement"){
        correctAns++;
    }
    else{
        incorrectAns++;
    }


    if(Q8 == undefined){
        unAns++;
    }
    else if(Q8 == "Armando Dippet"){
        correctAns++;
    }
    else{
        incorrectAns++;
    }


    if(Q9 == undefined){
        unAns++;
    }
    else if(Q9 == "142"){
        correctAns++;
    }
    else{
        incorrectAns++;
    }



    if(Q10 == undefined){
        unAns++;
    }
    else if(Q10 == "Quirrell, Lockhart, Lupin, Moody, Umbridge, Snape"){
        correctAns++;
    }
    else{
        incorrectAns++;
    }

    // After answers are validated, display the score results
    $('#correct-ans').html(correctAns);
    $('#incorrect-ans').html(incorrectAns);
    $('#un-ans').html(unAns);

    
}