import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
// import { ToastrService } from 'ngx-toastr/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'random-card';
  user: any;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (user: any) => {
        console.log(user);
        this.user = user.results[0];
      },
      (err) => {
        console.log(err.status);
      }
    );
  }
}
