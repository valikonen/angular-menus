import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { IMenu } from '../menu.model';
import { MenuService } from '../menu.service';

@Component({
    templateUrl: './menu-list.component.html',
    styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

    menus: IMenu[] = [];

    constructor(private readonly menuService: MenuService) { }


    ngOnInit(): void {
        this._getMenus();
    }

    private _getMenus(): void {
        const menicka = this.menuService.getData('manicka');
        const pivniceUcapa = this.menuService.getData('pivnice-ucapa');
        const suzies = this.menuService.getData('suzies');

        forkJoin([menicka, pivniceUcapa, suzies]).subscribe(([res1, res2, res3]) => {
            this.menus.push(...res1, ...res2, ...res3);
        });
    }
}
