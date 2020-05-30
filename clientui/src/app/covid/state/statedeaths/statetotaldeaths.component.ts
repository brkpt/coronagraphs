import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleChartService } from '../../../google-chart/google-chart.service';
import { CovidComponent } from '../../covidcomponent';
import { 
    CovidTrackingService,
    StateHistorical,
} from 'src/app/covidtracking/covidtracking.service';

@Component({
  selector: 'app-statedeaths',
  templateUrl: './statetotaldeaths.component.html',
  styleUrls: ['./statetotaldeaths.component.css']
})
export class StateTotalDeathsComponent extends CovidComponent {
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

        let rawData: any[][] = [['Date','Deaths']];
        stateData.forEach( (d: StateHistorical) => {
            rawData.push( [this.convertDate(d.date.toString()), d.deathIncrease]);
        });
        let chartData = this.gLib.visualization.arrayToDataTable(rawData);

        let options = {
            title: 'Daily Deaths (' + state + ')',
            width: 1100,
            height: 700,
            seriesType: 'bars',
        };

        let totalDeathChart = new this.gLib.visualization.ComboChart(document.getElementById('stateDeaths'));

        totalDeathChart.draw(chartData, options);

    });
  }
}
