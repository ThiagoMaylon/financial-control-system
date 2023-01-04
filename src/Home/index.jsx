import React, {useEffect, useState} from "react";
import Grid from "../Components/Grid";
import InputForm from "../Components/InputForm";
import Resumo from "../Components/Resumo";
import { Container } from "./styles";

export default function Home(){

    const [ dadoFin, setDadoFin ] = useState(JSON.parse(localStorage.getItem('Financeiro')) ?? []); 
    const [ saldo, setSaldo ] = useState(0); 
    const [ entrada, setEntrada ] = useState(0); 
    const [ saida, setSaida ] = useState(0); 
    const [ atualizaGrid, setAtualizaGrid ] = useState(false); 

    useEffect(() => {
        const totalSaida = dadoFin.filter((item) => item.tipo === 1)
        .map((transaction) => Number(transaction.valor));

        const totalEntrada = dadoFin.filter((item) => item.tipo === 0)
        .map((transaction) => Number(transaction.valor));

        const Entradas = totalEntrada.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const Saidas = totalSaida.reduce((acc, cur) => acc + cur, 0).toFixed(2);

        const Saldototal = Math.abs(Entradas - Saidas).toFixed(2);

        setSaldo(Saldototal);
        setEntrada(Entradas);
        setSaida(Saidas);
// eslint-disable-next-line
    }, [atualizaGrid])

    function onDelete(index){
        const data = dadoFin;
        data.splice(index, 1);
        setDadoFin(data);
        setAtualizaGrid(!atualizaGrid);
        localStorage.setItem('Financeiro', JSON.stringify(data));
    }

    function handleSave(dados) {
        const data = [...dadoFin, dados];
        setDadoFin(data);
        setAtualizaGrid(!atualizaGrid);
        localStorage.setItem('Financeiro', JSON.stringify(data));
    }

    return(
        <Container>
            <Resumo saldo={saldo} entrada={entrada} saida={saida} />
            <InputForm handleSave={handleSave}/>
            <Grid dadosFin={dadoFin} onDelete={onDelete} />
        </Container>
    )
}

