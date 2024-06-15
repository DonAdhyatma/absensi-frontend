import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Notfound() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="primary">
        <Alert.Heading>Peringatan!</Alert.Heading>
        <p>
          Anda memasuki sub directory yang tidak tersedia, silakan ubah sub directory anda ke halaman yang tersedia pada website ini agar dapat menampilkan content website yang tersedia
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-primary">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <div className='d-flex justify-content-center m-5'><Button onClick={() => setShow(true)}>Tampilkan Peringatan</Button></div>}
    </>
  );
}

export default Notfound;