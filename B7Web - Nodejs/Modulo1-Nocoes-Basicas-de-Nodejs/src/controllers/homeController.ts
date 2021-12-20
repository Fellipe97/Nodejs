import {Request, Response} from 'express';

import { Product } from '../models/Product';

export const home = (req: Request, res: Response)=>{
    let age: number =  90;
    let showOld: boolean = false;
    if(age > 50){
        showOld = true
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);
    
    res.render('pages/home', {
        name: 'Fellipe',
        lastName: 'Barros',
        permissao: 1,
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia:[
            'Alguma coisa muito legal',
            'Outra frase qualquer'
        ]
    });
}