// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

// Core Module
import { CoreModule } from '../../core/core.module';

// Routing Module
import { PrivateRoutingModule } from './private-routing.module';

// Component
import { PrivateComponent } from './private.component';

@NgModule({
  imports: [
    CommonModule,
    PrivateRoutingModule,
    CoreModule
  ],
  declarations: [
    PrivateComponent
  ],
  entryComponents: []
})
export class PrivateModule {}
