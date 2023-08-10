import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lack-of-employment',
  templateUrl: './lack-of-employment.component.html',
  styleUrls: ['./lack-of-employment.component.css'],
})
export class LackOfEmploymentComponent implements OnInit {
  Design_type = [
    { value: 'eshteghal-0', viewValue: '8888 - سرشماری' },
    { value: 'eshteghal-1', viewValue: '7781 - دانش آموزی 1401' },
    { value: 'eshteghal-2', viewValue: '7780 - دانش آموزی 1400' },
    { value: 'eshteghal-3', viewValue: '6670 - همسر ایرانی 1401' },
    { value: 'eshteghal-4', viewValue: '6669 - همسر ایرانی 1400' },
    { value: 'eshteghal-5', viewValue: '6161 - جدیدالورود 1400' },
    { value: 'eshteghal-6', viewValue: '5557 - تمدید گذرنامه خانواری 1400' },
    { value: 'eshteghal-7', viewValue: '3333 - اشتغال گذرنامه ای' },
    {
      value: 'eshteghal-8',
      viewValue: '3132 - سرشماری ویژه استان خراسان رضوی',
    },
    { value: 'eshteghal-9', viewValue: '3131 - بازشماری' },
    { value: 'eshteghal-10', viewValue: '1770 - هویت 16' },
    { value: 'eshteghal-11', viewValue: '7780 - دانش آموزی 1400' },
    { value: 'eshteghal-12', viewValue: '1700 - آمایش 17' },
    { value: 'eshteghal-13', viewValue: '1600 - آمایش 16' },
  ];

  selectedDesignType: string = '';
  showStartDate: boolean = false;
  showEndDate: boolean = false;
  showStatus: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onDesignTypeChange() {
    const selectedDesign = this.Design_type.find(
      (designType) => designType.value === this.selectedDesignType
    );

    if (selectedDesign) {
      this.showStartDate = true;
      this.showEndDate = true;
      this.showStatus = true;
    } else {
      this.showStartDate = false;
      this.showEndDate = false;
      this.showStatus = false;
    }
  }
}
