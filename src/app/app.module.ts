import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterModule} from '@angular/router'
import { Approute } from './app.route';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ItemModule } from './item/item.module';
import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';


import { ItemService } from './item/services/item.service';
import { PagerService } from './item/services/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    RouterModule.forRoot(Approute),
    ItemModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormBuilderModule
  ],
  providers: [ItemService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
