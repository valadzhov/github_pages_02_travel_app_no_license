import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { ImageSet2Type } from '../../models/travel-app-data/image-set2-type';
import { DestinationsType } from '../../models/travel-app-data/destinations-type';
import { ImageSet1Type } from '../../models/travel-app-data/image-set1-type';
import { SelectedArticlesType } from '../../models/travel-app-data/selected-articles-type';
import { TravelAppDataService } from '../../services/travel-app-data.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public travelAppDataSelectedArticles: SelectedArticlesType[] = [];
  public travelAppDataDestinations: DestinationsType[] = [];
  public travelAppDataImageSet1: ImageSet1Type[] = [];
  public travelAppDataImageSet2: ImageSet2Type[] = [];

  constructor(private travelAppDataService: TravelAppDataService) { }

  ngOnInit() {
    this.travelAppDataService.getSelectedArticles().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.travelAppDataSelectedArticles = data,
      error: (_err: any) => this.travelAppDataSelectedArticles = []
    });
    this.travelAppDataService.getDestinations().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.travelAppDataDestinations = data,
      error: (_err: any) => this.travelAppDataDestinations = []
    });
    this.travelAppDataService.getImageSet1().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.travelAppDataImageSet1 = data,
      error: (_err: any) => this.travelAppDataImageSet1 = []
    });
    this.travelAppDataService.getImageSet2().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.travelAppDataImageSet2 = data,
      error: (_err: any) => this.travelAppDataImageSet2 = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
