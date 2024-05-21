import Form from 'react-bootstrap/Form';


export function Input(props : {type: string, placeholder: string, name: string, label: string}){

  return(
    <div>  
       <Form.Group className="mb-3">
          <Form.Label>{props.label}</Form.Label>
          <Form.Control type={props.type} name={props.name} placeholder={props.placeholder} />
        </Form.Group>
    </div>
  );
}