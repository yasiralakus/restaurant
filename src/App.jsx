import { createContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const MenuContext = createContext(null)

export default function App() {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <div className="container-full">

            <div className="website-top">

                <div className="container">

                    <p><i className="fa-regular fa-clock"></i>09:00 - 00:00 arası açık.</p>

                    <p><i className="fa-solid fa-location-dot"></i>20/A Sultanbeyli, İstanbul</p>

                    <p style={{borderRight: '1px solid transparent'}}><i className="fa-solid fa-headset"></i>support@deneme.com</p>

                    <div className="socials">
                        <li><Link><i className="fa-solid fa-phone"></i></Link></li>
                        <li><Link><i className="fa-brands fa-twitter"></i></Link></li>
                        <li><Link><i className="fa-brands fa-facebook"></i></Link></li>
                        <li><Link><i className="fa-brands fa-instagram"></i></Link></li>
                        <li><Link><i className="fa-solid fa-wifi"></i></Link></li>
                        <li><Link><i className="fa-brands fa-behance"></i></Link></li>
                        <li><Link><i className="fa-brands fa-vimeo-v"></i></Link></li>
                    </div>

                </div>

            </div>

           <div className="container">

                <header className="header">

                    <img src="./img/royal.png" alt="" />

                    <button onClick={() => (openMenu === false ? setOpenMenu(true) : setOpenMenu(false))} id="mobilHamburger"><i className="fa-solid fa-bars"></i></button>

                    <ul className="nav">

                        <li>
                            <Link>Anasayfa</Link>
                        </li>
                        <li>
                            <Link>Yemek Listesi <i class="fa-solid fa-angle-down"></i></Link>
                            <ul>
                                <li>Link 1</li>
                                <li>Link 2</li>
                                <li>Link 3</li>
                                <li>Link 4</li>
                            </ul>
                        </li>
                        <li>
                            <Link>Rezervasyon</Link>
                        </li>
                        <li>
                            <Link>Blog <i class="fa-solid fa-angle-down"></i></Link>
                            <ul>
                                <li>Link 1</li>
                                <li>Link 2</li>
                                <li>Link 3</li>
                                <li>Link 4</li>
                            </ul>
                        </li>
                        <li>
                            <Link>Mağaza</Link>
                        </li>
                        <li>
                            <Link>İletişim</Link>
                        </li>

                    </ul>

                </header>

           </div>

            <MenuContext.Provider value={{setOpenMenu, openMenu}}>
                <Outlet />
            </MenuContext.Provider>

            <footer className="footer">

                <div className="container">
                    <p>© 2024 <a href="https://yasiralakus.com.tr">Yasir Alakus</a> tarafından kodlanmıştır.</p>

                    <div className="footer-nav">

                        <a href="">Anasayfa</a>
                        <a href="">Yemek Listesi</a>
                        <a href="">Rezervasyon</a>
                        <a href="">Blog</a>
                        <a href="">Mağaza</a>
                        <a href="">İletişim</a>

                    </div>
                </div>

            </footer>

        </div>

    )
}