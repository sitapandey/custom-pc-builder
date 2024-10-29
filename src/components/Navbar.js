import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // 引入外部CSS文件

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 切换菜单打开/关闭状态
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="主导航">
      <div className="navbar-brand">
        <Link to="/" className="navbar-title">
          Custom PC Builder
        </Link>
      </div>

      {/* 桌面端导航菜单 */}
      <ul className="navbar-links md:flex hidden">
        {renderNavLinks()}
      </ul>

      {/* 移动端菜单按钮 */}
      <button
        className="navbar-toggle md:hidden"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "关闭菜单" : "打开菜单"}
      >
        <span className="text-2xl" aria-hidden="true">
          {isMenuOpen ? '✖' : '☰'}
        </span>
      </button>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <ul className="navbar-mobile-menu">
          {renderNavLinks(toggleMenu)}
        </ul>
      )}
    </nav>
  );
}

function renderNavLinks(onClickHandler = () => {}) {
  const links = [
    { to: "/", label: "首页" },
    { to: "/custom-build", label: "定制装机" },
    { to: "/build-showcase/office", label: "装机大厅" },
    { to: "/service-booking", label: "服务" },
    { to: "/contact-us", label: "联系我们" },
  ];

  return links.map((link, index) => (
    <li key={index}>
      <Link to={link.to} className="navbar-link" onClick={onClickHandler}>
        {link.label}
      </Link>
    </li>
  ));
}

export default Navbar;
