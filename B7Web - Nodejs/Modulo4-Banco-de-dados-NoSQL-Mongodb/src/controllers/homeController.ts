import { Request, Response } from 'express';

import { Product } from '../models/Product';

import User from '../models/User';

export const home = async (req: Request, res: Response)=>{

// ----------------------- ADICIONAR NO MONGODB -----------------------------

//Primeiro metodo
/*
    let newUser = await User.create({
        name: {
            firstName: 'Monaliza',
            lastName: 'Fernandes'
        },
        email: 'mona@paris.org',
        age: 200,
        interests: [
            'artes',
            'pizza'
        ]
    });

    console.log('Novo Usuário: ', newUser);
*/

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

// ---------------------------------------------------------------------------



 // -------------- BUSCA NO MONGODB ---------------------------   
    //let usuarios = await User.find({});                                   //retorna mais que um item    (retorna uma array)

    /*let usuarios = await User.findOne({                                   //sem parâmetro: ele retorna o primeiro do banco de dados   (não retorna uma array)
        email: 'suporte@b7web.com.br'
    }); */

    //let usuarios = await User.findById('61cc7262cb955ade6f1f2fda');         //pesquisa por id    (não retorna uma array)


    let usuarios = await User.find({
        /*email: 'suporte@b7web.com.br',
        age: 50*/
        // "name.firstName": 'Paulo'
        // interests: 'tecnologia'
        

        //  age: { $gt:40, $lt: 60 }    
        /*  gt = greater then = maior que
            gte = greater then or equal = maior que ou igual 
            lt =  lower then = abaixo de     
            lte =  lower then or equal = abaixo de ou igual
        */


        age: { $gt: 18 }

    }).skip(0).limit(2); //skip = pular registros do banco   limit = limitar a  quantidade de resgistros na query+
    //.sort({ "name.firstName": 1, "name.lastName": 1 });  // ordenação:  .sort({ variavel1: 1 ou -1})      1 = asc    ou    -1 = desc


    //console.log('Usuarios: ', usuarios);
// -----------------------------------------------------------------



// -------------- Atualizar dados NO MONGODB ---------------------------  
//1. Atualizar varios daados de uma vez.   
/*
    await User.updateMany(
        //parâmetro para achar os dados
        {
            age: {$lte: 18}
        },
        //o dado que quero inserir no lugar
        {
            age: 18
        }
    );
*/

//2. Atualizar um dado de uma vez.
/*
    await User.updateOne(
        //parâmetro para achar os dados
        {
            email: 'paulo@gmail.com'
        },
        //o dado que quero inserir no lugar
        {
            age: 46
        }
    );        
*/

//3. Já tenho o dado e quero atualizar o dado.
    /*
    let paulo = await User.findOne({ email: 'paulo@gmail.com' })
    paulo.name.lastName = 'Silva';
    paulo.age = 47;
    await paulo.save();
    */

//4. Menos usado
//diferença do updateOne: ele retorna uma variavel atualizada, logo, depois tera que salvar no banco.
/*    
    let user = await User.findOneAndUpdate(
        //parâmetro para achar os dados
        {
            email: 'paulo@gmail.com'
        },
        //o dado que quero inserir no lugar
        {
            age: 46
        }
    );
*/    
// ---------------------------------------------------------------------



// -------------- Deletar dados NO MONGODB ---------------------------  
//Primeiro Metodo
    //await User.findOneAndDelete({ email: 'mona@paris.org' });

//Segundo Metodo
    /*
    let paulo = await User.findOne({ email: 'paulo@gmail.com' });
    paulo.remove();
    */
// ---------------------------------------------------------------------


    let users = await User.find({}).sort({ 'name.firstName': 1 });

    res.render('pages/home', {
        users
    });
};