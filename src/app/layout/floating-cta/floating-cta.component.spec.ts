import { TestBed } from '@angular/core/testing';
import { FloatingCtaComponent } from './floating-cta.component';
import { GoogleAdsTrackingService } from '../../core/services/google-ads-tracking.service';
import { vi } from 'vitest';

describe('FloatingCtaComponent', () => {
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
      imports: [FloatingCtaComponent],
      providers: [
        { provide: GoogleAdsTrackingService, useValue: trackingSpy },
      ],
    }).compileComponents();
  });

  it('should create floating cta component', () => {
    const fixture = TestBed.createComponent(FloatingCtaComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should trigger trackWhatsAppConversion when floating whatsapp button is clicked', () => {
    const fixture = TestBed.createComponent(FloatingCtaComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const btn = el.querySelector<HTMLAnchorElement>('[data-testid="floating-whatsapp-btn"]');
    expect(btn).toBeTruthy();

    btn?.click();
    expect(trackingSpy.trackWhatsAppConversion).toHaveBeenCalledWith({ location: 'floating_button' });
  });

  it('should trigger trackPhoneConversion and trackWhatsAppConversion on mobile action bar clicks', () => {
    const fixture = TestBed.createComponent(FloatingCtaComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;

    const phoneBtn = el.querySelector<HTMLAnchorElement>('[data-testid="mobile-bar-phone-btn"]');
    expect(phoneBtn).toBeTruthy();
    phoneBtn?.click();
    expect(trackingSpy.trackPhoneConversion).toHaveBeenCalledWith({ location: 'mobile_bottom_bar' });

    const whatsBtn = el.querySelector<HTMLAnchorElement>('[data-testid="mobile-bar-whatsapp-btn"]');
    expect(whatsBtn).toBeTruthy();
    whatsBtn?.click();
    expect(trackingSpy.trackWhatsAppConversion).toHaveBeenCalledWith({ location: 'mobile_bottom_bar' });
  });
});
