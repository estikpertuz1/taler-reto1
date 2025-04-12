document.addEventListener("DOMContentLoaded", () => {
    let med1= 0;
    let med2= 0;
    let totalPacientes= 0;
    let pacientesMed1= 0;
    let pacientesMed2= 0;

    document.getElementById("guardarInventario").addEventListener("click", () => {
        med1= parseInt(document.getElementById("med1").value) || 0;
        med2= parseInt(document.getElementById("med2").value) || 0;
        alert("Inventario guardado");
    });

    document.getElementById("registrarPaciente").addEventListener("click", () => {
        let sistolica= parseInt(document.getElementById("sistolica").value) || 0;
        let diastolica= parseInt(document.getElementById("diastolica").value) || 0;
        totalPacientes++;
        
        let medicamento= 0;
        let dosis= 0;

        if (sistolica< 69 && diastolica< 48) {
            medicamento= 2;
            dosis= 6;
        } else if (sistolica>= 143 && diastolica>= 92) {
            medicamento= 1;
            dosis= 10;
        }
        
        if (medicamento=== 1 && med1Stock>= dosis) {
            med1-= dosis;
            pacientesMed1++;
          } else if (medicamento=== 2 && med2Stock>= dosis) {
            med2-= dosis;
            pacientesMed2++;
        }

        actualizarEstadisticas();
    });

    function actualizarEstadisticas() {
        document.getElementById("totalPacientes").textContent= totalPacientes;
        document.getElementById("pacientesMed1").textContent= pacientesMed1;
        document.getElementById("pacientesMed2").textContent= pacientesMed2;
        document.getElementById("porcentajeMed1").textContent= ((pacientesMed1 / totalPacientes) * 100).toFixed(2) + "%";
        document.getElementById("porcentajeMed2").textContent= ((pacientesMed2 / totalPacientes) * 100).toFixed(2) + "%";
    }
});
