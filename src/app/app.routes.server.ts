import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'servicos/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [
      { id: 'carros' },
      { id: 'motos' },
      { id: 'suv' },
      { id: 'blindados' },
      { id: 'pneu' },
      { id: 'bateria' },
      { id: 'combustivel' },
      { id: 'socorro' }
    ]
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
