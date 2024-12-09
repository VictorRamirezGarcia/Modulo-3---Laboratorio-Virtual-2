
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
- Explicación de la implementación de clases y el uso de herencia, encapsulación,
y polimorfismo.



Creditos:
Imagenes sacada de buscador Google.