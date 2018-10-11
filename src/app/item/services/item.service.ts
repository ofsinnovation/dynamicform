import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable()
export class ItemService {
  bcGatewayUrl: string;

  constructor(private http: HttpClient) {
    this.bcGatewayUrl = 'https://ofs-bcgateway.herokuapp.com/';
  }

  getItems() {
    return  this.http.get(this.bcGatewayUrl);
  }

  getFormFields(contractId, key) {
    return  this.http.get(this.bcGatewayUrl + contractId + '/' + key);
  }
}
