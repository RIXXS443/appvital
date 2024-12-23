const apiCreateUrl = "https://prod-02.brazilsouth.logic.azure.com/workflows/e0216dc0080c434f92f90ffda79fd4ff/triggers/manual/paths/invoke/crear_cliente?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=lWqG4wSkg3jW3VK7Sl-5oRVdUsijaLZ3BzovP6e86ZA";
const apiGetUrl = "https://prod-21.brazilsouth.logic.azure.com/workflows/a1f66a512b30401f837963fb67c270fb/triggers/manual/paths/invoke/obtener_registros?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wv5unUjOMZBO6-uen9yvRsJi-ao7WAkE_pB35q_0D7k";

const submitButton = document.getElementById('submitButton');
submitButton.disabled = true;

const validationMessage = document.getElementById('validationMessage');
const clientForm = document.getElementById('clientForm');

// Array de municipios
const municipalities = [
    { MUNICIPIOS: "25 de Mayo", Departamento: "25 de Mayo" },
    { MUNICIPIOS: "9 de Julio", Departamento: "Eldorado" },
    { MUNICIPIOS: "Alba Posse", Departamento: "25 de Mayo" },
    { MUNICIPIOS: "Almafuerte", Departamento: "Leandro N. Alem" },
    { MUNICIPIOS: "Apóstoles", Departamento: "Apóstoles" },
    { MUNICIPIOS: "Aristóbulo del Valle", Departamento: "Cainguás" },
    { MUNICIPIOS: "Arroyo del Medio", Departamento: "Leandro N. Alem" },
    { MUNICIPIOS: "Azara", Departamento: "Apóstoles" },
    { MUNICIPIOS: "Bernardo de Irigoyen", Departamento: "General Manuel Belgrano" },
    { MUNICIPIOS: "Bonpland", Departamento: "Candelaria" },
    { MUNICIPIOS: "Caá Yarí", Departamento: "Leandro N. Alem" },
    { MUNICIPIOS: "Campo Grande", Departamento: "Cainguás" },
    { MUNICIPIOS: "Campo Ramón", Departamento: "Oberá" },
    { MUNICIPIOS: "Campo Viera", Departamento: "Oberá" },
    { MUNICIPIOS: "Candelaria", Departamento: "Candelaria" },
    { MUNICIPIOS: "Capioví", Departamento: "Libertador General San Martín" },
    { MUNICIPIOS: "Caraguatay", Departamento: "Montecarlo" },
    { MUNICIPIOS: "Cerro Azul", Departamento: "Leandro N. Alem" },
    { MUNICIPIOS: "Cerro Corá", Departamento: "Candelaria" },
    { MUNICIPIOS: "Colonia Alberdi", Departamento: "Oberá" },
    { MUNICIPIOS: "Colonia Aurora", Departamento: "25 de Mayo" },
    { MUNICIPIOS: "Colonia Delicia", Departamento: "Eldorado" },
    { MUNICIPIOS: "Colonia Polana", Departamento: "San Ignacio" },
    { MUNICIPIOS: "Colonia Victoria", Departamento: "Eldorado" },
    { MUNICIPIOS: "Colonia Wanda", Departamento: "Iguazú" },
    { MUNICIPIOS: "Comandante Andresito", Departamento: "General Manuel Belgrano" },
    { MUNICIPIOS: "Concepción de la Sierra", Departamento: "Concepción" },
    { MUNICIPIOS: "Corpus", Departamento: "San Ignacio" },
    { MUNICIPIOS: "Dos Arroyos", Departamento: "Leandro N. Alem" },
    { MUNICIPIOS: "Dos de Mayo", Departamento: "Cainguás" },
    { MUNICIPIOS: "El Alcázar", Departamento: "Libertador General San Martín" },
    { MUNICIPIOS: "El Soberbio", Departamento: "Guaraní" },
    { MUNICIPIOS: "Eldorado", Departamento: "Eldorado" },
    { MUNICIPIOS: "Fachinal", Departamento: "Capital" },
    { MUNICIPIOS: "Florentino Ameghino", Departamento: "San Javier" },
    { MUNICIPIOS: "Garuhapé", Departamento: "Libertador General San Martín" },
    { MUNICIPIOS: "Garupá", Departamento: "Capital" },
    { MUNICIPIOS: "General Alvear", Departamento: "Oberá" },
    { MUNICIPIOS: "General Urquiza", Departamento: "San Ignacio" },
    { MUNICIPIOS: "Gobernador López", Departamento: "Leandro N. Alem" },
    { MUNICIPIOS: "Gobernador Roca", Departamento: "San Ignacio" },
    { MUNICIPIOS: "Guaraní", Departamento: "Oberá" },
    { MUNICIPIOS: "Hipólito Yrigoyen", Departamento: "San Ignacio" },
    { MUNICIPIOS: "Itacaruaré", Departamento: "San Javier" },
    { MUNICIPIOS: "Jardín América", Departamento: "San Ignacio" },
    { MUNICIPIOS: "Leandro N. Alem", Departamento: "Leandro N. Alem" },
    { MUNICIPIOS: "Loreto", Departamento: "Candelaria" },
    { MUNICIPIOS: "Los Helechos", Departamento: "Oberá" },
    { MUNICIPIOS: "Mártires", Departamento: "Candelaria" },
    { MUNICIPIOS: "Mojón Grande", Departamento: "San Javier" },
    { MUNICIPIOS: "Montecarlo", Departamento: "Montecarlo" },
    { MUNICIPIOS: "Oberá", Departamento: "Oberá" },
    { MUNICIPIOS: "Olegario Víctor Andrade", Departamento: "Leandro N. Alem" },
    { MUNICIPIOS: "Panambí", Departamento: "Oberá" },
    { MUNICIPIOS: "Posadas", Departamento: "Capital" },
    { MUNICIPIOS: "Profundidad", Departamento: "Candelaria" },
    { MUNICIPIOS: "Puerto Esperanza", Departamento: "Iguazú" },
    { MUNICIPIOS: "Puerto Iguazú", Departamento: "Iguazú" },
    { MUNICIPIOS: "Puerto Leoni", Departamento: "Libertador General San Martín" },
    { MUNICIPIOS: "Puerto Libertad", Departamento: "Iguazú" },
    { MUNICIPIOS: "Puerto Piray", Departamento: "Montecarlo" },
    { MUNICIPIOS: "Puerto Rico", Departamento: "Libertador General San Martín" },
    { MUNICIPIOS: "Ruiz de Montoya", Departamento: "Libertador General San Martín" },
    { MUNICIPIOS: "San Antonio", Departamento: "General Manuel Belgrano" },
    { MUNICIPIOS: "San Ignacio", Departamento: "San Ignacio" },
    { MUNICIPIOS: "San Javier", Departamento: "San Javier" },
    { MUNICIPIOS: "San José", Departamento: "Apóstoles" },
    { MUNICIPIOS: "San Martín", Departamento: "Oberá" },
    { MUNICIPIOS: "San Pedro", Departamento: "San Pedro" },
    { MUNICIPIOS: "San Vicente", Departamento: "Guaraní" },
    { MUNICIPIOS: "Santa Ana", Departamento: "Candelaria" },
    { MUNICIPIOS: "Santa María", Departamento: "Concepción" },
    { MUNICIPIOS: "Santiago de Liniers", Departamento: "Eldorado" },
    { MUNICIPIOS: "Santo Pipó", Departamento: "San Ignacio" },
    { MUNICIPIOS: "Tres Capones", Departamento: "Apóstoles" },
];
// Llenar el campo de municipios
document.addEventListener('DOMContentLoaded', () => {
    const municipalitySelect = document.getElementById('municipality');
    if (!municipalitySelect) {
        console.error('No se encontró el select con el ID "municipality".');
        return;
    }

    municipalities.forEach(muni => {
        const option = document.createElement('option');
        option.value = muni.MUNICIPIOS;
        option.textContent = `${muni.MUNICIPIOS} (${muni.Departamento})`;
        municipalitySelect.appendChild(option);
    });

    // Manejar el evento de entrada en el campo Número de Cliente
    const clientNumberInput = document.getElementById('clientNumber');
    clientNumberInput.addEventListener('input', validateClientNumber);
});

