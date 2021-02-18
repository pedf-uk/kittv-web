var exam = [];
var inputs = [];
var correctAnswersIdList = [];
var points = 0;
var maxPoints = 40;

$(document).ready(function () {
    // Create form
    createExam();

    // Catch submit action and change page without reload
    performSubmit();
});



function createExam() {

    // Load data from JSON
    exam = (function () {
        var exam = [];
        $.ajax({
            async: false,
            global: false,
            url: "data.json",
            dataType: "json",
            success: function (data) {
                exam = data;
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // console.log("Status: " + textStatus);
                // console.log("Error: " + errorThrown);
            }
        });
        return exam;
    })();

    var questions = document.getElementById("questions");
    var tasks = document.getElementById("tasks");

    // console.log(exam);

    // Create HTML
    shuffle(exam.questions).forEach(function (question) {
        var container = createExamItem(question);
        questions.appendChild(container);
    });

    // Create HTML
    shuffle(exam.tasks).forEach(function (task) {
        var container = createExamItem(task);
        tasks.appendChild(container);
    });

    // console.log("I\'m done here!");

}

function createExamItem(item) {
    var container = document.createElement("DIV");
    var text = document.createElement("P");
    text.className = "question";

    text.innerText = item.text;
    container.appendChild(text);

    var path = "";

    if (item.image !== null) {
        var figure = document.createElement("FIGURE");

        if (item.image.src !== undefined) {
            var image = document.createElement("IMG");
            image.src = path + item.image.src;
            figure.appendChild(image);
        }
        if (item.image.svg !== undefined) {
            var object = document.createElement("OBJECT");
            object.data = path + item.image.svg;
            object.type = "image/svg+xml";
            figure.appendChild(object);
        }

        container.appendChild(figure);
    }
    var anscontainer = document.createElement("DIV");
    container.appendChild(anscontainer);
    anscontainer.className="container";

    if (item.answers.length > 1) {
        // Create radio button with label for each of the answers
        shuffle(item.answers).forEach(function (answer) {

            var id = item.id + "_" + answer.id;

            // Save input for later usage
            inputs.push(id);

            var subContainer = document.createElement("DIV");
            subContainer.id = id + "_div";
            subContainer.className = "answer";

            // Store all correct answers
            if (answer.isCorrect) {
                correctAnswersIdList.push(id);
            }

            var input = document.createElement("INPUT");
            input.type = "radio";
            input.name = item.id;
            input.id = id;
            input.value = id;
            // input.required = true;

            subContainer.appendChild(input);

            var label = document.createElement("LABEL");
            label.setAttribute("for", id);
            label.innerText = answer.text;

            subContainer.appendChild(label);

            anscontainer.appendChild(subContainer);

        });
    } else {
        var answer = item.answers[0];

        var id = item.id + "_" + answer.id;

        // Save input for later usage
        inputs.push(id);

        var subContainer = document.createElement("DIV");
        subContainer.id = id + "_div";
        subContainer.className = "answer single";

        if (item.prefix != null) {
            // console.log(item.prefix);
            var prefix = document.createElement("SPAN");
            prefix.innerText = item.prefix;
            subContainer.appendChild(prefix);
        }

        var input = document.createElement("INPUT");
        input.type = "text";
        input.name = item.id;
        input.id = id;
        // input.required = true;

        subContainer.appendChild(input);

        anscontainer.appendChild(subContainer);
    }

    // console.log(item);

    return container;
}

function performSubmit() {

    $("#examFrom").submit(function (event) {

        // console.log(event);

        // Prevent form submit
        event.preventDefault();

        var correctAnswersId = [];
        var wrongAnswersId = [];
        var submittedAnswersId = [];

        // Collect all submitted answers
        $("#examFrom :input[type=radio]").serializeArray().forEach(function (answer) {
            submittedAnswersId.push(answer.value);
        });

        // Collect all wrong answers and count points
        wrongAnswersId = $(submittedAnswersId).not(correctAnswersIdList).get();
        correctAnswersId = $(submittedAnswersId).not(wrongAnswersId).get();
        points = (submittedAnswersId.length - wrongAnswersId.length) * 2;

        // console.log(points);

        // Collect all submitted answers
        $("#examFrom :input[type=text]").serializeArray().forEach(function (answer) {

            // Move on if there is no answer
            if (!answer.value == "") {
                (exam.questions).forEach(function (question) {
                    if (question.id == answer.name) {
                        if (question.answers[0].text.toLowerCase() == answer.value.toLowerCase()) {
                            correctAnswersId.push(answer.name + "_0");
                            points += 2;
                        } else {
                            wrongAnswersId.push(answer.name + "_0");
                        }

                        /*
                        var solution = document.createElement("P");
                        solution.innerText = "Správná odpověď je: " + question.answers[0].text;
                        document.getElementById(answer.name + "_0_div").appendChild(solution);
                        */
                    }
                });

                (exam.tasks).forEach(function (task) {
                    if (task.id == answer.name) {
                        if (task.answers[0].text == answer.value) {
                            correctAnswersId.push(answer.name + "_0");
                            points += 5;
                        } else {
                            wrongAnswersId.push(answer.name + "_0");
                        }

                        /*
                        var solution = document.createElement("P");
                        solution.innerText = "Správná odpověď je: " + task.answers[0].text;
                        document.getElementById(answer.name + "_0_div").appendChild(solution);
                        */
                    }
                });
            }

        });

        // console.log(points);

        // console.log(points);

        // Disable all inputs
        /*
        inputs.forEach(function (input) {
            $("#" + input).prop('disabled', true);
        });
        */

        /*
        console.log("Submitted: " + submittedAnswersId);
        console.log("Wrong: " + wrongAnswersId);
        console.log("Correct: " + correctAnswersId);
        */

        // Reset highlighting
        $("div").removeAttr('style');

        wrongAnswersId.forEach(function (wrongAnswer) {
            $("#" + wrongAnswer + "_div").addClass("wrongAnswer");
        });

        correctAnswersId.forEach(function (correctAnswer) {
             $("#" + correctAnswer + "_div").removeClass("wrongAnswer").addClass("correctAnswer");
        });

        // Delete submit button to prevent another submit
        // $("input:submit:first-of-type").remove();

        // TODO: Add preview of result
        var resultsContainer = document.getElementById("results");
        var procnet = Number(points) * 100 /Number(maxPoints);
        //resultsContainer.innerHTML = "<p>Získáno "+ procnet + "% (" + points + "/" + maxPoints +") bodů. </p>Správně <p>" + correctAnswersId.length + " otázek ze " + (exam.questions.length + exam.tasks.length) + "</p>";
        resultsContainer.innerHTML = procnet + "%";

    });
}

// Shuffles the given array to create random order
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}