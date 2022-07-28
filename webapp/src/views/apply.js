import React, { useState } from 'react';
import { Form, FormControl, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { S3, BUCKET } from '../key/ncp';
import fs from 'fs';

const environments = [
    { value: 'retail', label: 'Retail'},
    { value: 'office', label: 'Office'},
    { value: 'warehouse', label: 'Warehouse'}
];

const countries = [
    { value: 'sg', label: 'Singapore'},
    { value: 'vn', label: 'Vietnam'},
    { value: 'ph', label: 'Philippines'},
    { value: 'my', label: 'Malaysia'},
    { value: 'th', label: 'Thiland'},
];

function Apply(){
    const [values, setValues] = useState({name :'', mobile:'', email:'', environment:'retail', country:'sg', address:'', filePath:'', desc:''});

    const [validated, setValidated] = useState(false);

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            handleAction();
        }

        setValidated(true);
    };

    const handleAction = async () => {
        await S3.putObject({
            Bucket: BUCKET,
            key: 'test',
            ACL: 'public-read',
            Body: fs.createReadStream(values.filePath)
        }).promise();
    };
    
    const handleTarget = (e) => {
        switch(e.target.id){
            case 'formName':
                values.name = e.target.value;
                break;
            case 'formContactNumber':
                values.mobile = e.target.value;
                break;
            case 'formEmail':
                values.email = e.target.value;
                break;
            case 'formEnvironment':
                values.environment = e.target.value;
                break;
            case 'formCountry':
                values.country = e.target.value;
                break;
            case 'formAddress':
                values.address = e.target.value;
                break;
            case 'formDescription':
                values.desc = e.target.value;
                break;
            case 'formFile':
                values.filePath = e.target.value;
                break;
            default:
                break;
        }
    };

    return (
		<Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className='mb-3'>
                <Form.Group as={Col} controlId='formName'>
                <Form.Label>Name</Form.Label>
                <FormControl required type='text' placeholder='Enter Name' onChange={handleTarget} />
                </Form.Group>

                <Form.Group as={Col} controlId='formContactNumber'>
                <Form.Label>Contact Number</Form.Label>
                <FormControl required type='text' placeholder='Enter Contact Number' onChange={handleTarget} />
                </Form.Group>

                <Form.Group as={Col} controlId='formEmail'>
                <Form.Label>Email</Form.Label>
                <FormControl required type='email' placeholder='Enter Email' onChange={handleTarget} />
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group as={Col} controlId='formEnvironment'>
                <Form.Label>Environment</Form.Label>
                <Form.Select required onChange={handleTarget}>
                    {environments.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId='formCountry'>
                <Form.Label>Country</Form.Label>
                <Form.Select required onChange={handleTarget}>
                    {countries.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </Form.Select>
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group as={Col} controlId='formAddress'>
                <Form.Label>Address</Form.Label>
                <FormControl required type='text' placeholder='Enter Address' onChange={handleTarget} />
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group as={Col} controlId='formFile'>
                <Form.Label>Files Upload</Form.Label>
                <Form.Control type='file' onChange={handleTarget}></Form.Control>
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group as={Col} controlId='formDescription'>
                <Form.Label>Describe your problems</Form.Label>
                <Form.Control required as="textarea" rows={10} onChange={handleTarget} />
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group as={Col} controlId="formSubmit">
                    <button type="submit" className='btn btn-primary w-100'>Submit</button>
                </Form.Group>
                <Form.Group as={Col} controlId="formClear">
                    <button type="button" className='btn btn-outline-danger w-100'>Clear</button>
                </Form.Group>
            </Row>
        </Form>
    );
};

export default Apply;