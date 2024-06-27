import React from 'react';
import { Button } from 'reactstrap';
import { MdDeleteOutline } from "react-icons/md";
import { RiExchange2Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import DataTable from 'react-data-table-component';
import Modal from '../Modal';
import useUsuarios from '../hooks/useUsuarios';

const columns = (deleteApi, openModalPatch) => [
    {
        name: 'User',
        selector: row => row.user,
        sortable: true,
    },
    {
        name: 'FirstName',
        selector: row => row.firstName,
        sortable: true,
    },
    {
        name: 'LastName',
        selector: row => row.lastName,
        sortable: true,
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
    },
    {
        name: 'Phone',
        selector: row => row.phone,
        sortable: true,
    },
    {
        name: 'Carne',
        selector: row => row.carne,
        sortable: true,
    },
    {
        button: true,
        cell: row => (
            <div>
                <Button onClick={() => openModalPatch(row)}><RiExchange2Line className=' text-blue-900' /></Button>
                <Button onClick={() => deleteApi(row.id)} className="ml-2"><MdDeleteOutline className='text-red-500' /></Button>
            </div>
        )
    },
];

const ModalPatch = ({ isOpenModal, closeModal, user, password, firstName, lastName, email, phone, carne, handleInputChange, handleSubmit }) => (
    <Modal open={isOpenModal} close={closeModal}>
        <div>
            <form onSubmit={handleSubmit}>
                <h4 className='w-96 text-center text-lg mb-6'>Editar Usuario</h4>
                <div className='space-y-4'>
                    <div className='flex flex-col'>
                        <input className='rounded p-2 border' type="text" placeholder='username' value={user} onChange={(e) => handleInputChange(e, 'user')} required />
                    </div>
                    <div className='flex flex-col'>
                        <input className='rounded p-2 border' type="text" placeholder='firstName' value={firstName} onChange={(e) => handleInputChange(e, 'firstName')} required />
                    </div>
                    <div className='flex flex-col'>
                        <input className='rounded p-2 border' type="text" placeholder='lastName' value={lastName} onChange={(e) => handleInputChange(e, 'lastName')} required />
                    </div>
                    <div className='flex flex-col'>
                        <input className='rounded p-2 border' type="text" placeholder='email' value={email} onChange={(e) => handleInputChange(e, 'email')} required />
                    </div>
                    <div className='flex flex-col'>
                        <input className='rounded p-2 border' type="password" placeholder='password' value={password} onChange={(e) => handleInputChange(e, 'password')} required />
                    </div>
                    <div className='flex flex-col'>
                        <input className='rounded p-2 border' type="text" placeholder='phone' value={phone} onChange={(e) => handleInputChange(e, 'phone')} required />
                    </div>
                    <div className='flex flex-col'>
                        <input className='rounded p-2 border' type="text" placeholder='carne' value={carne} onChange={(e) => handleInputChange(e, 'carne')} required />
                    </div>
                </div>
                <div className='flex justify-around mt-6'>
                    <button type='submit' className='bg-green-600 hover:bg-green-400 text-white py-2 px-4 rounded'>Guardar</button>
                    <button type='button' onClick={closeModal} className='bg-red-600 hover:bg-red-400 text-white py-2 px-4 rounded'>Volver</button>
                </div>
            </form>
        </div>
    </Modal>
);

const UserTableModule = () => {
    const {
        dataApi,
        isOpen,
        isOpenModalPatch,
        user,
        password,
        firstName,
        email,
        lastName,
        phone,
        carne,
        handleInputChange,
        handleSubmit,
        openModalPatch,
        closeModal,
        deleteApi,
        setIsOpen,
    } = useUsuarios();

    if (dataApi === null) {
        return <div className='flex justify-center items-center h-full'>Cargando...</div>;
    }

    return (
        <div className='w-full grid'>
            <div className='w-11/12 pt-12 pl-20 grid items-center'>
                <ModalPatch isOpenModal={isOpenModalPatch} closeModal={closeModal} user={user} firstName={firstName} lastName={lastName} password={password} email={email} phone={phone} carne={carne} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
                <div className='mb-4 relative z-10'>
                    <button className='flex items-center bg-green-600 text-white hover:bg-green-400 rounded py-2 px-4' onClick={() => setIsOpen(true)}><IoMdAdd /> Agregar Usuario</button>
                </div>
                <Modal open={isOpen} close={closeModal}>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <h4 className='w-96 text-center text-lg mb-6'>Agregar Usuario</h4>
                            <div className='space-y-4'>
                                <div className='flex flex-col'>
                                    <input className='rounded p-2 border' type="text" placeholder='username' value={user} onChange={(e) => handleInputChange(e, 'user')} required />
                                </div>
                                <div className='flex flex-col'>
                                    <input className='rounded p-2 border' type="text" placeholder='firstName' value={firstName} onChange={(e) => handleInputChange(e, 'firstName')} required />
                                </div>
                                <div className='flex flex-col'>
                                    <input className='rounded p-2 border' type="text" placeholder='lastName' value={lastName} onChange={(e) => handleInputChange(e, 'lastName')} required />
                                </div>
                                <div className='flex flex-col'>
                                    <input className='rounded p-2 border' type="text" placeholder='email' value={email} onChange={(e) => handleInputChange(e, 'email')} required />
                                </div>
                                <div className='flex flex-col'>
                                    <input className='rounded p-2 border' type="password" placeholder='password' value={password} onChange={(e) => handleInputChange(e, 'password')} required />
                                </div>
                                <div className='flex flex-col'>
                                    <input className='rounded p-2 border' type="text" placeholder='phone' value={phone} onChange={(e) => handleInputChange(e, 'phone')} required />
                                </div>
                                <div className='flex flex-col'>
                                    <input className='rounded p-2 border' type="text" placeholder='carne' value={carne} onChange={(e) => handleInputChange(e, 'carne')} required />
                                </div>
                            </div>
                            <div className='flex justify-around mt-6'>
                                <button type='submit' className='bg-green-600 hover:bg-green-400 text-white py-2 px-4 rounded'>Guardar</button>
                                <button type='button' onClick={closeModal} className='bg-red-600 hover:bg-red-400 text-white py-2 px-4 rounded'>Volver</button>
                            </div>
                        </form>
                    </div>
                </Modal>
                <DataTable
                    title="Tabla"
                    columns={columns(deleteApi, openModalPatch)}
                    data={dataApi}
                    pagination
                    selectableRows
                    responsive
                    onSelectedRowsChange={(selectedRows) => console.log(selectedRows.selectedRows)}
                    onRowMouseEnter={(row) => console.log('Row selected: ', row)}
                />
            </div>
        </div>
    );
};

export default UserTableModule;
