import { resolve } from "url";

class BookStoreService {

    data = [
        {
            id: 1,
            title: 'Sanya billioners',
            author: 'Aleks Mizynets',
            price: 32,
            bookImg: 'https://www.alpinabook.ru/upload/resize_cache/iblock/e2b/380_567_1/e2b61f276a1b625d2aee1ddf91bc1fea.jpg',
        },
        
        {
            id: 2,
            title: 'Kate billioners',
            author: 'Kate Liubysh',
            price: 54,
            bookImg: 'http://opt-407193.ssl.1c-bitrix-cdn.ru/upload/resize_cache/iblock/8c8/380_567_1/8c821d109a20e8db924b575691369600.jpg?149623724665758',
        }
    ];

    getData (){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                // if(Math.random() > 0.75 ){
                //     reject(new Error("Something was wrong"))
                // }
                resolve(this.data);
            }, 700);
        });
    }
}

export default BookStoreService;