import { Component, Input } from '@angular/core';
import { ContentdetailComponent } from "../contentdetail/contentdetail.component";
import { NgIf, NgFor, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreatereviewService } from '../../services/createreview.service';

@Component({
  selector: 'app-createreview',
  standalone: true,
  imports: [ContentdetailComponent,NgFor, FormsModule, NgClass],
  templateUrl: './createreview.component.html',
  styleUrl: './createreview.component.css'
})

export class CreatereviewComponent {
  @Input() contentId!: number;
  @Input() userId!: number;

  rating: number = 10;
  isSpoiler: boolean = false; // <- nueva propiedad

  // Devuelve arreglo de 10 elementos con valores true (llena) o false (vacía)
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

  // (Opcional) Para cuando implementes el submit
  submitReview(comment: string) {
    const reviewPayload = {
      contentId: this.contentId,
      userId: this.userId,
      rating: this.rating,
      comment: comment,
      containsSpoiler: this.isSpoiler
    };

    console.log('Review enviada:', reviewPayload);
    // Aquí deberías llamar al servicio para guardar la reseña en el backend
  }
}