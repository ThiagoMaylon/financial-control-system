import ResumoItens from '../ResumoItens'
import { ResumoFinanceiro } from './styles'

export default function Resumo({saldo, entrada, saida}) {
    return(
        <>
            <ResumoFinanceiro>
                <ResumoItens valor={saldo} titulo="Saldo" color="53369e" borderColor="6c63ff" />

                <ResumoItens valor={entrada} titulo="Entrada" color="059705" borderColor="0bfb0e" />
                
                <ResumoItens valor={saida} titulo="Saida" color="e74545" borderColor="e99d9d" />
            </ResumoFinanceiro>
        </>
    )
}