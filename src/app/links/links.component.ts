import { Component, OnInit } from '@angular/core';
import { LinksService } from '../shared/links.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styles: ['.links-div { padding-left: 15px; }']
})
export class LinksComponent implements OnInit {

  links;

  constructor(private _linksService: LinksService) { }

  ngOnInit() {
    this.links = this._linksService.links;
  }

  addLink(name, url) {
    this._linksService.addLink(name, url);
  }

}
