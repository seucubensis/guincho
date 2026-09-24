import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { GoogleAdsTrackingService } from './google-ads-tracking.service';

describe('GoogleAdsTrackingService', () => {
  describe('Browser Environment', () => {
    let service: GoogleAdsTrackingService;

    beforeEach(() => {
      // Clear dataLayer mock
      (window as unknown as { dataLayer: unknown[] }).dataLayer = [];

      TestBed.configureTestingModule({
        providers: [
          GoogleAdsTrackingService,
          { provide: PLATFORM_ID, useValue: 'browser' }
        ]
      });

      service = TestBed.inject(GoogleAdsTrackingService);
    });

    it('should be created in browser environment', () => {
      expect(service).toBeTruthy();
      expect(service.isBrowser()).toBe(true);
    });

    it('should push generic event to window.dataLayer', () => {
      service.trackEvent('test_event', { key: 'value' });
      const dataLayer = (window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer;
      expect(dataLayer.length).toBeGreaterThan(0);
      const lastEvent = dataLayer[dataLayer.length - 1];
      expect(lastEvent['event']).toBe('test_event');
      expect(lastEvent['key']).toBe('value');
    });

    it('should track WhatsApp conversion click', () => {
      service.trackWhatsAppConversion({ location: 'hero', serviceId: 'carros' });
      const dataLayer = (window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer;
      const lastEvent = dataLayer[dataLayer.length - 1];
      expect(lastEvent['event']).toBe('contact_whatsapp_click');
      expect(lastEvent['event_category']).toBe('engagement');
      expect(lastEvent['event_label']).toBe('hero');
      expect(lastEvent['service_id']).toBe('carros');
    });

    it('should track phone call conversion click', () => {
      service.trackPhoneConversion({ location: 'header' });
      const dataLayer = (window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer;
      const lastEvent = dataLayer[dataLayer.length - 1];
      expect(lastEvent['event']).toBe('contact_phone_call');
      expect(lastEvent['event_category']).toBe('engagement');
      expect(lastEvent['event_label']).toBe('header');
    });

    it('should track page view for SPA routes', () => {
      service.trackPageView('/servicos', 'Serviços 24h');
      const dataLayer = (window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer;
      const lastEvent = dataLayer[dataLayer.length - 1];
      expect(lastEvent['event']).toBe('page_view');
      expect(lastEvent['page_path']).toBe('/servicos');
      expect(lastEvent['page_title']).toBe('Serviços 24h');
    });

    it('should allow setting custom Google Ads conversion ID and labels', () => {
      service.configure({
        adsConversionId: 'AW-987654321',
        whatsappConversionLabel: 'WHATSAPP_LABEL_XYZ',
        phoneConversionLabel: 'PHONE_LABEL_ABC'
      });

      service.trackWhatsAppConversion({ location: 'floating_button' });
      const dataLayer = (window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer;
      const lastEvent = dataLayer[dataLayer.length - 1];
      expect(lastEvent['send_to']).toBe('AW-987654321/WHATSAPP_LABEL_XYZ');
    });
  });

  describe('Server Environment (SSR)', () => {
    let service: GoogleAdsTrackingService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          GoogleAdsTrackingService,
          { provide: PLATFORM_ID, useValue: 'server' }
        ]
      });

      service = TestBed.inject(GoogleAdsTrackingService);
    });

    it('should safely identify as non-browser and not crash during SSR', () => {
      expect(service).toBeTruthy();
      expect(service.isBrowser()).toBe(false);

      // Should not throw in server environment
      expect(() => {
        service.trackEvent('test_event');
        service.trackWhatsAppConversion({ location: 'hero' });
        service.trackPhoneConversion({ location: 'footer' });
        service.trackPageView('/servicos');
      }).not.toThrow();
    });
  });
});
