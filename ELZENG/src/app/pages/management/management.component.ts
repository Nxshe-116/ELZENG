import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  imports: [],
  templateUrl: './management.component.html',
  styleUrl: './management.component.css'
})
export class ManagementComponent implements OnInit{
  ngOnInit() {
    
      window.scrollTo(0, 0); // Reset scroll to top on route change
    };
  }