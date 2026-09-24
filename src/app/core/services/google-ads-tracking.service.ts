import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

export interface GoogleAdsConfig {
  adsConversionId?: string; // Ex: 'AW-123456789'
  whatsappConversionLabel?: string; // Ex: 'WHATSAPP_CONV_LABEL'
  phoneConversionLabel?: string; // Ex: 'PHONE_CONV_LABEL'
  gtmContainerId?: string; // Ex: 'GTM-N4Q2RDZL'
}

export interface WhatsAppEventPayload {
  location: string;
  serviceId?: string;
  message?: string;
}

export interface PhoneEventPayload {
  location: string;
  phoneNumber?: string;
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GoogleAdsTrackingService {
  private readonly platformId = inject(PLATFORM_ID);
  readonly isBrowser = signal<boolean>(isPlatformBrowser(this.platformId));

  readonly config = signal<GoogleAdsConfig>({
    gtmContainerId: 'GTM-N4Q2RDZL',
    adsConversionId: '',
    whatsappConversionLabel: '',
    phoneConversionLabel: ''
  });

  constructor() {
    if (this.isBrowser()) {
      window.dataLayer = window.dataLayer || [];
    }
  }

  /**
   * Configure Google Ads Conversion ID and labels at runtime
   */
  configure(customConfig: Partial<GoogleAdsConfig>): void {
    this.config.update(current => ({ ...current, ...customConfig }));
  }

  /**
   * Push generic custom event to dataLayer
   */
  trackEvent(eventName: string, params: Record<string, unknown> = {}): void {
    if (!this.isBrowser()) {
      return;
    }

    const payload: Record<string, unknown> = {
      event: eventName,
      timestamp: new Date().toISOString(),
      ...params
    };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);

    // Call window.gtag if present
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  }

  /**
   * Track high-value WhatsApp conversion for Google Ads & GTM
   */
  trackWhatsAppConversion(data: WhatsAppEventPayload): void {
    const currentConfig = this.config();
    const eventParams: Record<string, unknown> = {
      event_category: 'engagement',
      event_action: 'click',
      event_label: data.location,
      service_id: data.serviceId || 'geral',
      channel: 'whatsapp'
    };

    if (currentConfig.adsConversionId && currentConfig.whatsappConversionLabel) {
      eventParams['send_to'] = `${currentConfig.adsConversionId}/${currentConfig.whatsappConversionLabel}`;
      eventParams['value'] = 1.0;
      eventParams['currency'] = 'BRL';
    }

    this.trackEvent('contact_whatsapp_click', eventParams);
  }

  /**
   * Track phone call click conversion for Google Ads & GTM
   */
  trackPhoneConversion(data: PhoneEventPayload): void {
    const currentConfig = this.config();
    const eventParams: Record<string, unknown> = {
      event_category: 'engagement',
      event_action: 'call',
      event_label: data.location,
      phone_number: data.phoneNumber || '(13) 99669-1556',
      channel: 'phone'
    };

    if (currentConfig.adsConversionId && currentConfig.phoneConversionLabel) {
      eventParams['send_to'] = `${currentConfig.adsConversionId}/${currentConfig.phoneConversionLabel}`;
      eventParams['value'] = 1.0;
      eventParams['currency'] = 'BRL';
    }

    this.trackEvent('contact_phone_call', eventParams);
  }

  /**
   * Track virtual page view for SPA navigation
   */
  trackPageView(pagePath: string, pageTitle?: string): void {
    this.trackEvent('page_view', {
      page_path: pagePath,
      page_title: pageTitle || document?.title || ''
    });
  }
}
