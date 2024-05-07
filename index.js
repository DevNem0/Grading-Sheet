function calculateGrade() {
  const om1 = document.getElementById("om1").value;
  const om2 = document.getElementById("om2").value;
  const om3 = document.getElementById("om3").value;

  if (isNaN(om1) || isNaN(om2) || isNaN(om3)) {
    alert("Please enter valid numeric grades.");
    return;
  }

  const average = (om1 + om2 + om3) / 3;

  let Grade;
  if (average >= 90) {
    Grade = "A";
  } else if (average >= 80) {
    Grade = "B";
  } else if (average >= 70) {
    Grade = "C";
  } else if (average >= 50) {
    Grade = "D";
  } else {
    Grade = "F";
  }

  document.getElementById("result1").innerText = `grade: ${Grade}`;
  document.getElementById("result2").innerText = `Average: ${average}`;
}
