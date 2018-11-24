import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { NewsPage } from '../news/news.page';
import { RestaurantPage } from '../restaurant/restaurant.page';
import { ECommercePage } from '../ecommerce/ecommerce.page';
import { WorkPage } from '../work/work.page';
import { ContactPage } from '../contact/contact.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(news:news)',
        pathMatch: 'full',
      },
      {
        path: 'news',
        outlet: 'news',
        component: NewsPage
      },
      {
        path: 'restaurant',
        outlet: 'restaurant',
        component: RestaurantPage
      },
      {
        path: 'ecommerce',
        outlet: 'ecommerce',
        component: ECommercePage
      },
      {
        path: 'work',
        outlet: 'work',
        component: WorkPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(news:news)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
