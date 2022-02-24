import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiArtistData, Artist, ArtistData } from '../models/artist.model';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {


  constructor(private http: HttpClient) { }

  getArtists() {
    return this.http.get<ApiArtistData[]>(environment.apiUrl + '/artists').pipe(
      map(response => {
        return response.map(productData => {
          return new Artist(
            productData._id,
            productData.name,
            productData.info,
            productData.image,
          );
        });
      })
    );
  }

  createArtist(artistData: ArtistData) {
    const formData = new FormData();

    Object.keys(artistData).forEach(key => {
      if (artistData[key] !== null) {
        formData.append(key, artistData[key]);
      }
    });

    return this.http.post(environment.apiUrl + '/artists', formData);
  }}