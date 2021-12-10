import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorsComponent } from './calculators/calculators.component';
import { OperationsComponent } from './calculators/operations/operations.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { RowsComponent } from './form/rows/rows.component';

@NgModule({
  declarations: [AppComponent, CalculatorsComponent, OperationsComponent, FormComponent, RowsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
