import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleChartService } from '../../../google-chart/google-chart.service';
import { 
    CovidTrackingService,
    StateHistorical,
} from 'src/app/covidtracking/covidtracking.service';

@Component({
  selector: 'app-statetesting',
  templateUrl: './statetesting.component.html',
  styleUrls: ['./statetesting.component.css']
})
export class StateTestingComponent implements OnInit {
  private gLib: any = null;

  constructor(
      route: ActivatedRoute, 
      private chartServices: GoogleChartService, 
      private covidTrackingServices: CovidTrackingService
  ) {
  }

  ngOnInit() {
      this.checkLoading();
  }

  private checkLoading() {
      if(this.chartServices.getLoaded()) {
          this.gLib = this.chartServices.getGoogle();
          this.getStateHistorical();
      } else {
          // Check again in 3 seconds
          setTimeout(this.checkLoading, 1000);
      }
  }

  public convertDate(oldDate: string) {
      return oldDate.slice(4,6) + '-' + oldDate.slice(6,8) + '-' + oldDate.slice(0,4);
  }
  
  private getStateHistorical() {
    let state='UT';
    this.covidTrackingServices.getHistoricalByState(state).subscribe((data: StateHistorical[]) => {
        const stateData = data.sort((a: StateHistorical, b: StateHistorical) => {
            return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
        });

        let rawData: any[][] = [['Date', 'Positive']];
        rawData.push( [this.convertDate(stateData[0].date.toString()), stateData[0].positive]);
        for(let index=1; index<stateData.length; index++) {
          let testingDelta = stateData[index].totalTestResults - stateData[index-1].totalTestResults;
          let positiveDelta = stateData[index].positive - stateData[index-1].positive;
          rawData.push( [this.convertDate(stateData[index].date.toString()), positiveDelta]);
        }
        let chartData = this.gLib.visualization.arrayToDataTable(rawData);

        let options = {
            title: 'Daily Positive Tests (' + state + ')',
            width: 1100,
            height: 700,
            seriesType: 'bars',
        };

        let totalStateTesting = new this.gLib.visualization.ComboChart(document.getElementById('statetesting'));

        totalStateTesting.draw(chartData, options);

    });
  }
}
