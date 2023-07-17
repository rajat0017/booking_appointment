
let appointments = [];

function addAppointment(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const appointment = {
        name,
        phone,
        email
    };

    appointments.push(appointment);


    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';

    displayAppointments();
}

function displayAppointments() {
    const appointmentsContainer = document.getElementById('appointments');
    appointmentsContainer.innerHTML = '';

    if (appointments.length === 0) {
        appointmentsContainer.innerHTML = '<h3>No Appointments</h3>';
        return;
    }

    const appointmentsList = document.createElement('ul');

    appointments.forEach((appointment, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('appointment-item');

        const appointmentInfo = document.createElement('span');
        appointmentInfo.innerText = `Name: ${appointment.name}, Phone: ${appointment.phone}, Email: ${appointment.email}`;

        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.setAttribute('onclick', `editAppointment(${index})`);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteAppointment(${index})`);

        listItem.appendChild(appointmentInfo);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        appointmentsList.appendChild(listItem);
    });

    appointmentsContainer.appendChild(appointmentsList);
}

function deleteAppointment(index) {
    appointments.splice(index, 1);
    displayAppointments();
}

function editAppointment(index) {
    const appointment = appointments[index];
    document.getElementById('name').value = appointment.name;
    document.getElementById('phone').value = appointment.phone;
    document.getElementById('email').value = appointment.email;

    appointments.splice(index, 1);
    displayAppointments();
}
