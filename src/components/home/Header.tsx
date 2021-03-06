import React from 'react'

const Header: React.FC = () => {

  return (
    <header className="header">
        <div className="header__logo-box">
            <img src="img/logo-3.png" alt="Logo" className="header__logo" />
        </div>

        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--sub">return to</span>
                <span className="heading-primary--main">THE SOURCE</span>
            </h1>

            <a href="#section-courses" className="btn btn--white btn--animated">Find your calling</a>
        </div>
    </header>
  )
}

export default Header
