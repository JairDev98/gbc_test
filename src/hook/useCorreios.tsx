import { useEffect, useState } from 'react';

interface adressInterface{
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
}

export function useCorreios(cep:string){
    const [adress, setAdress] = useState<adressInterface>({} as adressInterface);

    useEffect(()=> {
        fetch('http://viacep.com.br/ws/'+cep+'/json/')
            .then(response => response.json())
            .then(data => setAdress(data))
    },[cep]);

    return adress;
}