// script.js
 


function SameTab() {
    window.location.replace("./quiz.html");
}
// Fetch the JSON data and display it
fetch('sample.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('quiz-container');

        // Iterate over the 'questions' array in the JSON data
        data.questions.forEach((question, index) => {
            // Create a new div element for each question
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');

            // Add a number before each question
            const questionNumber = index + 1;

            // Create HTML for the question and its options
            let questionHTML = `
                <h2>${questionNumber}. ${question.question}</h2>
                <form id="question-${question.id}">
            `;

            // Iterate over the options and create radio buttons
            question.options.forEach(option => {
                questionHTML += `
                    <label>
                        <input type="radio" name="question-${question.id}" value="${option.option}">
                        ${option.text}
                    </label><br>
                `;
            });

            // Close the form tag and append the question HTML to the div
            questionHTML += `</form>`;
            questionDiv.innerHTML = questionHTML;

            // Append the question div to the container
            container.appendChild(questionDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
