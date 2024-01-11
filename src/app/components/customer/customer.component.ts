



import { Component, OnInit } from '@angular/core';
 
interface customer {
  firstName: string;
  lastName: string;
  address:string;
  city: string;
  state: string;
  total:string;
}
@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
  })
  export class CustomerComponent implements OnInit {
[x: string]: any;
    pageSize: number = 5; // Number of items per page
currentPage: number = 1; // Current page number


get paginatedCustomers(): customer[] {
  const startIndex = (this.currentPage - 1) * this.pageSize;
  return this.filteredCustomer.slice(startIndex, startIndex + this.pageSize);
}
  customers: customer[] = [
 
   
    { firstName: 'sai', lastName: 'vamsi', address:"h.no:2-2-124/12 ganesh colony" ,city: 'kurnool', state: 'Andhra pradash' ,total:"$1500" },
    { firstName: 'pavan', lastName: 'kalyan',address:"256 sai enclave colony", city: 'Alwal', state: 'Telangana' ,total:"$800" },
    { firstName: 'Pranay', lastName: 'chandhu',address:"299 sai Reddy Nagar" ,city: 'Ameerpet', state: 'Telangana' ,total:"$950" },
    { firstName: 'Mohan', lastName: 'ravi',address:"565 Alvin Colony", city: 'Secunderabad', state: 'Telangana' ,total:"$1450" },
    
    // Your bus data here
  ];
 
  model: customer = { firstName: '', lastName: '',address:'', city: '', state: '' ,total:''};
  editingIndex: number | null = null;
  searchTerm: string = '';
  isAddingOrEditing = false;
 
  addBusSuccess: boolean = false;
  editBusSuccess: boolean = false;
  deleteBusSuccess: boolean = false;
 
  ngOnInit() {
    // Initialize alerts to false
    this.addBusSuccess = false;
    this.editBusSuccess = false;
    this.deleteBusSuccess = false;
  }
 
  onSubmit() {
    if (this.editingIndex !== null) {
      // Editing existing bus
      this.customers[this.editingIndex] = { ...this.model };
      this.editBusSuccess = true;
    } else {
      // Adding new bus
      this.customers.push({ ...this.model });
      this.addBusSuccess = true;
    }
 
    this.resetForm();
    this.hideAlertsAfterDelay();
    // this.currentPage = 1;
  }
 
  onAddEditToggle() {
    this.isAddingOrEditing = !this.isAddingOrEditing;
    this.resetForm();
    this.hideAlertsAfterDelay();
  }
 
  editCustomer(index: number) {
    this.isAddingOrEditing = true;
    this.editingIndex = index;
    this.model = { ...this.customers[index] };
  }
 
  deleteCustomer(index: number) {
    this.customers.splice(index, 1);
    this.deleteBusSuccess = true;
 
    if (this.editingIndex === index) {
      this.editingIndex = null;
      this.resetForm();
    }
 
    this.hideAlertsAfterDelay();
    // this.currentPage = 1;
  }
 
  get filteredCustomer(): customer[] {
    // Your filteredBuses logic here
    return this.customers.filter(customer =>
      customer.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      customer.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      customer.city.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      customer.state.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
 
  private resetForm() {
    this.model = { firstName: '', lastName: '',address:'', city: '', state: '',total:'' };
    this.editingIndex = null;
  }
 
  private hideAlertsAfterDelay() {
    // Hide alerts after 3 seconds
    setTimeout(() => {
      this.addBusSuccess = false;
      this.editBusSuccess = false;
      this.deleteBusSuccess = false;
    }, 3000);
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  
  nextPage() {
    // const lastPage = Math.ceil(this.filteredCustomer.length / this.pageSize);
    const lastPage = this['Math'].ceil(this.filteredCustomer.length / this.pageSize);
    if (this.currentPage < lastPage) {
      this.currentPage++;
    }
  }
}
 