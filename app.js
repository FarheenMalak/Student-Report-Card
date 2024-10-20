document.getElementById('reportCardForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('studentName').value;
    const studentClass = document.getElementById('studentClass').value;
    const subjects = [
        {
            name: document.getElementById('subject1').value,
            marks: parseInt(document.getElementById('marks1').value)
        },
        {
            name: document.getElementById('subject2').value,
            marks: parseInt(document.getElementById('marks2').value)
        },
        {
            name: document.getElementById('subject3').value,
            marks: parseInt(document.getElementById('marks3').value)
        }
    ];
    const totalMarks = subjects.reduce((sum, subject) => sum + subject.marks, 0);
    const averageMarks = totalMarks / subjects.length;
    const cardContent = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Class:</strong> ${studentClass}</p>
        <h3>Subjects and Marks</h3>
        <ul>
            ${subjects.map(subject => `<li>${subject.name}: ${subject.marks}</li>`).join('')}
        </ul>
        <p><strong>Total Marks:</strong> ${totalMarks}</p>
        <p><strong>Average Marks:</strong> ${averageMarks.toFixed(2)}</p>
    `;
    document.getElementById('cardContent').innerHTML = cardContent;
    document.getElementById('reportCard').classList.remove('hidden');
});
