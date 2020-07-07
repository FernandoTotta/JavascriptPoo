export class Conta{
    constructor (saldoInicial, cliente,agencia){
        if(this.constructor == Conta){
            throw new Error("voce nao pode instanciar um objeto do tipo classe")
        }
        
        
        this._saldoInicial = saldoInicial
        this._cliente = cliente 
        this._agencia = agencia
    }

    get cliente(){
        return this._cliente
    }

    set cliente (novoValor){
        if (novoValor instanceof client){
            this._cliente = novoValor
        }
    }

    set agencia (agencia){
        return this._agencia = agencia  
    }

    depositar(valor){
        this._saldoInicial += valor 
    }

    sacar(valor){
        throw new Error("O metodo Sacar da conta é abstrato")
    }

    _sacar(valor, taxa){
        const VALORSACADO = taxa * valor 
        if (this._saldoInicial >= VALORSACADO){
            this._saldoInicial -= VALORSACADO
            return VALORSACADO
        }
        return 0

    }

    transferir(valor, conta){
        const VALORSACADO = this.sacar(valor)
        conta.depositar(VALORSACADO)
    }
}