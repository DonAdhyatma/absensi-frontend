import ReactTypingEffect from 'react-typing-effect';
import { Container, Form, Button, InputGroup, Alert } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
// ini namanya komponen login, react js itu basisnya komponen
function Login({ title, description }) {
  // variable penampung dibawah ini sebagai method getter dan setter sama seperti di java, yang menjadi getter variable NIP, yang menjadi setter variable setNIP
  // useState ini nilai awalannya kosong sebelum diinputkan user
  const [NIP, setNIP] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  // dibawah ini function untuk tracking apa saja yang diinputkan user menggunakan onChange
  // cara kerja function dibawah ini menerima 1 parameter yaitu inputNIP. Jadi siapa yang menggunakan function ini mesti mengirim parameter 1 biji
  const handleNIP = (inputNIP) => {
    setNIP(inputNIP)
  }

  const handlePassword = (inputPassword) => {
    setPassword(inputPassword)
  }

  const userLogin = () => {
    if (!NIP || !password) {
      setError("NIP dan Password wajib diisi!")
      return
    }

    setError("") //reset error message
    console.log('user login ready!')
    // data user gue adalah nip: 1000, password:123

    const requestingData = {
      nip: NIP,
      password: password
    }
    axios({
      method: "POST",
      url: "http://localhost:3200/users/login",
      data: requestingData
    }).then((result) => {
      localStorage.setItem("nip", result.data.users.nip)
      localStorage.setItem("nama", result.data.users.nama)
      window.location.replace("/dashboard")
    }).catch((error) => {
      setError("Login gagal, silakan periksa kembali NIP dan Password anda.")
      console.error('Login error: ', error)
    })
    // }).then((result) => console.log('test endpoint: ', result.data)).finally(() => console.log('wkkwkwkw'))
    // ketika menambahkan method function finally artinya, finally tersebut akan dieksekusi setelah tes endpoint selesai, dan finally akan muncul
    // penggunaan finally ini menyesuaikan studi kasus, untuk kasus yg sederhana seperti ini tidak perlu menggunakan function finally
  }

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
      {/* standar component form di react bootstrap seperti ini */}
      <Form className='w-50 mx-auto'>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form.Group>
          <Form.Label className='fw-bold'>Nip</Form.Label>
          {/* di form control di bawah ini terdapat callback function */}
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
        {/* onclick tidak mengarah langsung sedangkan onsubmit itu ngarah langsung/ngedirect */}
        <Button className='mt-4 w-100' onClick={() => userLogin()}>Login Sekarang</Button>
      </Form>
    </Container>
  )
}

export default Login;