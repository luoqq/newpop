import { Component, OnInit } from '@angular/core';
import {Product} from "../product/product.component";

@Component({
  selector: 'app-dicom',
  templateUrl: './dicom.component.html',
  styleUrls: ['./dicom.component.css']
})
export class DicomComponent implements OnInit {
  private products:Array<Product>;
  private  productid:number;
  constructor(  ) {
    this.products = [
      new Product(1,"Dicom 数据一",1.99,3.5,"病例说明内容",["代称","特征之一","电子产品","电子产品","电子产品"],"assets/img/q1.png"),
      new Product(2,"Dicom 数据二",1.99,3.5,"病例说明内容",["代称","特征之一","电子产品","电子产品","电子产品"],"assets/img/q2.png"),
      new Product(3,"Dicom 数据三",1.99,3.5,"病例说明内容",["代称","特征之一","电子产品","电子产品","电子产品"],"assets/img/q3.png"),
      new Product(4,"Dicom 数据四",1.99,3.5,"病例说明内容",["代称","特征之一","电子产品","电子产品","电子产品"],"assets/img/q4.png"),
      new Product(5,"Dicom 数据五",1.99,3.5,"病例说明内容",["代称","特征之一","电子产品","电子产品","电子产品"],"assets/img/q5.png"),
      new Product(6,"Dicom 数据六",1.99,3.5,"病例说明内容",["代称","特征之一","电子产品","电子产品","电子产品"],"assets/img/q6.png"),
      new Product(7,"Dicom 数据七",1.99,3.5,"病例说明内容",["代称","特征之一","电子产品","电子产品","电子产品"],"assets/img/q7.png"),
      new Product(8,"Dicom 数据八",1.99,3.5,"病例说明内容",["代称","特征之一","电子产品","电子产品","电子产品"],"assets/img/q8.png")]
  }


  ngOnInit() {
  }

}
