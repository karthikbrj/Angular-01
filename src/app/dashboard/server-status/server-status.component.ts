import { Component, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit{
  currentStatus=signal<'online' | 'offline' | 'unknown'>('offline');
  constructor() {
    effect(()=>{
      console.log(this.currentStatus())
    })
  }

  ngOnInit() {
    setInterval(() => {
      const rn = Math.random();
      if (rn < 0.5) {
        this.currentStatus.set('online');
      } else if (rn < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
  }
}
