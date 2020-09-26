import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExtendedUser } from '../interfaces/extended-user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public userDetails: ExtendedUser;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userDetails = this.route.snapshot.data.userDetails;
  }

}
