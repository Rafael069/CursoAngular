import { ApplicationConfig, DEFAULT_CURRENCY_CODE, LOCALE_ID} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideHttpClient(),
    DecimalPipe,
    CurrencyPipe,
    { provide: LOCALE_ID, useValue: 'pt', },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL',}
  ]
};
