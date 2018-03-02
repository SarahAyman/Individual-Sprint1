import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  tableData: any[];
  currentProduct: any;
  flag: boolean = false;
  flag1: boolean = false;
  
  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    var self = this;
    this.storeService.getProducts()
      .subscribe(function(prods) {
        self.tableData = prods.data;
        self.tableData = self.tableData.filter(function (element, index, array) {
          return element.sellerName === 'Sarah Ayman';
       });
      });
   }

  addProduct(product: any): void {
    /*var product = {
      name: this.input.name,
      price: this.input.price,
      sellerName: this.input.sellerName
    };*/
    this.flag1 = false;
    var self = this;
    this.storeService.addProduct(product)
      .subscribe(res => console.log(res.json()));
    this.getProducts();
  }

  deleteProduct(product: any): void {
    this.tableData = this.tableData.filter(p => p !== product);
    this.storeService.deleteProduct(product).subscribe();
  }

  updateProduct(updatedProduct: any): void {
    this.flag = false;
    this.storeService.updateProduct(this.currentProduct, updatedProduct)
      .subscribe();
    this.getProducts();
  }

  editProduct(product: any): void {
    this.currentProduct = product;
    this.flag = true;
  }

  show(): void {
    this.flag1 = true;
  }

}
