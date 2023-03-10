import {Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import {  Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Navbar = () => {
 const manuItem=<>
 <li><Link to='/' className='text-gray-600 hover:text-[navy] font-semibold'>Home</Link></li>
 <li><a href='Lipton Barua Resume.pdf' className='text-gray-600 hover:text-[navy] font-semibold' download='Lipton Barua Resume.pdf'>Resume</a></li>
 <li><a href='#about'  className='text-gray-600 hover:text-[navy] font-semibold'>About</a></li>
 <li><a href='#skill'  className='text-gray-600 hover:text-[navy] font-semibold'>Skill</a></li>
 <li><a href='#contact'  className='text-gray-600 hover:text-[navy] font-semibold'>Contact</a></li>
 </>

    return (
        <div className=''>
           <div className="bg-[#DDE4F8] shadow-sm navbar lg:px-12 fixed right-0 top-0 z-40">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="uppercase text-sm menu menu-compact dropdown-content  bg-base-100 rounded-box w-52">
        {manuItem}
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl text-[navy] font-bold">Mission</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal text-sm px-1 uppercase">
    {manuItem}
    </ul>
  </div>

</div>
        </div>
    );
};

export default Navbar;