import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { AuthService } from '../auth-service.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [FlexLayoutModule, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnChanges, OnInit {

  isLogin: boolean = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.isLogin = this.authService.getLogin();
    console.log("here login ", this.authService.getLogin());
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("here changes", changes);
  }

  logout() {
    this.authService.setLogin(false);
  }

}
