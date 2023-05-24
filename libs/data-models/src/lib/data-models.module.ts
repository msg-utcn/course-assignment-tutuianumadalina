import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dataModelsRoutes } from './lib.routes';
import { DataModelsComponent } from './containers/data-models/data-models/data-models.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dataModelsRoutes),
    RouterModule.forChild(dataModelsRoutes),
  ],
  declarations: [DataModelsComponent],
})
export class DataModelsModule {}
