
Proyecto-Base

Este es un proyecto web del Hospital Clinico Dr Victor Ramirez que utiliza Bootstrap, y SASS para crear un sitio responsivo con un sistema de navegaci�n. El proyecto incluye p�ginas como "Inicio", "Equipo M�dico" y "Contacto".

Tabla de Contenidos

Tecnolog�as Usadas
Estructura del Proyecto
Instalaci�n
Uso
Scripts
Contribuciones
Licencia

Tecnolog�as Usadas

Bootstrap: Para estilos responsivos y componentes predefinidos.
SASS: Para la escritura de estilos en CSS con caracter�sticas adicionales como variables y anidamiento.
JavaScript (ES6): Para la l�gica del cliente.

Estructura del Proyecto

Index2.html: Contiene la informacion generla del hospital, mision, vision y bienvenida
equipo2.thml:Contiene la informacion del listado de servicios y profesionales que conforman el hospital.
contacto2.html: Contiene la informacion de la ubicacion geografica de la institucion y un formulario de contacto para hacer llegar consultas.
/img: Contiene las im�genes utilizadas en el proyecto.
/js: Contiene los archivos JavaScript.
/lib: Contiene los archivos para los estilos de Boostrap.
/styles: Contiene los archivos para los estilos de la pagina definida por el desarrollador.

Instalaci�n

Clona este repositorio:

git clone https://github.com/FabianPena/proyecto-base.git
cd tu-repo


Instruciones para visualizacion:

Se debe dejar todos los archivos en una misma carpeta y luego abrir con su navegador el archivo llamado "Index2.html" que es la pagina principal del proyecto.


Actualizaciones README especificar Modulo 3 - Laboratorio Virtual 2
- Explicaciones sobre la programación funcional aplicada.

La programación funcional es un paradigma en el que las funciones son el centro del desarrollo. Se caracteriza por el uso de funciones puras, currying, recursión, composición de funciones y el uso de funciones de orden superior. A continuación, se presentan algunos ejemplos prácticos de cómo se ha aplicado este enfoque en el proyecto.

Función de Currying para Calcular el Costo Total de los Servicios de un Paciente
Currying es una técnica que permite transformar una función que toma varios argumentos en una serie de funciones que toman un solo argumento. En este caso, se crea una función para calcular el costo total de los servicios médicos de un paciente a partir del precio de la consulta y el número de consultas realizadas.

Ejemplo del codigo

const calcularCostoTotal = (precioConsulta) => (numeroConsultas) => {
  return precioConsulta * numeroConsultas;
};

Esta función devuelve una nueva función que calcula el costo total al multiplicar el precio por el número de consultas. Al usar currying, podemos crear una función parcial que calcula el costo total sin necesidad de repetir el precio de la consulta cada vez.

Ejemplo de uso:

const precioConsulta = 50;
const numeroConsultas = 10;
const costoConsulta = calcularCostoTotal(precioConsulta);
const costoTotal = costoConsulta(numeroConsultas);
console.log("Costo Total:", costoTotal); // 500


Función Flecha para Calcular el Tiempo Promedio de Espera de los Pacientes

Las funciones flecha en JavaScript permiten una sintaxis más concisa y son ideales para funciones pequeñas. Aquí, se utiliza una función flecha para calcular el tiempo promedio de espera de los pacientes a partir de un array de tiempos de espera en minutos.

ejemplo del codigo.

const tiempoPromedioEspera = (tiemposEspera) => {
  const totalTiempo = tiemposEspera.reduce((acc, tiempo) => acc + tiempo, 0);
  return totalTiempo / tiemposEspera.length;
};

Ejemplo de su uso

const tiemposEspera = [30, 45, 20, 60, 15];
console.log("Tiempo Promedio de Espera:", tiempoPromedioEspera(tiemposEspera)); // 34 minutos


Recursión para Calcular el Total de Horas de Consulta de un Doctor

La recursión es una técnica que permite que una función se llame a sí misma para resolver problemas repetitivos o en pasos. En este caso, se utiliza para sumar las horas de consulta de un doctor a lo largo de la semana.

ejemplo del codigo.

const calcularHorasConsulta = (consultas, index = 0, totalHoras = 0) => {
  if (index >= consultas.length) return totalHoras;
  return calcularHorasConsulta(consultas, index + 1, totalHoras + consultas[index]);
};

Ejemplo de uso:
const horasConsultas = [1, 2, 3, 1.5, 2];
console.log("Total de Horas de Consulta:", calcularHorasConsulta(horasConsultas)); // 9.5 horas


Composición de Funciones para Aplicar Descuentos

La composición de funciones consiste en combinar varias funciones simples para formar una función más compleja. Aquí, se combinan funciones para aplicar descuentos a los costos de las consultas en función de la cantidad de consultas realizadas.

Ejemplo del codigo

