import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { SourceComponent } from './source/source.component';
import { HomeComponent } from './home/home.component';
import { IsoToDatePipe } from './iso-to-date.pipe';
import { PostComponent } from './source/post.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { ShortUrlPipe } from './short-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SourceComponent,
    HomeComponent,
    IsoToDatePipe,
    ShortUrlPipe,
    PostComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('/stupid-rss-reader/ngsw-worker.js', {enabled: environment.production})
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
