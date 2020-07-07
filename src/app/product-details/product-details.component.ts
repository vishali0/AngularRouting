import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DynamicGrid } from '../product.model';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import {FormBuilder,Router,FormGroup} from '@angular/Router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  // get_data=[];
  // stockForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    //   this.newDynamic = { Name: "", Price: "", Stock: "" };
    //   // this.dynamicArray.push(this.newDynamic);
    // }
    // addRow(index: any) {
    //   let Name = (document.getElementById("name") as HTMLElement);
    //   let Price = (document.getElementById("price") as HTMLElement);
    //   let Stock = (document.getElementById("stock") as HTMLElement);
    //   this.newDynamic = { Name: Name, Price: Price, Stock: Stock };
    //   this.dynamicArray.push(this.newDynamic);
    //   this.toastr.success('New row added successfully', 'New Row');
    //   console.log(this.dynamicArray);
    //   return true;
    // }

    // deleteRow(index: number) {
    //   if (this.dynamicArray.length == 1) {
    //     this.toastr.error("Can't delete the row when there is only one row", 'Warning');
    //     return false;
    //   } else {
    //     this.dynamicArray.splice(index, 1);
    //     this.toastr.warning('Row deleted successfully', 'Delete row');
    //     return true;
    //   }
    // }
  }

}
