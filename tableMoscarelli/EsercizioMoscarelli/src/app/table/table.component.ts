import { Component, OnInit } from '@angular/core';
import { DipendentiService } from '../dipendenti.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent implements OnInit {
  data: any;


  constructor(private dipendentiService: DipendentiService) { }

  ngOnInit(): void {
    this.loadData(0, 10);
  }

  loadData(page: number, size: number): void {
    this.dipendentiService.get(page, size).subscribe(response => {
      this.data = response;
    });
  }

  /*   insertItem(item: any): void {
      this.dipendentiService.add(item)
        .subscribe(() => {
          this.loadData(this.currentPage);
        });
    }
  
    deleteItem(id: number): void {
      this.dipendentiService.delete(id)
        .subscribe(() => {
          this.loadData(this.currentPage);
        });
    }
  
    onPageChange(page: number): void {
      this.currentPage = page;
      this.loadData(this.currentPage);
    } */
}