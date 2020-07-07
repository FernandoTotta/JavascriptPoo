import{ Conta } from "./Conta";

export class ContaSalario extends Conta{
    constructor(cliente){
        super(0, cliente, 100)
    }

    sacar(valor){
        const TAXA = 1.01
        return this._sacar(valor, TAXA)
    }
}