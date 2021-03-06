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
  templateUrl: './statetesting.component.html',
  styleUrls: ['./statetesting.component.css']
})
export class StateTestingComponent extends CovidComponent {
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

        let testingDeltas: number[] = [];
        for(let index=0;index<stateData.length; index++) {
            testingDeltas.push(stateData[index].totalTestResultsIncrease);
        }
        let rawData: any[][] = [['Date', 'Positive', '3 Day SMA', '7 Day SMA']];
        rawData.push( [this.convertDate(stateData[0].date.toString()), stateData[0].totalTestResultsIncrease, stateData[0].totalTestResultsIncrease, stateData[0].totalTestResultsIncrease]);
        for(let index=1; index<stateData.length; index++) {
          let sma3 = this.getSma(testingDeltas, index, 3);
          let sma7 = this.getSma(testingDeltas, index, 7);
          rawData.push( [this.convertDate(stateData[index].date.toString()), stateData[index].totalTestResultsIncrease, sma3, sma7]);
        }
        let chartData = this.gLib.visualization.arrayToDataTable(rawData);

        let options = {
            title: 'Daily Total Tests (' + state + ')',
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

        let totalStateTesting = new this.gLib.visualization.ComboChart(document.getElementById('statetesting'));

        totalStateTesting.draw(chartData, options);

    });
  }
}
