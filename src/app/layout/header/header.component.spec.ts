import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HeaderComponent } from './header.component';
import { GoogleAdsTrackingService } from '../../core/services/google-ads-tracking.service';
import { vi } from 'vitest';

describe('HeaderComponent', () => {
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
      imports: [HeaderComponent],
      providers: [
        provideRouter([]),
        { provide: GoogleAdsTrackingService, useValue: trackingSpy },
      ]
    }).compileComponents();
  });

  it('should create header component', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render header with testid', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('[data-testid="site-header"]')).toBeTruthy();
    expect(el.querySelector('[data-testid="header-phone-btn"]')).toBeTruthy();
    expect(el.querySelector('[data-testid="header-whatsapp-btn"]')).toBeTruthy();
  });

  it('should track phone and whatsapp clicks from header', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;

    const phoneBtn = el.querySelector<HTMLAnchorElement>('[data-testid="header-phone-btn"]');
    phoneBtn?.click();
    expect(trackingSpy.trackPhoneConversion).toHaveBeenCalledWith({ location: 'header' });

    const whatsBtn = el.querySelector<HTMLAnchorElement>('[data-testid="header-whatsapp-btn"]');
    whatsBtn?.click();
    expect(trackingSpy.trackWhatsAppConversion).toHaveBeenCalledWith({ location: 'header' });
  });
});
