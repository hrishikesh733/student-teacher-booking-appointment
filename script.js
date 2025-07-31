const form = document.getElementById('appointmentForm');
const msgDiv = document.getElementById('msg');

let appointments = JSON.parse(localStorage.getItem('appointments')) || [];

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const student = document.getElementById('studentName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const teacher = document.getElementById('teacherName').value.trim();
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  const overlap = appointments.find(
    (a) => a.teacher === teacher && a.date === date && a.time === time
  );
  if (overlap) {
    msgDiv.style.color = 'red';
    msgDiv.textContent = 'This slot is already booked with the selected teacher.';
    return;
  }

  appointments.push({ student, email, phone, teacher, date, time });
  localStorage.setItem('appointments', JSON.stringify(appointments));

  msgDiv.style.color = 'green';
  msgDiv.textContent = 'Appointment booked successfully!';
  form.reset();
});
