 import orbit from '../images/orbit.png';
 import coca from '../images/coca.png';
 import snickers from '../images/snickers.png';
 
 export default class Service {
     getItems() {
         return [
            {id: 1, name: 'Orbit', price: 25, count: 25, image: orbit, isNew: true},
            {id: 2, name: 'Coca-cola', price: 50, count: 15, image: coca, isNew: false},
            {id: 3, name: 'Snickers', price: 30, count: 35, image: snickers, isNew: true}
        ];
     }
 }