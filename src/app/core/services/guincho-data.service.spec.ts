import { TestBed } from '@angular/core/testing';
import { GuinchoDataService } from './guincho-data.service';

describe('GuinchoDataService', () => {
  let service: GuinchoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuinchoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should provide company config', () => {
    const company = service.company();
    expect(company.name).toContain('Guincho');
    expect(company.phone).toBe('(13) 95546-2859');
    expect(company.whatsappNumber).toBe('5513955462859');
  });

  it('should provide 8 services', () => {
    expect(service.services().length).toBe(8);
  });

  it('should find service by id', () => {
    const s = service.getServiceById('carros');
    expect(s).toBeDefined();
    expect(s?.title).toBe('Guincho para Carros');
  });

  it('should generate whatsapp url with pre-filled message', () => {
    const url = service.getWhatsAppUrl('Socorro urgente');
    expect(url).toContain('https://wa.me/5513955462859');
    expect(url).toContain('text=Socorro%20urgente');
  });
});