// Validar el número de cliente
async function validateClientNumber() {
    const clientNumber = document.getElementById('clientNumber').value;

    if (!clientNumber) {
        validationMessage.style.color = 'red';
        validationMessage.textContent = 'Por favor, ingresa un número de cliente.';
        submitButton.disabled = true;
        return;
    }

    try {
        const response = await fetch(apiGetUrl);
        const clients = await response.json();

        const existingClient = clients.find(client => client.Numero_Cliente === clientNumber);

        if (existingClient) {
            validationMessage.style.color = 'red';
            validationMessage.textContent = `El número de cliente ${clientNumber} ya está registrado por: ${existingClient.Nombre} ${existingClient.Apellido} del Municipio ${existingClient.MUNICIPIOS}`;
            submitButton.disabled = true;
        } else {
            validationMessage.style.color = 'green';
            validationMessage.textContent = `El número de cliente ${clientNumber} está disponible.`;
            submitButton.disabled = false;
        }
    } catch (error) {
        console.error('Error al validar el cliente:', error.message);
        validationMessage.textContent = 'Hubo un error al validar el cliente. Intente nuevamente.';
        submitButton.disabled = true;
    }
}

// Registrar cliente
clientForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const clientNumber = document.getElementById('clientNumber').value;

    const clientData = {
        Numero_Cliente: clientNumber,
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
            clientForm.reset();
            validationMessage.textContent = '';
            submitButton.disabled = true;
        } else {
            throw new Error('Error al registrar el cliente.');
        }
    } catch (error) {
        console.error('Error:', error.message);
        alert('No se pudo registrar el cliente.');
    }
});
