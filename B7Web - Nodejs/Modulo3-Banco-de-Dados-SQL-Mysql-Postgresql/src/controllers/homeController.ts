import { Request, Response } from 'express';

import { Op } from 'sequelize';

import { Product } from '../models/Product';

import { User } from '../models/User'

export const home = async (req: Request, res: Response)=>{
    
//------------ ADICIONAR NO BANCO ------------------

    // build + save
    /*const user = User.build({
        name:'Beltrano'
    });
    let idade: number = 27;
    user.age = idade;
    await user.save();*/


    //create
    /*const user = await User.create({
        name: 'Ciclano',
        age:39
    });	
    console.log('Nome: ', user.name);
    console.log('Age: ', user.age);*/
    /*
    await User.create({
        name: 'Fellipe',
        age: 15
    });*/

// ----------------------------------------------

    const [ usuario, created ] = await User.findOrCreate({
        where: { name: 'Bonieky' },
            defaults:{
                age: 80
            }
    });

    if(created){
        console.log('Usuário criado com sucesso!');
    }else{
        console.log('Achamos o usuário.');
    }
    console.log('Nome: ', usuario.name);
    




    /*let usuario = await User.findOne({
        where:{
            id: 1
        }
    });*/

    //ou

    /*let usuario = await User.findByPk(1)

    console.log('Usuario: ', usuario);*/









//----------- atualizar informação no banco ----------------------

// Parametros do update
// 1. Dados a serem alterados
// 2. Condições para encontrar o(s) item(s)
    /*
    await User.update({ age: 18 }, {
        where:{
            age:{
                [Op.lt]: 18
            }
        }
    });

    await User.update({ name: 'Seu Chico', age: 56 }, {
        where:{
            id: 4
        }
    });*/


//Alterar informação do item especifio 
    let results = await User.findAll({ where:{ id: 7 } });
    if(results.length > 0){
        let usuario = results [0];
        usuario.name = 'Ciclano';
        usuario.age = 18;
        await usuario.save();
    }

// -----------------------------------------------------------------


// --------------- deletar um item no banco de dados --------------------

    /*
    await User.destroy({
        where:{
            age: {
                [Op.lte]: 18
            }
        }
    });
    */




    let itemParaExcluir = await User.findAll({
        where: {
            name: 'Josimar'
        }
    });
    if(itemParaExcluir.length > 0){
        let usuario = itemParaExcluir[0];

        await usuario.destroy();
    }

    

// ----------------------------------------------------------------------


// --------------- pegar td do banco -------------------------------

    let users = await User.findAll();

// -----------------------------------------------------------------

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);
    
    
    
    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users
    });
};


export const novoUsuario = async (req: Request, res: Response) => {
    let { name, age } = req.body;
    
    if(name){
        const newUser = User.build({
            name: name
        })
        if(age){
            newUser.age = age;
        }
        newUser.save(); 
    }else{
        console.log('Por favor, insira um nome!!');
    }
    res.redirect('/');
}