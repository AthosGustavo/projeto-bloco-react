import { User,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../infra/firebase";


export let login = (email: string, password: string): Promise<boolean>  => {

  
  return signInWithEmailAndPassword(auth, email, password)
    .then((credenciais) => {
      const usuario: User = credenciais.user;
      return true;
      console.log("Usuário autorizado");
    })
    .catch((erro) => {
      const statusCode = erro.code;
      const msgErro = erro.message;
      return false;
      console.log("Senha ou E-mail estão errados");
    })
} 