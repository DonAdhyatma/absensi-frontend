// contoh dari dea afrizal supaya component react kedepannya lebih enak lagi ngoding menggunakan reactjs
// supaya kodingan react lebih singkat di satu file, di pisahkan antar komponennya
import Button from 'react-bootstrap/Button';
// kalau importnya seperti logout dibawah ini artinya import function
// kalau tidak ada kurawal dan huruf awalnya gede adalah import komponen
import { logout } from './logout'

const Navbar = () => {


  return (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2">{localStorage.getItem("nama")}</h1>
      <div className="btn-toolbar mb-2 mb-md-0">
        <div className="btn-group me-2">
          <Button onClick={() => logout()} className="mt-2" size="sm" variant="danger">Logout</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar