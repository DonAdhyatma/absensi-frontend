import ReactTypingEffect from 'react-typing-effect';
import { Container, Form, Button, InputGroup, Alert } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function Login({ title, description }) {
  const [NIP, setNIP] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleNIP = (inputNIP) => {
    setNIP(inputNIP);
  };

  const handlePassword = (inputPassword) => {
    setPassword(inputPassword);
  };

  const userLogin = () => {
    if (!NIP || !password) {
      setError("NIP dan Password wajib diisi!");
      return;
    }

    setError("");
    console.log('user login ready!');

    const requestingData = {
      nip: NIP,
      password: password
    };

    axios({
      method: "POST",
      url: "http://localhost:3200/users/login",
      data: requestingData
    }).then((result) => {
      localStorage.setItem("nip", result.data.users.nip);
      localStorage.setItem("nama", result.data.users.nama);
      window.location.replace("/dashboard");
    }).catch((error) => {
      setError("Login gagal, silakan periksa kembali NIP dan Password anda.");
      console.error('Login error: ', error);
    });
  };

  return (
    <Container>
      <div className='d-flex justify-content-center fw-bold h3 my-4'>
        <ReactTypingEffect
          text={[title, description]}
          speed={100}
          eraseDelay={800}
          eraseSpeed={100}
          typingDelay={100}
        />
      </div>
      <Form className='w-50 mx-auto'>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form.Group>
          <Form.Label className='fw-bold'>Nip</Form.Label>
          <Form.Control type="number" placeholder='masukan NIP anda' required onChange={(event) => handleNIP(event.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label className='fw-bold'>Password</Form.Label>
          <InputGroup>
            <Form.Control type={showPassword ? "text" : "password"} placeholder='******' required onChange={(event) => handlePassword(event.target.value)} />
            <Button variant='outline-primary' onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputGroup>
        </Form.Group>
        <Button className='mt-4 w-100' onClick={userLogin}>Login Sekarang</Button>
      </Form>
    </Container>
  );
}

export default Login;
