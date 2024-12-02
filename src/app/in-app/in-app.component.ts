import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxAvatarComponent, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-in-app',
  imports: [RouterLink, RouterOutlet, IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxAvatarComponent, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './in-app.component.html',
  styleUrls: ['./in-app.component.scss']
})
export class InAppComponent {
}
