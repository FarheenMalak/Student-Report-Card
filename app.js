const student = {
    name: "Raza Ali",
    rollNumber: "12345",
    subjects: {
        math: { marks: 85, total: 100 },
        english: { marks: 90, total: 100 },
        science: { marks: 75, total: 100 },
        history: { marks: 80, total: 100 }
    },
    getTotalMarks() {
        let totalMarksObtained = 0;
        let totalMarks = 0;

        for (const subject in this.subjects) {
            totalMarksObtained += this.subjects[subject].marks;
            totalMarks += this.subjects[subject].total;
        }

        return { totalMarksObtained, totalMarks };
    },
    getPercentage() {
        const { totalMarksObtained, totalMarks } = this.getTotalMarks();
        return (totalMarksObtained / totalMarks) * 100;
    },
    getGrade() {
        const percentage = this.getPercentage();
        if (percentage >= 90) {
            return "A";
        } else if (percentage >= 75) {
            return "B";
        } else if (percentage >= 50) {
            return "C";
        } else {
            return "D";
        }
    }
};

const reportCard = document.getElementById("report-card");
reportCard.innerHTML = `<h2>${student.name} (Roll No: ${student.rollNumber})</h2>`;
reportCard.innerHTML += `<h3>Subjects</h3>`;

for (const subject in student.subjects) {
    const { marks, total } = student.subjects[subject];
    reportCard.innerHTML += `
        <div class="subject">
            <strong>${subject.charAt(0).toUpperCase() + subject.slice(1)}:</strong> ${marks}/${total}
        </div>`;
}

const { totalMarksObtained, totalMarks } = student.getTotalMarks();
const percentage = student.getPercentage();
const grade = student.getGrade();

reportCard.innerHTML += `<h3>Total Marks: ${totalMarksObtained}/${totalMarks}</h3>`;
reportCard.innerHTML += `<h3>Percentage: ${percentage.toFixed(2)}%</h3>`;
reportCard.innerHTML += `<h3>Grade: ${grade}</h3>`;






