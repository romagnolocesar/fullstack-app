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
          this.currentMilkbox = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateMilkbox(): void {
    this.message = '';

    this.milkboxService.update(this.currentMilkbox.id, this.currentMilkbox)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }
}
