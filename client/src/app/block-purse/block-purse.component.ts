import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-block-purse',
  templateUrl: './block-purse.component.html',
  styleUrls: ['./block-purse.component.css']
})
export class BlockPurseComponent implements OnInit {
  selectedBoard: string;
  selectedSection: string;
  selectedMachine: string;
  selectedSlot: string;
  numberOfHours: number;

  constructor() { }

  ngOnInit(): void {
    // Fetch initial data for dropdowns or initialize variables
  }

  onSubmit(): void {
    // Handle submission logic, e.g., send data to backend or emit an event
  }
}
