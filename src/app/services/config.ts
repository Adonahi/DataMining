import { HttpHeaders } from '@angular/common/http';

export const URL = 'http://localhost:8080/';

export const ANALISIS = 'analisis';

export const OPTIONS = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' ,
        'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS'
    })
};
