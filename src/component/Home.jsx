import { Button } from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Todo from './Todo';
import { useState } from 'react';
import { Add } from '../redux/actions/action'
import { useDispatch } from 'react-redux';

const Home = () => {

    const [data, setData] = useState("");
    console.log(data);

    const dispatch = useDispatch();

    const addData = () => {
        dispatch(Add(data))
        setData("")
    }

    return (
        <>
            <div   style={{background:'#ebf0f7', border:'1px solid', height:'89vh'}}>
                <section className='mt-3 text-center'>
                    <h3>Enter your today task </h3>

                    <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
                        <input className='form-control' value={data} onChange={(e) => setData(e.target.value)} />
                        <Button onClick={() => addData()}
                            variant='contained' className='mx-2'>
                            <AddCircleIcon />
                        </Button>
                    </div>

                    <Todo />
                </section>
            </div>
        </>
    )
}

export default Home