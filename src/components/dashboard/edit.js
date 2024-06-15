import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'
import { logout } from './logout'

const Edit = ({ title }) => {
  const [nama, setNama] = useState(localStorage.getItem("nama"))
  const [password, setPassword] = useState("")
  const [passwordBaru, setPasswordBaru] = useState("")

  const updateProfile = () => {
    const requestingData = {
      nip: localStorage.getItem("nip"),
      passwordBaru: passwordBaru,
      password: password,
      nama: nama
    }
    axios({
      method: "PUT",
      url: "http://localhost:3200/users",
      data: requestingData
    }).then(() => {
      alert("anda akan keluar dari sistem, silakan login kembali.")
      logout()
    })
  }

  return (
    <Form className='my-4'>
      <h3>{title}</h3>
      <Form.Group>
        <Form.Label>Nama</Form.Label>
        <Form.Control onChange={(event) => setNama(event.target.value)} defaultValue={localStorage.getItem("nama")} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password Baru</Form.Label>
        <Form.Control onChange={(event) => setPasswordBaru(event.target.value)} />
      </Form.Group>
      <hr />
      <Form.Group>
        <Form.Label>Password Lama</Form.Label>
        <Form.Control onChange={(event) => setPassword(event.target.value)} />
        <Form.Text className='text-muted'>Silahkan masukkan password lama anda. Anda diharuskan melakukan login ulang setelah mengupdate password.</Form.Text>
      </Form.Group>
      <Button className='w-100' onClick={() => updateProfile()}>Update Profile</Button>
    </Form>
  )
}

export default Edit
// untuk kedepannya jangan lupa menyalakan server backend terlebih dahulu, selalu setiap memulai project fullstack harus menyalakan server backend dlu baru server frontend
// jangan frontendnya deluan karena akan crash/rusak 