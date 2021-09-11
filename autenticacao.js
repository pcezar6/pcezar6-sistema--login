import React, { createContext,useEffect,useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";


export const AuthContext = createContext();

const AuthProvider =({children}) =>{
    const [usuarioLogado, setUsuarioLogado] = useState();
    const history =useHistory();

	useEffect(() =>{
     if(usuarioLogado){
		 sessionStorage.setItem('usuario_login',
			 JSON.stringify(usuarioLogado)
		 );
		 
		 history.replace("/");
	 }
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[usuarioLogado]);

    useEffect(()=>{
		let usuario= sessionStorage.getItem("usuario_login");
		usuario= JSON.parse(usuario);
        setUsuarioLogado(usuario);
	},[]);

    const entrar = (email,password) => {
		axios
			.post("http://localhost:8000/login", {
				email: email,
				senha: password,
			})
			.then((retorno) => {
				if (retorno.data.erro) {
					alert(retorno.data.erro);
				} else {
					setUsuarioLogado(retorno.data);
				}
			})
			.catch((erro) => {
				console.log(erro);
		});
	};
    return (
        <AuthContext.Provider value={{entrar:(email,password) => entrar(email,password),usuarioLogado, }}>
          {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;