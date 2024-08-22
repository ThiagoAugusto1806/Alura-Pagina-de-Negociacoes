import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao>{
    constructor(
        private _data: Date,
        public readonly _quantidade: number,
        public readonly _valor: number){
            
    }
    public static criaDe(dataString:string, quantidadeString:string, valorString:string): Negociacao{
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ","))
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString)
        return new Negociacao(date, quantidade, valor
        );
    }
    
    get data(): Date{
        const data = new Date(this._data.getTime())
        return data;
    }

    get volume(): number{
        return this._quantidade * this._valor
    }

    public paraTexto():string {
        return`
            Data:${this.data},
            Quantidade:${this._quantidade},
            Valor:${this._valor}`
    }

    public ehIgual(negociacao: Negociacao): boolean{
        return this.data.getDate() === negociacao.data.getDate() 
        && this.data.getMonth() === negociacao.data.getMonth() 
        && this.data.getFullYear() === negociacao.data.getFullYear()
    }
}
