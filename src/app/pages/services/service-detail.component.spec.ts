import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { ServiceDetailComponent } from './service-detail.component';

describe('ServiceDetailComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDetailComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(new Map([['id', 'carros']]))
          }
        }
      ]
    }).compileComponents();
  });

  it('should create service detail component', () => {
    const fixture = TestBed.createComponent(ServiceDetailComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should display service details for carros', () => {
    const fixture = TestBed.createComponent(ServiceDetailComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain('Guincho para Carros');
  });
});
