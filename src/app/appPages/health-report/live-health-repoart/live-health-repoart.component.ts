import {Component,OnInit ,ViewChild} from '@angular/core';
import { Chart } from 'chart.js';
import { CattleInfoService} from '../../../appServices/cattle-info.service';

@Component({
    selector:'live-health-repoart',
    templateUrl:'./live-health-repoart.component.html'
})

export class LiveHealthRepoart implements OnInit{
    public cattleType:any;
    
    constructor(private cattleInfoService:CattleInfoService){}

    ngOnInit(): void {
       
      this.getCattleInfo();
       }

      getCattleInfo(){
        this.cattleInfoService.receiveCattleInfo().subscribe(
          resp=>{
            this.cattleType=resp;
            console.log("Cattles are :",resp);
          },err=>{ console.log(err); }
        )
      }

       


 
}