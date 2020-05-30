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
      });

      let rawData: any[][] = [['Date', 'Hospitalizations']];
      stateData.forEach((d: StateHistorical) => {
        rawData.push([this.convertDate(d.date.toString()), d.hospitalizedIncrease]);
      });
      let chartData = this.gLib.visualization.arrayToDataTable(rawData);

      let options = {
        title: 'Currently In Hospital (UT)',
        width: 1100,
        height: 700,
        seriesType: 'bars',
      };

      let totalDeathChart = new this.gLib.visualization.ComboChart(document.getElementById('hospitalizations'));
      totalDeathChart.draw(chartData, options);
    });
  }

}
