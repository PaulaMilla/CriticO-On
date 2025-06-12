import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import {NgClass, NgForOf} from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent implements OnInit {
  recientes: any[] = [];

  constructor(private contentService: ContentService, private router: Router) {}

  ngOnInit(): void {
    this.contentService.getRecientes().subscribe(data => {
      this.recientes = data;
    });
  }

  verDetalles(id: number) {
    this.router.navigate(['/content', id]);
  }
}
