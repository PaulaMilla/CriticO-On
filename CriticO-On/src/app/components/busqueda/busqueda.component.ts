import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ContentService} from "../../services/content.service";
import { DatePipe } from "@angular/common";
import { CommonModule } from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [
    DatePipe,
    CommonModule,
    FormsModule
  ],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent implements OnInit{
  resultados: any[] = [];
  termino = '';
  anioSeleccionado: number | null = null;
  aniosDisponibles: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.termino = params['termino'] || '';
      this.anioSeleccionado = params['anio'] ? parseInt(params['anio']) : null;
      if (this.termino) {
        this.buscarContenido();
      }
    });

    this.contentService.getAniosDisponibles().subscribe(
      anios => this.aniosDisponibles = anios,
      err => console.error('Error al cargar años:', err)
    );
  }

  buscarContenido() {
    this.contentService.buscarContenidoPorTermino(this.termino, this.anioSeleccionado).subscribe(
      res => this.resultados = res,
      err => console.error('Error al buscar:', err)
    );
  }

  actualizarFiltro() {
    const queryParams: any = { termino: this.termino };
    if (this.anioSeleccionado) queryParams.anio = this.anioSeleccionado;
    // navegar para actualizar la URL y recargar resultados
    window.location.href = `/busqueda?${new URLSearchParams(queryParams).toString()}`;
  }

  verDetalles(id: number): void {
    this.router.navigate(['/content', id]);
  }

}
