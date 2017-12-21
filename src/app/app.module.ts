import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SpinnerComponentModule } from 'ng2-component-spinner';

import { DataService } from './data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
      SpinnerComponentModule,
        AppRoutingModule,
       // Ng4LoadingSpinnerModule.forRoot()
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
