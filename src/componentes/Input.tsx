import Form from 'react-bootstrap/Form';

export function Input(props : {
  type: string, 
  placeholder: string, 
  name: string, 
  label: string, 
  value: string, 
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return(
    <div>  
       <Form.Group className="mb-3">
          <Form.Label>{props.label}</Form.Label>
          <Form.Control 
            type={props.type} 
            name={props.name} 
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange} />
        </Form.Group>
    </div>
  );
}