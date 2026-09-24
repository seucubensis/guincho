import { Injectable, signal } from '@angular/core';
import { BenefitItem, CompanyConfig, FaqItem, ServiceItem, TestimonialItem } from '../models/guincho.models';

@Injectable({
  providedIn: 'root'
})
export class GuinchoDataService {
  readonly company = signal<CompanyConfig>({
    name: 'Bloopu Guincho Express',
    shortName: 'Bloopu Guincho',
    tagline: 'Express · 24h',
    cnpj: '68.837.810/0001-30',
    city: 'Praia Grande',
    state: 'SP',
    region: 'Praia Grande/SP e região',
    phone: '(13) 95546-2859',
    phoneTel: 'tel:+5513955462859',
    whatsappNumber: '5513955462859',
    logoUrl: 'assets/logo-v2.png',
    heroBgUrl: 'assets/img1.jpeg',
    whyUsImgUrl: 'assets/img3.jpeg',
    coverageImgUrl: 'assets/img4.jpeg',
    ratingValue: '4.9',
    reviewsCount: '187'
  });

  readonly services = signal<ServiceItem[]>([
    {
      id: 'carros',
      title: 'Guincho para Carros',
      seoTitle: 'Guincho para Carros em Praia Grande 24h',
      desc: 'Reboque rápido e seguro para veículos leves em Praia Grande e região. Equipamento profissional, motorista treinado e atendimento imediato.',
      icon: 'car',
      msg: 'Olá! Preciso de um guincho para meu carro em Praia Grande.'
    },
    {
      id: 'motos',
      title: 'Guincho para Motos',
      seoTitle: 'Guincho para Moto em Praia Grande',
      desc: 'Reboque especializado para motocicletas com plataforma adequada. Sua moto chega ao destino com total segurança e sem riscos.',
      icon: 'bike',
      msg: 'Olá! Preciso de um guincho para minha moto em Praia Grande.'
    },
    {
      id: 'suv',
      title: 'Guincho para SUVs',
      seoTitle: 'Guincho para SUV e Caminhonete',
      desc: 'Plataforma reforçada para SUVs, picapes e veículos pesados. Içamento técnico, sem arranhar a lataria.',
      icon: 'truck',
      msg: 'Olá! Preciso de um guincho para minha SUV em Praia Grande.'
    },
    {
      id: 'blindados',
      title: 'Guincho para Blindados',
      seoTitle: 'Guincho para Veículos Blindados',
      desc: 'Atendimento sigiloso e premium para veículos blindados. Equipamento certificado para o peso adicional e máxima discrição.',
      icon: 'shield',
      msg: 'Olá! Preciso de um guincho para um veículo blindado em Praia Grande.'
    },
    {
      id: 'pneu',
      title: 'Troca de Pneu',
      seoTitle: 'Troca de Pneu na Rua em Praia Grande',
      desc: 'Furou? Estourou? Vamos até você. Troca rápida do pneu na rua, em casa ou na estrada. Sem precisar chamar guincho.',
      icon: 'disc',
      msg: 'Olá! Preciso de ajuda para trocar um pneu em Praia Grande.'
    },
    {
      id: 'bateria',
      title: 'Recarga de Bateria',
      seoTitle: 'Recarga de Bateria em Praia Grande',
      desc: 'Bateria descarregada? Fazemos a partida (chupeta) ou substituição no local. Atendimento expresso, 24 horas por dia.',
      icon: 'battery',
      msg: 'Olá! Minha bateria descarregou. Preciso de ajuda em Praia Grande.'
    },
    {
      id: 'combustivel',
      title: 'Falta de Combustível',
      seoTitle: 'Entrega de Combustível Emergencial',
      desc: 'Ficou sem gasolina ou diesel na rua? Entregamos combustível de emergência onde você estiver. Rápido e seguro.',
      icon: 'fuel',
      msg: 'Olá! Fiquei sem combustível em Praia Grande. Preciso de socorro.'
    },
    {
      id: 'socorro',
      title: 'Socorro 24h',
      seoTitle: 'Socorro Automotivo 24 Horas',
      desc: 'Pane elétrica, mecânica, acidente ou pneu furado. Cobrimos todas as emergências automotivas. 24h, todos os dias.',
      icon: 'siren',
      msg: 'Olá! Preciso de socorro automotivo urgente em Praia Grande.'
    }
  ]);

