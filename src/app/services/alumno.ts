import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private readonly http = inject(HttpClient);

  // URL pública del puerto 8080 del Codespace del backend (pestaña Ports)
  private readonly apiUrl = 'https://crispy-space-halibut-p7rrj5vvq77q2r9qj-8080.app.github.dev/api/alumnos';

  // GET /api/alumnos
  listar(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.apiUrl);
  }

  // DELETE /api/alumnos/{id}
  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
