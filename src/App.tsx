import style from "./App.module.scss";

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import clsx from 'clsx';
import {EffectCoverflow} from 'swiper/modules';
import {useRef, useState} from "react";

function clipboard(text: string) {
    window.navigator.clipboard.writeText(text);
}

function jumpTo(id) {
    const el = document.getElementById(id);
    el.scrollIntoView({behavior: "smooth", block: "center"});
}

const imagesPath = "../images/stock/"
const slides = [
    {
        image: imagesPath + "1.webp",
        content: <>
            <h2>Samochód</h2>
            <h3>Znajdź najtańsze ubezpieczenie samochodu, ciężarówki, naczepy</h3>
            <input type={"button"} value={"Więcej informacji"} onClick={() => jumpTo("komunikacyjne")}/>
        </>
    },
    {
        image: imagesPath + "2.webp",
        content: <>
            <h2>Mieszkanie</h2>
            <h3>Ubezpiecz mieszkanie, dom, nieruchomość</h3>
            <input type={"button"} value={"Więcej informacji"} onClick={() => jumpTo("nieruchomosci")}/>
        </>
    },
    {
        image: imagesPath + "3.webp",
        content: <>
            <h2>Podróże</h2>
            <h3>Zapewnij sobie bezpieczne wakacje</h3>
            <input type={"button"} value={"Więcej informacji"} onClick={() => jumpTo("podroze")}/>
        </>
    },
    {
        image: imagesPath + "4.webp",
        content: <>
            <h2>Firma</h2>
            <h3>Ubezpieczenie OC, mienia, NNW, od pożaru, od kradzieży</h3>
            <input type={"button"} value={"Więcej informacji"} onClick={() => jumpTo("firmy")}/>
        </>
    }
]
const blocks = [
    {
        id: "komunikacyjne",
        image: imagesPath + "6.webp",
        title: "Komunikacyjne",
        content: <>
            Znajdziemy i dopasujemy najlepsze ubezpieczenie komunikacyjne dla Ciebie.
            Kalkulacja jest darmowa, przygotujemy ją dla Ciebie od ręki!
        </>
    }, {
        id: "nieruchomosci",
        image: imagesPath + "7.webp",
        title: "Nieruchomości",
        content: <>
            Oferujemu ubezpieczenia domu, mieszkania, dowolnej nieruchomości
            Pakiety rozudowane i podstawowe, do cesji<br/>
            Wypłata środków nastąpi w przypadku:

            zalania
            włamania
            kradzieży
            zniszczenia

            Ubezpieczenie ALL Risk! (od wszystkich ryzyk)
        </>
    }, {
        id: "podroze",
        image: imagesPath + "8.webp",
        title: "Podróże",
        content: <>
            O co chodzi?
            O refundację wszelkich kosztów związanych z leczeniem za granicą!
            Szpital, prywatna wizyta lekarska, wizyta u stomatologa, koszt leków.
            Za wsystko zapłaci ubezpieczyciel.
            Ile to kosztuje? kilka złatych za 1 osobę/dzień
        </>
    }, {
        id: "firmy",
        image: imagesPath + "9.webp",
        title: "Firmy",
        content: <>
            OC działalności gospodarczej -
            Majątkowe i
            Grupowe
        </>
    }
]


