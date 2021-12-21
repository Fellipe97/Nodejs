import { Request, Response } from 'express';


export const home = (Req: Request, res: Response) => {
    res.send('Próxima aula, módulo2: video 5!!');
    //res.render('pages/page');
};


export const dogs = (Req: Request, res: Response) => {
    //res.render('pages/dogs');
};


export const cats = (Req: Request, res: Response) => {
    //res.render('pages/cats');
};


export const fishes = (Req: Request, res: Response) => {
    //res.render('pages/fishes');
};

