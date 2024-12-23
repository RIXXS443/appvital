// Actualizar cliente (PATCH)
async function updateClient(clientNumber, updatedData) {
    try {
        const response = await fetch(`${apiUrl}/${clientNumber}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData)
        });
        if (!response.ok) throw new Error('Error al actualizar el cliente');
        loadClients();
    } catch (error) {
        console.error(error.message);
    }
}

// Manejo de edición (interfaz y envío con PATCH)
function editClient(clientNumber) {
    const client = clients.find(c => c.clientNumber === clientNumber);
    if (!client) return;

    // Prellenar el formulario para edición
    document.getElementById('name').value = client.name;
    document.getElementById('address').value = client.address;
    document.getElementById('phone').value = client.phone;
    document.getElementById('email').value = client.email;
    document.getElementById('clientNumber').value = client.clientNumber;

    // Actualizar cliente al guardar
    clientForm.onsubmit = async (e) => {
        e.preventDefault();
        const updatedData = {};

        // Solo incluir campos modificados
        if (document.getElementById('name').value !== client.name) {
            updatedData.name = document.getElementById('name').value;
        }
        if (document.getElementById('address').value !== client.address) {
            updatedData.address = document.getElementById('address').value;
        }
        if (document.getElementById('phone').value !== client.phone) {
            updatedData.phone = document.getElementById('phone').value;
        }
        if (document.getElementById('email').value !== client.email) {
            updatedData.email = document.getElementById('email').value;
        }

        // Llamar a la API con PATCH
        if (Object.keys(updatedData).length > 0) {
            await updateClient(clientNumber, updatedData);
        } else {
            alert('No se han detectado cambios para actualizar.');
        }

        clientForm.reset();
        clientForm.onsubmit = addClient; // Restaurar comportamiento inicial
    };
}
