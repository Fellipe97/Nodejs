import { Router, Request, Response } from 'express'

const router = Router();

router.get('/', (req: Request, res: Response)=>{
    let age: number =  90;
    let showOld: boolean = false;
    if(age > 50){
        showOld = true
    }
    
    res.render('home', {
        name: 'Fellipe',
        lastName: 'Barros',
        permissao: 1,
        showOld,
        products: [
            {title: 'Produto X', price: 10},
            {title: 'Produto Y', price: 15},
            {title: 'Produto W', price: 20}
        ],
        frasesDoDia:[
            'Alguma coisa muito legal',
            'Outra frase qualquer'
        ]
    });
})

router.get('/contato', (req: Request, res: Response)=>{
    res.send('Formulário de contato');
})

router.get('/sobre', (req: Request, res: Response)=>{
    res.send('Página institucional sobre a empresa');
})

export default router;