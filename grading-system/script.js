const questions = [
    {
        id: 1,
        question: "What is 2 + 2?",
        type: "multiple-choice",
        options: ["3", "4", "5"],
        correctAnswer: "4"
    },
    {
        id: 2,
        question: "What is the capital of France?",
        type: "short-answer",
        correctAnswer: "Paris"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('quizForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent page reload

        let score = 0;
        const userAnswer1 = document.querySelector('input[name="q1"]:checked')?.value;
        const userAnswer2 = document.querySelector('input[name="q2"]').value.trim();

        if (userAnswer1 === "4") score++;
        if (userAnswer2.toLowerCase() === "paris") score++;

        document.getElementById('result').textContent = `You scored ${score} out of 2`;
    });
});
