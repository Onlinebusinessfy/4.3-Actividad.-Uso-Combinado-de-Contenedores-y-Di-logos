function mostrarPestana(pestana) {
    const pestanas = document.querySelectorAll('.tab-content');
    pestanas.forEach(p => p.style.display = 'none');
    document.getElementById(pestana).style.display = 'block';

    const botones = document.querySelectorAll('.nav-link');
    botones.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.nav-link[onclick="mostrarPestana('${pestana}')"]`).classList.add('active');
}

function guardarDatos() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    alert(`Datos Guardados:\nNombre: ${nombre}\nCorreo: ${correo}`);
}

function leerArchivo() {
    const archivoInput = document.getElementById('fileInput');
    const file = archivoInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('output').textContent = e.target.result;
    };

    if (file) {
        reader.readAsText(file);
    } else {
        alert('Por favor, selecciona un archivo para leer.');
    }
}

function guardarArchivo() {
    const contenido = document.getElementById('textArea').value;
    const blob = new Blob([contenido], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'contenido_guardado.txt';
    a.click();

    URL.revokeObjectURL(url);
}