class MedicoAPI{
    async guardarMedico(){
        const tarjetaProfesional=document.getElementById("tarjetaProfesional").value;
        const nombre =document.getElementById("nombre ").value;
        const apellido=parseInt(document.getElementById("apellido").value);
        const consultorio=document.getElementById("consultorio").value;
        const correo  =document.getElementById("correo").value;
        const Cita  =document.getElementById("Cita").value;
        const Especialidad  =document.getElementById("Especialidad").value;
        const idEspecialidad  =parseInt(document.getElementById("idEspecialidad").value);


        
        const datos={
            tarjetaProfesional:tarjetaProfesional,
            nombre:nombre,
            apellido:apellido,
            consultorio:consultorio,
            correo:correo,
            Cita:Cita,
            Especialidad:Especialidad,
            idEspecialidad:idEspecialidad
        };

        await fetch(
            "http://localhost:3000/crear_medico",
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

    async listarMedicos(){

        let medicos= await fetch("http://localhost:3000/medicos");
        medicos= await medicos.json();
    
        const miTabla=document.getElementById("tabla");
    
        medicos.forEach(
            (medico)=>{
                const fila= miTabla.insertRow();
                fila.insertCell().innerText=medico.tarjetaProfesional;
                fila.insertCell().innerText=medico.nombre;
                fila.insertCell().innerText=medico.apellido;
                fila.insertCell().innerText=medico.consultorio;
                fila.insertCell().innerText=medico.correo;
                fila.insertCell().innerText=medico.Cita;
                fila.insertCell().innerText=medico.Especialidad;
                fila.insertCell().innerText=medico.idEspecialidad;
            }
        );
    }
}

export default MedicoAPI;
