class CitaAPI{
    async guardarCita(){
        const idCita=parseInt(document.getElementById("idCita").value);
        const fecha =document.getElementById("fecha").value;
        const Paciente=document.getElementById("Paciente").value;
        const pacienteCedula=parseInt(document.getElementById("pacienteCedula").value);
        const Medico=document.getElementById("Medico").value;
        const medicoTarjetaProfesional=parseInt(document.getElementById("medicoTarjetaProfesional").value);


        
        const datos={
            idCita:idCita,
            fecha:fecha,
            Paciente:Paciente,
            pacienteCedula:pacienteCedula,
            Medico:Medico,
            medicoTarjetaProfesional:medicoTarjetaProfesional
        };

        await fetch(
            'http://localhost:3000/crear_cita',
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

    async listarCitas(){

        let citas= await fetch('http://localhost:3000/citas');
        citas= await citas.json();
    
        const miTabla=document.getElementById("tabla_citas");
    
        citas.forEach(
            (cita)=>{
                const fila= miTabla.insertRow();
                fila.insertCell().innerText=cita.idCita;
                fila.insertCell().innerText=cita.fecha;
                fila.insertCell().innerText=cita.Paciente;
                fila.insertCell().innerText=cita.pacienteCedula;
                fila.insertCell().innerText=cita.Medico;
                fila.insertCell().innerText=cita.medicoTarjetaProfesional;
            }
        );
    }
}

export default CitaAPI;
