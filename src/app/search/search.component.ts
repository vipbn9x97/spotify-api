import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
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
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  value: string;


  constructor(private data: DataService) {}

  ngOnInit() {}

  search() {

    this.data.changeMessage(this.value)
  }
  
}
