class MedicoAPI{
    async crearMedico(){
        const tarjeta_profesional=parseInt(document.getElementById("tarjeta_profesional").value);
        const nombre =document.getElementById("nombre").value;
        const apellido=document.getElementById("apellido").value;
        const consultorio=document.getElementById("consultorio").value;
        const correo  =document.getElementById("correo").value;
        const especialidad  =parseInt(document.getElementById("especialidad").value);


        
        const datos={
            tarjeta_profesional:tarjeta_profesional,
            nombre:nombre,
            apellido:apellido,
            consultorio:consultorio,
            correo:correo,
            especialidad:especialidad
        };

        await fetch(
            'http://localhost:8080/medicos/crear_medico',
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

        let medicos= await fetch('http://localhost:8080/medicos');
        medicos= await medicos.json();
    
        const miTabla=document.getElementById("tabla_medicos");
    
        medicos.forEach(
            (medico)=>{
                const fila= miTabla.insertRow();
                fila.insertCell().innerText=medico.tarjeta_profesional;
                fila.insertCell().innerText=medico.nombre;
                fila.insertCell().innerText=medico.apellido;
                fila.insertCell().innerText=medico.consultorio;
                fila.insertCell().innerText=medico.correo;
                fila.insertCell().innerText=medico.especialidad;
            }
        );
    }
}

export default MedicoAPI;
