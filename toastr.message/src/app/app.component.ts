import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from "ngx-ui-loader";
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'toastr';
  closeResult = '';
  ngOnInit(): void {}
  constructor(
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private modalService: NgbModal
  ) {}
  open(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
  showError() {
    this.toastr.warning('no allow save item....');
    this.ngxService.start(); 
    setTimeout(() => {
      this.ngxService.stop(); 
    }, 5000);
  }
  showSuccess() {
    this.toastr.success('save item succ....');
    
  }
}