import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  loadedFeature: string = 'recipe';
  
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
=======
  title = 'app works!';
>>>>>>> 9bcd97186962ccdcf1e97be2ab69cbc5540a522b
}
