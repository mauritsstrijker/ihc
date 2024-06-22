import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ThemeService } from './core/services/theme.service';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { PrimeNGConfigService } from './core/services/primeng-config.service';
import { ToastService } from './core/services/toast.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    RouterOutlet,
    CardModule,
    ButtonModule,
    InputSwitchModule,
    ToastModule,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'template';

  themeService = inject(ThemeService);
  primengConfigService = inject(PrimeNGConfigService);

  // Opcional
  darkModeChecked!: boolean;

  ngOnInit() {
    this.themeService.setup();
    this.primengConfigService.setup();

    // Opcional
    this.darkModeChecked = this.themeService.getTheme() === 'dark';
  }

  // Opcional
  switchTheme() {
    this.themeService.switchTheme();
  }

  // Opcional
  toastService = inject(ToastService);
  showToast() {
    this.toastService.notify('MPS Informática', 'Notificando...');
  }

  // Opcional (ícones encontrados na documentação do PrimeIcons)
  showToastWithIcon() {
    this.toastService.notify(
      'MPS Informática',
      'Notificando com ícone...',
      'pi-bell'
    );
  }
}
