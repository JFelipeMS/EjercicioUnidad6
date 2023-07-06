
let doctores = []

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

const file = "./doctores.json"
const reader = new FileReader()

//lectura del archivo JSON
fetch(file)
.then(resp => resp.json())
.then(data => {
    console.log(data, typeof(data))
    doctores = data
    mostrarDoctores()
})
.catch(error => console.log(error))
