import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit{

  expLab: Experiencia = null;

  constructor(
    private expSev: SExperienciaService, 
    private activRouter:ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    const id = this.activRouter.snapshot.params['id']
    this.expSev.detail(id).subscribe( data => {
      this.expLab = data;
    }, err => {
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    })
  }

  onUpdate():void{
    const id = this.activRouter.snapshot.params['id']
    this.expSev.update(id, this.expLab).subscribe( data => {
      this.router.navigate(['']);
    },err => {
      alert("Error al modificar la experiencia");
      this.router.navigate([''])
    }
    
    )
  }

}
