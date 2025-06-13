import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Contenido, ContentService} from "../../services/content.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-allcontent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './allcontent.component.html',
  styleUrl: './allcontent.component.css'
})
export class AllContentComponent implements OnInit {
  contenido: Contenido[] = [];

  constructor(private contentservice: ContentService, private router: Router) {}

  ngOnInit(): void {
    this.contentservice.getAllContenido().subscribe(data => {
      console.log('Contenido recibido:', data);
      this.contenido = Array.isArray(data) ? data : data.data || [];
    });
  }

  verDetalles(id: number): void {
    this.router.navigate(['/content', id]);
  }
}
