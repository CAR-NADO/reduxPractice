import React, { useState } from 'react';
import './Header.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ACTION, DELETE_ACTION } from './action/action';
import { Link } from 'react-router-dom';
const Header = () => {
        const dispatch = useDispatch();
        const listData = useSelector((state) => state.reducer.list)
        console.log("listData", listData);
        const [inputField, setInputField] = useState({
        name: "",
        email: "",
        contact: "",
        password: ""
        }
        )
    const handleInputField = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputField(
        {
        ...inputField,
        [name]: value
        }
        )
        }
    const handleRegistration = () => {
        dispatch(ADD_ACTION(inputField))
        setInputField({
        name: "",
        email: "",
        contact: "",
        password: ""
        })
        }
    const handleDelete = (id) => {
        console.log("id", id);
        dispatch(DELETE_ACTION(id))
        // console.log("id",id);
        }
    return (
        <div className='container'>
        <div className="form">
        <div className="left_Side">
        <div className="left_Heading">
        <h2>Registration Form</h2>
        </div>
        <div className="input_Area">
        <div className="stu_Name" id='input_area'>
        <h3 id='h03'>Name:</h3>
        <input type="text" name='name' placeholder='Enter your Name' id='name' autoComplete='off' className='text_Area'
        value={inputField.name}
        onChange={handleInputField} />
        </div>
        <div className="stu_Email" id='input_area'>
        <h3 id='h03'>Email:</h3>
        <input type="text" name='email' placeholder='Enter your Email' id='email' autoComplete='off' className='text_Area'
        value={inputField.email}
        onChange={handleInputField} />
        </div>
        <div className="stu_Contact" id='input_area'>
        <h3 id='h03'>Contact:</h3>
        <input type="number" name='contact' placeholder='Enter Contact Number' id='contact' autoComplete='off' className='text_Area'
        value={inputField.contact}
        onChange={handleInputField} />
        </div>
        <div className="stu_Password" id='input_area'>
        <h3 id='h03'>Password:</h3>
        <input type="password" name='password' placeholder='Enter Password' id='password' autoComplete='off' className='text_Area'
        value={inputField.password}
        onChange={handleInputField} />
        </div>
        <div className="register_button">
        <button id='btn' onClick={handleRegistration} >Register</button>
        </div>
        </div>
        </div>
        <div className="right_side" >
        <div className="registraion_ouput">
        <h1>Registration Output:</h1>
        </div>
        <div className="data_output">
        <div className="id">ID</div>
        <div className="name">Name</div>
        <div className="email">Email</div>
        <div className="contact">Contact</div>
        <div className="password">Password</div>
        </div>

        {
         listData.map((data, id) => {
         //    console.log("Dataaa", data);
         return (

        <div className="output_parent" key={id}>
          <div className="output_result" >
        <div className="id1">{id}</div>
         <div className="name1"> {data.data.name} </div>
        <div className="email1"> {data.data.email} </div>
         <div className="contact1"> {data.data.contact} </div>
        <div className="password1"> {data.data.password} </div>
        <div className="edit_button">
        <Link to='/Update'>
        <button className="btn-01">
        <EditIcon fontSize='small' />
        </button>
        </Link>
        </div>
        <div className="delete_button">
        <button className="btn-01">
        <DeleteForeverIcon fontSize='small' onClick={() => handleDelete(data.id)} />
        </button>
        </div>
        </div>
        </div>
            )
         }
         )
            }
        </div>
        </div>
        </div>
        )
        }
export default Header;