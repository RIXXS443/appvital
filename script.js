const apiCreateUrl = "https://prod-02.brazilsouth.logic.azure.com/workflows/e0216dc0080c434f92f90ffda79fd4ff/triggers/manual/paths/invoke/crear_cliente?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=lWqG4wSkg3jW3VK7Sl-5oRVdUsijaLZ3BzovP6e86ZA";
const municipalities = [
    { MUNICIPIOS: "25 de Mayo", Departamento: "25 de Mayo" },
    { MUNICIPIOS: "9 de Julio", Departamento: "Eldorado" },
    { MUNICIPIOS: "Posadas", Departamento: "Capital" },
    // Agrega más municipios aquí...
];

// Llenar el campo de municipios
document.addEventListener('DOMContentLoaded', () => {
    const municipalitySelect = document.getElementById('municipality');
    municipalities.forEach(muni => {
        const option = document.createElement('option');
        option.value = muni.MUNICIPIOS;
        option.textContent = `${muni.MUNICIPIOS} (${muni.Departamento})`;
        municipalitySelect.appendChild(option);
    });

    document.getElementById('clientNumber').value = 100; // Inicializa el número de cliente
});

// Registrar cliente
document.getElementById('clientForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const clientData = {
        Numero_Cliente: document.getElementById('clientNumber').value,
        Nombre: document.getElementById('name').value,
        Apellido: document.getElementById('surname').value,
        Telefono: document.getElementById('phone').value,
        Email: document.getElementById('email').value,
        Municipio: document.getElementById('municipality').value,
        Direccion: document.getElementById('address').value,
    };

    try {
        const response = await fetch(apiCreateUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(clientData),
        });

        if (response.ok) {
            alert('Cliente registrado con éxito.');
            document.getElementById('clientForm').reset();
            document.getElementById('clientNumber').value = parseInt(clientData.Numero_Cliente) + 1; // Incrementa el número de cliente
        } else {
            throw new Error('Error al registrar el cliente.');
        }
    } catch (error) {
        console.error('Error:', error.message);
        alert('No se pudo registrar el cliente.');
    }
});
