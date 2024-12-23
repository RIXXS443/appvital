const apiCreateUrl = "https://prod-02.brazilsouth.logic.azure.com/workflows/e0216dc0080c434f92f90ffda79fd4ff/triggers/manual/paths/invoke/crear_cliente?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=lWqG4wSkg3jW3VK7Sl-5oRVdUsijaLZ3BzovP6e86ZA";
const apiGetUrl = "https://prod-21.brazilsouth.logic.azure.com/workflows/a1f66a512b30401f837963fb67c270fb/triggers/manual/paths/invoke/obtener_registros?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wv5unUjOMZBO6-uen9yvRsJi-ao7WAkE_pB35q_0D7k";

const submitButton = document.getElementById('submitButton');
submitButton.disabled = true;

const validationMessage = document.getElementById('validationMessage');
const clientForm = document.getElementById('clientForm');

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
            validationMessage.textContent = `El número de cliente ${clientNumber} ya está registrado por: 
                ${existingClient.Nombre} ${existingClient.Apellido}`;
            submitButton.disabled = true;
        } else {
            validationMessage.style.color = 'green';
            validationMessage.textContent = `El número de cliente ${clientNumber} está disponible.`;
            submitButton.disabled = false;
        }
    } catch (error) {
        console.error('Error al validar el cliente:', error.message);
        validationMessage.style.color = 'red';
        validationMessage.textContent = 'Hubo un error al validar el cliente. Intente nuevamente.';
        submitButton.disabled = true;
    }
}

clientForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const clientNumber = document.getElementById('clientNumber').value;

    if (!clientNumber) {
        validationMessage.textContent = 'Por favor, valida un número de cliente antes de registrar.';
        return;
    }

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
