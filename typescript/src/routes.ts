import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export default function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'sakdkasj',
        password: 'sakdkasd',
        techs: ['A', 'B', {experience: 2, title: 'asdjksas'}]
    });
    return response.json({message: 'Hello World'});
}