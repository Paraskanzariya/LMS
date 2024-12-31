import { Component, OnInit } from '@angular/core';
declare var FS: any; // FullStory variable

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {
  isShow: boolean = true;  // This property controls the sidebar state (collapsed or expanded)

  constructor() { }

  ngOnInit(): void {
    // Your existing ngOnInit logic can go here
  }

  // Method to toggle the sidebar state
  toggleSidebar(): void {
    this.isShow = !this.isShow;  // Toggle the isShow property
  }
}
