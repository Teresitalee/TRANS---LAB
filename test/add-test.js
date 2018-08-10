import { expect } from 'chai';
import { add } from '../src/js/add';
describe ('agregando 2 numeros',() =>{
    it ('debiera retornar 3 cuando se suman 1+2', () =>{
        const suma = add(1,2) :
        const resultado = 3;

        expect(suma).to.equals(resultado);
 
    })
})