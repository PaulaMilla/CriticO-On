import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaCarruselComponent } from './categoria-carrusel.component';

describe('CategoriaCarruselComponent', () => {
  let component: CategoriaCarruselComponent;
  let fixture: ComponentFixture<CategoriaCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaCarruselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
