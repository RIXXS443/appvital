document.addEventListener('DOMContentLoaded', () => {
    const clientList = document.getElementById('clientList');
    const clients = JSON.parse(localStorage.getItem('clients')) || [];

    if (clients.length === 0) {
        clientList.innerHTML = '<li>No hay clientes registrados.</li>';
        return;
    }

    clients.forEach(client => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>(${client.clientNumber})</strong> ${client.name}<br>
            <strong>Dirección:</strong> ${client.address}<br>
            <strong>Teléfono:</strong> ${client.phone}<br>
            <strong>Correo:</strong> ${client.email}<br>
            <strong>Municipio:</strong> ${client.municipality}
        `;
        clientList.appendChild(li);
    });
});
