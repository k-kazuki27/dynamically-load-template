import { Component, OnInit } from '@angular/core';
import { GetPageService } from '../services/get-page.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-load-template',
  templateUrl: './load-template.component.html',
  styleUrls: ['./load-template.component.css']
})
export class LoadTemplateComponent implements OnInit {

  public page = '<h1>nothing</h1>';
  private id: number;

  constructor(private router: Router, private route: ActivatedRoute, private getPageService: GetPageService) {
    // Override 同じルートパスでもリロードするように
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.id = Number(route.snapshot.params['id']);
  }

  ngOnInit() {
    this.getPageService.findPage(this.id).subscribe(
      response => {
        console.log(response);
        this.page = response.text();
      });

  }

}
