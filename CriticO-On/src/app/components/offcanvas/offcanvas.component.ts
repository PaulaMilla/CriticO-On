import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offcanvas',
  standalone: true,
  imports: [],
  templateUrl: './offcanvas.component.html',
  styleUrl: './offcanvas.component.css'
})
export class OffcanvasComponent {
  constructor(private offcanvasService: NgbOffcanvas) {}


	openCustomPanelClass(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { panelClass: 'bg-info' });
  }
}
