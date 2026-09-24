import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GuinchoDataService } from '../../core/services/guincho-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private readonly dataService = inject(GuinchoDataService);

  protected readonly company = this.dataService.company;
  protected readonly services = this.dataService.services;
  protected readonly benefits = this.dataService.benefits;
  protected readonly whyUsPoints = this.dataService.whyUsPoints;
  protected readonly neighborhoods = this.dataService.praiaGrandeNeighborhoods;
  protected readonly neighboringCities = this.dataService.neighboringCities;
  protected readonly testimonials = this.dataService.testimonials;
  protected readonly faqs = this.dataService.faqs;

  // Accordion state
  protected readonly openFaqIndex = signal<number | null>(0);

  protected toggleFaq(index: number): void {
    this.openFaqIndex.update(curr => (curr === index ? null : index));
  }

  protected isFaqOpen(index: number): boolean {
    return this.openFaqIndex() === index;
  }

  protected getWhatsAppUrl(msg?: string): string {
    return this.dataService.getWhatsAppUrl(msg);
  }
}
