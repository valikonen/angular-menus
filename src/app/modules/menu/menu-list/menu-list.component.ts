import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { IMenu } from '../menu.model';
import { MenuService } from '../menu.service';

@Component({
    templateUrl: './menu-list.component.html',
    styleUrls: ['./menu-list.component.css'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuListComponent implements OnInit {

    menus!: Observable<[IMenu[], IMenu[], IMenu[]]>;

    constructor(private readonly menuService: MenuService) { }


    ngOnInit(): void {
        this._getMenus();
    }
    private _getMenus(): void {
        const menicka = this.menuService.getData('manicka');
        const pivniceUcapa = this.menuService.getData('pivnice-ucapa');
        const suzies = this.menuService.getData('suzies');

        this.menus = forkJoin([menicka, pivniceUcapa, suzies]);
    }
}
