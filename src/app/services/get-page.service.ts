import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestMethod, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';


@Injectable()
export class GetPageService {

  constructor(private http: Http) { }

  public findPage(id: number): Observable<Response> {
    const requestOptions: RequestOptionsArgs = new RequestOptions({
      method: RequestMethod.Get
    });
    // TODO キャッシュ対策
    const version = 1;
    return this.http.get(`assets/static/page/${id}_page.html?version=${version}`, requestOptions);

  }
}
