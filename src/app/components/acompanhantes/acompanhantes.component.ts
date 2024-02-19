import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Moment } from 'src/app/Moments';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-acompanhantes',
  templateUrl: './acompanhantes.component.html',
  styleUrls: ['./acompanhantes.component.scss']
})
export class AcompanhantesComponent implements OnInit {

  constructor(private momentService: MomentService, private http: HttpClient) {}

  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl = environment.baseApiUrl;

  faSearch = faSearch;
  serarchTerm: string = '';

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {

      const data = items.data

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
        );
      });
        this.allMoments = data;
        this.moments = data;
    });
  }
  search(e: Event):void {
    const target = e.target as HTMLInputElement
    const value = target.value 

    this.moments = this.allMoments.filter(moments => {
     return moments.title.toLowerCase().includes(value);
    });
  }
  
  

}
