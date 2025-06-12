import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contentdetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contentdetail.component.html',
  styleUrl: './contentdetail.component.css'
})

export class ContentdetailComponent implements OnInit {
  content: any;

  constructor(private contentService: ContentService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.contentService.getContenido(id).subscribe({
        next: (data) => this.content = data,
        error: (err) => console.error('Error al obtener el contenido', err)
      });
    } else {
      console.error('ID no definido en la ruta');
    }
  }
}
