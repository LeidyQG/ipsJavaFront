import PacienteAPI from "./PacienteAPI.js"; 

const miPaciente=new PacienteAPI();

const miBoton=document.getElementById("btnProcesar");
miBoton.addEventListener('click',
async (event)=>{
    event.preventDefault();
    miBoton.disabled=true;
    await miPaciente.guardarPaciente();
}
);