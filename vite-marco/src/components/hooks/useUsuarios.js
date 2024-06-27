import { useState, useEffect } from 'react';

const useUsuarios = () => {
    const [dataApi, setDataApi] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenModalPatch, setIsOpenModalPatch] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [carne, setCarne] = useState('');
    const [currentUserId, setCurrentUserId] = useState(null);


    useEffect(() => {
        getSubmit();
    }, []);

    const handleInputChange = (e, field) => {
        if (field === 'user') setUser(e.target.value);
        if (field === 'password') setPassword(e.target.value);
        if (field === 'firstName') setFirstName(e.target.value);
        if (field === 'lastName') setLastName(e.target.value);
        if (field === 'email') setEmail(e.target.value);
        if (field === 'phone') setPhone(e.target.value);
        if (field === 'carne') setCarne(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            patchApi(currentUserId, user, password, firstName, lastName, email, phone, carne);
        } else {
            postApi(user, password, firstName, lastName, email, phone, carne);
        }
    };

    const openModalPatch = (row) => {
        setCurrentUserId(row.id);
        setUser(row.user);
        setFirstName(row.firstName);
        setLastName(row.lastName);
        setEmail(row.email);
        setPassword(row.password || ''); // Assuming password might not be available
        setPhone(row.phone);
        setCarne(row.carne);
        setIsOpenModalPatch(true);
        setIsEditing(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setIsOpenModalPatch(false);
        setUser('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setCarne('');
        setIsEditing(false);
    };

    const getSubmit = async () => {
        try {
            const response = await fetch('http://192.168.100.6:8080/usuario/allUsuario');
            const data = await response.json();
            setDataApi(data);
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    const deleteApi = async (id) => {
        try {
            await fetch(`http://192.168.100.6:8080/usuario/${id}`, {
                method: 'DELETE',
            });
            getSubmit();
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    const patchApi = async (id, user, firstName , lastName, email, password, phone, carne) => {
        const listaPerfil = [];
        
        try {
            console.log(id, user, firstName, lastName, email, password, phone, carne);
            await fetch(`http://192.168.100.6:8080/usuario`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                then: console.log(id, user, firstName, lastName, email, password, phone, carne),
                body: JSON.stringify({ id, user, firstName, lastName, email, password, phone, carne, listaPerfil}),
            });
            getSubmit();
            setIsOpenModalPatch(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const postApi = async (user, password, firstName, lastName, email, phone, carne) => {
        try {
            console.log(user, firstName, lastName, email, password, phone, carne);
            await fetch('http://192.168.100.6:8080/usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user, firstName, lastName, email, password, phone, carne}),
               
            });
            getSubmit();
            setIsOpen(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return {
        dataApi,
        isOpen,
        isOpenModalPatch,
        isEditing,
        user,
        password,
        firstName,
        lastName,
        email,
        phone,
        carne,
        handleInputChange,
        handleSubmit,
        openModalPatch,
        closeModal,
        deleteApi,
        setIsOpen, // Make sure this function is available
    };
};

export default useUsuarios;