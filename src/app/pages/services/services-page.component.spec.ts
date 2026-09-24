import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ServicesPageComponent } from './services-page.component';
import { GoogleAdsTrackingService } from '../../core/services/google-ads-tracking.service';
import { vi } from 'vitest';

describe('ServicesPageComponent', () => {
  let trackingSpy: {
    trackWhatsAppConversion: ReturnType<typeof vi.fn>;
  };

  beforeEach(async () => {
    trackingSpy = {
      trackWhatsAppConversion: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [ServicesPageComponent],
      providers: [
        provideRouter([]),
        { provide: GoogleAdsTrackingService, useValue: trackingSpy }
      ]
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

  it('should trigger trackWhatsApp on service request click', () => {
    const fixture = TestBed.createComponent(ServicesPageComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;

    const firstWhatsAppBtn = el.querySelector<HTMLAnchorElement>('[data-testid="services-page-whatsapp-carros"]');
    expect(firstWhatsAppBtn).toBeTruthy();
    firstWhatsAppBtn?.click();
    expect(trackingSpy.trackWhatsAppConversion).toHaveBeenCalledWith({
      location: 'services_page_card',
      serviceId: 'carros'
    });
  });
});
