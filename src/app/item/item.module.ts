import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { ItemServiceComponent } from './services/itemservice.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormBuilderModule } from '../dynamic-form-builder/dynamic-form-builder.module';

import { orderRoute } from './item.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(orderRoute),
    FormsModule,
    ReactiveFormsModule,
    DynamicFormBuilderModule
  ],
  declarations: [ItemComponent, ItemServiceComponent]
})
export class ItemModule { }
