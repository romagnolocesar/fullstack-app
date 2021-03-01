import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MilkBox } from 'src/app/models/milkbox.model';
import { MilkBoxService } from 'src/app/services/milkbox.service';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

interface Alert {
  type: string;
  message: string;
}
@Component({
  selector: 'app-tutorials-list',
  templateUrl: './milkboxes-list.component.html',
  styleUrls: ['./milkboxes-list.component.css']
})
export class MilkboxesListComponent implements OnInit {
  @ViewChild('alert', { static: true }) alert: ElementRef | undefined;

  milkboxes?: MilkBox[];
  currentMilkbox: MilkBox = {};
  fordeleteMilkbox: MilkBox = {
    id: '',
    codigo: '',
    nome: ''
  };
  currentIndex = -1;
  nome = '';

  deletedItem: boolean | undefined;
  dataLoaded: Promise<boolean> | undefined;


  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(
    private milkBoxService: MilkBoxService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 50,
      language: {
        search: 'Buscar:',
        lengthMenu: 'Mostrar _MENU_ produtos',
        info: 'Mostrando desde _START_ at&eacute; _END_ de _TOTAL_ produtos',
        infoEmpty: 'Nenhum Produto.',
        infoFiltered: '(filtrado _MAX_ elementos total)',
        infoPostFix: '',
        loadingRecords: 'Carregando produtos...',
        zeroRecords: 'Nenhum Produto Encontrado',
        emptyTable: 'Nenhum dado disponivel na tabela',
        paginate: {
          first: 'Primeiro',
          previous: 'Anterior',
          next: 'Pr&oacuteximo',
          last: '&Uacuteltimo'
        }
      }
    };

    this.retrieveMilkBox();
  }

  retrieveMilkBox(): void {
    this.milkBoxService.getAll()
      .subscribe(
        data => {
          this.milkboxes = data;
          this.dtTrigger.next();
          this.dataLoaded = Promise.resolve(true);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveMilkBox();
    this.currentMilkbox = {};
    this.currentIndex = -1;
  }

  setActiveMilkbox(milkBox: MilkBox, index: number): void {
    this.currentMilkbox = milkBox;
    this.currentIndex = index;
  }

  deleteMilkbox(): void {
    this.milkBoxService.delete(this.currentMilkbox.id)
      .subscribe(
        data => {
          console.log(data);
          // this.router.navigate(['/milkboxes']);
          this.retrieveMilkBox();
          this.milkboxes = data;
        },
        error => {
          console.log(error);
        });
  }

  deleteMilkboxById(milkBox: MilkBox): void {
    this.fordeleteMilkbox = milkBox;
    this.milkBoxService.delete(this.fordeleteMilkbox.id)
      .subscribe(
        data => {
          console.log(data);
          // this.router.navigate(['/milkboxes']);
          this.deletedItem = true;
          this.load('/milkboxes');
        },
        error => {
          this.fordeleteMilkbox = {};
          console.log(error);
        });
  }


  closeAlert(type: string) {
    if (type === 'deleted-item'){}
    this?.alert?.nativeElement.classList.remove('show');
  }


  load(val: string) {
    if (val === this.router.url) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.navigate([val]);
    }
  }
}
