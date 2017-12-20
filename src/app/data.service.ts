import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

    private headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    private biz_plan_session = "";
    constructor(private http: Http) {
    }

    getData(name: string): Observable<any> {
        debugger;
        let url = "http://ec2-54-87-142-216.compute-1.amazonaws.com:9196/gateway-api/api/v1/iris/search?q=" + name + "&query_synonyms_number=1&biz_plan_session=" + this.biz_plan_session+"&biz_plan_session_synonyms_number=1&min_paragraph_word_count=50&source_type=urls&hits_list=''&results_number=3&sort=graypes_count_rank";
        return this.http.get(url, { headers: this.headers })
            .map((res: any) => {
                return res.json();
            })
            .catch(this.handleError);
    }

    handleError(error: any) {
        console.error('server error:', error);
        if (error instanceof Response) {
            let errMessage = '';
            try {
                errMessage = error.json().error;
            } catch (err) {
                errMessage = error.statusText;
            }
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    }
}
