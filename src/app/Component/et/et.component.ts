import {Component, OnInit} from '@angular/core';
import {Salle} from "../../Models/Entity/Salle/salle";
import {SalleService} from "../../Services/Salle/salle.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-et',
  templateUrl: './et.component.html',
  styleUrls: ['./et.component.css']
})
export class ETComponent implements OnInit {

  constructor(private salleService:SalleService,private http:HttpClient) {
  }

  styleString = ''

  ngOnInit(): void {
    this.getEmploiDuTemps()
    this.http.get('../../assets/css/output.css',{responseType : "text"}).subscribe((data:any) => {
      this.styleString = data
    })
  }

  emploisDuTemps:Array<Salle> = []

  getEmploiDuTemps() {
    this.salleService.getAllSalles().subscribe((salles:any) => {
      this.emploisDuTemps = salles
    })
  }
  genererPDF() {
    const printArea = document.getElementById('emploiDuTemps');
    const printWindow = window.open('', 'PRINT');
    printWindow?.document.write(`<html><head><style>${this.styleString}</style></head><body>${printArea?.innerHTML}</body></html>`);
    printWindow?.document.close();
    printWindow?.focus();
    printWindow?.print();
  }
}
