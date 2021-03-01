import { Component, OnInit } from '@angular/core';
import { MilkBox } from 'src/app/models/milkbox.model';
import { MilkBoxService } from 'src/app/services/milkbox.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './milkboxes-list.component.html',
  styleUrls: ['./milkboxes-list.component.css']
})
export class MilkboxesListComponent implements OnInit {
  milkboxes?: MilkBox[];
  currentMilkbox?: MilkBox;
  currentIndex = -1;
  nome = '';
  dataLoaded: Promise<boolean> | undefined;

  currentPage = 1;
  itemsPerPage = 10;
  pageSize = 12;

  constructor(private milkBoxService: MilkBoxService) { }

  ngOnInit(): void {
    this.retrieveMilkBox();
  }

  retrieveMilkBox(): void {
    this.milkBoxService.getAll()
      .subscribe(
        data => {
          this.milkboxes = data;
          this.dataLoaded = Promise.resolve(true);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveMilkBox();
    this.currentMilkbox = undefined;
    this.currentIndex = -1;
  }

  setActiveMilkbox(tutorial: MilkBox, index: number): void {
    this.currentMilkbox = tutorial;
    this.currentIndex = index;
  }

  removeAllMilkBoxes(): void {
    this.milkBoxService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchNome(): void {
    this.currentMilkbox = undefined;
    this.currentIndex = -1;

    this.milkBoxService.findByNome(this.nome)
      .subscribe(
        data => {
          this.milkboxes = data;
        },
        error => {
          console.log(error);
        });
  }

  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage * (pageNum - 1);
  }

  public changePagesize(num: number): void {
    this.itemsPerPage = this.pageSize + num;
  }
}
