import { Component, OnInit } from '@angular/core';
import { MilkBox } from 'src/app/models/milkbox.model';
import { MilkBoxService } from 'src/app/services/milkbox.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddMilkBoxComponent implements OnInit {
  tutorial: MilkBox = {
    codigo: '',
    nome: ''
  };
  submitted = false;

  constructor(private milkboxService: MilkBoxService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      title: this.tutorial.codigo,
      description: this.tutorial.nome
    };

    this.milkboxService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      codigo: '',
      nome: ''
    };
  }

}
