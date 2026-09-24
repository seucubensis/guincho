import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ServicesPageComponent } from './services-page.component';

describe('ServicesPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesPageComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create services page component', () => {
    const fixture = TestBed.createComponent(ServicesPageComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render all 8 services', () => {
    const fixture = TestBed.createComponent(ServicesPageComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const cards = el.querySelectorAll('h2');
    expect(cards.length).toBe(8);
  });
});
