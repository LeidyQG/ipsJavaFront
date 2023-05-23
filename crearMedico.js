import MedicoAPI from "./MedicoAPI.js"; 

const miMedico=new MedicoAPI();

const miBoton=document.getElementById("btnProcesar");
miBoton.addEventListener('click',
async (event)=>{
    event.preventDefault();
    miBoton.disabled=true;
    await miMedico.guardarMedico();
}
);