import { Component, OnInit } from '@angular/core';
import { GLobal } from "../services/global";

@Component({
    selector: 'leftpanel',
    templateUrl: 'leftpanel.html'
})

export class LeftPanel implements OnInit {
    constructor(private gLobal: GLobal) { }

    ngOnInit() { }

    public studentList: any = this.gLobal.myData;

}