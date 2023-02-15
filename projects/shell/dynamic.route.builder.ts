import {
  loadRemoteModule,
  LoadRemoteModuleOptions,
  RemoteConfig,
  Manifest,
  getManifest,
} from '@angular-architects/module-federation';
import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { routes as APP_ROUTES } from './src/app/app-routing.module';

type CustomConfig = {
  [remote: string]: {
    type: 'module' | 'script';
    remoteEntry: string;
    routePath: string;
    ngModule: string;
    routeConfig: LoadRemoteModuleOptions;
  };
};

export function buildRoutes() {
  const router = inject(Router);
  const options = getManifest<CustomConfig>();
  const lazyMfRoutes: Routes = Object.keys(options).map((key) => {
    const entry = options[key];

    return {
      path: entry.routePath,
      loadChildren: () =>
        loadRemoteModule(entry.routeConfig).then((m) => m[entry.ngModule]),
    };
  });

  router.resetConfig([...lazyMfRoutes, ...APP_ROUTES]);
}
