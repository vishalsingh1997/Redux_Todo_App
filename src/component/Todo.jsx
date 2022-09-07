import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Divider } from '@mui/material';
import { Remove, Update_data } from '../redux/actions/action'




const Todo = () => {

    const { User_data } = useSelector((state) => state.todoReducers)
    // console.log(User_data);

    const dispatch = useDispatch();

    //show modal state
    const [showeye, setShoweye] = useState(false);

    //show value state
    const [showeyevalue, setShowEyeValue] = useState('');

    const [show, setShow] = useState(false)
    const [update, setUpdate] = useState('')
    const [indx, setIndx] = useState('')


    const handleClose = () => setShow(false);

    const handleShow = (el) => {
        setShow(true)
        setUpdate(el)
    }



    const remove = (id) => {
        dispatch(Remove(id))
    }


    const userTask_Update = ()=>{
        dispatch(Update_data(update, indx))
        handleClose()
    }   

    return (
        <>
            <div className="todo_data col-lg-5 mx-auto mt-2">
                {
                    User_data.map((ele, k) => {
                        return (
                            <>
                                <div className="todo_container d-flex justify-content-between align-items-center px-2 mb-2 " key={k} style={{ background: "#dcdde1", borderRadius: '3px', height: '45px' }}>
                                    <li style={{ listStyle: 'none' }}>{ele}</li>
                                    <div className="edit_dlt col-lg-3 d-flex justify-content-between align-item-center">
                                        <EditIcon
                                            onClick={() => {
                                                handleShow(ele)
                                                setIndx(k)
                                            }}
                                            style={{ color: '#3c40c6', cursor: 'pointer' }} />
                                        <DeleteIcon
                                            onClick={() => remove(k)}
                                            style={{ color: 'red', cursor: 'pointer' }} />
                                        <VisibilityIcon onClick={() => {
                                            setShoweye(true)
                                            setShowEyeValue(ele)
                                        }}

                                            style={{ color: '#1dd1a1', cursor: 'pointer' }} />
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            {/* read modal */}
            <Modal
                show={showeye}
                backdrop="static"
                keyboard={false}
            >
                <h2 className='m-2'>Your Task</h2>
                <Divider />
                <Modal.Body>
                    <h5 style={{ color: 'blue', fontWeight: 'normal' }} >{showeyevalue}</h5>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        setShoweye(false)
                    }} variant="secondary" className='bg-danger'>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>

            {/* update modal */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Your Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
                        <input className='form-control col-5' value={update} onChange={(e) => setUpdate(e.target.value)} />

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>userTask_Update()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Todo