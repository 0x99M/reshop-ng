import { bootstrapApplication } from '@angular/platform-browser';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { App } from './app/app';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './app/interceptors/auth/auth-interceptor-interceptor';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideIonicAngular({
      mode: 'md'
    }),
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
});