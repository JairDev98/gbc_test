interface AdressInterface{
    logradouro: string;
    bairro:string;
    localidade:string;
    uf:string;
}

interface FormInputs{
    name: string;
    birth: string;
    document: string;
    cep:string;
    road: string;
    district: string;
    city: string;
    uf: string;
    number: string;
    complement:string;
}

export function useRegister(data: FormInputs, adress: AdressInterface){
    localStorage.setItem('@name', data.name);
    localStorage.setItem('@birth', data.birth);
    localStorage.setItem('@document', data.document);
    localStorage.setItem('@cep', data.cep);
    localStorage.setItem('@road', adress.logradouro);
    localStorage.setItem('@district', adress.bairro);
    localStorage.setItem('@city', adress.localidade);
    localStorage.setItem('@uf', adress.uf);
    localStorage.setItem('@number', data.number);
    localStorage.setItem('@complement', data.complement);
    
    document.cookie=`name=${data.name}`
    document.cookie=`birth=${data.birth}`
    document.cookie=`document=${data.document}`
    document.cookie=`cep=${data.cep}`
    document.cookie=`road=${adress.logradouro}`
    document.cookie=`district=${adress.bairro}`
    document.cookie=`city=${adress.localidade}`
    document.cookie=`uf=${adress.uf}`
    document.cookie=`number=${data.number}`
    document.cookie=`complement=${data.complement}`
}