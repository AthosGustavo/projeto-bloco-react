
import { useState } from "react";
import { Input } from "../componentes/Input";
import "../styles/login/style.css"
import { Container, Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { login } from '../infra/Auth';



export function Login(){

  const [cadastro, setCadastro] = useState(true);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  
  const navigate = useNavigate();

  let habilitaCadastro = ():void => {
    setCadastro(!cadastro);
  }

  let entrar = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    const sucesso = await login(email, senha);
    if (sucesso) {
      navigate("/home");
    } else {
      console.log('Falha no login');
    }
  }

  

  return(
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Form>
            <Input
              type="email"
              name="email"
              placeholder="Digite o seu e-mail"
              label="E-mail"
              onChange={(event) => setEmail(event.target.value)}
              value={email}/>

            <Input
              type="password"
              name="senha"
              placeholder="Digite a sua senha"
              label="Senha"
              onChange={(event) => setSenha(event.target.value)}
              value={senha}/>

            {cadastro && 
            
              <Input
                type="text"
                name="nome"
                placeholder="Digite o seu nome"
                label="Nome"
                onChange={(event) => setNome(event.target.value)}
                value={nome}/>
            }
            
            <Button onClick={entrar} variant="primary" type="submit" className="w-100">
              Entrar
            </Button>
            <hr/>
            {cadastro ? 
              <Button onClick={habilitaCadastro} variant="link">Já possui uma conta?</Button> : 
              <Button onClick={habilitaCadastro} variant="link">Ainda não possui uma conta?</Button>
            }
            
            
          </Form>
        </Card.Body>
      </Card>
    </Container>
    
  );
}