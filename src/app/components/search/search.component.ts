import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';
@Component({
  selector: 'sp-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  searchStr:string;
  searchRes: Artist[];
  constructor(private _spotifyService: SpotifyService) { 

  }

  searchMusic(searchStr:string) {
    this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
      this.searchRes = res.artists.items;
    });
  }
}
