import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasGeneroComponent } from './peliculas-genero.component';

describe('PeliculasGeneroComponent', () => {
  let component: PeliculasGeneroComponent;
  let fixture: ComponentFixture<PeliculasGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasGeneroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
