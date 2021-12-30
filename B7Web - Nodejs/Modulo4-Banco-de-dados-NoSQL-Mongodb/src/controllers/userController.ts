import { Request, Response } from 'express';
import User from '../models/User';

export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
};

export const idadeForm = (req: Request, res: Response) => {
    res.render('pages/idade');
};

export const idadeAction = (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
};

//versao 1.0
/*export const adicionarUsuario = async (req: Request, res: Response)=>{
    let { firstName, lastName, email, age, interests } = req.body;

    age = parseInt(age);
    if( (firstName.length > 0) && (lastName.length > 0) && (email.length > 0) && (age > 0)){         
        try {
            console.log('dados preenchidos');
            let newUser = new User();
            newUser.name = {
                firstName: firstName,
                lastName: lastName
            }
            newUser.email = email;
            newUser.age = age;
            if(interests){
                let intereses = interests.split(',')
                newUser.interests = intereses;
            }
            await newUser.save();
            console.log('Dado armazenado com sucesso.');
        } catch (error) {
            console.log('Por favor preencha os valores corretamente!!\nERROR:',error);
        }
    }else{
        console.log('nao foram preenchidos');
    }
    res.redirect('/');
};*/

//versao 2.0
export const adicionarUsuario = async (req: Request, res: Response)=>{
    let { firstName, lastName, email, age, interests } = req.body;
  
        try {
            age = parseInt(age); 
            let newUser = new User();
            newUser.name = {
                firstName: firstName,
                lastName: lastName
            }
            newUser.email = email;
            newUser.age = age;
            if(interests){
                let intereses = interests.split(',')
                newUser.interests = intereses;
            }
            console.log('Armazenando os dados...');
            await newUser.save();
            console.log('Sucesso.');
        } catch (error) {
            console.log('Por favor preencha os valores corretamente!!\n',error);
        }
    res.redirect('/');
};


//Segundo Metodo
/*
    let newUser = new User ();
    newUser.name = {
        firstName: 'André',
        lastName: 'Soares'  
    };
    newUser.email = 'andre@hotmail.com';
    newUser.age = 35;
    newUser.interests = [
        'programação',
        'skate'
    ];
    let resultado = await newUser.save();

    console.log('Novo Usuário: ', resultado);
*/



export const diminuirIdade = async (req: Request, res: Response)=>{
    let id = req.params;
    
    let usuario = await User.findById( id.id )
    usuario.age--;

    await usuario.save();
 
    res.redirect('/');
};

export const aumentarIdade = async (req: Request, res: Response)=>{
    let id = req.params;
    
    let usuario = await User.findById( id.id )
    usuario.age++;

    await usuario.save();

    res.redirect('/');
};

export const excluirIdade = async (req: Request, res: Response)=>{
    let id = req.params;
    let usuario = await User.findById( id.id )
    console.log('\nRemovendo o item: \n',usuario);
    await usuario.remove();
    console.log('\nRemovido com sucesso.');

    res.redirect('/');
};

