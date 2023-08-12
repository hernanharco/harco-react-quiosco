
import { useEffect } from 'react';
import useSWR from 'swr'
import { useNavigate } from 'react-router-dom';
import clienteAxios from "../config/axios";

export const useAuth = ({ middleware, url }) => {

    const token = localStorage.getItem('AUTH_TOKEN')
    const navigate = useNavigate()
    // console.log(token)

    const { data: user, error, mutate } = useSWR('/api/user', () =>
        clienteAxios('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.data)
            .catch(error => {
                throw Error(error?.response?.data?.errors)
            })
    )

    const login = async (datos, setErrores) => {
        try {
            const { data } = await clienteAxios.post('api/login', datos)
            // console.log(data.token)
            localStorage.setItem('AUTH_TOKEN', data.token);
            setErrores([]);
            await mutate()
        } catch (error) {
            // console.log(error);
            setErrores(Object.values(error.response.data.errors));
        }
    }
    const registro = async (datos, setErrores) => { 
        try {
            const {data} = await clienteAxios.post('/api/registro', datos)
            // console.log(data.token)
            localStorage.setItem('AUTH_TOKEN', data.token);
            setErrores([]);
            await mutate();
        } catch (error) {
            setErrores(Object.values(error.response.data.errors))
        }
    }

    const logout = async () => {
        // console.log('Diste Click')
        try {
            await clienteAxios.post('api/logout', null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            localStorage.removeItem('AUTH_TOKEN')
            await mutate(undefined)
        } catch (error) {
            // console.log(error);
            throw Error(error?.response?.data?.errors)
        }
    }

    // console.log(user)
    // console.log(error)

    // console.log(middleware)
    // console.log(url)

    //Este sirve para el logueo de los usuarios
    useEffect(() => {
        if (middleware === 'guest' && url && user) {
            navigate(url)
        }

        if(middleware === 'guest' && user && user.admin) {
            navigate('/admin');
        }
        //Si el usuario no es administrador no pueda ingresar al enlace de administrador
        if(middleware === 'admin' && user && !user.admin) {
            navigate('/');
        }

        if (middleware === 'auth' && error) {
            navigate('/auth/login')
        }
    }, [user, error])

    console.log(user);

    return {
        login,
        registro,
        logout,
        user,
        error
    }
}