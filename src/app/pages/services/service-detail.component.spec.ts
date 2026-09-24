import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { ServiceDetailComponent } from './service-detail.component';
import { GoogleAdsTrackingService } from '../../core/services/google-ads-tracking.service';
import { vi } from 'vitest';

describe('ServiceDetailComponent', () => {
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
      imports: [ServiceDetailComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(new Map([['id', 'carros']]))
          }
        },
        { provide: GoogleAdsTrackingService, useValue: trackingSpy }
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

  it('should track WhatsApp and phone clicks on service detail', () => {
    const fixture = TestBed.createComponent(ServiceDetailComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;

    const whatsBtn = el.querySelector<HTMLAnchorElement>('[data-testid="service-detail-whatsapp-btn"]');
    whatsBtn?.click();
    expect(trackingSpy.trackWhatsAppConversion).toHaveBeenCalledWith({ location: 'service_detail', serviceId: 'carros' });

    const phoneBtn = el.querySelector<HTMLAnchorElement>('[data-testid="service-detail-phone-btn"]');
    phoneBtn?.click();
    expect(trackingSpy.trackPhoneConversion).toHaveBeenCalledWith({ location: 'service_detail' });
  });
});
