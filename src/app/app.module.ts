import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { CodemirrorModule } from 'ng2-codemirror';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SnippetData } from './snippet-data';
import { SnippetService } from './snippet.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AddSnippetComponent } from './add-snippet/add-snippet.component';
import { SnippetDetailsComponent } from './snippet-details/snippet-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddSnippetComponent,
    SnippetDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(SnippetData),
    AppRoutingModule,
    AlertModule.forRoot(),
    CodemirrorModule
  ],
  providers: [SnippetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
