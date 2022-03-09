import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodosPageRoutingModule } from './todos-routing.module';

import { TodosPage } from './todos.page';
import { HttpClientModule } from '@angular/common/http';
import { TodosService } from '../todos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodosPageRoutingModule,
    HttpClientModule
  ],
  declarations: [TodosPage],
  providers: [TodosService]
})
export class TodosPageModule {}
