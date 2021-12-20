import { Router, Request, Response } from 'express'

const router = Router();

router.get('/', (req: Request, res: Response)=>{
    let age: number =  90;
    let showOld: boolean = false;
    if(age > 50){
        showOld = true
    }
    
    res.render('pages/home', {
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
});


router.get('/contato', (req: Request, res: Response)=>{
    res.render('pages/contato');
});


router.get('/sobre', (req: Request, res: Response)=>{
    res.render('pages/sobre');
});


router.get('/nome',(req: Request, res: Response) => {
    console.log(req.query.nome);

    let nome: string = req.query.nome as string;
    
    
    res.render('pages/nome',{
        nome
    });
});

export default router;