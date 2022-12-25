
import { Link } from 'react-router-dom';

const Navbar = () => {
 const manuItem=<>
 <li><Link to='/' className='text-info font-bold'>Home</Link></li>
 <li><Link to='/aboutUs' className='text-info font-bold'>About Us</Link></li>
 {/* <li><Link to='/blog' className='text-info font-bold'>Blog</Link></li> */}
 <li><Link to='/register' className='text-info font-bold'>Register</Link></li>
 <li><Link to='/login' className='text-info font-bold'>Login</Link></li>

 <li><a href='Lipton Barua Resume.pdf' download='Lipton Barua Resume.pdf'><button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-pink-500 hover:to-yellow-500 text-black">Resume Download</button></a></li>
 </>

    return (
        <div className=''>
           <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2  bg-base-100 rounded-box w-52">
        {manuItem}
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-2xl text-info font-semibold">Mission</Link>
  </div>
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {manuItem}
    </ul>
  </div>

</div>
        </div>
    );
};

export default Navbar;