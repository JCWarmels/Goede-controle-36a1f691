
var correct_answers = Array("Parijs", "8", "Ijsselmeer");
function checkAnswers() 
{
    A1 = document.getElementById('A1').value;
    A2 = document.getElementById('A2').value;
    A3 = document.getElementById('A3').value;
    if (correct_answers[0] == A1 && correct_answers[1] == A2 && correct_answers[2] == A3) {
        document.getElementById("ShowOut").innerHTML = "Alle antwoorden zijn correct!";
    } else {
        document.getElementById("ShowOut").innerHTML = "Een antwoord is fout!";
    }
}