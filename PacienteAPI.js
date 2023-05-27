class PacienteAPI{
    async guardarPaciente(){
        const cedula=document.getElementById("cedula").value;
        const nombre =document.getElementById("nombre ").value;
        const apellido=parseInt(document.getElementById("apellido").value);
        const fechaNacimiento=document.getElementById("fechaNacimiento").value;
        const telefono =document.getElementById("telefono ").value;
        const Cita =document.getElementById("Cita").value;


        
        const datos={
            cedula:cedula,
            nombre:nombre,
            apellido:apellido,
            fechaNacimiento:fechaNacimiento,
            telefono:telefono,
            Cita:Cita
        };

        await fetch(
            "http://localhost:3000/crear_paciente",
            {
                method:"POST",
                body:JSON.stringify(datos),
                headers:{
                    "Content-Type":"application/json" 
                }

            }
        );

        console.log("El registro se guardó correctamente");
    }

    async listarPacientes(){

        let pacientes= await fetch("http://localhost:3000/pacientes");
        pacientes= await pacientes.json();
    
        const miTabla=document.getElementById("tabla_pacientes");
    
        pacientes.forEach(
            (paciente)=>{
                const fila= miTabla.insertRow();
                fila.insertCell().innerText=paciente.cedula;
                fila.insertCell().innerText=paciente.nombre;
                fila.insertCell().innerText=paciente.apellido;
                fila.insertCell().innerText=paciente.fechaNacimiento;
                fila.insertCell().innerText=paciente.telefono;
            }
        );
    }
}

export default PacienteAPI;
