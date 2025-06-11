import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentdetailComponent } from '../contentdetail/contentdetail.component';
import { CreatereviewComponent } from '../createreview/createreview.component';

@Component({
  selector: 'app-reviewpage',
  standalone: true,
  imports: [ContentdetailComponent, CreatereviewComponent],
  templateUrl: './reviewpage.component.html',
  styleUrl: './reviewpage.component.css'
})
export class ReviewpageComponent implements OnInit{
  contentId!: number;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
      this.contentId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
