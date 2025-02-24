import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LandingComponent } from './landing/landing.component';
import { NgbModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, PublicRoutingModule, NgbProgressbarModule, NgbModule,FormsModule],
})
export class PublicModule {}
