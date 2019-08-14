import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailsComponent } from './emails.component';
import { EmailsRoutingModule } from './emails-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmailsComponent],
  imports: [
    CommonModule,
    EmailsRoutingModule,
    FormsModule,

    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [EmailsComponent]
})
export class EmailsModule {}