const aplicarDescuento = (precio) => precio * 0.9; // Descuento del 10%
const aplicarDescuentoPorCantidad = (precio, cantidad) => cantidad > 5 ? aplicarDescuento(precio) : precio;

const calcularCostoConDescuento = (precio, cantidad) => aplicarDescuentoPorCantidad(precio, cantidad) * cantidad;

Ejemplo de uso

const precioConsulta2 = 50;
const cantidadConsultas = 6;
console.log("Costo con Descuento:", calcularCostoConDescuento(precioConsulta2, cantidadConsultas)); // 270


- Descripción de los eventos y el uso de asincronía.

1. Captura de Eventos del Usuario
En este caso, se implementa la captura de eventos del usuario para interactuar con un formulario de contacto en la página del hospital. El evento que se captura es el submit del formulario, lo que permite al usuario enviar su información (nombre, correo y teléfono).

Al capturar el evento submit, se previene el comportamiento por defecto (que sería enviar el formulario) y se valida que todos los campos estén completos. Si los campos son correctos, se muestra un mensaje de confirmación.

ejemplo de codigo

document.querySelector("#contact-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Evita el envío del formulario
    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#correo").value;
    const telefono = document.querySelector("#telefono").value;
    
    if (nombre && correo && telefono) {
        alert("Formulario enviado correctamente. ¡Gracias por contactarnos!");
    } else {
        alert("Por favor, complete todos los campos.");
    }
});

2. Disparo de un Evento Personalizado para Simular la Llegada de un Nuevo Paciente

Los eventos personalizados son una característica útil para crear eventos definidos por el desarrollador, que pueden ser disparados y escuchados en cualquier momento. En este caso, se dispara un evento nuevoPaciente para simular la llegada de un nuevo paciente al hospital.

El evento contiene un detalle con un mensaje, que luego es mostrado en la página como una notificación emergente. Esta notificación desaparece después de 5 segundos.

Código para el evento personalizado y su escucha:

const eventoNuevoPaciente = new CustomEvent('nuevoPaciente', {
    detail: { mensaje: "Nuevo paciente llegó al hospital" }
});

document.addEventListener('nuevoPaciente', (event) => {
    const notificacion = document.createElement("div");
    notificacion.classList.add("alert", "alert-info");
    notificacion.textContent = event.detail.mensaje;
    
    // Mostrar la notificación en la página
    document.body.prepend(notificacion);
    
    // Desaparecer la notificación después de 5 segundos
    setTimeout(() => notificacion.remove(), 5000);
});

// Disparar el evento al cargar la página
document.dispatchEvent(eventoNuevoPaciente);


3. Programación Asíncrona con Async/Await y Manejo de Promesas

La programación asíncrona en JavaScript se utiliza para manejar operaciones que tardan un tiempo en completarse, como las solicitudes a una API o la lectura de archivos. En este proyecto, se simula una llamada a una API REST para obtener los datos de los doctores.

Se utiliza la palabra clave async para definir una función que trabaja de manera asíncrona y await para esperar la resolución de una promesa antes de continuar con la ejecución del código. Si ocurre un error, se maneja usando un bloque try/catch.

const obtenerDatosDoctores = async () => {
    try {
        const respuesta = await fetch('../data/doctores2.json'); // Simulando la API con un endpoint ficticio
        if (!respuesta.ok) throw new Error('No se pudo obtener los datos');
        const datos = await respuesta.json();
        console.log(datos); // Aquí deberías obtener datos de doctores desde la API
    } catch (error) {
        console.error('Error al obtener los datos', error);
        alert('Hubo un error al obtener los datos de los doctores.');
    }
};

// Llamada a la función para simular la obtención de datos de la API
obtenerDatosDoctores();


4. Manejo de Errores en Funciones Asíncronas

En las funciones asíncronas, es importante manejar los errores para asegurarse de que el programa no se detenga inesperadamente. Utilizando try/catch, se pueden capturar los errores y tomar las medidas necesarias, como mostrar un mensaje de error al usuario.

En el siguiente código, se simula una llamada a una API para obtener datos de doctores y se maneja un error si la solicitud no es exitosa.

Código del manejo de errores:

const obtenerDatos = async () => {
    try {
        const respuesta = await fetch('../data/doctores2.json'); // Simulando la API
        if (!respuesta.ok) throw new Error('No se pudo obtener los datos');
        const datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.log('Error:', error.message);
        mostrarError(error.message);
    }
};

// Función para mostrar el error
const mostrarError = (mensaje) => {
    alert(`Error: ${mensaje}`);
};

// Simulando una llamada con error (para pruebas)
obtenerDatos();



- Explicación de la implementación de clases y el uso de herencia, encapsulación,
y polimorfismo.

1. Creación de la Clase Doctor
La clase Doctor es una clase base que representa a un médico. Se definen varias propiedades como el nombre, la especialidad y los años de experiencia, y también se implementan métodos para mostrar información del doctor, atender pacientes y calcular el total de pacientes atendidos.

