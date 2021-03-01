import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { MilkBox } from 'src/app/models/milkbox.model';
import { MilkBoxService } from 'src/app/services/milkbox.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-milkbox.component.html',
  styleUrls: ['./add-milkbox.component.css']
})
export class AddMilkBoxComponent implements OnInit {
  @ViewChild('alert', { static: true }) alert: ElementRef | undefined;
  milkBox: MilkBox = {
    codigo: '',
    nome: ''
  };
  submitted = false;
  addedItem: boolean | undefined;

  constructor(
    private milkboxService: MilkBoxService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

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
          this.addedItem = true;
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  closeAlert(type: string) {
    if (type === 'added-item'){
      this.router.navigate(['/milkboxes']);
    }
    this?.alert?.nativeElement.classList.remove('show');
  }

  newMilkbox(): void {
    this.submitted = false;
    this.milkBox = {
      codigo: '',
      nome: ''
    };
  }

}
