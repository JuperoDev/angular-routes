import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  // External HTML file for the AppComponent
  styleUrls: ['./app.component.css'],    // Use external styles (if any)
  standalone: true,
  imports: [RouterModule, CommonModule],
})
export class AppComponent {}
