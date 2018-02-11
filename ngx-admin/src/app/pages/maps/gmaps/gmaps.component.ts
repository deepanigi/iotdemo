import { Component } from '@angular/core';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  template: `
    <nb-card>
      <nb-card-header>
      <div class="input-group">
        <div class="input-group-btn" ngbDropdown>
          <button type="button" class="btn btn-success dropdown-toggle" ngbDropdownToggle>
            Action
          </button>
          <ul class="dropdown-menu">
            <li class="dropdown-item">Action</li>
            <li class="dropdown-item">Another action</li>
            <li class="dropdown-item">Something else here</li>
            <div role="separator" class="dropdown-divider"></div>
            <li class="dropdown-item">Separated link</li>
          </ul>
        </div>
        
      </div>







      </nb-card-header>
      <nb-card-body>
        <agm-map [latitude]="lat" [longitude]="lng">
          <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
        </agm-map>
      </nb-card-body>
    </nb-card>
  `,
})
export class GmapsComponent {

  lat: number = 51.678418;
  lng: number = 7.809007;
}
