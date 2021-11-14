import { useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';

import { Menu } from '../../components/Menu';

import styles from './style.module.scss';

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

function RegisterPage(){
    const [cep, setCep] = useState('');
    const [adress, setAdress] = useState<AdressInterface>({} as AdressInterface);
    const {register, handleSubmit, formState:{errors}} = useForm();
    const history = useHistory();

    useEffect(() =>{
        if(cep.length < 9){
          return
        }else{
            setCep(cep.replace('-',''));
          try{
            fetch('https://viacep.com.br/ws/'+ cep +'/json/')
            .then((res) => res.json())
            .then((data) => {
              setAdress(data)
            })
            .catch((error) => console.log('Failed to fetch'))
            }catch (err){
              console.log('Tivemos um erro')
            }
        }
      },[cep])
      
      const onSubmit = (data: FormInputs) => {
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

          history.push("/");
      };

    return(
        <>
        <Menu title="RETURN" url="/" />

        <form className={styles.containerForm} onSubmit={handleSubmit(onSubmit)}>
            <h3 className={styles.registerTitle} >Cadastro</h3>                     
            <h4>Nome</h4>
                <input 
                    type="text" 
                    placeholder="SEU NOME"
                    className={styles.inputLong}
                    {...register("name", {required: true})}
                />
                <div className={styles.errorContainer}>
                    {errors.name?.type==='required' && 'COLOQUE O SEU NOME'}
                </div>    

            <h4>Data de nascimento</h4>          
                <input 
                    type="date" 
                    className={styles.inputShort}
                    {...register("birth", {required: true})}
                />
                <div className={styles.errorContainer}>
                    {errors.birth?.type==='required' && 'COLOQUE A SUA DATA DE NASCIMENTO'}
                </div>    
                   
            <h4>CPF</h4>  
                <InputMask 
                    placeholder="000.000.000-00"
                    mask="999.999.999-99"
                    className={styles.inputShort}
                    {...register("document", {required: true})} 
                />
                <div className={styles.errorContainer}>
                    {errors.document?.type==='required' && 'COLOQUE O SEU CPF'}
                </div>

            <h3 className={styles.addressTitle}>Endereço</h3>  

            <h4>CEP</h4>
            <InputMask  
                placeholder="00000-000"  
                mask="99999-999"
                className={styles.inputShort}
                {...register("cep", {required: true})}
                onChange={ e => { setCep(e.target.value)}}
            />
            <div className={styles.errorContainer}>
                {errors.cep?.type==='required' && 'COLOQUE O SEU CEP'}
            </div>    
                  
            <h4>Rua</h4>
                <input 
                    type="text" 
                    placeholder="Rua" 
                    className={styles.inputLong} 
                    {...register("road")}
                    onChange={ e => { setAdress({...adress, logradouro:e.target.value}) }}
                    disabled={true}
                    value={adress.logradouro}
                />    

            <h4>Bairro</h4>   
                <input 
                    type="text" 
                    placeholder="Bairro" 
                    className={styles.inputLong} 
                    {...register("district")}
                    onChange={ e => { setAdress({...adress, bairro:e.target.value}) }}
                    disabled={true}
                    value={adress.bairro}
                />    
                   
            <h4>Cidade</h4>
                <input 
                    type="text" 
                    placeholder="Cidade" 
                    className={styles.inputShort}
                    {...register("city")}
                    onChange={ e => { setAdress({...adress, localidade:e.target.value}) }}
                    disabled={true}
                    value={adress.localidade}
                />    

            <h4>UF</h4>
                <input 
                    type="text" 
                    placeholder="UF" 
                    className={styles.inputShort} 
                    {...register("uf")}
                    onChange={ e => { setAdress({...adress, uf:e.target.value}) }}
                    value={adress.uf}
                    disabled={true}
                    maxLength={2}
                />    
                

            <h4>N°</h4>
                <input 
                    type="number" 
                    placeholder="000" 
                    {...register("number", {required: true})}
                    className={styles.inputShort}
                    maxLength={9}
                />
                <div className={styles.errorContainer}>
                    {errors.number?.type==='required' && 'COLOQUE O SEU NUMERO'}
                </div>    
                   
            <h4>Complemento</h4>
                <input 
                    type="text" 
                    placeholder="Complemento" 
                    className={styles.inputLong}
                    {...register("complement", {required: false})}
                />
            
            <div className={styles.buttonContainer}>
                <button
                    type="submit"
                    className={styles.buttonStyle}
                >Registrar</button>
            </div>
        </form>
        </>
    )
}

export default RegisterPage;