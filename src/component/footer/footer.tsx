import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from './footer.module.scss';
import Nav from '../nav/Nav';
import error from '../../assets/images/error.svg';
import classNames from 'classnames';

interface Message {
    'name': string
    'email': string
    'message': string
}

const defaultMessage: Message = {
    'name': '',
    'email': '',
    'message': ''
}

function Footer() {

    const [message, setMessage] = useState(defaultMessage);
    const [isValid, setIsValid] = useState(Array(3).fill(false))
    const classErrorMessage = (index: number) => { return classNames(styled['error'], { [styled['active']]: isValid[index] }); }
    const classErrorIcon = (index: number) => { return classNames({ [styled.active]: isValid[index] }); }

    const handlerOnChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.currentTarget;
        setMessageState(name as 'name' | 'email' | 'message', value);
    }
    const handlerOnChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { value, name } = event.currentTarget;
        setMessageState(name as 'name' | 'email' | 'message', value);
    }

    const handlerSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsValid(() => {
            return [
                message.name === '',
                message.email === '',
                message.message === ''
            ]
        })

        if (isValid.some((e) => { return e; })) { return; }

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(message),
            });

            if (!response.ok) {
                throw new Error('Erro na requisição');
            }

            const data = await response.json();
            console.log('Concluido', data);
        }
        catch (error) {
            console.error('Erro', error)
        }
    }

    const setMessageState = (name: 'name' | 'email' | 'message', value: string) => {
        setMessage(
            (p): Message => {
                return {
                    ...p,
                    [name]: value
                }
            }
        )
    }

    return (
        <footer className={styled['footer']}>
            <div className={styled['region']}>
                <div className={styled['container']}>
                    <div className={styled['contact']}>
                        <h2 className={styled['title']}>Contact</h2>
                        <p className={styled['paragraphy']}>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
                    </div>
                    <form onSubmit={(e) => handlerSubmit(e)} action="" method="post">
                        <div className={styled['name']}>
                            <input onChange={handlerOnChangeInput} type="text" name="name" placeholder='NAME' value={message.name} />
                            <img className={classErrorIcon(0)} src={error} alt="Icon alert" />
                        </div>
                        <p className={classErrorMessage(0)}>Sorry, invalid format here</p>
                        <div className={styled['email']}>
                            <input onChange={handlerOnChangeInput} type="email" name="email" placeholder='EMAIL' value={message.email} />
                            <img className={classErrorIcon(1)} src={error} alt="Icon alert" />
                        </div>
                        <p className={classErrorMessage(1)}>Sorry, invalid format here</p>
                        <div className={styled['message']}>
                            <textarea onChange={handlerOnChangeTextArea} name="message" cols={30} rows={1} placeholder='MESSAGE' value={message.message}></textarea>
                            <img className={classErrorIcon(2)} src={error} alt="Icon alert" />
                        </div>
                        <p className={classErrorMessage(2)}>Sorry, invalid format here</p>
                        <button className={styled['submit']} type="submit">send message</button>
                    </form>
                </div>

                <nav className={styled['nav']}>
                    <Nav />
                </nav>
            </div>
        </footer>
    );
}

export default Footer;