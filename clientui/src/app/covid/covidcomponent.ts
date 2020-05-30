import { OnInit } from '@angular/core';
import { GoogleChartService } from '../google-chart/google-chart.service';
import {
  CovidTrackingService,
  USHistoricalDaily,
  StateHistorical
} from '../covidtracking/covidtracking.service';

export abstract class CovidComponent implements OnInit {
  protected gLib: any;

  constructor (
    protected chartServices: GoogleChartService,
    protected covidTrackingServices: CovidTrackingService
  ) {}

  protected abstract loadData();

  ngOnInit() {
    this.checkLoading();
  }

  private checkLoading() {
    if (this.chartServices.getLoaded()) {
      this.gLib = this.chartServices.getGoogle();
      this.loadData();
    } else {
      // Check again in 3 seconds
      setTimeout(this.checkLoading, 1000);
    }
  }

  public convertDate(oldDate: string) {
    return oldDate.slice(4, 6) + '-' + oldDate.slice(6, 8) + '-' + oldDate.slice(0, 4);
  }

  protected getSma(data: number[], currIndex: number, dayCount: number) {
    if(currIndex<=dayCount) {
      return data[currIndex];
    } else {
      let sma = 0;
      for(let index=currIndex-dayCount+1; index < currIndex+1; index++)  {
        sma = sma + data[index];
      }

      return sma / dayCount;

    }
  }
}