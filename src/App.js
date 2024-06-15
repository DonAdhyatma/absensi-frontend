// import Notfound from './components/notfound'
// import Navigate from './components/navigate'
import Login from './components/login'
import Dashboard from './components/dashboard/index'
import Home from './components/home'
import Register from './components/register'
import Notfound from './components/notfound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// ciri khas ketika melakukan pemanggilan komponen itu ditandai dengan huruf besar di awalan elementnya dan menggunakan element penutupnya saja seperti void element di html
// ketika komponen tersebut di dalam file yang sama maka perlu adanya element pembuka dan di awali dengan huruf besar pada nama element tersebut
function App() {
  // kalau bikin page route di react menggunakan react-router-dom urutannya seperti dibawah ini versi dea afrizal, ada banyak cara untuk membuat setup page route tergantung fungsinya seperti apa
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home title="HOME PAGE" />} />
          <Route path="/dashboard" element={<Dashboard title="DASHBOARD PAGE" />} />
          <Route path="/login" element={<Login title="LOGIN PAGE" description="Mini Absensi Apps" />} />
          <Route path="/register" element={<Register title="REGISTER PAGE" description="Mini Absensi Apps" />} />
          <Route path="*" element={<Notfound />} />
          {/* <Route path='*' element={<Notfound title="PAGE NOT FOUND" description="silakan pilih sub domain yang tersedia" />} /> */}
          {/* <Route path="/navigate" element={<Navigate title="Ini navigasi bro" />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
// title yang terdapat pada komponen login itu disebut sebagai property kalau di react js
// atau kalau di html itu dikenal sebagai atribut suatu element

// react bootstrap ini single page application (SPA) satu domain only tidak ada router
export default App;



























// sebagai catatan react tidak mensupport multiple domain/routing makanya untuk membuat routing di react perlu install library tambahan react router dom
// catatan lagi untuk sisi server backend dari dea afrizal bayaran biaya server mahal untuk pembelajaran, belum tentu semua orang mau
// pengalaman kerja dea afrizal hostingan di indonesia jarang menyediakan space/tempat untuk mysql, express itu jarang biasa kalau di industri tidak memakai hostingan indonesia minimal memakai hostingan google cloud, aws, digital ocean, heroku, vercel, netlify, cloudflare
// itu minimal hostingan di industri dan biasanya semua pembayarannya via credit card jadi fullstack ini bekal yang gede, makannya bayarannya mahal proses untuk deploymentnya mengeluarkan uang yang gede
// jadi bisa kebayang kalau project fullstack di taruh di server nyata, itu bukan sekedar masukin beberapa file. Salah satu solusi yang termudah, termahal, dan terpakai di seluruh dunia bahkan sebesar google, tokped, facebook itu menggunakan docker. 
// Docker ini yang membawa seluruh setup yang ada di local tanpa perlu di setup ulang di server
// jadi docker itu lebih enak projectnya terpisah. frontend, backend, database terpisah ada docker membantu menyatukan semuanya masuk ke servernya lebih mudah
