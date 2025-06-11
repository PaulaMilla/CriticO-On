import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contentdetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contentdetail.component.html',
  styleUrl: './contentdetail.component.css'
})

export class ContentdetailComponent implements OnInit {
  @Input() contentId!: number;
  content!: any;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getContenido(this.contentId).subscribe({
      next: (data) => this.content = data,
      error: (err) => console.error('Error al obtener el contenido', err)
    });
  }
}
