import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
interface User {
  artists: {
    href: string;
    items: {
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
    }[];
    limit:number;
    next:string;
    offset: number;
    previous: object;
    total: number;
  };
}
@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist.component.css"]
})
export class ArtistComponent implements OnInit {
  value;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.currentMessage.subscribe((message) => {
      this.data.getArtist(message).subscribe((data: User )=>{
        this.value =data.artists.items; 
        
      })
    })
  }
}