  readonly benefits = signal<BenefitItem[]>([
    {
      title: 'Atendimento 24h',
      desc: 'Operação contínua, todos os dias do ano. Madrugada, feriado ou domingo — estamos prontos.',
      icon: 'clock'
    },
    {
      title: 'Chegada Rápida',
      desc: 'Frota estrategicamente posicionada em Praia Grande para o menor tempo de espera da região.',
      icon: 'zap'
    },
    {
      title: 'Equipe Especializada',
      desc: 'Motoristas treinados em transporte de carros premium, blindados e veículos importados.',
      icon: 'users'
    },
    {
      title: 'Cobertura Regional',
      desc: 'Praia Grande, São Vicente, Santos, Mongaguá, Itanhaém e Cubatão. Atendemos toda a Baixada.',
      icon: 'map-pin'
    },
    {
      title: 'Preço Justo',
      desc: 'Orçamento transparente antes do serviço. Sem taxas escondidas, sem surpresas no fim.',
      icon: 'tag'
    },
    {
      title: 'Segurança Total',
      desc: 'Equipamentos certificados, cintas adequadas e protocolo profissional para zero arranhão.',
      icon: 'shield-check'
    }
  ]);

  readonly whyUsPoints = signal<string[]>([
    'Atendimento ágil e cordial em qualquer horário',
    'Equipe treinada para veículos premium e blindados',
    'Frota moderna e equipada com plataforma reforçada',
    'Orçamento transparente, sem cobrança extra surpresa',
    'Aceitamos PIX, dinheiro e cartão de crédito/débito',
    'Mais de 187 clientes atendidos com nota 4.9 de avaliação',
    'Transporte seguro com cintas e protocolo profissional',
    'Cobertura completa em Praia Grande e cidades vizinhas'
  ]);

  readonly praiaGrandeNeighborhoods = signal<string[]>([
    'Vila Tupi',
    'Boqueirão',
    'Canto do Forte',
    'Forte',
    'Guilhermina',
    'Aviação',
    'Mirim',
    'Real',
    'Solemar',
    'Vila Caiçara',
    'Ocian',
    'Tupiry',
    'Maracanã',
    'Quietude',
    'Cidade da Criança',
    'Sítio do Campo',
    'Antártica',
    'Princesa'
  ]);

  readonly neighboringCities = signal<string[]>([
    'São Vicente',
    'Santos',
    'Mongaguá',
    'Itanhaém',
    'Cubatão',
    'Peruíbe'
  ]);

