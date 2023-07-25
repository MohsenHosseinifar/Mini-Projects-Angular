import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toastr';
  constructor(private toastr:ToastrService){}
  showError(){
this.toastr.warning("no allow save item....")
  }
  showSacses(){
    this.toastr.success("save item succ....")
  }
}
