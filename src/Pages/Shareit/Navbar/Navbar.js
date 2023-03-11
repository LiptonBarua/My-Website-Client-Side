import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import {  Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Navbar = () => {
  const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

  useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null;

  const renderThemeChanger = () => {


		if (theme === "dark") {
			return (
				<div onClick={() => setTheme('light')}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
				</svg></div>

			)
		}
		else {
			return (
				<div onClick={() => setTheme('dark')}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
						<path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
					</svg>

				</div>
			)
		}
	}

 const manuItem=<>
 <li><Link to='/' className='text-gray-600 hover:text-[navy] dark:text-white dark:hover:text-[#077612] font-semibold'>Home</Link></li>
 <li><a href='Lipton Barua Resume.pdf' className='text-gray-600 hover:text-[navy] dark:text-white dark:hover:text-[#077612] font-semibold' download='Lipton Barua Resume.pdf'>Resume</a></li>
 <li><a href='#about'  className='text-gray-600 hover:text-[navy] dark:text-white dark:hover:text-[#077612] font-semibold'>About</a></li>
 <li><a href='#skill'  className='text-gray-600 hover:text-[navy] dark:text-white dark:hover:text-[#077612] font-semibold'>Skill</a></li>
 <li><a href='#contact'  className='text-gray-600 hover:text-[navy] dark:text-white dark:hover:text-[#077612] font-semibold'>Contact</a></li>
 </>

    return (
        <div className=''>
           <div className="bg-[#DDE4F8] dark:bg-black shadow-sm navbar lg:px-12 fixed right-0 top-0 z-40">
  <div className="navbar-start">
 
    <Link className="btn btn-ghost normal-case text-xl text-[navy] dark:text-[#077612] font-bold">Mission</Link>
  </div>
  <div className="navbar-end">
    <ul className="hidden lg:flex menu menu-horizontal text-sm px-1 uppercase">
    {manuItem}

    </ul>
    { renderThemeChanger()}
<div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn btn-ghost dark:text-white m-1 lg:hidden">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </label>
  <ul tabIndex={0} className="uppercase dropdown-content menu p-2 shadow bg-[#DDE4F8] dark:bg-black dark:text-white rounded-box w-52">
  {manuItem}
  </ul>
</div>
  </div>
 
</div>
        </div>
    );
};

export default Navbar;