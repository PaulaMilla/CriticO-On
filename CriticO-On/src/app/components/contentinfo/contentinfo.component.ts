import { Component } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contentinfo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contentinfo.component.html',
  styleUrl: './contentinfo.component.css'
})

export class ContentinfoComponent {
  content: any;
  reviews: any[] = [];

  constructor(private contentService: ContentService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.contentService.getContenido(id).subscribe({
        next: (data) => this.content = data,
        error: (err) => console.error('Error al obtener el contenido', err)
      });

      this.contentService.getReviewsByContenido(id).subscribe({
        next: (data) => this.reviews = data,
        error: (err) => console.error('Error al obtener reviews', err)
      });
    }
  }

  irACrearReview(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.router.navigate(['/content', id, 'review']);
    }
  }
}
