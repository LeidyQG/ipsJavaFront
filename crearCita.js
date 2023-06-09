import CitaAPI from "./CitaAPI.js"; 

const miCita=new CitaAPI();

const miBoton=document.getElementById("btnProcesar");
miBoton.addEventListener('click',
async (event)=>{
    event.preventDefault();
    miBoton.disabled=true;
    await miCita.crearCita();
}
);