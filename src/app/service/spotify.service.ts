import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({providedIn: 'root'})

export class SpotifyService {
    static getArtista(finish: string) {
        throw new Error('Method not implemented.');
    }
    static getArtistas(finish: string) {
        throw new Error('Method not implemented.');
    }
    constructor(private http: HttpClient) {}

    getQuery(query: string) {
        const url = `https://api.spotify.com/v1/${query}`;

        const headers = new HttpHeaders({
            Authorization:
            'Bearer BQChLWM_wv6RVlwYWF-k7sHeey69NAgV4aTMict4XOX2eUMjtwOq4TPaUiJkLj1CnORjoSJ1bTb_cRu6orm5FEhKOtI6IKrn3ri1uZnFdni8VNUSUQhSxEEglrqg7GmCb6_VI5dPiEm0EMVygSWkNO0PmiOXRNjryO5ZN_3lS_NooONtfmLmUJdKVMXijA_VhMsmsEGO36UT2sThzq79kBSljuqEUKtEgXXN1N44EwutNtSs2sv0ST3XoPPNHll-uFUYSqgSAK-xZNXZBNEZqEmcZCtKhKWu'
        });

        return this.http.get(url, { headers });
    }

    getNewReleases() {
        return this.getQuery('browse/new-releases?limit=20').pipe(
            map(data => data[' albums '].items)
        );
    }

    getArtist(finish: string) {
        return this.getQuery(`search?q=${finish}&type=artist&limit=15`), pipe(
            map(data => data[' artist '].items)
        );
    }
    getArtista(id: string) {
        return this.getQuery(`artists/${id}`);
      }

      getTopTracks(id: string) {
        return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
          map(data => data[' tracks '])
        );
      }
}

