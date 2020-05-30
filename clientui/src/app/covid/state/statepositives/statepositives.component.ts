import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleChartService } from '../../../google-chart/google-chart.service';
import { CovidComponent } from '../../covidcomponent';
import { 
    CovidTrackingService,
    StateHistorical,
} from 'src/app/covidtracking/covidtracking.service';

@Component({
  selector: 'app-statetesting',
  templateUrl: './statepositives.component.html',
  styleUrls: ['./statepositives.component.css']
})
export class StatePositivesComponent extends CovidComponent {
  constructor(
      route: ActivatedRoute, 
      protected chartServices: GoogleChartService, 
      protected covidTrackingServices: CovidTrackingService
  ) {
    super(chartServices, covidTrackingServices);
  }

  protected loadData() {
    let state='UT';
    this.covidTrackingServices.getHistoricalByState(state).subscribe((data: StateHistorical[]) => {
        const stateData = data.sort((a: StateHistorical, b: StateHistorical) => {
            return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
        });

        let rawData: any[][] = [['Date', 'Positive', '3 Day SMA', '7 Day SMA']];
        let positives = stateData.map( (d: StateHistorical) => { return d.positiveIncrease; });
        rawData.push( [this.convertDate(stateData[0].date.toString()), stateData[0].positive, stateData[0].positive, stateData[0].positive]);
        for(let index=1; index<stateData.length; index++) {
          let sma3 = this.getSma(positives, index, 3);
          let sma7 = this.getSma(positives, index, 7);
          rawData.push( [this.convertDate(stateData[index].date.toString()), positives[index], sma3, sma7]);
        }
        let chartData = this.gLib.visualization.arrayToDataTable(rawData);

        let options = {
            title: 'Daily Positive Tests (' + state + ')',
            width: 1100,
            height: 700,
            seriesType: 'bars',
            series: {
              0: {
                color: 'blue'
              },
              1: {
                type: 'line',
                color: 'orange'
              },
              2: {
                type: 'line',
                color: 'red'
              }
            }
        };

        let totalStateTesting = new this.gLib.visualization.ComboChart(document.getElementById('statepositives'));

        totalStateTesting.draw(chartData, options);

    });
  }
}
