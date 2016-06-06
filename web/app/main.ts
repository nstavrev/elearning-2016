import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';

declare var $:any;

bootstrap(AppComponent).then(() => {
    $("#loader").remove();
})