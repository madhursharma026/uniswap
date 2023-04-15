import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "../../styles/App.module.css"
import React, { useEffect, useState } from "react";

function Header() {

    const [visible, setVisible] = useState(true)
    const [position, setPosition] = useState("")
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setPosition(window.pageYOffset)
            let moving = window.pageYOffset
            setVisible(position > moving || position < 140);
            setPosition(moving)
            console.log(window.scrollTop)
        };
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })
    return (
        <div className={`fixed-top px-4 py-2 ${visible ? styles.animationStyle1 : styles.animationStyle2}`}>
                <div className={`text-center ${styles.headerBeforeLGScrn} mt-1`}>
                <input type="text" class="form-control" placeholder='Search Token and NFTs Collection' style={{maxWidth:'350px', margin:'auto', background:'transparent', border:'1px solid #ffa6d6'}} />
                </div>
            <Navbar expand="lg" className={`${styles.headerBeforeLGScrn}`} style={{marginTop:'-50px'}}>
                <Link href="/">
                    <Navbar.Brand>
                        <img src="https://seeklogo.com/images/U/uniswap-logo-782F5E6363-seeklogo.com.png" alt="#ImgNotFound" width="30px" height='30px' />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/" className={styles.headerNavbarLinks}>Swap</Link>
                        <Link href="/" className={styles.headerNavbarLinks}>Tokens</Link>
                        <Link href="/" className={styles.headerNavbarLinks}>NFTs</Link>
                        <Link href="/" className={styles.headerNavbarLinks}>Pools</Link>
                    </Nav>
                    <button type="button" className={`btn mt-2`} style={{ background: '#F7DDED', color: '#F31D92' }}><b>Connect</b></button>
                </Navbar.Collapse>
            </Navbar>

            <Navbar expand="lg" className={`container-xl ${styles.headerAfterLGScrn}`}>
                <Link href="/">
                    <Navbar.Brand>
                        <img src="https://seeklogo.com/images/U/uniswap-logo-782F5E6363-seeklogo.com.png" alt="#ImgNotFound" width="30px" height='30px' />
                    </Navbar.Brand>
                </Link>
                <div style={{ float: 'right' }}>
                    <i class="fa fa-search" style={{ fontSize: '20px', marginRight: '20px' }}></i>
                    <button type="button" className={`btn`} style={{ background: '#F7DDED', color: '#F31D92' }}><b>Connect</b></button>
                </div>
                <div className="fixed-bottom p-3" style={{ background: 'white' }}>
                    <div className="row">
                        <div className="col-3">
                            <Link href="/" className={styles.headerNavbarLinks}>Swap</Link>
                        </div>
                        <div className="col-3">
                            <Link href="/" className={styles.headerNavbarLinks}>Tokens</Link>
                        </div>
                        <div className="col-3">
                            <Link href="/" className={styles.headerNavbarLinks}>NFTs</Link>
                        </div>
                        <div className="col-3">
                            <Link href="/" className={styles.headerNavbarLinks}>Pools</Link>
                        </div>
                    </div>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;