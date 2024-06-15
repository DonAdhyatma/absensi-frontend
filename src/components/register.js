import ReactTypingEffect from 'react-typing-effect';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
// ini namanya komponen login, react js itu basisnya komponen
function Register({ title, description }) {
  // variable penampung dibawah ini sebagai method getter dan setter sama seperti di java, yang menjadi getter variable NIP, yang menjadi setter variable setNIP
  // useState ini nilai awalannya kosong sebelum diinputkan user
  const [NIP, setNIP] = useState("")
  const [nama, setNama] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  // dibawah ini function untuk tracking apa saja yang diinputkan user menggunakan onChange
  // cara kerja function dibawah ini menerima 1 parameter yaitu inputNIP. Jadi siapa yang menggunakan function ini mesti mengirim parameter 1 biji
  const handleNIP = (inputNIP) => {
    setNIP(inputNIP)
  }

  const handleNama = (inputNama) => {
    setNama(inputNama)
  }

  const handlePassword = (inputPassword) => {
    setPassword(inputPassword)
  }

  const userRegister = () => {
    console.log('user register ready!')

    const requestingData = {
      nip: NIP,
      nama: nama,
      password: password
    }
    axios({
      method: "POST",
      url: "http://localhost:3200/users",
      data: requestingData
    }).then((result) => {
      console.log(result.data)
      if (result.data.registered) {
        alert("Pendaftaran berhasil")
        window.location.replace("/login")
      } else {
        alert("Gagal mendaftar, coba dengan NIP lain")
      }
    }).catch((e) => alert('e'))
    // }).then((result) => console.log('test endpoint: ', result.data)).finally(() => console.log('wkkwkwkw'))
    // ketika menambahkan method function finally artinya, finally tersebut akan dieksekusi setelah tes endpoint selesai, dan finally akan muncul
    // penggunaan finally ini menyesuaikan studi kasus, untuk kasus yg sederhana seperti ini tidak perlu menggunakan function finally
    // register page mencoba metode pengujian white box testing kata bang dea afrizal
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
        <Form.Group>
          <Form.Label className='fw-bold'>Nip</Form.Label>
          {/* di form control di bawah ini terdapat callback function */}
          <Form.Control type="number" placeholder='masukan NIP anda' required onChange={(event) => handleNIP(event.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label className='fw-bold'>Nama</Form.Label>
          {/* di form control di bawah ini terdapat callback function */}
          <Form.Control type="text" placeholder='masukan nama anda' required onChange={(event) => handleNama(event.target.value)} />
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

        <Button className='mt-4 w-100' onClick={() => userRegister()}>Daftar Sekarang</Button>
      </Form>
    </Container>
  )
}
// lanjut di menit 4:33:19
export default Register;