import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Pages, BaseRoutes } from './config/page.config';

const routes: Routes = [
  //
  // Default ...
  {
    path: BaseRoutes.Default,
    redirectTo: Pages.Home.baseRoute,
    pathMatch: 'full',
  },
  //
  // Home ...
  {
    path: Pages.Home.baseRoute,
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  //
  // Components ...
  {
    path: Pages.Components.baseRoute,
    loadChildren: () =>
      import('./pages/components/components.module').then(
        (m) => m.ComponentsPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
