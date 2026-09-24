import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { FooterComponent } from './footer.component';
import { GoogleAdsTrackingService } from '../../core/services/google-ads-tracking.service';
import { vi } from 'vitest';

describe('FooterComponent', () => {
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
      imports: [FooterComponent],
      providers: [
        provideRouter([]),
        { provide: GoogleAdsTrackingService, useValue: trackingSpy },
      ]
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

  it('should track phone and whatsapp clicks from footer', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;

    const phoneLink = el.querySelector<HTMLAnchorElement>('[data-testid="footer-phone-link"]');
    phoneLink?.click();
    expect(trackingSpy.trackPhoneConversion).toHaveBeenCalledWith({ location: 'footer' });

    const whatsLink = el.querySelector<HTMLAnchorElement>('[data-testid="footer-whatsapp-link"]');
    whatsLink?.click();
    expect(trackingSpy.trackWhatsAppConversion).toHaveBeenCalledWith({ location: 'footer' });
  });
});
