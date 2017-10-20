import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
//Services
import { TableService } from "./table.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  table: any;
  switching: boolean = true;
  shouldSwitch: boolean = false;
  rows:NodeListOf<HTMLTableRowElement>;
  x:any;
  y:any;
  str: string;
  cachetable:any;

  //for dropdownlist
  options1 = ["Combined Synopsis / Solicitation", "Cancellation", "Any"];
  options2 = ["Non-compliant(Action Required)", "Compliant", "Undetermined", "Any"];
 
  


  constructor(
    private tableService: TableService 
  ) {
  
  
    }


  ngOnInit() {
     
    this.getTable();
    
  }


  getTable() {
    this.tableService.getPosts()
    .subscribe (
      data => {
        this.table = data;
        if(this.table) {
         this.cachetable = this.table;
        }

      }, 
      
      error => console.log(error)
  ) 
   
  }
 
  
  onSelectType(val){
    if(val == "Any") {
      this.table = this.cachetable;
    }else{
    this.table = this.cachetable.filter(x => x.NoticeType == val)
    }
  }

  onSelectResult(val) {
    if(val == "Any"){
      this.table = this. cachetable;
    } else{
    this.table = this.cachetable.filter(x => x.SRTReviewResult == val)
    }
  }



     sortHead() {
       this.table = document.getElementById("myTable");
   
        while(this.switching) {
          this.switching = false;
          this.rows = this.table.getElementsByTagName("tr");
          console.log(this.rows);

          for (var i = 1; i < (this.rows.length - 1); i++) {
           this.shouldSwitch = false;
           this.x = this.rows[i].getElementsByTagName("td")[0];
           this.y = this.rows[i + 1].getElementsByTagName("td")[0];
           console.log(typeof(this.x.innerHTML.toLowerCase()));
      
           if (this.x.innerHTML.toLowerCase() > this.y.innerHTML.toLowerCase()) {
             console.log(typeof(this.y.innerHTML.toLowerCase()));
             this.shouldSwitch = true;
             break;
           }
         }


         if(this.shouldSwitch) {
           this.rows[i].parentNode.insertBefore(this.rows[i + 1], this.rows[i]);
           this.switching = true;
         }
  
        }
     
     }

     inputFilter() {
       this.table = document.getElementById("myTable");
       var tr = this.table.getElementsByTagName("tr");
       var filter = this.str.toUpperCase();

         for (var i =0; i < tr.length; i++ ){
           var td = tr[i].getElementsByTagName("td")[0];
           if (td){
            if(td.innerHTML.toUpperCase().indexOf(filter) > -1 ){
               tr[i].style.display = "";
          }else {
              tr[i].style.display = "none";
             }
         
        }
         }
       }
     
  //  }

// inputFilter() {
//    var filter = this.str.toUpperCase();

//    if(this.table)

//    for (var i = 0; i < this.table.length; i++){
//      var td = this.table[i];
//      var filterResult = [] 
//      if(td){
//        console.log(td.SoliciationID);
//        if(td.SoliciationID.toUpperCase().indexOf(filter) > -1){
         
//        filterResult.push(td.SoliciationID);
//        }
      
//      }
//    }
// }
    
  
}
