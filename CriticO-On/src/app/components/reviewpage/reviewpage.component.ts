import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentdetailComponent } from '../contentdetail/contentdetail.component';
import { CreatereviewComponent } from '../createreview/createreview.component';
import { AuthServiceService } from '../../services/serviceAuth/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviewpage',
  standalone: true,
  imports: [ContentdetailComponent, CreatereviewComponent, CommonModule],
  templateUrl: './reviewpage.component.html',
  styleUrl: './reviewpage.component.css'
})
export class ReviewpageComponent implements OnInit{
  contentId!: number;
  userId!: number;
  isAuthenticated = false;
  
  constructor(private route: ActivatedRoute, private authService: AuthServiceService, private router: Router){}

  ngOnInit(): void {
      this.contentId = Number(this.route.snapshot.paramMap.get('id'));
      this.authService.authStatus$.subscribe(status => {
      this.isAuthenticated = status;
      const user = this.authService.getLoggedInUser();
      this.userId =  user ? user.id_usuario : -1;
    });
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }
}
