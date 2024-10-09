import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for NgIf
import { Task } from './task';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  standalone: true,
  styleUrls: ['./task.component.css'],
  imports: [CommonModule, MatCardModule] // Include CommonModule for NgIf
})
export class TaskComponent {
  @Input() task: Task | undefined = undefined;
  @Output() edit = new EventEmitter<Task>();
}
