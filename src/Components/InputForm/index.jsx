import { useState } from 'react';
import { Container, RadioGroup, Radios } from './styles';

export default function InputForm({ handleSave }) {
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState(0);
    const [tipo, setTipo] = useState(0);

    function salvar(event) {
        event.preventDefault();

        const dadosFinanceiro ={
            'descricao': descricao,
            'valor': valor,
            'tipo': tipo
        }

        handleSave(dadosFinanceiro);
        event.target.reset();
    }
    return(
        <Container>
            <form onSubmit={salvar}>

                <input type="text" className='input' placeholder='Informe a descrição' onChange={e => setDescricao(e.target.value)} />

                <input type="text" className='input' placeholder='Informe o valor' onChange={e => setValor(e.target.value)}/>

                <Radios>
                    <RadioGroup>
                        <input type="radio" name="group1" id="radioEntrada"  onChange={() => setTipo(0)} />
                        <label htmlFor="radioEntrada">Entrada</label>
                    </RadioGroup>
                    <RadioGroup>
                        <input type="radio" name="group1" id="radioSaida" onChange={() => setTipo(1)} />
                        <label htmlFor="radioSaida">Saida</label>
                    </RadioGroup>
                </Radios>
               
                <button type='submit' className='input'>Cadastrar</button>
            </form>
        </Container>
    )
}