Una de las características importantes en esta clase es el uso de encapsulación para proteger la propiedad de los años de experiencia, utilizando un getter y un setter.

Propiedades:

*nombre: El nombre del doctor.
*especialidad: La especialidad médica del doctor.
*_anosExperiencia: Los años de experiencia del doctor (privado).
*pacientesAtendidos: El número de pacientes atendidos por el doctor.

Métodos:

*mostrarInformacion(): Muestra la información del doctor, incluyendo su nombre, especialidad y años de experiencia.
*atenderPaciente(): Aumenta el contador de pacientes atendidos.
*calcularPacientesAtendidos(): Devuelve el total de pacientes atendidos.

Encapsulación:

*get ObtenerAnosExperiencia: Obtiene el valor de los años de experiencia.
*set SetearAnosExperiencia: Establece un nuevo valor para los años de experiencia (validando que sea mayor que 0).

codigo de la clase:

class Doctor {
    constructor(nombre, especialidad) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this._anosExperiencia = 0; // Propiedad privada
        this.pacientesAtendidos = 0;
    }

    mostrarInformacion() {
        return `Doctor ${this.nombre}, Especialidad: ${this.especialidad}, Años de experiencia: ${this._anosExperiencia}`;
    }

    atenderPaciente() {
        this.pacientesAtendidos++;
    }

    calcularPacientesAtendidos() {
        return this.pacientesAtendidos;
    }

    get ObtenerAnosExperiencia() {
        return this._anosExperiencia;
    }

    set SetearAnosExperiencia(nuevosAnos) {
        if (nuevosAnos > 0) {
            this._anosExperiencia = nuevosAnos;
        } else {
            console.log('Años de experiencia no válidos');
        }
    }
}


2. Herencia con la Subclase Cirujano
La herencia es un principio fundamental de la POO que permite que una clase "herede" las propiedades y métodos de otra clase. En este caso, se crea una subclase llamada Cirujano, que extiende la clase base Doctor. La subclase hereda todas las propiedades y métodos de Doctor, pero también puede definir sus propios métodos y propiedades adicionales.

La subclase Cirujano modifica el comportamiento del método atenderPaciente(), que en lugar de incrementar el número de pacientes atendidos, incrementa el número de operaciones realizadas. Este es un ejemplo de polimorfismo, donde un método es sobrescrito en una subclase para cambiar su comportamiento original.

Propiedades y Métodos de la Subclase Cirujano:

Propiedades:

*numeroOperaciones: El número de operaciones realizadas por el cirujano.

Métodos:

*calcularOperaciones(): Devuelve el número total de operaciones realizadas.
*atenderPaciente(): Sobrescribe el método de la clase Doctor para contar las operaciones realizadas en lugar de los pacientes atendidos.

Codigo de la subclase

class Cirujano extends Doctor {
    constructor(nombre, anosExperiencia, numeroOperaciones) {
        super(nombre, 'Cirugía', anosExperiencia);
        this.numeroOperaciones = numeroOperaciones;
    }

    calcularOperaciones() {
        return this.numeroOperaciones;
    }

    atenderPaciente() {
        this.numeroOperaciones++; // Aumenta operaciones en vez de pacientes
    }
}


3. Encapsulación en JavaScript
La encapsulación es el proceso de proteger los datos dentro de una clase para que no puedan ser modificados directamente desde fuera de la clase. Esto se logra utilizando propiedades privadas y los métodos get y set.

En la clase Doctor, se ha protegido la propiedad _anosExperiencia, para que no pueda ser modificada directamente desde fuera de la clase. En su lugar, se utilizan un getter (ObtenerAnosExperiencia) para obtener el valor de los años de experiencia y un setter (SetearAnosExperiencia) para establecer un nuevo valor, asegurándose de que el valor sea válido (mayor que 0).

Codigo de la encapsulacion de la clase doctor

get ObtenerAnosExperiencia() {
    return this._anosExperiencia;
}

set SetearAnosExperiencia(nuevosAnos) {
    if (nuevosAnos > 0) {
        this._anosExperiencia = nuevosAnos;
    } else {
        console.log('Años de experiencia no válidos');
    }
}


4. Polimorfismo

El polimorfismo permite que un objeto de una subclase sobrescriba un método de su clase base para proporcionar una implementación más específica o modificada. En este caso, el método atenderPaciente() es sobrescrito en la subclase Cirujano para aumentar el número de operaciones en lugar del número de pacientes atendidos, lo que cambia el comportamiento heredado de la clase Doctor.

Ejmeplo de polimorfismo

atenderPaciente() {
    this.numeroOperaciones++; // Aumenta operaciones en vez de pacientes
}


Creditos:
Imagenes sacada de buscador Google.