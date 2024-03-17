import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import Swiper from "swiper";
import Slider from "../Slider";
import Brands from "../Brands";
import { MenuContext } from "../App";

export default function Home() {

    const {setOpenMenu, openMenu} = useContext(MenuContext)

    const [order, setOrder] = useState(1);
    const [openDropMenu1, setOpenDropMenu1] = useState(false)
    const [openDropMenu2, setOpenDropMenu2] = useState(false)

    return (
        <div className="home">

            {openMenu === true &&
            <div className="mobile-nav">

            <ul>
                <li>
                    <Link>Anasayfa</Link>
                </li>
                <li>
                    <Link onClick={() => (openDropMenu1 === true ? setOpenDropMenu1(false) : setOpenDropMenu1(true))}>Yemek Listesi <i class="fa-solid fa-angle-down"></i></Link>
                    <ul className={openDropMenu1 === true ? 'open-mobile-menu' : {}}>
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
                    <Link onClick={() => (openDropMenu2 === true ? setOpenDropMenu2(false) : setOpenDropMenu2(true))}>Blog <i class="fa-solid fa-angle-down"></i></Link>
                    <ul className={openDropMenu2 === true ? 'open-mobile-menu' : {}}>
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

    </div>}

            <div className="home-hero">

                <p>Royal Restaurant'a Hoşgeldiniz.</p>
                <h1>Her yemeğin içinde bir <br /> tutam tutku.</h1>
                <h4>Düşük maliyetli. Yüksek kalite.</h4>
                <div>
                    <button>Sipariş Ver</button>
                    <button>Rezervasyon Yap</button>
                </div>

            </div>

            <div className="home-about-history">

                <div className="container">

                    <div className="home-about-history-content">

                        <h3>Royal Restaurant'a Hoşgeldiniz</h3>
                        <h2>Restaurant Tarihi Hakkında!</h2>

                        <p>Biz, yemek kültürümüzdeki derin izleri hissetmek isteyenler için bir araya geldik. Her bir tabağımız, geçmişten ilham alınarak özenle hazırlanmıştır. Geleneksel tarifler, ustalarımızın elinde modern dokunuşlarla buluşarak unutulmaz bir tat deneyimi sunar.</p>

                    </div>

                    <img src="./img/home-history-about.png" alt="" />

                </div>

            </div>

            <div className="home-special-today">
                <div className="container">

                    <img src="./img/special-today-logo.png" alt="" />
                    <h3>Bugüne Özel</h3>
                    <h2>Bugüne Özel Yemeklerimiz</h2>

                    <div>

                        <div className="special-today-item">

                            <img src="./img/special-01.jpg" alt="" />
                            <span>20$</span>
                            <p>Türk Mutfağı</p>
                            <h5>Lüks Levrek Şöleni</h5>
                            <h4>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </h4>
                        </div>

                        <div className="special-today-item">

                            <img src="./img/special-02.jpg" alt="" />
                            <span>40$</span>
                            <p>Türk Mutfağı</p>
                            <h5>Prensip Tavuk Royale</h5>
                            <h4>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </h4>
                        </div>

                        <div className="special-today-item">

                            <img src="./img/special-03.jpg" alt="" />
                            <span>60$</span>
                            <p>Türk Mutfağı</p>
                            <h5>İmparatorluk Kuzu Fileto</h5>
                            <h4>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </h4>

                        </div>

                        <div className="special-today-item">

                            <img src="./img/special-04.jpg" alt="" />
                            <span>80$</span>
                            <p>Türk Mutfağı</p>
                            <h5>Akdeniz Sebzeli Kuskus</h5>
                            <h4>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </h4>
                        </div>


                    </div>
                </div>

            </div>

            <div className="home-foods">

                <div className="container">

                    <img src="./img/special-today-logo.png" alt="" />

                    <p>Yemek Listesi</p>
                    <h3>Bugünkü Lezzetli Menümüz</h3>

                    <ul>
                        <li>
                            <div style={order === 1 ? {borderTop: '3px solid #D60231'} : {}} onClick={() => (setOrder(1))}>
                                <img src="./img/icons/01.png" alt="" />
                                Burger Menü
                            </div>
                        </li>

                        <li>
                            <div style={order === 2 ? {borderTop: '3px solid #D60231'} : {}} onClick={() => (setOrder(2))}>
                                <img src="./img/icons/02.png" alt="" />
                                Pizza Menü
                            </div>
                        </li>

                        <li>
                            <div style={order === 3 ? {borderTop: '3px solid #D60231'} : {}} onClick={() => (setOrder(3))}>
                                <img src="./img/icons/03.png" alt="" />
                                Aperatifler
                            </div>
                        </li>

                        <li>
                            <div style={order === 4 ? {borderTop: '3px solid #D60231'} : {}} onClick={() => (setOrder(4))}>
                                <img src="./img/icons/01.png" alt="" />
                                İçecekler
                            </div>
                        </li>
                    </ul>

                    {order === 1 && 
                    <div className="menu-container">


                        <div className="menu-container-item">

                            <div className="item-img">
                                <img src="./img/foods/01.jpg" alt="" />
                                <span>$20</span>
                            </div>

                            <div className="item-content">

                                <header>
                                    <h5>Kremalı Tavuk Chiladas</h5>
                                    <p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </p>
                                </header>

                                <main>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit assumenda repellat?
                                    </p>
                                </main>

                            </div>

                        </div>

                        <div className="menu-container-item">

                            <div className="item-img">
                                <img src="./img/foods/02.jpg" alt="" />
                                <span>$20</span>
                            </div>

                            <div className="item-content">

                                <header>
                                    <h5>Kremalı Tavuk Chiladas</h5>
                                    <p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </p>
                                </header>

                                <main>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit assumenda repellat?
                                    </p>
                                </main>

                            </div>

                        </div>

                        <div className="menu-container-item">

                            <div className="item-img">
                                <img src="./img/foods/03.jpg" alt="" />
                                <span>$20</span>
                            </div>

                            <div className="item-content">

                                <header>
                                    <h5>Kremalı Tavuk Chiladas</h5>
                                    <p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </p>
                                </header>

                                <main>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit assumenda repellat?
                                    </p>
                                </main>

                            </div>

                        </div>

                        <div className="menu-container-item">

                            <div className="item-img">
                                <img src="./img/foods/04.jpg" alt="" />
                                <span>$20</span>
                            </div>

                            <div className="item-content">

                                <header>
                                    <h5>Kremalı Tavuk Chiladas</h5>
                                    <p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </p>
                                </header>

                                <main>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit assumenda repellat?
                                    </p>
                                </main>

                            </div>

                        </div>

                        <div className="menu-container-item">

                            <div className="item-img">
                                <img src="./img/foods/05.jpg" alt="" />
                                <span>$20</span>
                            </div>

                            <div className="item-content">

                                <header>
                                    <h5>Kremalı Tavuk Chiladas</h5>
                                    <p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </p>
                                </header>

                                <main>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit assumenda repellat?
                                    </p>
                                </main>

                            </div>

                        </div>

                        <div className="menu-container-item">

                            <div className="item-img">
                                <img src="./img/foods/06.jpg" alt="" />
                                <span>$20</span>
                            </div>

                            <div className="item-content">

                                <header>
                                    <h5>Kremalı Tavuk Chiladas</h5>
                                    <p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </p>
                                </header>

                                <main>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit assumenda repellat?
                                    </p>
                                </main>

                            </div>

                        </div>

                    </div>
                    }

                    {order === 2 && 
                    <div className="menu-container">

                        <div className="menu-container-item">

                            <div className="item-img">
                                <img src="./img/foods/09.jpg" alt="" />
                                <span>$20</span>
                            </div>

                            <div className="item-content">

                                <header>
                                    <h5>Kremalı Tavuk Chiladas</h5>
                                    <p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </p>
                                </header>

                                <main>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit assumenda repellat?
                                    </p>
                                </main>

                            </div>

                        </div>

                        <div className="menu-container-item">

                            <div className="item-img">
                                <img src="./img/foods/10.jpg" alt="" />
                                <span>$20</span>
                            </div>

                            <div className="item-content">

                                <header>
                                    <h5>Kremalı Tavuk Chiladas</h5>
                                    <p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </p>
                                </header>

                                <main>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit assumenda repellat?
                                    </p>
                                </main>

                            </div>

                        </div>

                        <div className="menu-container-item">

                            <div className="item-img">
                                <img src="./img/foods/11.jpg" alt="" />
                                <span>$20</span>
                            </div>

                            <div className="item-content">

                                <header>
                                    <h5>Kremalı Tavuk Chiladas</h5>
                                    <p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </p>
                                </header>

                                <main>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit assumenda repellat?
                                    </p>
                                </main>

                            </div>

                        </div>

                        <div className="menu-container-item">

                            <div className="item-img">
                                <img src="./img/foods/12.jpg" alt="" />
                                <span>$20</span>
                            </div>

                            <div className="item-content">

                                <header>
                                    <h5>Kremalı Tavuk Chiladas</h5>
                                    <p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </p>
                                </header>

                                <main>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit assumenda repellat?
                                    </p>
                                </main>

                            </div>

                        </div>

                    </div>
                    }

                    {order === 3 && 
                    <div className="menu-container">

                        <div className="menu-container-item">

                            <div className="item-img">
                                <img src="./img/foods/13.jpg" alt="" />
                                <span>$20</span>
                            </div>

                            <div className="item-content">

                                <header>
                                    <h5>Kremalı Tavuk Chiladas</h5>
                                    <p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </p>
                                </header>

                                <main>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit assumenda repellat?
                                    </p>
                                </main>

                            </div>

                        </div>

                        <div className="menu-container-item">

                            <div className="item-img">
                                <img src="./img/foods/14.jpg" alt="" />
                                <span>$20</span>
                            </div>

                            <div className="item-content">

                                <header>
                                    <h5>Kremalı Tavuk Chiladas</h5>
                                    <p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </p>
                                </header>

                                <main>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit assumenda repellat?
                                    </p>
                                </main>

                            </div>

                        </div>

                        <div className="menu-container-item">

                            <div className="item-img">
                                <img src="./img/foods/15.jpg" alt="" />
                                <span>$20</span>
                            </div>

                            <div className="item-content">

                                <header>
                                    <h5>Kremalı Tavuk Chiladas</h5>
                                    <p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </p>
                                </header>

                                <main>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit assumenda repellat?
                                    </p>
                                </main>

                            </div>

                        </div>

                        <div className="menu-container-item">

                            <div className="item-img">
                                <img src="./img/foods/16.jpg" alt="" />
                                <span>$20</span>
                            </div>

                            <div className="item-content">

                                <header>
                                    <h5>Kremalı Tavuk Chiladas</h5>
                                    <p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </p>
                                </header>

                                <main>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit assumenda repellat?
                                    </p>
                                </main>

                            </div>

                        </div>

                        <div className="menu-container-item">

                            <div className="item-img">
                                <img src="./img/foods/17.jpg" alt="" />
                                <span>$20</span>
                            </div>

                            <div className="item-content">

                                <header>
                                    <h5>Kremalı Tavuk Chiladas</h5>
                                    <p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </p>
                                </header>

                                <main>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit assumenda repellat?
                                    </p>
                                </main>

                            </div>

                        </div>

                        <div className="menu-container-item">

                            <div className="item-img">
                                <img src="./img/foods/18.jpg" alt="" />
                                <span>$20</span>
                            </div>

                            <div className="item-content">

                                <header>
                                    <h5>Kremalı Tavuk Chiladas</h5>
                                    <p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </p>
                                </header>

                                <main>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit assumenda repellat?
                                    </p>
                                </main>

                            </div>

                        </div>

                    </div>
                    }

                    {order === 4 && 
                    <div className="menu-container">

                        <div className="menu-container-item">

                            <div className="item-img">
                                <img src="./img/foods/19.jpg" alt="" />
                                <span>$20</span>
                            </div>

                            <div className="item-content">

                                <header>
                                    <h5>Kremalı Tavuk Chiladas</h5>
                                    <p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </p>
                                </header>

                                <main>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit assumenda repellat?
                                    </p>
                                </main>

                            </div>

                        </div>

                        <div className="menu-container-item">

                            <div className="item-img">
                                <img src="./img/foods/01.jpg" alt="" />
                                <span>$20</span>
                            </div>

                            <div className="item-content">

                                <header>
                                    <h5>Kremalı Tavuk Chiladas</h5>
                                    <p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </p>
                                </header>

                                <main>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit assumenda repellat?
                                    </p>
                                </main>

                            </div>

                        </div>

                        <div className="menu-container-item">

                            <div className="item-img">
                                <img src="./img/foods/20.jpg" alt="" />
                                <span>$20</span>
                            </div>

                            <div className="item-content">

                                <header>
                                    <h5>Kremalı Tavuk Chiladas</h5>
                                    <p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </p>
                                </header>

                                <main>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit assumenda repellat?
                                    </p>
                                </main>

                            </div>

                        </div>

                        <div className="menu-container-item">

                            <div className="item-img">
                                <img src="./img/foods/02.jpg" alt="" />
                                <span>$20</span>
                            </div>

                            <div className="item-content">

                                <header>
                                    <h5>Kremalı Tavuk Chiladas</h5>
                                    <p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </p>
                                </header>

                                <main>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit assumenda repellat?
                                    </p>
                                </main>

                            </div>

                        </div>

                    </div>
                    }
                    


                </div>

            </div>

            <div className="online-table">

                <div className="container">

                    <img src="./img/special-today-logo.png" alt="" />
                    <p>Online Rezarvasyon</p>
                    <h1>Rezervasyon için Masa Seçiniz</h1>

                    <div className="online-form">

                        <div className="online-form-img">
                        </div>

                        <form>

                            <div>
                                <input type="text" placeholder="İsim Soyisim" />
                                <input type="text" placeholder="E-posta Adresi" />
                            </div>

                            <div>
                                <input type="text" placeholder="Telefon Numarası" />
                                <select name="" id="">
                                    <option value="">Giriş Zamanı</option>
                                    <option value="">12:00</option>
                                    <option value="">13:00</option>
                                    <option value="">14:00</option>
                                    <option value="">15:00</option>
                                    <option value="">16:00</option>
                                    <option value="">17:00</option>
                                    <option value="">18:00</option>
                                    <option value="">19:00</option>
                                    <option value="">20:00</option>
                                    <option value="">21:00</option>
                                    <option value="">22:00</option>
                                    <option value="">23:00</option>
                                </select>
                            </div>

                            <div>
                                <select name="" id="">
                                    <option value="">Masa Boyutu</option>
                                    <option value="">2 Kişilik</option>
                                    <option value="">3 Kişilik</option>
                                    <option value="">4 Kişilik</option>
                                    <option value="">5 Kişilik</option>
                                    <option value="">6 Kişilik</option>
                                    <option value="">7 Kişilik</option>
                                    <option value="">8 Kişilik</option>
                                    <option value="">9 Kişilik</option>
                                    <option value="">10 Kişilik</option>
                                </select>
                                <input type="date" name="" id="" />
                            </div>

                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            <button>Rezerve Et</button>

                        </form>

                    </div>


                </div>


            </div>

            <div className="chefs">

                <div className="container">

                    <img src="./img/special-today-logo.png" alt="" />
                    <p>Şeflerimizle Tanışın</p>
                    <h3>Birbirinden Yetenekli Şeflerimizle Tanışın</h3>

                    <div className="chef-container">

                        <div className="chef-item">

                            <div className="chef-item-top">

                                <img src="./img/chefs/01.jpg" alt="" />

                                <div className="chefs-links">

                                    <img src="./img/follow.png" alt="" />

                                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                                    <a href=""><i className="fa-brands fa-pinterest"></i></a>
                                    <a href=""><i className="fa-brands fa-twitter"></i></a>
                                    <a href=""><i className="fa-brands fa-instagram"></i></a>

                                </div>
                            </div>

                            <div className="chef-item-bottom">

                                <h3>Zinnat Zara</h3>
                                <p>Founder & CEO</p>
                                <hr />
                                <p style={{color: '#696969'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga molestias exercitationem similique quidem dolores.</p>
                                <ul>
                                    <li>
                                        <i class="fa-solid fa-phone"></i>
                                        <p>+880 9234 567 890</p>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-envelope"></i>
                                        <p>zinnatzara@gmail.com</p>
                                    </li>
                                </ul>

                            </div>

                        </div>

                        <div className="chef-item">

                            <div className="chef-item-top">

                                <img src="./img/chefs/02.jpg" alt="" />

                                <div className="chefs-links">

                                    <img src="./img/follow.png" alt="" />

                                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                                    <a href=""><i className="fa-brands fa-pinterest"></i></a>
                                    <a href=""><i className="fa-brands fa-twitter"></i></a>
                                    <a href=""><i className="fa-brands fa-instagram"></i></a>

                                </div>
                            </div>

                            <div className="chef-item-bottom">

                                <h3>Tom Holland</h3>
                                <p>Founder & CEO</p>
                                <hr />
                                <p style={{color: '#696969'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga molestias exercitationem similique quidem dolores.</p>
                                <ul>
                                    <li>
                                        <i class="fa-solid fa-phone"></i>
                                        <p>+880 9234 567 890</p>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-envelope"></i>
                                        <p>tomholland@gmail.com</p>
                                    </li>
                                </ul>

                            </div>

                        </div>

                        <div className="chef-item">

                            <div className="chef-item-top">

                                <img src="./img/chefs/01.jpg" alt="" />

                                <div className="chefs-links">

                                    <img src="./img/follow.png" alt="" />

                                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                                    <a href=""><i className="fa-brands fa-pinterest"></i></a>
                                    <a href=""><i className="fa-brands fa-twitter"></i></a>
                                    <a href=""><i className="fa-brands fa-instagram"></i></a>

                                </div>
                            </div>

                            <div className="chef-item-bottom">

                                <h3>Wilfred Zaha</h3>
                                <p>Founder & CEO</p>
                                <hr />
                                <p style={{color: '#696969'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga molestias exercitationem similique quidem dolores.</p>
                                <ul>
                                    <li>
                                        <i class="fa-solid fa-phone"></i>
                                        <p>+880 9234 567 890</p>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-envelope"></i>
                                        <p>wilfredzaha@gmail.com</p>
                                    </li>
                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="blogs">

                <div className="container">

                    <img src="./img/special-today-logo.png" alt="" />
                    <p>Blog Yazılarımız</p>
                    <h3>En Son Haberler ve Makaleler</h3>

                    <div className="blogs-container">

                        <Link className="blogs-card">

                            <img src="./img/blogs/01.jpg" alt="" />

                            <div className="blog-content">

                                <h3>Lorem ipsum dolor sit amet consectetur.</h3>

                                <p>
                                    <span><i class="fa-solid fa-calendar-days"></i> 12 . 06 . 2023</span>
                                    <span><i class="fa-solid fa-user"></i>Somrat Islam</span>
                                </p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus repudiandae repellendus accusamus aperiam!</p>

                            </div>

                            <div className="blog-links">

                                <p>Devamını oku</p>

                                <i class="fa-regular fa-message"></i>

                            </div>

                        </Link>

                        <Link className="blogs-card">

                            <img src="./img/blogs/02.jpg" alt="" />

                            <div className="blog-content">

                                <h3>Lorem ipsum dolor sit amet consectetur.</h3>

                                <p>
                                    <span><i class="fa-solid fa-calendar-days"></i> 12 . 06 . 2023</span>
                                    <span><i class="fa-solid fa-user"></i>Somrat Islam</span>
                                </p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus repudiandae repellendus accusamus aperiam!</p>

                            </div>

                            <div className="blog-links">

                                <p>Devamını oku</p>

                                <i class="fa-regular fa-message"></i>

                            </div>

                        </Link>

                        <Link className="blogs-card">

                            <img src="./img/blogs/03.jpg" alt="" />

                            <div className="blog-content">

                                <h3>Lorem ipsum dolor sit amet consectetur.</h3>

                                <p>
                                    <span><i class="fa-solid fa-calendar-days"></i> 12 . 06 . 2023</span>
                                    <span><i class="fa-solid fa-user"></i>Somrat Islam</span>
                                </p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus repudiandae repellendus accusamus aperiam!</p>

                            </div>

                            <div className="blog-links">

                                <p>Devamını oku</p>

                                <i class="fa-regular fa-message"></i>

                            </div>

                        </Link>

                    </div>

                </div>

            </div>

            <div className="about-us">

                <div className="container">

                    <img src="./img/special-today-logo.png" alt="" />
                    <p>Blog Yazılarımız</p>
                    <h3>En Son Haberler ve Makaleler</h3>

                    <div className="slider-container">
                        <Slider />
                    </div>

                </div>

            </div>

            <div className="brands">

                <div className="container">

                    <Brands />

                </div>

            </div>

            <div className="order-now">

                <div className="container">

                    <img src="./img/royal.png" alt="" />

                    <div>
                        <h2>Sağlıklı olmak için, iyi beslen!</h2>
                        <button>Sipariş Ver</button>
                    </div>

                </div>

            </div>

            <div className="footer-info">

                <div className="container">

                    <div>
                        <h2>İletişim</h2>

                        <p><i class="fa-solid fa-house"></i> 20/A Sultanbeyli, İstanbul</p>
                        <p><i class="fa-solid fa-phone-flip"></i> +880 1234 567890, 025984712</p>
                        <p><i class="fa-solid fa-earth-americas"></i> www.royalrestaurant@gmail.com</p>
                        <p><i class="fa-solid fa-headphones"></i> support@royalrestaurant.com</p>
                    </div>

                    <div>
                        <h2>Açılış Saatleri</h2>

                        <p><i class="fa-regular fa-clock"></i><span>Cumartesi</span> 09:00 - 00:00</p>
                        <p><i class="fa-regular fa-clock"></i><span>Pazar</span> 09:00 - 00:00</p>
                        <p><i class="fa-regular fa-clock"></i><span>Hafta İçi</span> 11:00 - 00:00</p>

                    </div>

                    <div>
                        <h2>Abone Ol</h2>


                        <p>En Güncel Haberlerimiz ve Makalelerimiz İçin Kayıt Olun.</p>
                        <form>
                            <input type="text" placeholder="E-posta Adresiniz" />
                            <button>Abone Ol!</button>
                        </form>
                        <p>
                            <span>Bizi takip edin:</span>
                            <a href=""><i class="fa-brands fa-twitter"></i></a>
                            <a href=""><i class="fa-solid fa-wifi"></i></a>
                            <a href=""><i class="fa-solid fa-globe"></i></a>
                            <a href=""><i class="fa-brands fa-behance"></i></a>
                            <a href=""><i class="fa-brands fa-instagram"></i></a>
                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}