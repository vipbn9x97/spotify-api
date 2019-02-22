import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { TrackComponent } from "./track/track.component";
import { ArtistComponent } from "./artist/artist.component";
import { TokenInterceptorService } from "./tokenInterceptorService";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TrackComponent,
    ArtistComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
