import { Injectable } from '@angular/core';
import { Frete } from './Frete';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class FreteService {

    constructor(private _http: Http) { }
    
}