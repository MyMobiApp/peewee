import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { NewsPageModule } from '../news/news.module';
import { RestaurantPageModule } from '../restaurant/restaurant.module';
import { ContactPageModule } from '../contact/contact.module';
import { WorkPageModule } from '../work/work.module';
import { ECommercePageModule } from '../ecommerce/ecommerce.module';

@NgModule({
  imports: [
    IonicModule,
    RouterModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    NewsPageModule,
    RestaurantPageModule,
    ECommercePageModule,
    WorkPageModule,
    ContactPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
