import { useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';

import { Menu } from '../../components/Menu';
import { FooterText } from '../../components/Footer/FooterText';
import { useRegister } from '../../hook/useRegister';

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
    const toRegister = useRegister;

    useEffect(() =>{
        if(cep.replaceAll('_','').length < 9){
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
              console.log('we had an error')
            }
        }
      },[cep])
      
      const onSubmit = (data: FormInputs) => {
          toRegister(data, adress);

          history.push("/");
      };

    return(
        <>
        <Menu title="RETURN" url="/" items={[]} />

        <form className={styles.containerForm} onSubmit={handleSubmit(onSubmit)}>
            <h3 className={styles.registerTitle}>REGISTER</h3>
            <div className={styles.containerFormIntern}>                                    
            <h4>Nome Completo <span>*</span></h4>
                <input 
                    type="text" 
                    placeholder="Nome Completo"
                    className={styles.inputLong}
                    {...register("name", {required: true})}
                />
                <div className={styles.errorContainer}>
                    {errors.name?.type==='required' && 'INFORME O SEU NOME COMPLETO'}
                </div>    

            <h4>Data de nascimento <span>*</span></h4>          
                <input 
                    type="date" 
                    className={styles.inputShort}
                    {...register("birth", {required: true})}
                />
                <div className={styles.errorContainer}>
                    {errors.birth?.type==='required' && 'INFORME A SUA DATA DE NASCIMENTO'}
                </div>    
                   
            <h4>CPF <span>*</span></h4>  
                <InputMask 
                    placeholder="000.000.000-00"
                    mask="999.999.999-99"
                    className={styles.inputShort}
                    {...register("document", {required: true})} 
                />
                <div className={styles.errorContainer}>
                    {errors.document?.type==='required' && 'INFORME O SEU CPF'}
                </div>

            <h3 className={styles.addressTitle}>Endereço <span>*</span></h3>  

            <h4>CEP</h4>
            <InputMask  
                placeholder="00000-000"  
                mask="99999-999"
                className={styles.inputShort}
                {...register("cep", {required: true})}
                onChange={ e => { setCep(e.target.value)}}
            /> 

            <div className={styles.errorContainer}>
                {
                    cep === undefined || cep === '' ?
                    errors.cep?.type==='required' && 'INFORME O SEU CEP': escape
                }
            </div> 
                  
            <h4>Rua</h4>
                <input 
                    type="text" 
                    placeholder="Rua" 
                    className={styles.inputLong} 
                    {...register("road", {disabled: true})}
                    onChange={ e => { setAdress({...adress, logradouro:e.target.value}) }}
                    value={adress.logradouro}
                />     

            <h4>Bairro</h4>   
                <input 
                    type="text" 
                    placeholder="Bairro" 
                    className={styles.inputLong} 
                    {...register("district", {disabled: true})}
                    onChange={ e => { setAdress({...adress, bairro:e.target.value}) }}
                    value={adress.bairro}
                />         
                   
            <h4>Cidade</h4>
                <input 
                    type="text" 
                    placeholder="Cidade" 
                    className={styles.inputShort}
                    {...register("city", {disabled: true})}
                    onChange={ e => { setAdress({...adress, localidade:e.target.value}) }}
                    value={adress.localidade}
                />    

            <h4>UF</h4>
                <input 
                    type="text" 
                    placeholder="UF" 
                    className={styles.inputShort} 
                    {...register("uf", {disabled: true})}
                    onChange={ e => { setAdress({...adress, uf:e.target.value}) }}
                    value={adress.uf}
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
            </div>
        </form>

        <FooterText />
        </>
    )
}

export default RegisterPage;