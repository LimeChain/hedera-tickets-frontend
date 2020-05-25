import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    public events: any = [
        {
            id: 1,
            picture: 'https://www.gotoburgas.com/assets/images/slider/slider_04.jpg',
            name: 'My event 1',
            date: '31 May 2020',
            price: '5$'
        },
        {
            id: 2,
            picture: 'https://www.gotoburgas.com/assets/images/slider/slider_04.jpg',
            name: 'My event 2',
            date: '01 June 2020',
            price: '15$'
        },
        {
            id: 3,
            picture: 'https://www.gotoburgas.com/assets/images/slider/slider_04.jpg',
            name: 'My event 3',
            date: '31 July 2020',
            price: '5.40$'
        },
        {
            id: 4,
            picture: 'https://www.gotoburgas.com/assets/images/slider/slider_04.jpg',
            name: 'My event 4',
            date: '01 October 2020',
            price: '75$'
        }
    ];
}