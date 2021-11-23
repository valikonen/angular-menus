import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { forkJoin } from 'rxjs';
import { IMenu } from '../menu.model';
import { MenuService } from '../menu.service';

@Component({
    selector: 'menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.Emulated
})
export class MenuItemComponent {

    _menu!: IMenu;

    @Input() set menu(value: IMenu) {
        this._menu = value;
    }

    
}
