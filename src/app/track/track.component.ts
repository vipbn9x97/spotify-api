import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Routes } from "@angular/router";
import { DataService } from "../data.service";

interface Track {
  tracks?: {
    name?: string;
    preview_url?: "string";
  };
}
// [];
@Component({
  selector: "app-track",
  templateUrl: "./track.component.html",
  styleUrls: ["./track.component.css"]
})
export class TrackComponent implements OnInit {
  id: string;
  finaldata;

  constructor(
    private activatedRoute: ActivatedRoute,
    private data: DataService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.data.getTrack(this.id).subscribe((data: Track) => {
        this.finaldata = data.tracks;
      });
    });
  }
}
