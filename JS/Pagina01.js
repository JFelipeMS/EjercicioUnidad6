const JsonObj = '[{"nombre":"Luisa","email":"luisa@correo.com","especialidad":"Medicina general"}]'
//let doctores = []
let doctores = JSON.parse(JsonObj)

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
    //agregar el objeto (doctor) al arreglo
    doctores.push(doctor)
    // Limpiar el formulario
    doctorForm.reset()
    //actualizar la lista de doctores por medio de DOM
    mostrarDoctores()
}

function mostrarDoctores(){
    const doctorTabla = document.getElementById("doctorTable")
    const tbody = doctorTabla.querySelector("tbody")
    doctorTabla.innerHTML = "<thead><tr><th>Nombre</th><th>Email</th><th>especialidad</th></tr></thead>"
    
    doctores.forEach((doctor) =>{
        //crear la tupla o fila
        const tupla = doctorTabla.insertRow(-1) //0 -1 orden de agregación
        //crear los campos
        const nombreDoctor = document.createElement("td")
        const emailDoctor = document.createElement("td")
        const especialDoctor = document.createElement("td")
        //agregar los valores a cada campo
        nombreDoctor.textContent = doctor.nombre
        emailDoctor.textContent = doctor.email
        especialDoctor.textContent = doctor.especialidad
        //agrgar los campos a la tupla
        tupla.appendChild(nombreDoctor)
        tupla.appendChild(emailDoctor)
        tupla.appendChild(especialDoctor)
    })
}

mostrarDoctores()