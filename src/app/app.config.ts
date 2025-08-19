import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import {provideSocketIo, SocketIoConfig} from 'ngx-socket-io'

import { routes } from './app.routes';
import { environment } from '../environments/environment.development';

const socketIoConfig: SocketIoConfig = {
  url: environment.apiUrl,
  // options: {
  //   path: '/ws/socket.io',
  // }  
};

export const appConfig: ApplicationConfig = {
  providers: [    
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
    provideSocketIo(socketIoConfig)
  ]
};
