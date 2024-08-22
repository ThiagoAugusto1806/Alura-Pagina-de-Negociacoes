import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obterNegociacoesDoDia() {
        return fetch("http://localhost:8080/dados")
            .then((res) => res.json())
            .then((dados) => {
            return dados.map((dadosHoje) => {
                return new Negociacao(new Date(), dadosHoje.vezes, dadosHoje.montante);
            });
        });
    }
}
//# sourceMappingURL=negociacoes-service.js.map