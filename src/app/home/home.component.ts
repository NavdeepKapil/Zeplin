import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    private model = { 'name': '' };
    private data: any;
    private flag: boolean = false;
    private show: boolean = false;
    text: any;
    constructor(private _service: DataService, private route: ActivatedRoute, private router: Router) {
      this.route.queryParams.subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.text = params.search;
        this.model.name = this.text;
        this.onSubmit();
      });
    }

    ngOnInit() {
    }

    onSubmit() {
      this.show = true;
      setTimeout(() => { this.show = false }, 20000);
      this._service.getData(this.model.name).subscribe((res: any) => {
            if (res.iris)
            {
                this.data = res.iris;
              this.show = false;
            }
            else {
                this.flag = true;
                this.show = false;
            }
        });
    }
}
