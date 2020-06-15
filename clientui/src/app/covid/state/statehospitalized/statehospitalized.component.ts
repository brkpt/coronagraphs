import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleChartService } from '../../../google-chart/google-chart.service';
import { CovidComponent } from '../../covidcomponent';
import { 
    CovidTrackingService,
    StateHistorical,
} from 'src/app/covidtracking/covidtracking.service';

@Component({
  selector: 'app-statehospitalized',
  templateUrl: './statehospitalized.component.html',
  styleUrls: ['./statehospitalized.component.css']
})
export class StateHospitalizedComponent extends CovidComponent {
  constructor(
    route: ActivatedRoute, 
    protected chartServices: GoogleChartService, 
    protected covidTrackingServices: CovidTrackingService
  ) { 
    super(chartServices, covidTrackingServices);
  }

  protected loadData() {
    this.covidTrackingServices.getHistoricalByState('ut').subscribe((data: StateHistorical[]) => {
      const stateData = data.sort((a: StateHistorical, b: StateHistorical) => {
          return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
      }).filter( (d: StateHistorical) => {
        if(d.hospitalizedCurrently !== null) {
          return true;
        } else {
          return false;
        }
      })

      let rawData: any[][] = [['Date', 'Hospitalizations', '3-Day SMA', '7-Day SMA']];
      let currentHospitalizations = stateData.map( (d: StateHistorical) => {
        if(!!d.hospitalizedCurrently) {
          return d.hospitalizedCurrently;
        } else {
          return 0;
        }
      });

      rawData.push(
        [
          this.convertDate(stateData[0].date.toString()), 
          currentHospitalizations[0],
          currentHospitalizations[0],
          currentHospitalizations[0],
        ]
      );
      for(let index=0; index<stateData.length; index++) {
        let sma3 = this.getSma(currentHospitalizations, index, 3);
        let sma7 = this.getSma(currentHospitalizations, index, 7);
        rawData.push(
          [
            this.convertDate(stateData[index].date.toString()), 
            currentHospitalizations[index],
            sma3, 
            sma7
          ]
        );
      }
      let chartData = this.gLib.visualization.arrayToDataTable(rawData);

      let options = {
        title: 'Currently In Hospital (UT)',
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

      let totalDeathChart = new this.gLib.visualization.ComboChart(document.getElementById('statehospitalizations'));
      totalDeathChart.draw(chartData, options);
    });
  }

}