  readonly testimonials = signal<TestimonialItem[]>([
    {
      name: 'Carlos Henrique',
      location: 'Vila Tupi, Praia Grande',
      text: 'Bateria descarregou na frente do meu prédio às 2h da manhã. Liguei e em 15 minutos estavam aqui. Atendimento educado e preço justo. Recomendo de olhos fechados.',
      rating: 5,
      service: 'Recarga de bateria'
    },
    {
      name: 'Mariana Souza',
      location: 'Boqueirão, Praia Grande',
      text: 'Furei o pneu voltando da praia com as crianças. O rapaz da equipe chegou rápido, trocou na hora e ainda me deu dicas de oficina. Salvou o meu domingo.',
      rating: 5,
      service: 'Troca de pneu'
    },
    {
      name: 'Roberto Almeida',
      location: 'Mirim, Praia Grande',
      text: 'Tenho um SUV e tinha medo de chamar guincho qualquer. O guincho tem plataforma adequada e cintas próprias. Carro chegou na concessionária sem um arranhão.',
      rating: 5,
      service: 'Guincho SUV'
    },
    {
      name: 'Patrícia Lima',
      location: 'Canto do Forte, Praia Grande',
      text: 'Pane elétrica na Rodovia Padre Manoel da Nóbrega. Liguei no WhatsApp e em menos de 30 minutos estavam ali. Profissionalismo do começo ao fim.',
      rating: 5,
      service: 'Socorro 24h'
    },
    {
      name: 'Eduardo Vasconcelos',
      location: 'Forte, Praia Grande',
      text: 'Carro blindado precisa de cuidado especial. Foi a única empresa que tinha equipamento pra peso extra. Discrição total e serviço impecável.',
      rating: 5,
      service: 'Guincho blindado'
    },
    {
      name: 'Juliana Ferreira',
      location: 'Aviação, Praia Grande',
      text: 'Minha moto não pegava de jeito nenhum. Chamei pelo WhatsApp, mandaram um guincho com plataforma certa pra moto. Atendimento honesto e barato.',
      rating: 5,
      service: 'Guincho moto'
    }
  ]);

  readonly faqs = signal<FaqItem[]>([
    {
      q: 'Quanto custa um guincho em Praia Grande?',
      a: 'O valor depende da distância e do tipo de veículo (carro, moto, SUV ou blindado). Trabalhamos com preço justo e damos o orçamento antes de iniciar o serviço, sem surpresas. Chame agora no WhatsApp para uma cotação rápida e gratuita.'
    },
    {
      q: 'O atendimento funciona 24 horas?',
      a: 'Sim. Nosso atendimento funciona 24 horas por dia, 7 dias por semana, incluindo feriados, madrugadas e finais de semana. Estamos sempre prontos para o socorro automotivo emergencial em Praia Grande.'
    },
    {
      q: 'Vocês atendem motos, SUVs e veículos blindados?',
      a: 'Sim. Temos plataformas e equipamentos adequados para cada tipo de veículo: motos, carros leves, SUVs, picapes e veículos blindados. Nossa equipe é treinada para transportar qualquer veículo com total segurança.'
    },
    {
      q: 'Quanto tempo demora o atendimento do guincho?',
      a: 'Em Praia Grande, nosso tempo médio de chegada é de 15 a 30 minutos, dependendo da localização e do trânsito. Para outras cidades da região, o tempo varia entre 30 e 60 minutos. Sempre informamos a previsão real ao confirmar o pedido.'
    },
    {
      q: 'Vocês fazem recarga de bateria no local?',
      a: 'Sim. Realizamos recarga (chupeta) e substituição de baterias no local onde o veículo estiver. Levamos o equipamento e, se necessário, baterias novas para venda imediata.'
    },
    {
      q: 'Fazem troca de pneu na rua?',
      a: 'Sim. Trocamos pneus furados, estourados ou danificados em qualquer rua, avenida, estrada ou estacionamento da região de Praia Grande. Atendimento rápido para você não ficar parado por horas.'
    },
    {
      q: 'Quais formas de pagamento vocês aceitam?',
      a: 'Aceitamos PIX, dinheiro, cartão de crédito e cartão de débito. Você pode pagar diretamente ao motorista no momento do serviço, com total transparência.'
    },
    {
      q: 'Vocês atendem fora de Praia Grande?',
      a: 'Sim. Cobrimos toda a região da Baixada Santista: São Vicente, Santos, Mongaguá, Itanhaém, Cubatão e Peruíbe. Para viagens longas, basta solicitar orçamento personalizado.'
    }
  ]);

  getWhatsAppUrl(customMsg?: string): string {
    const text = customMsg || 'Olá! Preciso de um guincho urgente em Praia Grande';
    return `https://wa.me/${this.company().whatsappNumber}?text=${encodeURIComponent(text)}`;
  }

  getServiceById(id: string): ServiceItem | undefined {
    return this.services().find(s => s.id === id);
  }
}
