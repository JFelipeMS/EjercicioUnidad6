let doctores = []
doctorForm.addEventListener("submit", registrarDoctor)

function registrarDoctor(event){
    event.preventDefault()
    const emailDoctor = document.getElementById("emailDoctor").value
    const nombreDoctor = document.getElementById("nombreDoctor").value
    const especialDoctor = document.getElementById("especialidadDoctor").value
    //inicia las validaciones
    const val_email = /[@.]/.test(emailDoctor)
    if(!val_email){
        alert("el email no es valido")
        return
    }
    //finaliza las validaciones
    console.log(nombreDoctor,emailDoctor,especialDoctor)
    //crear objeto Javascript
    const doctor = {
        nombre: nombreDoctor,
        email: emailDoctor,
        especialidad: especialDoctor
    }
    doctores.push (doctor)
    //convertir el objeto JSON a cadena de texto
    const jsonString = JSON.stringify(doctores)
    //crear un blob de la cadena de texto
    const blob = new Blob([jsonString], {type:"application/json"})
    //crear una URL para el objeto blob
    const url = URL.createObjectURL(blob)
    //crear un enlace de descarga
    const padre = document.getElementById("descarga")
    const enlaceDescarga = document.createElement("a")
    enlaceDescarga.href = url
    enlaceDescarga.download = "doctores.json"
    enlaceDescarga.textContent = "Descargar JSON de Doctores"
    padre.appendChild(enlaceDescarga)
}