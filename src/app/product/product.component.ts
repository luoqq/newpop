import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs";

// import 'rxjs/Rx';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //private products:Array<Product>;
  private  productid:number;

  dataSource:Observable<any>;
  products:Array<any> = [] ;

  constructor( private http:HttpClient,  private routeinfo : ActivatedRoute ) {
     //this.productid = this.routeinfo.snapshot.queryParams["id"];
    this.routeinfo.params.subscribe((params:Params)=>this.productid = params["id"]);



  }

  loaddata(){
    //this.http.get('/products').subscribe( (res)=>{ this.products = res.map() });
  }
  ngOnInit() {
    this.products = [
    new Product(1,"案例一",1.99,3.5,"病例说明内容",["代称","特征之一","电子产品","电子产品","电子产品"],"assets/img/x1.png"),
    new Product(2,"案例二",1.99,3.5,"病例说明内容",["代称","特征之一","电子产品","电子产品","电子产品"],"assets/img/x2.png"),
    new Product(3,"案例三",1.99,3.5,"病例说明内容",["代称","特征之一","电子产品","电子产品","电子产品"],"assets/img/x3.png"),
    new Product(4,"案例四",1.99,3.5,"病例说明内容",["代称","特征之一","电子产品","电子产品","电子产品"],"assets/img/x4.png"),
    new Product(5,"案例五",1.99,3.5,"病例说明内容",["代称","特征之一","电子产品","电子产品","电子产品"],"assets/img/x5.png"),
    new Product(6,"案例六",1.99,3.5,"病例说明内容",["代称","特征之一","电子产品","电子产品","电子产品"],"assets/img/x6.png"),
    new Product(7,"案例七",1.99,3.5,"病例说明内容",["代称","特征之一","电子产品","电子产品","电子产品"],"assets/img/x7.png"),
    new Product(8,"案例八",1.99,3.5,"病例说明内容",["代称","特征之一","电子产品","电子产品","电子产品"],"assets/img/x8.png")]
  }

}

export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>,
    public pic:string
  ){}

}
//先心病 数据模型
export class xxb{
  constructor(
    public  Transfer: string,
    public  SOP:string,
    public  Samples_Per_Pixel:string,
    public  Photometric_Interpretation:string,
    public  Number_Of_Frames:string,
    public  Planar_Configuration:string,
    public  Rows:string,
    public  Columns:string,
    public  Pixel_Spacing:string,
    public  Bits_Allocated:string,
    public  Bits_Stored:number,
    public  High_Bit:number,
    public  Pixel_Representation:number,
    public  WindowCenter:number,
    public  WindowWidth:number,
    public  RescaleIntercept:number,
    public  RescaleSlope:number,
    public  Basic_Offset_Table_Entries:number,
    public  Fragments:number,
    public  Max_Stored_Pixel_Value:number,
    public  Min_Stored_Pixel_Value:number,
    public  Total_Time:number,
    public  Load_Time:number,
    public  Decode_Time:number
  ){}
}
