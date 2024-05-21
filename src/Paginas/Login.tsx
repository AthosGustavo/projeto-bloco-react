
import { Input } from "../componentes/Input";
import "../styles/login/style.css"
import { Container, Card, Form, Button } from 'react-bootstrap';



export function Login(){

  return(
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Form>
            <Input
              type="email"
              name="email"
              placeholder="Digite o seu e-mail"
              label="E-mail"/>

            <Input
              type="password"
              name="senha"
              placeholder="Digite a sua senha"
              label="Senha"/>

            <Button variant="primary" type="submit" className="w-100">
              Entrar
            </Button>
            <hr/>
            <Button variant="link">Ainda não possui uma conta?</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    
  );
}