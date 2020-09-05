$(document).ready(function(){
    var container = document.getElementById("container");
    var general = document.createElement('div');
    general.id = "general";
    general.className = "category";
    var h2 = document.createElement('h2');
    h2.innerHTML = "General Knowledge";
    general.appendChild(h2);
    $.get("https://opentdb.com/api.php?amount=3&category=20&difficulty=easy", (data) => {
        console.log(data.results);
        var questions = data.results;

        for (var x of questions){
            var div = document.createElement("div");
            div.className = "box";
            var h3 = document.createElement("h3");
            h3.innerHTML = x.question;
            div.appendChild(h3);
            
            var answers = x.incorrect_answers;
            answers.push(x.correct_answer);
            shuffle(answers);
            for (var a of answers) {
                var p = document.createElement('p');
                p.innerHTML = a;
                div.appendChild(p);
            }
            general.appendChild(div);
        }
        container.appendChild(general);
    })
});

function shuffle(arr){
    for (var i = 0; i < arr.length; i ++){
        var idx1 = Math.floor(Math.random() * arr.length);
        var idx2 = Math.floor(Math.random() * arr.length);
        var temp = arr[idx1];
        arr[idx1] = arr[idx2]
        arr[idx2]= temp;
    }
}