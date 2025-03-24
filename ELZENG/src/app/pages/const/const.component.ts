import { Component, OnInit } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-const',
  imports: [
    RouterLink
  ],
  templateUrl: './const.component.html',
  styleUrl: './const.component.css'
})
export class ConstComponent implements OnInit{
  ngOnInit() {
    
      window.scrollTo(0, 0); // Reset scroll to top on route change
    };
  }
