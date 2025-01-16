import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-loader',
  templateUrl: './button-loader.component.html',
  styleUrl: './button-loader.component.scss'
})
export class ButtonLoaderComponent implements OnInit{
  @Input() isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void { }

}
