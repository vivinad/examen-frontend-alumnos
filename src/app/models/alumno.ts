// Interface: define la forma de los datos que llegan de la API.
// No genera código en JavaScript, solo sirve para el tipado en TypeScript.
export interface Alumno {
  id: number;
  nombres: string;
  carrera: string;
  ciclo: number;
  promedio: number;
  estadoAcademico: string;
}
