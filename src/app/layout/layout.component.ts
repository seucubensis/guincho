import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FloatingCtaComponent } from './floating-cta/floating-cta.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FloatingCtaComponent],
  template: `
    <div class="min-h-screen bg-white text-black antialiased pb-16 md:pb-0 flex flex-col justify-between">
      <app-header />

      <main class="flex-grow">
        <router-outlet />
      </main>

      <app-footer />
      <app-floating-cta />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {}
