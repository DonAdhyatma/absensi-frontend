import { useEffect, useState } from "react"
import { Container, Badge } from "react-bootstrap"
import axios from "axios"
import Navbar from './navbar'
import Edit from './edit'
// syarat untuk bisa next.js pelajarin react.js dlu
// syarat untuk bisa react.js pelajarin js vanila dlu
function Dashboard({ title }) {
  const [absensiList, setAbsensiList] = useState([])
  const [absenNotif, setAbsenNotif] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem("nama") && !localStorage.getItem('nip')) {
      console.log('user belum login')
      window.location.replace("/login")
    }
    axios({
      method: "GET",
      url: "http://localhost:3200/absensi"
    }).then((result) => setAbsensiList(result.data.absensi))
  }, [absenNotif])

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  const absen = (params) => {
    const requestingData = {
      nip: localStorage.getItem('nip')
    }
    axios({
      method: "POST",
      url: `http://localhost:3200/absensi/${params}`,
      data: requestingData
    }).then((result) => {
      setAbsenNotif(!absenNotif)
    })
  }
  // catatan dari dea afrizal yang susah finishing seluruhannya, di endingnya biasanya memvalidasi, unit testing, security, itu kalau mau buat produk real setelah itu deployment server

  return (
    <Container >
      <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
        <Navbar />
        <h2>{title}</h2>
        <div>
          <p>Hello {localStorage.getItem("nama")}!</p>
          <p>nip{localStorage.getItem("nip")}</p>
        </div>
        <Edit title="Edit Profile" />
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">NIP</th>
                <th scope="col">Status</th>
                <th scope="col">Tanggal</th>
              </tr>
            </thead>
            <tbody>
              {
                // i pada kode dibawah ini berfungsi sebagai index, dimana index itu selalu dimulai dari angka 0
                absensiList.map((absensi, i) => {
                  const { users_nip, status, createdAt } = absensi
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{users_nip}</td>
                      <td>{status}</td>
                      <td>{formatDate(createdAt)}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div>
          <Badge pill bg="primary" className="me-4" style={{ cursor: "pointer" }} onClick={() => absen("checkin")}>
            Checkin
          </Badge>
          <Badge pill bg="danger" style={{ cursor: "pointer" }} onClick={() => absen("checkout")}>
            Checkout
          </Badge>
        </div>
      </main>
    </Container>
  )
}

export default Dashboard;








// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Carousel } from 'react-bootstrap';

// function Dashboard() {
//   return (
//     <>
//       <Navbar expand="lg" className="bg-dark navbar-dark">
//         <Container fluid>
//           <Navbar.Brand href="#">Mini Dashboard</Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="me-auto my-2 my-lg-0"
//               style={{ maxHeight: '100px' }}
//               navbarScroll
//             >
//               <Nav.Link href="#action1">Home</Nav.Link>
//               <Nav.Link href="#action1">Navigate</Nav.Link>
//               <NavDropdown title="Settings" id="navbarScrollingDropdown">
//                 <NavDropdown.Item href="#action3">Pilihan 1</NavDropdown.Item>
//                 <NavDropdown.Item href="#action4">
//                   Pilihan 2
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action5">
//                   Pilihan lainnya
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//             <Form className="d-flex">
//               <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//               />
//               <Button variant="outline-primary">Search</Button>
//             </Form>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Container className="mt-4">
//         <Carousel>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://via.placeholder.com/800x400"
//               alt="First slide"
//             />
//             <Carousel.Caption>
//               <h3>First slide label</h3>
//               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://via.placeholder.com/800x400"
//               alt="Second slide"
//             />
//             <Carousel.Caption>
//               <h3>Second slide label</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://via.placeholder.com/800x400"
//               alt="Third slide"
//             />
//             <Carousel.Caption>
//               <h3>Third slide label</h3>
//               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </Container>
//     </>
//   );
// }

// export default Dashboard;