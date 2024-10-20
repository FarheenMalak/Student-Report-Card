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
    const grades = subjects.map(subject => {
        if (subject.marks >= 90) return 'A';
        else if (subject.marks >= 80) return 'B';
        else if (subject.marks >= 70) return 'C';
        else if (subject.marks >= 60) return 'D';
        else return 'F';
    });
    const cardContent = `
        <div class="card-header">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Class:</strong> ${studentClass}</p>
        </div>
        <h3>Subjects and Marks</h3>
        <ul class="subject-list">
            ${subjects.map((subject, index) => `<li><span class="subject-name">${subject.name}:</span> <span>${subject.marks} (Grade: ${grades[index]})</span></li>`).join('')}
        </ul>
        <p><strong>Total Marks:</strong> ${totalMarks}</p>
        <p><strong>Average Marks:</strong> ${averageMarks.toFixed(2)}</p>
    `;
    document.getElementById('cardContent').innerHTML = cardContent;
    document.getElementById('reportCard').classList.remove('hidden');
});
