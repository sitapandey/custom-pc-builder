import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold">
        <Link to="/">Custom PC Builder</Link>
      </div>

      <ul className="hidden md:flex space-x-8">
        <li>
          <Link to="/" className="hover:text-yellow-400 transition duration-300">
            首页
          </Link>
        </li>
        <li>
          <Link to="/custom-build" className="hover:text-yellow-400 transition duration-300">
            定制装机
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-400 transition duration-300">
            关于我们
          </Link>
        </li>
        <li>
          <Link to="/service-booking" className="hover:text-yellow-400 transition duration-300">
            服务
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className="hover:text-yellow-400 transition duration-300">
            联系我们
          </Link>
        </li>
      </ul>

      {/* 移动端菜单按钮 */}
      <button className="md:hidden p-2 focus:outline-none" onClick={toggleMenu}>
        <span className="text-2xl">{isMenuOpen ? '✖' : '☰'}</span>
      </button>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 py-4 md:hidden">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition duration-300" onClick={toggleMenu}>
              首页
            </Link>
          </li>
          <li>
            <Link to="/custom-build" className="hover:text-yellow-400 transition duration-300" onClick={toggleMenu}>
              定制装机
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-400 transition duration-300" onClick={toggleMenu}>
              关于我们
            </Link>
          </li>
          <li>
            <Link to="/service-booking" className="hover:text-yellow-400 transition duration-300" onClick={toggleMenu}>
              服务
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-yellow-400 transition duration-300" onClick={toggleMenu}>
              联系我们
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