function App() {

    const [headerHidden, setHeaderHidden] = useState(false);
    const [headerExpanded, setHeaderExpanded] = useState(false);
    const rootRef = useRef(null);

    function jumpFromMenu(id) {
        jumpTo(id)
        setHeaderExpanded(false)
    }

    return (
        <>
            <div ref={rootRef} className={style.root} onScroll={(ev) => {

                //manipulate header visibility
                const pos = (ev.target as HTMLElement).scrollTop
                const headerShouldBeHidden = pos > 700
                if (headerShouldBeHidden != headerHidden) {
                    setHeaderHidden(headerShouldBeHidden)
                    setHeaderExpanded(false)
                }
            }}>
                <main className={style.main}>

                    <header className={clsx(style.header, headerHidden && style.headerHidden)}>
                        <div className={style.options} onClick={() => setHeaderExpanded(!headerExpanded)}>
                            {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill-rule="evenodd"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 17.333A1.333 1.333 0 1 1 12 20a1.333 1.333 0 0 1 0-2.667Zm6.667 0a1.333 1.333 0 1 1 0 2.667 1.333 1.333 0 0 1 0-2.667Zm-13.334 0a1.333 1.333 0 1 1 0 2.667 1.333 1.333 0 0 1 0-2.667ZM12 10.667a1.333 1.333 0 1 1 0 2.666 1.333 1.333 0 0 1 0-2.666Zm-6.667 0a1.333 1.333 0 1 1 0 2.666 1.333 1.333 0 0 1 0-2.666Zm13.334 0a1.333 1.333 0 1 1 0 2.666 1.333 1.333 0 0 1 0-2.666ZM12 4a1.333 1.333 0 1 1 0 2.667A1.333 1.333 0 0 1 12 4ZM5.333 4a1.333 1.333 0 1 1 0 2.667 1.333 1.333 0 0 1 0-2.667Zm13.334 0a1.333 1.333 0 1 1 0 2.667 1.333 1.333 0 0 1 0-2.667Z"></path></g></svg>*/}
                            <i className="fa-solid fa-bars"></i>
                        </div>
                        <img src={'/images/logo.svg'} alt="Vite logo"/>
                        <div className={style.login}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M12.006 14.75a3.612 3.612 0 0 1-3.658-3.4l-.3-2.606a3.943 3.943 0 0 1 .86-3.188 4 4 0 0 1 3.098-1.306A4 4 0 0 1 15.1 5.56a3.95 3.95 0 0 1 .858 3.206l-.292 2.588a3.614 3.614 0 0 1-3.66 3.396Zm0-9a2.53 2.53 0 0 0-1.961.792 2.482 2.482 0 0 0-.505 2.015l.3 2.628a2.172 2.172 0 0 0 4.338 0l.295-2.609a2.507 2.507 0 0 0-.5-2.034 2.539 2.539 0 0 0-1.967-.792Zm6.98 14.73a5.952 5.952 0 0 0-2.83-4.77.5.5 0 0 0-.7.1l-.31.34a.4.4 0 0 0 .1.69A4.855 4.855 0 0 1 17.3 19.5H6.706a4.913 4.913 0 0 1 2.05-2.66.4.4 0 0 0 .11-.69l-.31-.34a.5.5 0 0 0-.7-.1 5.952 5.952 0 0 0-2.83 4.77.5.5 0 0 0 .5.52h12.96a.5.5 0 0 0 .5-.52Z"></path>
                            </svg>
                        </div>
                    </header>
                    <div className={clsx(style.subheader, headerExpanded && style.expanded)}>
                        <div onClick={() => jumpFromMenu("about")}>O nas</div>
                        <div onClick={() => jumpFromMenu("komunikacyjne")}>Komunikacyjne</div>
                        <div onClick={() => jumpFromMenu("nieruchomosci")}>Nieruchomości</div>
                        <div onClick={() => jumpFromMenu("podroze")}>Podróże</div>
                        <div onClick={() => jumpFromMenu("firmy")}>Firmy</div>
                        <div onClick={() => jumpFromMenu("contact")}>Kontakt</div>
                    </div>
                    <div className={clsx(style.toTop, headerHidden && style.headerHidden)} onClick={() => {
                        (rootRef.current as HTMLElement).scrollTop = 0
                    }}>
                        <i className="fa-solid fa-caret-up"></i>
                    </div>

                    <div className={style.swiper}>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                            spaceBetween={50}
                            slidesPerView={1}
                            //navigation
                            pagination={{clickable: true}}
                            autoplay={{delay: 5000}}
                            loop
                            effect="coverflow"
                        >
                            {slides.map((slide, idx) => <SwiperSlide key={idx}>
                                <img src={slide.image}
                                     alt={`Ubezpieczenia`}
                                     loading={"lazy"}
                                     decoding={"async"}
                                     fetchPriority={idx == 0 ? "high" : "auto"}
                                />
                                <div className={style.container}>
                                    {slide.content}
                                </div>
                            </SwiperSlide>)}
                            {/* Add more slides as needed */}
                        </Swiper>
                    </div>

                    <div className={style.info} id="about">
                        <h5>Posiadamy ponad 20 lat doświadczenia w doradzaniu klientom</h5>
                        <h5>Zapewniamy pełną usługę ubezpieczeniową stosownie do potrzeb i specyfiki działalności każdego klienta</h5>
                        <h5>Wybierając nasze usługi zapewniasz sobie i najbliższym najwyższy standard ubezpieczenia</h5>
                        <h5>W kryzysowej sytuacji można na nas liczyć, nigdy nie wiesz kiedy los może odwrocić karty na drugą stronę</h5>
                    </div>

                    {
                        blocks.map((block, idx) => {
                            return <div className={clsx(style.infobox, "m-px")} key={idx} id={block.id}>
                                <img src={block.image} alt={`Ubezpieczenia ${block.title}`} loading="lazy"/>
                                <div>
                                    <h3>{block.title}</h3>
                                    <h4>{block.content}</h4>
                                </div>
                            </div>
                        })
                    }
                    <div className={style.contact} id="contact">
                        <h2>Kontakt</h2>


                        <br/>
                        <h3>Zadzwoń w godzinach 8-17</h3>
                        tel. +48 501 588 623<br/>
                        <div>
                            <i className="fa-solid fa-copy" onClick={() => {
                                clipboard("+48501588623")
                            }}></i>
                            <i className="fa-solid fa-phone" onClick={() => {
                                window.open('tel:+48501588623');
                            }}></i>
                        </div>
                        <br/>
                        <br/>
                        <h3>Zachęcamy również do pisania wiadomości e-mail</h3>
                        rafal7witczak@gmail.com<br/>
                        <div>
                            <i className="fa-solid fa-copy" onClick={() => {
                                clipboard("rafal7witczak@gmail.com")
                            }}></i>
                            <i className="fa-solid fa-envelope" onClick={() => {
                                window.open("mailto:rafal7witczak@gmail.com")
                            }}></i>
                        </div>
                        <br/><br/>
                        <h3>Lub wizyty w oddziale</h3>
                        Rzemieślnik<br/>
                        ul. Ozimska 14<br/>
                        45-064 Opole<br/>
                        <div>
                            <i className="fa-solid fa-copy" onClick={() => {
                                clipboard("Rzemieślnik ul. Ozimska 14 45-064 Opole")
                            }}></i>
                            <i className="fa-solid fa-map-pin"></i>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default App
