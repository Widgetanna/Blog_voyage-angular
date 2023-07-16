import { Component } from '@angular/core';
import { TemperatureService } from 'src/app/services/temperature.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  temperature!: number;
  cityName: string = '';

  constructor(private temperatureService: TemperatureService) { }

  ngOnInit(): void {
    this.temperatureService.getTemperature().subscribe((response: any) => {
      this.temperature = response.temperature;
      this.cityName = response.cityName;
    });
  }
}
