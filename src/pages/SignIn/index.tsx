import React, { useCallback, useRef } from 'react';
import {Link} from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi'
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content,  Presentation } from './styles';

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(
        async (data: SignInFormData) => {
            try{
                formRef.current?.setErrors({});
                return console.log(data.email, data.password)
            }catch(err){
                return console.log(err);
            }
    },[])

    return (
        <>
            <Container>
                <Presentation>
                    <h2>The Geatest App</h2>
                    <span>for</span>
                    <h1>LOTTERY</h1>
                </Presentation>
                <Content>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Authentication</h1>
                        <div>
                            <Input name="email" placeholder="Email" />
                            <Input name="password" type="password" placeholder="Password" />
                            <Link to="/reset-password">I forget my password </Link>
                            <Button type="submit">Log In  <FiArrowRight /></Button>
                        </div>
                    </Form>
                    <Link to='/signup'>Sign Up  <FiArrowRight /></Link>
                </Content>
            </Container>
            <Footer />
        </>
    )
}

export default SignIn;