import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./components/entry.routes').then((m) => m.remoteRoutes),
  },
];
