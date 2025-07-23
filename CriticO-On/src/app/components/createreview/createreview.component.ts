import { Component, Input } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreatereviewService } from '../../services/createreview.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createreview',
  standalone: true,
  imports: [NgFor, FormsModule, NgClass, NgIf],
  templateUrl: './createreview.component.html',
  styleUrl: './createreview.component.css'
})

export class CreatereviewComponent {
  @Input() contentId!: number;
  @Input() userId!: number;

  rating: number = 10;
  isSpoiler: boolean = false; 

  constructor(private reviewservice: CreatereviewService, private router: Router){}

  get starsArray(): boolean[] {
    const full = Math.floor(this.rating);
    return Array.from({ length: 10 }, (_, i) => i < full);
  }

  get firstRow(): boolean[] {
    return this.starsArray.slice(0, 5);
  }

  get secondRow(): boolean[] {
    return this.starsArray.slice(5, 10);
  }

  onRatingInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = parseFloat(input.value);

    if (isNaN(value)) {
      this.rating = 0;
    } else if (value > 10) {
      this.rating = 10;
    } else if (value < 0) {
      this.rating = 0;
    } else {
      this.rating = value;
    }

    input.value = this.rating.toString();
  }

  //comentario
  comment = '';
  onCommentInput(event: Event): void{
    const input = event.target as HTMLInputElement;
    this.comment = input.value;
    if (this.comment.length > 500) {
      this.comment = this.comment.slice(0, 500); 
    }
  }

  submitReview() {
    const currentDate = new Date().toISOString().split('T')[0];

    console.log('Enviando reseña: '+currentDate);
    this.reviewservice.createReview({
      comentario: this.comment,
      rating: this.rating,
      spoiler: this.isSpoiler,
      userId: this.userId,
      contentId: this.contentId,
      fecha: currentDate
    }).subscribe({
      next: (response) => {
        console.log('Reseña creada con éxito:', response);
        this.showModal = true;
      },
      error: (error) => {
        console.error('Error al crear la reseña:', error);
      }
    });
  }

  goToHome() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigate(['/home']); 
  }

  showModal = false;

  closeModal() {
    this.showModal = false;
    this.goToHome();
  }
}