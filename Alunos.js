export class Aluno {
    constructor (matricula, nome, prova1, prova2, trabalho){
        this._matricula = matricula
        this._nome = nome 
        this._prova1 = prova1
        this._prova2 = prova2
        this._trabalho = trabalho
    } 
   
    media(){
        let soma = (this._prova1 + this._prova2 + this._trabalho) / 3
        return soma * 7 / 10
    }
    final(){
        var media = this.media()
        if (media < 5){
            var resulta = 5 - media
            return resulta.toFixed(2)
        }else{
            return 0
        }
    }
}