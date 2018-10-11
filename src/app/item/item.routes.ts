import {Routes} from '@angular/router';
import { ItemComponent } from './item.component';
import { ItemServiceComponent } from './services/itemservice.component';

export const orderRoute: Routes = [
     {
        path: '',
        component: ItemComponent,
        children: [
            {
                path: '',
                redirectTo: 'item',
                pathMatch: 'full'
          },
          {
            path: 'item',
            component: ItemServiceComponent
          }
        ]
    },
];
