import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../../service/user.service';
import { Response } from '../../../interface/response.interface';
import { User } from '../../../interface/user.interface';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {
  // response: Response
  user: User;
  mode: 'edit' | 'locked' = 'locked';
  buttonText: 'Save Changes' | 'Edit' = 'Edit';

  constructor(private activateRoute: ActivatedRoute, private userService: UserService) {

  }
  ngOnInit(): void {
    this.user = (<User>(this.activateRoute.snapshot.data['resolveResponse'].results[0]));
    console.log(this.user)
    // this.activateRoute.paramMap.subscribe((params: ParamMap) => {
    //   console.log(params.get('uuid')!);
    //   this.userService.getUser(params.get('uuid')!).subscribe(
    //     (response: any) => {
    //       console.log(response)
    //       this.response = response;
    //     }
    //   );
    // });
  }

  changeMode(mode: 'edit' | 'locked'): void {
    console.log(mode)
    this.mode = this.mode === 'locked' ? 'edit' : 'locked';
    this.buttonText = this.buttonText === 'Edit' ? 'Save Changes' : 'Edit';

    if (mode === 'edit') {
      console.log('Update user.')
    }
  }
}
