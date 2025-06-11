import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import {NgClass, NgForOf} from "@angular/common";

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
export class CarouselComponent implements OnInit {
  recientes: any[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getRecientes().subscribe(data => {
      this.recientes = data;
    });
  }
}
