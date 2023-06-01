import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchText: any = '';
  searchData: any;
  showLoader: boolean = false;
  showResult: boolean = false;
  isSearching: boolean = false;
  error: boolean = false;
  userName: string = 'Anish Kumar';
  totalSearchResultCount = 0;
  timeTaken = 0;
  knowledgeGraph: any;
  resultData: any;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  searchFunc() {
    this.isSearching = true;
    this.showLoader = true;
    this.showResult = false;

    this.dataService.getData(this.searchText).subscribe(
      (data) => {
      console.log('result', data);
      this.searchData = data;
      if (this.searchData.success == false) {
        this.isSearching = false;
        this.error = true;
      } else {
        this.totalSearchResultCount = this.searchData.search_information.total_results;
        this.knowledgeGraph = this.searchData.knowledge_graph;
        this.timeTaken = this.searchData.search_information.time_taken_displayed;
        this.resultData = this.searchData.organic_results;
        this.showResult = true;
        this.isSearching = false;
        this.showLoader = false;  
      }
    });
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/']);
  }
}
