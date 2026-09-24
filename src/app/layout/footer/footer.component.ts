import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GuinchoDataService } from '../../core/services/guincho-data.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer data-testid="site-footer" class="bg-[#0a0a0a] text-white pt-16 md:pt-20 pb-8 noise-bg relative">
      <div class="emergency-stripes h-1.5 absolute top-0 left-0 right-0" aria-hidden="true"></div>

      <div class="container mx-auto px-4 md:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <!-- Column 1: Info -->
          <div class="lg:col-span-1">
            <div class="flex items-center gap-3 mb-5">
              <img
                [src]="company().logoUrl"
                [alt]="company().name + ' logotipo'"
                class="h-14 w-auto object-contain"
                width="140"
                height="56"
              />
              <div>
                <div class="font-display font-extrabold text-lg uppercase tracking-tight">{{ company().shortName }}</div>
                <div class="text-[10px] tracking-[0.3em] uppercase text-[#f45100] font-bold">{{ company().tagline }}</div>
              </div>
            </div>
            <p class="text-white/60 text-sm leading-relaxed">
              Empresa especializada em guincho 24h, socorro automotivo e reboque para todos os tipos de veículos em Praia Grande/SP e região da Baixada Santista.
            </p>
            <div class="mt-5 text-xs text-white/50">
              <strong class="text-white/80">CNPJ:</strong> {{ company().cnpj }}
            </div>
          </div>

          <!-- Column 2: Direct Contact -->
          <div>
            <h4 class="font-display text-sm font-extrabold uppercase tracking-[0.2em] text-[#f45100] mb-5">Contato direto</h4>
            <ul class="space-y-4">
              <li>
                <a
                  [href]="company().phoneTel"
                  data-testid="footer-phone-link"
                  class="flex items-start gap-3 group hover:text-[#f45100] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mt-0.5 flex-shrink-0 text-[#f45100]"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <div>
                    <div class="text-xs text-white/50 uppercase tracking-wider">Ligação direta</div>
                    <div class="font-bold text-base">{{ company().phone }}</div>
                  </div>
                </a>
              </li>

              <li>
                <a
                  [href]="whatsappUrl()"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-whatsapp-link"
                  class="flex items-start gap-3 group hover:text-[#25D366] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mt-0.5 flex-shrink-0 text-[#25D366]"
                    aria-hidden="true"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                  </svg>
                  <div>
                    <div class="text-xs text-white/50 uppercase tracking-wider">WhatsApp 24h</div>
                    <div class="font-bold text-base">{{ company().phone }}</div>
                  </div>
                </a>
              </li>

              <li class="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mt-0.5 flex-shrink-0 text-[#f45100]"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <div class="text-xs text-white/50 uppercase tracking-wider">Localização</div>
                  <div class="text-sm font-semibold">{{ company().region }}</div>
                </div>
              </li>

              <li class="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mt-0.5 flex-shrink-0 text-[#f45100]"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <div>
                  <div class="text-xs text-white/50 uppercase tracking-wider">Horário</div>
                  <div class="text-sm font-semibold">24 horas / 7 dias por semana</div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Column 3: Services -->
          <div>
            <h4 class="font-display text-sm font-extrabold uppercase tracking-[0.2em] text-[#f45100] mb-5">Serviços 24h</h4>
            <ul class="space-y-2.5">
              @for (service of services(); track service.id) {
                <li>
                  <a
                    routerLink="/"
                    fragment="servicos"
                    [attr.data-testid]="'footer-service-' + service.id"
                    class="text-sm text-white/70 hover:text-[#f45100] transition-colors"
                  >
                    {{ service.title }}
                  </a>
                </li>
              }
            </ul>
          </div>

          <!-- Column 4: Quick Action -->
          <div>
            <h4 class="font-display text-sm font-extrabold uppercase tracking-[0.2em] text-[#f45100] mb-5">Atendimento Rápido</h4>
            <p class="text-white/60 text-sm mb-4">
              Base operacional em Praia Grande com suporte imediato em São Vicente, Santos, Mongaguá e Cubatão.
            </p>
            <div class="mb-5">
              <div class="text-xs text-white/50 uppercase tracking-wider mb-2 font-bold">Formas de Pagamento</div>
              <div class="text-xs text-white/80 bg-white/5 border border-white/10 rounded-lg p-3">
                PIX · Dinheiro · Cartão de Crédito · Débito
              </div>
            </div>
            <a
              [href]="whatsappUrl()"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#f45100] hover:bg-[#d14500] text-white rounded-xl font-bold text-sm transition-all"
            >
              Pedir Guincho Agora
            </a>
          </div>
        </div>

        <div class="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <div>
            © {{ currentYear }} {{ company().name }}. Todos os direitos reservados.
          </div>
          <div class="flex items-center gap-6">
            <a routerLink="/" fragment="top" class="hover:text-white transition-colors">Voltar ao topo ↑</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  private readonly dataService = inject(GuinchoDataService);
  protected readonly company = this.dataService.company;
  protected readonly services = this.dataService.services;
  protected readonly currentYear = 2026;

  protected whatsappUrl(): string {
    return this.dataService.getWhatsAppUrl();
  }
}
