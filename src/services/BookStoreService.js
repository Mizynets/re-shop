import icon1 from './img/img1.jpg';
import icon2 from './img/img2.jpg';
import icon3 from './img/img3.jpg';
import icon4 from './img/img4.jpg';
import icon5 from './img/img5.jpg';
import icon6 from './img/img6.jpg';
import icon7 from './img/img7.jpg';
import icon8 from './img/img8.jpg';
import icon9 from './img/img9.jpg';
import icon10 from './img/img10.jpg';


class BookStoreService {
    data = [
        {
            id: 1,
            title: 'Charlotte’s Web',
            author: 'E.B. White',
            price: 32,
            bookImg: icon1,
        },
        
        {
            id: 2,
            title: 'Mieko and the Fifth Treasure',
            author: 'Eleanor Coerr',
            price: 54,
            bookImg: icon2,
        },
        {
            id: 3,
            title: 'The Outsiders',
            author: 'S.E. Hinton',
            price: 92,
            bookImg: icon3,
        },
        {
            id: 4,
            title: 'The House On Mango Street',
            author: 'Sandra Cisneros',
            price: 80,
            bookImg: icon4,
        },
        {
            id: 5,
            title: 'Thirteen Reasons Why',
            author: 'Jay Asher',
            price: 69,
            bookImg: icon5,
        },
        {
            id: 6,
            title: 'Peter Pan',
            author: 'J.M. Barrie',
            price: 41,
            bookImg: icon6,
        },
        {
            id: 7,
            title: 'The Old Man and the Sea',
            author: 'Ernest Hemmingway',
            price: 33,
            bookImg: icon7,
        },
        {
            id: 8,
            title: 'The Giver',
            author: 'Lois Lowry',
            price: 21,
            bookImg: icon8,
        },
        {
            id: 9,
            title: 'Number the Stars',
            author: 'Lois Lowry',
            price: 14,
            bookImg: icon9,
        },
        {
            id: 10,
            title: 'A Wrinkle In Time',
            author: 'Madeline L’engle',
            price: 51,
            bookImg: icon10,
        },
    ];

    getData (){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(Math.random() > 0.75 ){
                    reject(new Error("Something was wrong"))
                }
                resolve(this.data);
            }, 700);
        });
    }
}

export default BookStoreService;