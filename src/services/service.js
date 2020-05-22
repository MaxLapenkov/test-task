 import orbit from '../images/orbit.png';
 import coca from '../images/coca.png';
 import snickers from '../images/snickers.png';
 import bounty from '../images/bounty.png';
 import mars from '../images/mars.png';
 import coffee from '../images/coffee.png';
 import sprite from '../images/sprite.png';
 import tea from '../images/tea.png';
 import cake from '../images/cake.png';

 
 export default class Service {
     getItems() {
         return [
            {id: 1, name: 'Orbit', price: 25, count: 25, image: orbit, isNew: true},
            {id: 2, name: 'Coca-cola', price: 50, count: 15, image: coca, isNew: false},
            {id: 3, name: 'Snickers', price: 30, count: 35, image: snickers, isNew: true},
            {id: 4, name: 'Bounty', price: 30, count: 25, image: bounty, isNew: false},
            {id: 5, name: 'Mars', price: 30, count: 15, image: mars, isNew: true},
            {id: 6, name: 'Coffee', price: 29, count: 35, image: coffee, isNew: false},
            {id: 7, name: 'Sprite', price: 50, count: 3, image: sprite, isNew: true},
            {id: 8, name: 'Tea', price: 80, count: 55, image: tea, isNew: false},
            {id: 9, name: 'cake', price: 40, count: 15, image: cake, isNew: true}
        ];
     }
 }