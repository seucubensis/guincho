import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create footer component', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render footer with testid', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('[data-testid="site-footer"]')).toBeTruthy();
    expect(el.querySelector('[data-testid="footer-phone-link"]')).toBeTruthy();
    expect(el.querySelector('[data-testid="footer-whatsapp-link"]')).toBeTruthy();
  });
});
