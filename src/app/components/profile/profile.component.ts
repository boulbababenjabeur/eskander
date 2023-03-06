import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private service: SignUpService, private route: ActivatedRoute) {}
 person !: Person;
  id: string = '';
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getProfile(this.id);
    this.person=new Person();
  }

  getProfile(id: string) {
    this.service.getProfile(id).subscribe(
      (x) => {
       
        this.person = x as Person;

        console.log(this.person);
      },
      (error) => {
        console.log(error);
      }
    );
    console.log('----------------------------');
  }
}
