import { Component, OnInit } from '@angular/core';
import { MilkBoxService } from 'src/app/services/milkbox.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MilkBox } from 'src/app/models/milkbox.model';

@Component({
  selector: 'app-milkbox-details',
  templateUrl: './milkbox-details.component.html',
  styleUrls: ['./milkbox-details.component.css']
})
export class MilkboxDetailsComponent implements OnInit {
  currentMilkbox: MilkBox = {
    codigo: '',
    nome: ''
  };
  message = '';

  dataLoaded: Promise<boolean> | undefined;

  constructor(
    private milkboxService: MilkBoxService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getMilkbox(this.route.snapshot.params.id);
  }

  getMilkbox(id: string): void {
    this.milkboxService.get(id)
      .subscribe(
        data => {
          this.dataLoaded = Promise.resolve(true);
          this.currentMilkbox = data;
        },
        error => {
          this.dataLoaded = Promise.resolve(true);
          console.log(error);
        });
  }

  updateMilkbox(): void {
    this.message = '';

    this.milkboxService.update(this.currentMilkbox.id, this.currentMilkbox)
      .subscribe(
        response => {
          this.dataLoaded = Promise.resolve(true);
          this.message = response.message ? response.message : 'Produto atualizado com sucesso!';
        },
        error => {
          this.dataLoaded = Promise.resolve(true);
          console.log(error);
        });
  }
}
