import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    private model = { 'name': '' };
    private data: any;
    private flag: boolean = false;
    constructor(private _service: DataService, private _spinnerService: Ng4LoadingSpinnerService) { }

    ngOnInit() {
    }

    onSubmit(events: any) {
        this._spinnerService.show();
        this._service.getData(this.model.name).subscribe((res: any) => {
            if (res.iris)
            {
                this.data = res.iris;
            }
            else {
                this.flag = true;
            }
                
            this._spinnerService.hide();
        });
    }
}
