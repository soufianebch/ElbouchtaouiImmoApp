import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit {
  // listView: boolean = false;
  // propertyObj: any;
  // masterService = inject(MasterService)
  // loggedUserData: any;
  // propertylist: any[] = [];

  constructor() { 
    // this.propertyObjInitialize() 
    
  }

  ngOnInit(): void {
    // const localData = localStorage.getItem("realUser");
    // if (localData) {
    //   this.loggedUserData = JSON.parse(localData)
    // }
    
  }


  // propertyObjInitialize() { 
  //   this.propertyObj = {
  //     "propertyId": 0,
  //     "title": "",
  //     "description": "",
  //     "propertyType": "",
  //     "address": "",
  //     "city": "",
  //     "state": "",
  //     "pincode": "",
  //     "agentId": 0,
  //     "price": 0,
  //     "createdDate": new Date(),
  //     "thumbnailImage": "",
  //     "RealPropertyImages": []
  //   }
  // }


  // createProperty() {
  //   this.propertyObj.agentId = this.loggedUserData.userId
  //   this.propertyObj.propertyId = this.propertylist.length
  //   this.propertylist.push({ ...this.propertyObj });
  //   // this.masterService.addProperty(this.propertyObj).subscribe((res: any) => {
  //   //   if (res.result) {
  //   //     alert('Property Created Succesfully')
  //   //   } else {
  //   //     alert(res.message)
  //   //   }
  //   // })
  // }

  // getAllProperty() {
  //   this.masterService.GetAllProperty().subscribe((res: any) => {
  //     const allList = res.data;
  //     this.propertylist = allList.filter((m: any) => m.agentId == this.loggedUserData.userId)
  //   })
  // }

  // removeItem(item: any) {
  //   const index = this.propertylist.findIndex((v) => v === item);
  //   if (index > -1) {
  //     this.propertylist.splice(index, 1);
  //   }
  // }
}
