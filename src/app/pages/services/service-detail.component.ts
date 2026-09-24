import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GuinchoDataService } from '../../core/services/guincho-data.service';

@Component({
  selector: 'app-service-detail',
  imports: [RouterLink],
  template: `
    @if (service(); as s) {
      <div class="py-12 md:py-20 bg-white">
        <div class="container mx-auto px-4 md:px-8 max-w-4xl">
          <!-- Breadcrumb -->
          <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">
            <a routerLink="/" class="hover:text-black">Início</a>
            <span>/</span>
            <a routerLink="/servicos" class="hover:text-black">Serviços</a>
            <span>/</span>
            <span class="text-[#ffb800]">{{ s.title }}</span>
          </div>

          <div class="p-8 md:p-12 bg-[#f8f9fa] border border-gray-200 rounded-3xl">
            <span class="text-xs font-bold tracking-[0.3em] uppercase text-[#ffb800]">· Atendimento 24h em Praia Grande ·</span>
            <h1 class="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-black mt-2 mb-4 leading-tight">
              {{ s.title }}
            </h1>
            <div class="text-base font-semibold text-gray-700 mb-6">{{ s.seoTitle }}</div>

            <p class="text-gray-700 text-lg leading-relaxed mb-8">
              {{ s.desc }}
            </p>

            <div class="p-6 bg-white rounded-2xl border border-gray-200 mb-8 space-y-3">
              <div class="flex items-center gap-3 font-semibold text-sm text-gray-800">
                <span class="w-2.5 h-2.5 rounded-full bg-[#ffb800]"></span>
                Chegada média em 15 a 30 minutos em Praia Grande
              </div>
              <div class="flex items-center gap-3 font-semibold text-sm text-gray-800">
                <span class="w-2.5 h-2.5 rounded-full bg-[#ffb800]"></span>
                Equipamento certificado e transporte seguro com cintas adequadas
              </div>
              <div class="flex items-center gap-3 font-semibold text-sm text-gray-800">
                <span class="w-2.5 h-2.5 rounded-full bg-[#ffb800]"></span>
                Pagamento facilitado: PIX, dinheiro, cartão de crédito ou débito
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <a
                [href]="getWhatsAppUrl(s.msg)"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] hover:bg-[#1ebd5c] text-white rounded-2xl font-extrabold text-base md:text-lg transition-all"
              >
                Chamar no WhatsApp Agora
              </a>

              <a
                [href]="company().phoneTel"
                class="inline-flex items-center justify-center gap-3 px-8 py-5 border-2 border-black hover:bg-black hover:text-white rounded-2xl font-extrabold text-base md:text-lg transition-all"
              >
                Ligar {{ company().phone }}
              </a>
            </div>
          </div>
        </div>
      </div>
    } @else {
      <div class="py-24 text-center">
        <h2 class="text-2xl font-bold mb-4">Serviço não encontrado</h2>
        <a routerLink="/servicos" class="text-[#ffb800] underline font-bold">Ver todos os serviços</a>
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly dataService = inject(GuinchoDataService);

  protected readonly company = this.dataService.company;

  private readonly serviceId = toSignal(
    this.route.paramMap.pipe(map(params => params.get('id')))
  );

  protected readonly service = computed(() => {
    const id = this.serviceId();
    return id ? this.dataService.getServiceById(id) : undefined;
  });

  protected getWhatsAppUrl(msg: string): string {
    return this.dataService.getWhatsAppUrl(msg);
  }
}
