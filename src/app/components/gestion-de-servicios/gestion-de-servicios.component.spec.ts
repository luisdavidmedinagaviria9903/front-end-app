import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeServiciosComponent } from './gestion-de-servicios.component';

describe('GestionDeServiciosComponent', () => {
  let component: GestionDeServiciosComponent;
  let fixture: ComponentFixture<GestionDeServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionDeServiciosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionDeServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
