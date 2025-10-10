import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login'

// if the userName input is getting rendered
test('username input is getting rendered', ()=>{
    render(<Login/>)
    const userName = screen.getByPlaceholderText(/UserName/i)
    expect(userName).toBeInTheDocument()
})
// if the password input is getting renderd
test('password input is getting rendered', ()=>{
    render(<Login/>)
    const password = screen.getByPlaceholderText(/Password/i)
    expect(password).toBeInTheDocument()
})
// if the the button is getting rendered
test('login button is getting rendered', ()=>{
    render(<Login/>)
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
})





// by default the userName and passowrd are empty
test('username and password fields are empty by default', ()=>{
    render(<Login/>)
    const userName = screen.getByPlaceholderText(/UserName/i)
    const password = screen.getByPlaceholderText(/Password/i)
    expect(userName.textContent).toBe('')
    expect(password.textContent).toBe('')
})

//the button should be disbaled when there is no data in the input fields
test('login button is disabled when there is no username and password', ()=>{
    render(<Login/>)
    const btn = screen.getByRole('button')
    expect(btn).toBeDisabled()
})

//write tests for value change of user name
test('username input updates on change', ()=>{
    render(<Login/>)
    const userName = screen.getByPlaceholderText(/UserName/i)
    fireEvent.change(userName, {target:{value: 'Samprit'}})
    expect(userName.value).toBe('Samprit')
})

//write tests for value change of password
test('password input updates on change', ()=>{
    render(<Login/>)
    const password = screen.getByPlaceholderText(/Password/i)
    fireEvent.change(password, {target:{value: 'password123'}})
    expect(password.value).toBe('password123')
})

//the button should be enabled when there is data in the input fields
test('login button is enabled when there is username and password', ()=>{
    render(<Login/>)
    const btn = screen.getByRole('button')
    const userName = screen.getByPlaceholderText(/UserName/i)
    const password = screen.getByPlaceholderText(/Password/i)
    fireEvent.change(userName, {target:{value:"Samprit"}})
    fireEvent.change(password, {target:{value:"password123"}})
    expect(btn).not.toBeDisabled()
})

//After login the username should be displayed
