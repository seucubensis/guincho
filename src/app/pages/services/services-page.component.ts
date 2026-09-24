import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GuinchoDataService } from '../../core/services/guincho-data.service';
import { GoogleAdsTrackingService } from '../../core/services/google-ads-tracking.service';

@Component({
  selector: 'app-services-page',
  imports: [RouterLink],
  template: `
    <div class="py-12 md:py-20 bg-white">
      <div class="container mx-auto px-4 md:px-8">
        <!-- Breadcrumb / Header -->
        <div class="max-w-3xl mb-12">
          <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
            <a routerLink="/" class="hover:text-black">Início</a>
            <span>/</span>
            <span class="text-[#ffb800]">Serviços 24h</span>
          </div>
          <h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-black leading-[0.95]">
            Nossos Serviços de <span class="text-[#ffb800]">Guincho e Socorro</span>
          </h1>
          <p class="mt-4 text-gray-600 text-base md:text-lg">
            Atendimento imediato e especializado para qualquer tipo de emergência automotiva em Praia Grande e toda a Baixada Santista.
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (service of services(); track service.id) {
            <div class="p-7 bg-[#f8f9fa] border border-gray-200 rounded-2xl hover:border-[#ffb800] hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-[#ffb800]/10 flex items-center justify-center text-[#ffb800] mb-4">
                  <span class="font-bold text-sm uppercase">{{ service.icon }}</span>
                </div>
                <h2 class="font-display text-2xl font-bold uppercase tracking-tight text-black mb-2">{{ service.title }}</h2>
                <div class="text-xs font-semibold text-[#ffb800] mb-3">{{ service.seoTitle }}</div>
                <p class="text-gray-600 text-sm leading-relaxed mb-6">{{ service.desc }}</p>
              </div>

              <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <a
                  [href]="getWhatsAppUrl(service.msg)"
                  (click)="trackWhatsApp(service.id)"
                  [attr.data-testid]="'services-page-whatsapp-' + service.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#1ebd5c] text-white rounded-xl font-bold text-sm transition-all"
                >
                  Solicitar no WhatsApp
                </a>
                <a
                  [routerLink]="['/servicos', service.id]"
                  class="inline-flex items-center justify-center py-3 px-4 border border-black hover:bg-black hover:text-white rounded-xl font-bold text-sm transition-all"
                >
                  Ver Detalhes
                </a>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesPageComponent {
  private readonly dataService = inject(GuinchoDataService);
  private readonly tracking = inject(GoogleAdsTrackingService);

  protected readonly services = this.dataService.services;

  protected getWhatsAppUrl(msg?: string): string {
    return this.dataService.getWhatsAppUrl(msg);
  }

  protected trackWhatsApp(serviceId: string): void {
    this.tracking.trackWhatsAppConversion({ location: 'services_page_card', serviceId });
  }
}

