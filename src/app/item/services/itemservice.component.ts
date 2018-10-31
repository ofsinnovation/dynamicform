import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { PagerService } from './index';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  templateUrl: './list.html'
})
export class ItemServiceComponent implements OnInit {

  items: any;
  pager: any = {};
  pagedItems: any[];
  contractData: any = {};
  formFields: any = {};
  owners = [ 'manufacturer', 'shipping', 'acme international'];
  public form: FormGroup;
  unsubcribe: any;
  fieldsInfo: any;
  fields: any;
  jsonData: any;
  validFormFieldData: any;

  constructor(private orderService: ItemService, private pagerService: PagerService, private router: Router) {}

  ngOnInit() {
  }

  onUpload(e) {
    console.log(e);
  }

  getFormFields() {
    const contractId = this.contractData.contractId;
    const key = this.contractData.key;
    this.orderService.getFormFields(contractId, key).subscribe(
      data => {
        this.formFields = data;
        this.fieldsInfo = JSON.parse(this.formFields.value[0]);
        const formBuilderObject = [];
        for (const formbuilderData of Object.entries(this.fieldsInfo)) {
          this.validFormFieldData = formbuilderData[1];
        }
        for (const formbuilderFields of Object.entries(this.validFormFieldData)) {
          if (formbuilderFields[0] !== 'attributes') {
            const  keyValue = {label: formbuilderFields[0], value: formbuilderFields[1]};
            formBuilderObject.push(keyValue);
           }
        }
        this.jsonData = formBuilderObject;
        this.form = new FormGroup({
          fields: new FormControl(JSON.stringify(this.fieldsInfo))
        });
      }
    );
  }

}
