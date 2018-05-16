var list = [[], []];
var one;
var two;
var three;
function createQuiz(){
   one = prompt("What is the major city in Colorado?");
   two = prompt("How many legs do you have?");
   three = prompt("Who makes the best Pizza?");
  
  list[0][0] = "What is the major city in Colorado?";
  list[0][1] = "How many legs do you have?";
  list[0][2] = "Who makes the best Pizza?";
  
  list[1][0] = "DENVER";
  list[1][1] = 2;
  list[1][2] = "PIZZA HUT";
  
}

function correct(){
    if(one.toUpperCase() == list[1][0]){
        document.write("<p>These are the Questions you got Correct:\t" + list[0][0] +  "</p>");
    }
    
    if(two == list[1][1]){
        document.write("<p>These are the Questions you got Correct:\t" + list[0][1] +  "</p>");
    }
    
    if(three.toUpperCase() == list[1][2]){
        document.write("<p>These are the Questions you got Correct:\t" + list[0][2] +  "</p>");
    }
    
   wrong();
    
}

function wrong(){
    if(one.toUpperCase() != list[1][0]){
        document.write("<p>These are the Questions you got Wrong:\t" + list[0][0] +  "</p>");
    }
    
    if(two != list[1][1]){
        document.write("<p>These are the Questions you got Wrong:\t" + list[0][1] +  "</p>");
    }
    
    if(three.toUpperCase() != list[1][2]){
        document.write("<p>These are the Questions you got Wrong:\t" + list[0][2] +  "</p>");
    }
}

function print(){
    document.write("<h1>Trivia Questions</h1>");
    document.write("<p>These are the Questions with their corresponding answers: </p>");
    for(var x = 0; x < list.length + 1; x++){
        document.write("<p>" + (x + 1) + ". " + list[0][x]  + "\t" + list[1][x] +  "</p>");
    }
  
}

createQuiz();
alert("Here are your Results: ");
print();
correct();
