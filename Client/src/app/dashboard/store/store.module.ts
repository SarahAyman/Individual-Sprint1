import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { StoreRoutingModule } from './store-routing.module';

import { StoreComponent } from './store.component';
import { StoreService } from './store.service';

@NgModule({
  imports: [ThemeModule, StoreRoutingModule],
  declarations: [StoreComponent],
  providers: [StoreService]
})
export class StoreModule {}