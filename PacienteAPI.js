class PacienteAPI{
    async guardarPaciente(){
        const cedula=parseInt(document.getElementById("cedula").value);
        const nombre =document.getElementById("nombre").value;
        const apellido=document.getElementById("apellido").value;
        const edad=parseInt(document.getElementById("edad").value);
        const telefono =document.getElementById("telefono").value;

        
        const datos={
            cedula:cedula,
            nombre:nombre,
            apellido:apellido,
            edad:edad,
            telefono:telefono
        };

        await fetch(
            'http://localhost:3000/crear_paciente',
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

        let pacientes= await fetch('http://localhost:3000/pacientes');
        pacientes= await pacientes.json();
    
        const miTabla=document.getElementById("tabla_pacientes");
    
        pacientes.forEach(
            (paciente)=>{
                const fila= miTabla.insertRow();
                fila.insertCell().innerText=paciente.cedula;
                fila.insertCell().innerText=paciente.nombre;
                fila.insertCell().innerText=paciente.apellido;
                fila.insertCell().innerText=paciente.edad;
                fila.insertCell().innerText=paciente.telefono;
            }
        );
    }
}

export default PacienteAPI;
