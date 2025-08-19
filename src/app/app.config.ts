import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import {provideSocketIo, SocketIoConfig} from 'ngx-socket-io'

import { routes } from './app.routes';

const socketIoConfig: SocketIoConfig = {
  url: 'http://localhost:5000',
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
