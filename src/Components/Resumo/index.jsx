import ResumoItens from '../ResumoItens'
import { ResumoFinanceiro } from './styles'

export default function Resumo() {
    return(
        <>
            <ResumoFinanceiro>
                <ResumoItens valor={50} titulo="Saldo" color="53369e" borderColor="6c63ff" />

                <ResumoItens valor={50} titulo="Entrada" color="059705" borderColor="0bfb0e" />
                
                <ResumoItens valor={50} titulo="Saida" color="e74545" borderColor="e99d9d" />
            </ResumoFinanceiro>
        </>
    )
}