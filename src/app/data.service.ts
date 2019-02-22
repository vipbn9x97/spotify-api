import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

interface User {
  external_urls: { spotify: string };
  followers: { href: object; total: number };
  genres: string[];
  href: string;
  id: string;
  images: { height: number; url: string; width: number }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}
[] = [];
@Injectable({
  providedIn: "root"
})
export class DataService {
  private messageSource = new BehaviorSubject("");
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) {}
  current = "";
  trackid = "";
  getArtist(value: string) {
    this.current = value.split(" ").join("%20");
    if (this.current) {
      return this.http.get(
        `https://api.spotify.com/v1/search?q=${this.current}&type=artist`
      );
    } else {
      return this.http.get(
        `https://api.spotify.com/v1/search?q=bich&type=artist`
      );
    }
  }
  getTrack(value: string) {
    return this.http.get(
      `https://api.spotify.com/v1/artists/${value}/top-tracks?country=US`
    );
  }
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
