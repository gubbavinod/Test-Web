import { Injectable } from '@angular/core';

@Injectable()
export class GLobal {

    constructor() { }

    public myData: any = [
        {
            "name":"babajan",
            "age": 25,
            "present": true,
            "pass":true
        },
        {
            "name":"balaji",
            "age": 25,
            "present": false,
            "pass":true
        },
        {
            "name":"suresh",
            "age": 25,
            "present": true,
            "pass":false
        },
        {
            "name":"hari",
            "age": 25,
            "present": true,
            "pass":false
        },
        {
            "name":"pandu",
            "age": 25,
            "present": false,
            "pass":false
        },
        {
            "name":"nandu",
            "age": 25,
            "present": true,
            "pass":true
        }
    ];
}