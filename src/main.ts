type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
    id: number;
    nombre: string;
    apellidos: string;
    sexo: string;
    temperatura: number;
    frecuenciaCardiaca: number;
    especialidad: Especialidad;
    edad: number;
}

interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
}

const pacientes: Pacientes[] = [
    {
        id: 1,
        nombre: "John",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 80,
        especialidad: "Medico de familia",
        edad: 44,
    },
    {
        id: 2,
        nombre: "Jane",
        apellidos: "Doe",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 70,
        especialidad: "Medico de familia",
        edad: 43,
    },
    {
        id: 3,
        nombre: "Junior",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 90,
        especialidad: "Pediatra",
        edad: 8,
    },
    {
        id: 4,
        nombre: "Mary",
        apellidos: "Wien",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 120,
        especialidad: "Medico de familia",
        edad: 20,
    },
    {
        id: 5,
        nombre: "Scarlett",
        apellidos: "Somez",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 110,
        especialidad: "Cardiólogo",
        edad: 30,
    },
    {
        id: 6,
        nombre: "Brian",
        apellidos: "Kid",
        sexo: "Male",
        temperatura: 39.8,
        frecuenciaCardiaca: 80,
        especialidad: "Pediatra",
        edad: 11,
    },
];


// Apartado 1
// A)

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
    return pacientes.filter((paciente) => paciente.especialidad === "Pediatra");
};

console.log("(Apartado 1 | A):");
console.log(obtenPacientesAsignadosAPediatria(pacientes));
// B)

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
    return pacientes.filter((paciente) => paciente.especialidad === "Pediatra" && paciente.edad < 10);
};

console.log("(Apartado 1 | B):");
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

// Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    const activarProtocoloUrgencia = pacientes.find((paciente) => paciente.temperatura > 37.5 && paciente.frecuenciaCardiaca > 80);
    return Boolean(activarProtocoloUrgencia);
};


console.log("(Apartado 2):");
console.log(activarProtocoloUrgencia(pacientes));

// Apartado 3

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
    return pacientes.map((paciente) => {
        if (paciente.especialidad === "Pediatra") {
            return { ...paciente, especialidad: "Medico de familia" };
        }
        return paciente;
    });
};

console.log("(Apartado 3):")
console.log(reasignaPacientesAMedicoFamilia(pacientes));

// Apartado 4

const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    return pacientes.some((paciente) => paciente.especialidad === "Pediatra");
};

console.log("(Apartado 4):")
console.log(hayPacientesDePediatria(pacientes));

// Apartado 5

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
    const pacientesPorEspecialidad = {
        medicoDeFamilia: 0,
        pediatria: 0,
        cardiologia: 0,
    };

    pacientes.forEach((paciente) => {
        switch (paciente.especialidad) {
            case "Medico de familia":
                pacientesPorEspecialidad.medicoDeFamilia++;
                break;
            case "Pediatra":
                pacientesPorEspecialidad.pediatria++;
                break;
            case "Cardiólogo":
                pacientesPorEspecialidad.cardiologia++;
                break;
        }
    })

    return pacientesPorEspecialidad;
};

console.log("(Apartado 5):")
console.log(cuentaPacientesPorEspecialidad(pacientes));


// Comprobación de que el array inicial no ha cambiado.
console.log(pacientes)