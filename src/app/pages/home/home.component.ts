import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Property } from '../../models/property';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  propertylist: Property[] = [];
  currentPageProperties: Property[]=[];
  currentPageIndex: number = 0;
  pageSize = 12;
  fragmentId: string | null = null;
  productsService = inject(ProductsService)


  constructor(public router: Router, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.getInStockProperties()
    this.route.fragment.subscribe(fragment => {
      this.fragmentId = fragment;
      console.log('Fragment ID:', this.fragmentId);
    });
  }

  // getInStockProperties(): void {
  //   this.productsService.getInStockProperties().subscribe(
  //     (data: Property[]) => {
  //       this.propertylist = data.slice(0, 3);
  //       console.log('propertylist ', this.propertylist);
  //     },
  //     (error) => {
  //       console.error('Error fetching properties:', error);
  //     }
  //   );
  // }

  getInStockProperties(): void {
    this.productsService.getProperties().subscribe(
      (data: Property[])=>{
        this.propertylist = [];
        for (let property of data){
          if (!('inStock' in property) || property.inStock>0){
            this.propertylist.push(property)
          }
        }
        this.propertylist.sort((a, b) => b.createdTimeStamp.seconds - a.createdTimeStamp.seconds);
        this.getCurrentPageProperties()
      },
      (error) => {
            console.error('Error fetching properties:', error);
      }
    )
  }

  goToPreviousPage(): void {
    const p = this.currentPageIndex - 1;
    this.router.navigate([''], { queryParams: { p: p } });
    this.getCurrentPageProperties()
  }

  goToNextPage(): void {
    const p = this.currentPageIndex + 1;
    this.router.navigate([''], { queryParams: { p: p } });
    this.getCurrentPageProperties()
  }

  getCurrentPageProperties(){
    this.route.queryParams.subscribe(params => {
      this.currentPageIndex = Number(params['p']) ;
      if (!this.currentPageIndex){
        this.currentPageIndex = 0
      }
      this.currentPageProperties = this.getElementsFromIndexAtoB(this.propertylist, this.currentPageIndex *  (this.pageSize - 1), (this.currentPageIndex + 1) * (this.pageSize - 1));
    });
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('fr-MA', { 
      style: 'currency', 
      currency: 'Dhs', 
      minimumFractionDigits: 0,
      maximumFractionDigits: 0 
    }).format(price);
  }

  getElementsFromIndexAtoB(array: any[], a: number, b: number): any[] {
    const lastIndex = array.length - 1;
    const adjustedB = b > lastIndex ? lastIndex : b;
    return array.slice(a, adjustedB + 1);
  }

  

  share(property: Property): void {
    const baseUrl = window.location.origin; // e.g., 'http://localhost:4200'
    const currentPath = this.router.url.split('?')[0]; // e.g., '/home'
    const fullUrl = `Jette un oeil sur cette annonce ${property.typedebien} ${property.surfaceTotal}m² ${baseUrl}${currentPath}?p=${this.currentPageIndex}#${property.hashtag}`;
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(fullUrl)}`;
    // https://wa.me/212628921611?text=
    
    window.open(shareUrl, '_blank');
  }
}
