import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/types';
import { Album } from '../../models/album.model';
import { fetchAlbumsRequest } from '../../store/albums.actions';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.sass']
})
export class ArtistDetailsComponent implements OnInit {
  albums: Observable<Album[]>
  loading: Observable<boolean>
  error: Observable<null | string>

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.albums = store.select(state => state.albums.albums);
    this.loading = store.select(state => state.albums.fetchLoading);
    this.error = store.select(state => state.albums.fetchError);
  }

  ngOnInit(): void {
    this.store.dispatch(fetchAlbumsRequest({id: this.route.snapshot.params['id']}));
  }


}
