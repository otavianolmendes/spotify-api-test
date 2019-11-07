import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/service/spotify.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [],
})
export class HomeComponent {

    newSong: any[] = [];
    loading: boolean;

    error: boolean;
    messageError: string;

    constructor(private spotify: SpotifyService) {

        this.loading = true;
        this.error = false;

        this.spotify.getNewReleases()
            .subscribe( (data: any) => {

                this.newSong = data;
                this.loading = false;
            }, ( errorService ) => {

                this.loading = false;
                this.error = true;
                this.messageError = errorService.error.error.message;
            });
    }
}
