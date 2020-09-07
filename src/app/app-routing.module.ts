import { NgModule } from '@angular/core';
import { Pages, BaseRoutes } from './config/page.config';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  // Core ...
  {
    path: Pages.Core.baseRoute,
    loadChildren: () =>
      import('./pages/core/core.module').then((m) => m.CorePageModule),
  },
  //
  // Services ...
  {
    path: Pages.Services.baseRoute,
    loadChildren: () =>
      import('./pages/services/services.module').then(
        (m) => m.ServicesPageModule
      ),
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
  //
  // TabsNavs ...
  {
    path: Pages.TabsNav.baseRoute,
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  //
  // Themes ...
  {
    path: Pages.Themes.baseRoute,
    loadChildren: () =>
      import('./pages/themes/themes.module').then((m) => m.ThemesPageModule),
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
