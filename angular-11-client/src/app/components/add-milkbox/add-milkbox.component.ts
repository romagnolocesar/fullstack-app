import { Component, OnInit } from '@angular/core';
import { MilkBox } from 'src/app/models/milkbox.model';
import { MilkBoxService } from 'src/app/services/milkbox.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-milkbox.component.html',
  styleUrls: ['./add-milkbox.component.css']
})
export class AddMilkBoxComponent implements OnInit {
  milkBox: MilkBox = {
    codigo: '',
    nome: ''
  };
  submitted = false;

  constructor(private milkboxService: MilkBoxService) { }

  ngOnInit(): void {
  }

  saveMilkBox(): void {
    const data = {
      codigo: this.milkBox.codigo,
      nome: this.milkBox.nome
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

  newMilkbox(): void {
    this.submitted = false;
    this.milkBox = {
      codigo: '',
      nome: ''
    };
  }

}
