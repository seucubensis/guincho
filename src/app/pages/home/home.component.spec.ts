import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home.component';
import { GoogleAdsTrackingService } from '../../core/services/google-ads-tracking.service';
import { vi } from 'vitest';

describe('HomeComponent', () => {
  let trackingSpy: {
    trackWhatsAppConversion: ReturnType<typeof vi.fn>;
    trackPhoneConversion: ReturnType<typeof vi.fn>;
  };

  beforeEach(async () => {
    trackingSpy = {
      trackWhatsAppConversion: vi.fn(),
      trackPhoneConversion: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        provideRouter([]),
        { provide: GoogleAdsTrackingService, useValue: trackingSpy },
      ]
    }).compileComponents();
  });

  it('should create home component', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render all 8 main sections', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelector('[data-testid="hero-section"]')).toBeTruthy();
    expect(el.querySelector('[data-testid="benefits-section"]')).toBeTruthy();
    expect(el.querySelector('[data-testid="services-section"]')).toBeTruthy();
    expect(el.querySelector('[data-testid="whyus-section"]')).toBeTruthy();
    expect(el.querySelector('[data-testid="testimonials-section"]')).toBeTruthy();
    expect(el.querySelector('[data-testid="coverage-section"]')).toBeTruthy();
    expect(el.querySelector('[data-testid="faq-section"]')).toBeTruthy();
    expect(el.querySelector('[data-testid="cta-section"]')).toBeTruthy();
  });

  it('should toggle FAQ accordion items', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component['isFaqOpen'](0)).toBe(true);
    expect(component['isFaqOpen'](1)).toBe(false);

    component['toggleFaq'](1);
    expect(component['isFaqOpen'](1)).toBe(true);
    expect(component['isFaqOpen'](0)).toBe(false);

    component['toggleFaq'](1);
    expect(component['isFaqOpen'](1)).toBe(false);
  });

  it('should trigger tracking conversions on hero CTA clicks', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;

    const heroWhats = el.querySelector<HTMLAnchorElement>('[data-testid="hero-whatsapp-btn"]');
    heroWhats?.click();
    expect(trackingSpy.trackWhatsAppConversion).toHaveBeenCalledWith({ location: 'hero', serviceId: undefined });

    const heroPhone = el.querySelector<HTMLAnchorElement>('[data-testid="hero-phone-btn"]');
    heroPhone?.click();
    expect(trackingSpy.trackPhoneConversion).toHaveBeenCalledWith({ location: 'hero' });
  });

  it('should trigger tracking conversion on service card click', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;

    const card = el.querySelector<HTMLAnchorElement>('[data-testid="service-card-carros"]');
    expect(card).toBeTruthy();
    card?.click();
    expect(trackingSpy.trackWhatsAppConversion).toHaveBeenCalledWith({ location: 'services_list', serviceId: 'carros' });
  });
});
