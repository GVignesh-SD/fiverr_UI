import React, {useState,useEffect} from 'react'
import './Navbar.scss'
import { Link, useLocation } from "react-router-dom";
function Navbar() {

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const {pathname} = useLocation();
    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }
    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        }
    },[]);

    const currentUser = { 
        id:1,
        username: "Elon Musk",
        isSeller:true
    }
  return ( 
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                <Link to="/" className='link'>
                    <span className="text">fiverr</span>
                    <span className='dot'>.</span>
                </Link>
            </div>
            <div className="links">
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign in</span>
               {!currentUser.isSeller && <span>Become a Seller</span> }
               {!currentUser && <button>Join</button> }
               {currentUser && (
                <div className="user" onClick={() => setOpen(!open) }>
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFRUYGBgYGhgZGBgYGBgaGBgYGBgcGhkYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjQhISE0MTQxNDQ0NDQ0NDQ0NDQ0NDQxNDE0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDE0NDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABEEAACAQIEAwUFBQYDBwUBAAABAgADEQQSITEFQVEGImFxgRMykaGxB0JScvAUYoKSwdEjM6IVNFOywtLhRHOT4vEk/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJREBAQACAQUBAAEFAQAAAAAAAAECEQMEEiExQVFhExQiMqEF/9oADAMBAAIRAxEAPwDL0RVGjup8SJOwtdEPfsfEXmTFZ25kyxw1Q5GV1OY6Job7SLjC7Yl4l87krz0EPE9n3Snmd7X12l3wvhCBMrHM7LmOlip6SlxiV3UqHLgG2XS+k5+/d8Xwq4WTy0nZnDYY0GNwXTcHnJ/ChSqPZAFPlaZPsxwvELV1Rgtje82tHBkEZALgi9jrvOXm3jvWftXHn2+9EN2ferXCo6qwBYsQSABbkN9xL2n2UxI/9Sn/AMR/749wh8uIGhOZWGnLVTc+Gnzmqz+Ejobllhbu+/ka8vPhll/jYzi8BcLZiGbqNAf7SIOGPTDlkAA2IIN/7TXXkPijD2beU2nFljl3bo/uNzty1pz+qxJ9Z0bCnuL5Cc/qoLesu8J2gXRCRcaT08XLWpvDBlfSxQYXBhq7SyWFhMN25qFMhU215S8bFPmIEzPaUNUYKfOTs4zdTiNSopV3LADblEYf3BHq+DyX8RG6K90RGs0HcWKo1TqOUNV7i/rlGaQ7xhQVb6xVNCc9t4Q29ZJwAuzeUQFw3BZ0DPoZMXhq9Y5gR3PU/WPo0FSeEU8PQQ0wCSY9ommNYEY/YEg/Y1kpTCYSdno2uCXpFphE6R+noIaLeGxo0MGnSKOCT8MeGkkOdIbGkD9jT8MEmqsEonE8CmQFwoNusvey1QVa5dwoyLdV8esz1fC17e44Hl9ZGwmIdG7psRIs/B4bHB1H/ancrkVgQtxuFPKUWBrAV3Ae12PkDeP8CxNSrVs7XspttKGqMtZx+8RMpx2+/ZZyW6m9Om8ArvnJFRSLbaXktayFz3yrX16Gc44FUcVu6xBsefiJsE9pZSWW99fHWc3J0v8ALnz4bd2Vr8DjkSsrOygFWF2Nhe4IuTtsZov9t4f/AI1L+dP7zlWPxq51DnujeWNHiWG/EvymnSS4Ydv5XL005McbNz26SuOptqGBHUEEfGMY6spRgCDpMYeIpk7pGW0lcOxYcHKbzac1y8dqceXmzz7bjNfqNWXT1lnV7Lo6BhcNvcSDil09ZtMMO4vlOnF6bFHDYigebLG37c0KJyvnZrHRFBF+lyQNxbSP/aL2lGGT2NNrVXUsWBF0S9tCdiSCL8rG2trcQqYslrnlYeQHKFy/DkdE4r9obFiaCBBawLi73I1OWxUWPib6aTO1eM1XfMa1QMQTfOxAI/dOlvASlTDO1jlNvKPvhXP3T8Opmdq5iuG43WZVuwN73DDTNe1r9D4SWvESCLOhQ2uMpzJ42uM3p/5GeWg/4W0N9juYTq43U3HhtrDY7Wxp8aW4R7EaBWXY3W4uDt0+u4k7CsGuQdPpMB+02N9tR8Auv0EsuEcUIcMRewK632OoPpp+jH3F2tmg0PnJXDfefykDD4pWF2ZVJPdALNpyzHKADvfcDrLHhyEFj1BjJMwXuep+sdJjWF9z1P1irxVU9HHaCmYirBTMCOoYZMSsDGT9UeUxdONIdI6hiBZj592R8wgLxgecwRn2kEtDmXFu1pdMtNcpI1JG0puC4D27sC4XS5JkFE1Fwct9ZMr4fK6BGsHsAfOINXwjg60HL+0Dd0i2kxmOe9Z2GxY/WbJOxrkC+IbUXtMficGy1HQd4qT8ucNUk3hGX2y5jYEWvNe6UgAuf3db5vWYx0VqVwLMu8uODdmjXpCoarC/ISbj3BB4rikd2AbSVyBb2Fzfwll2h4EMMVs5bN1kvsxihm9iUU3ub21imHanHCQunjO5ksQQs1fY9CEub69ZEbh6A3C631mnw1MKosLaSscZB2SXwYxLAmw6zT4ji1KjSzu2yk2AuzWFyFUbmwJ8gSbAGZrErpppM7xLE6ut7nKym+pII28B4DSXvStMF2i402JrPVbTOe6t75VACqPOwHzln2N7Ne1IrVB3b9xTs1vvHqL7eV+kpeC8HavWWnqBux6LzsfjOsoqoAqCwUAADkBymWWWm3HjunUwtNQBkF+sSKCfhHwjeeJWprMrXTjjE/DYZCfcB9BJjcMpEElEB8hrK6hUMmJUhKLizHabs5S9m7Ilja9x15TnlOmUN2v4Abk9fKde4xdqZA5ic3xmFYORY3+E0xrHkxhmjjLnvDQ2vcHYX+7zHy+k3PZziCupTNdlBIJFrryHmNBME9Br2N9fHQyx7N1suJpjfMWXTkcjEnfmqsLWHKXKxsdCwx7nqfrADCw/uep+sNY6RypDQawOIawBYgMQWhiSo8u0ImEphXi+D6UmsDrF0BpCqiOFTTQQmglpZfD/AGbvYFq1xbYKP7xFfsAwK2rWKar3RuNZvF4sqKA6lR1O3xjrKlZMyG/QiTdXyV2xlLAYr3fbDTT3f/MranYl2cuaxzNvYCa04ZlJFyCORiXqONxeX4DHU+xtiUNQ256C8k0+FVcOAlOv3PEC4+Eu2xmR7kEXFpLw2FVxmZTrCySbgkZjG9n2r2NSve3hJ/DeB0cOof3m/Fz1l2/DSdlsPGQcdhXp2LMMh08jIm/p+FHjOIezSo+9jpHuyXak4hyj2Bt3bc5XcdN6bgW16c5W9hMKTicw2VTf12+kZOlVxpMlj+H1GdmyHLf4zX1tvWPowtylGyPZuhbOxGoso0N9d9/yr85b1ABvBxpCABTOUte9gNZmqJqoxzVg68wbXHrczDP26OP0viRF0gsrqdW4uNpBx+Kc91HCdWMlvtqjS0uItDMngTiLgisHt/EP7TQ4bFFgA9r9dtfKLRSnsbSLLYamZOuhzZWWzDl/abOmZU8cprnVvjHjU5RlKwswvbmRfqI12YompikdV7qXdjr3RkdQOgJZgPQyVxGgWGZRewJ21ln2Gw+Wk7WtnJYX3I2BmuLnyaPCi6DzP1i1SK4f7g8z9Y6oF4ZJhthFKIt0hQBtlggcQxCiHFhQLBaL4f06hsIRa8Ui3EZ5yp6KnMgggglJWqYylVUowF7EEWmcwOL/AGaqUvdCbgdB0kZal6psbSv4/SswNze883p+XLumN+xvyYTW3RxQSsAwtEPwlJQdmsS2Qd7lL8VAd2vLy6q4W4/hTi3Nsr2hwoUrl1sw8dLy4w1ZVQCxvbpJ+JClToOUWirYWA2h/fX7JT/oxVYiq+Ut7oAmExPHkqFkdyQCRblpOm1sOGFus5X2q7JOlYtTYZHN8vMHnaa8fVY53ts0jLis8oZNOzMpuJcdjSudio3Ez78IqCwUWG3nNL2awRovlbci/wCvjOmMq0TmQsPRd2ax8hJ7roYjC0mpvn5cxOfquW4SWNeLGZVVcUpO6FH7u4J52PT0mTbh6084XvljdTlIK9LEATccXYPUZtCO7b+QTP4ip3ttSQNNz4R45XLGX9dEwiVwLCFaPf1JLEX6fofOZ/jWFLOcwYKTyF9LTYUWGoGuUW//ACVvECARfQk6X5w9NLj4VPCeHoq5Fc5r3DqtnFze2YDbTa1posNhH0LtmNvfFtbdRbQxjAKp5CW3stNDaLKjHGQtNN5U8bLFlCi+aW1IG1m1I6dORihQBuSeRA8LjeTKMop8Fhct2QAsA1mbVVIAPujrfeSsDULZmIALLdgBYZhcEgeJF/WVvZxyr1ASSrEseYJIsf6SywhGZwNgLD53+dzNcN2suaTHHSdw7/L9T9Y7aNcN/wAseZ+semmTmhUSRrAYUX0fBERB0jkQ4hDLWCEhiS+sNeC35TKO0ZqLrHqHuwnF4XwZuCC0EpDP8NpsXLkaXkPjhqO4C02IHMAy8ogIeo5jn5yYK69PnOfh6bVmV8Vpnyb8T0hcDcqguCD0Ms/2qNe1X9WjdWovLX4TLl6LLLK5S/8AF4c8k1YcxOJJU2PKJwmLfKNYr9n7gbqSLdDImFVwcrIwGtm5GcWXTc2Mu43x5sL4lXVPFtKHjyvUrU2Bsq3uOstVQyFi6wGtxpL6bH/ObieX/W6UruXJFiMp5yZRX/GT8msRVx9PKTmHjGuF1C7l9ltZZ7DiXp2kis4KW8JFB0kN8WQbdJwf+hL2zTo6f3UPibZDlP4c1/C5/tKVAXbMDYg9022l1xNxUZbjll+pHzMz9fiLUAx9mXAtsduR8/SPp7bhNui3Xouo9QXAYob6Mtrj+bT5R/LUdAKjZ7bMQAx87aRtarvZlag1+YqaDS+ukQ/FWUbU3tfRHLbNlI0U6+fQzfRTKHMNishs3oeUvqOOFv1qekygxFVzdqSoh6tmYjrbKLfGW+Fo5EAO/d9CGDfQSMppUy20GGqAm/68I9XQMMune0sdj8JAwjgWEb43VYUXdCcyK7rbqF3I5xYnfAYqoquqjR2F2QCwRVsCxt1JFuve6QcP+/KHs3Udw9R2LMzBbnnlA+Wo2mgwH350YzUcXJl3ZLDhn+WPM/WOMY1w0/4Y8z9YtnjsRKUYIlngDw15Hwd4REOAxKGBEMmscESTrH8L6lUB3YTRVI6RDGKzY9BaCCCVotsiO01K4GR7nwH95ZYbiNJ9Fax6NofnMLgUCO61s2YaKVAKgg636jyk9mzNYIfMbfCXtGm2UDw+UWrKNTYW5m0yeGwFJkc1Hrq49wKO7tuQVN/jJ/BOEYdqbPialRAGCprlzaamxGusexpLPa6mqsmRz3rqwtY20POSX43QrUwqVctTuMqsCDnDCy679NIlOzuAqKfZV6hYDqpt6ZY7gez1FHVMpfQVA7gZg6OCMpA0EnzT1F5i9EJtracubtP3mzIdCQfjOs1CLG+1pzrinZilUq+0RrZxmKciZPZJ5kPdVf8AtBXQtltfW00XZ6tnXa2koanB7uATbYaTYcKwQpqAOkcKpQlLXvma3WXczdSqwd/OYdRx98kaceXbsxVxJzAfodDHkpBr357xigNZYqmUAnY/IzHuxxymMb4b1us9ieHoGPcU+ksMDgl5iSaxW8VSqATa1ruhWpBtOkTr8I61Yco1nvIso7oWlYgiWdHD+1R0b76Mv8wtp8ZW00tqd5b4F7AnpHCvlWUMEKSIqe4yq6Hqr66+N8w9JJwH34x9p2EqYfD4TE0mKNRPs6gHulagBGcfeUMtv44x2Y4kuIpM4Fjs6/hYDX01BHnOiOK+17w4/wCH8frEuYeB/wAsev1hOIyHUO0FI6wVOUFEawB28OEBFSFjWJbeLWJYQ+F9SEPdke+sfHuyOJU9FT8EOCUSy/YaX/DT+UQkw6Kbqig+AEyvZntM9WkzVEsRcixBBG48QZN4JXxGIcvpkBNkta42uWlSyp9LzE1lVbsQJSvXDkuihsoy6j3b8wI1xuquikEPrfp5RjD01CFzUyHz3it2IZ9llu47jbAad4HraXXBMWX0P3Ra8z+LBspzhwdrG9pP4A5GYgQhrbjb2pHxsPiZQYJELgkbAgHpf+kuONVM1K3iPrK1UUEBDfTUwKqeqhpB3qaBTv4SbwTj9LENkQ6gc5E7YvmwzJdQxtZSwBPoZiuA1RhaoqOQ1ge4p1N+ptYfOLR7dYtrMvjK6JUYOwUdSbSh4l21rPcJlpj93Vv5z/QCZjE4t3JLMWJ3JJJPmTFljua2JdNfjO09FNKSlz+I91fTQk/ATP8AF+0dequrBVXvBaYKi41BJJJNvO0pzrDqbTPHgwxu9bv7V3kt8bdR4xwhkVHpsSjqpIbcMVubHod/jKJnqA94ETb9nK4xOBoFrNemiN+ZBkbyN1MqOK8PambNqhPdf+jdG+R5dAZY69NMM9+KgYTXcyySlIWGpWMnl7ADmTYAaknoBzMitpB2mi7OYItao4sgN0B++Rs35Ry6nXYax+GcELWesNOVPr+f/t+PSaRWtLxx+1lnyfIrO3GFFbAYhG5oSPzJ31PoVE472N4kMNUZHP8Ahv3GPQj3W+o8j4TrPbHH5MJWJ0GRh6sMo+ZnCaU1YO3cGIZFIIIudQbjeWzUVPKcMw3GK1Bg9KoVOx6HzGx9Zs+DfaJmsuJSx2zp9WQ/0+EYbPINfCMHeFh8clVc1N1dTzU7eBG6nwMMDWRVzWhqIIM1olm0i0RwGJbeJR4TvYw14G/KUPdjI3jmfuxhXjI9BBeCMmewOApUM3s0C5jcgS6wvEVpJdCcwB7p2J85VtFPRsL3EpCuxNWrVqF3so5KDeHVwRcK1iwuRlAJsfECO1rDY3h4bGVKZuhKnQ7aH4wUaThRRDU1QAgZSCCfEAy44C9i2nMRjir1nyvVfNcaAaAeglPxri/7NhamU2qVbInUX99x5Lex6sseNkvkr/CD2m7dsazJhwns0OXMRcuy7sNdFvtbe1762mZxHaLEPf8AxGA6Kcv/AC2vKJzqIu8WxpJfEsdSTrGXcmIEDRmItAIkCLAiBSiE8AbqIUA6V9l2PIpvSO2YunkTZh8Rf1m9rojK2cLksc+a2XLbXNfS1pgfs3w/cR//AHAfSo8R29447laNI2og99h99x7v8A5dTryEWjOY2thqZYri3Sn9xGpe0dvFCHzZOQzqD4marsYMNVp+1oMXcd1y4AdG5oUGiel7jmZyGjQFybCwF/A+o9fh5yw7OcRxFLECrhUJy6VFOiOn4HtoD0I1B18JPbPau7KzW3cCpEMAw+HY1MRTFRNj7yn3lbmrDkR89xpHamkpLmn2r4/KlOgDq7F2/Kn/ANiPhOarLvtzxL2+NqEG6Uz7JddO5fMf5y3wEpIETV2jaG0W+ojcAm4THvTYMjlWGxUkHyuOU2XBe2puFrjMPxqAGHmNj8pgoaNaAdtw2ISqM1Nw48Nx4EHUHzj7oQNZyDhXGKlBw6NYjlyI6EcxOg8N7Z0K4Aqf4T+PuHyb7vr8YaNdoNYmqNY6gBsQQQdiNQfEHnE1F1iB1fcjKLrJAHdjCjWAO3hwoIBRVDIVbEG9l1J/VzJTm8YwuGzXPMm3pKQcwdR01UZm6hb2kjFcdqMV9qA2XQBlA06aS4o01VMq6AdOfiZX18OHBVvj0PWO4nsMbTSogq0Sco0ZCblD4eE5p2rxeesVB7tPuj833z530/hm8wFY4c1mfVUpu7j8QRSw9dJyyo5NyTck3J6k6k/GSaNV3ixGakeQQAxCaGYLRgkCHCMMwAQ7QoBAOjdhf91QX0zVQR1u5I+u0PtLggqO3RHbX91S2vwjv2eKP2W5/G/9D/WMduMTkplfvVDkHW2ma3U6qP4ojZfCUGqEIgOao6IDlNhcjvW3tqPh5EdHwXBhh6SIinc3NtWY2uxPp8ABymH4bifZOlS18jqxAF9Abm3iQTzO99dz1ylV2tYiwPncnUekYU2BoVKL56ZszEBlPuuo5MPodxLXtBxpaOHqVG7rojMEJ9420CH71zYdeoEmBQTec6+1fiOlOiD7xLt+VNh4d4g+kQc5W5uWNybknqTqTDD23gQRLCAGH84jLHLaRDaQIdoRiwNITiAJBileN3iXaBr3g/H61Fhkdsqm+QscjdbrtrtfedcZg1mXZgGHkRcfIzhmHNiJ2Ls1Vz4Wgb3smT+QlP8AphQtANI0qySNjGwIgO0EctBGFAuAckXFr8yZM/2ZkYEOrc7KDzloEHSBnUbkCa9n8su5Fp02OgB1j1Phr3vYD1kum2Vc4ta9r8/hForvsrH0P1j8DdZDt4opYVyQM9QqitbWxN2/0qw9ZydhOnfa/if92p6DuO7i4uCLKt7HxecuqPMsqqejNSPU9pHaSUHdiUBh2hCGYwSRCEO0KAAwQQCAdJ+z5v8A+Ugbio4/0of6ym7Z18+JVNCtJRm/O3eO+n4B/Cb6S4+zfErTwuIdtFpu7k/uikhP0MyJqs7M7nvOxdyfxMcx32HQcrC+wBRplPVef/n118frrpOgdlccXoJfdB7M/wAHu/6SswFLb+nl1+Pp4m82PYFrrWXoyP8Azqw/6BANnhn38JxPtlj/AG+Mqte6ofZrrp3Pe/1FvhOucUxooYerVP3EZvMgaAes4QrE3LG5JJJ6km5PxgCrxBaLiYAa3iDqYbQ1ECLhNBeGIAw0b3McqRulAHlM6d9n2KLUXS/uVAR4K66f6lf4zmKTbfZ1iLYh0/HTv6oy2+TtCh0fOYy9UiOGR640MRsZxHi2IFRgGWwOnwglNxOl/iv3+fXwghoOnZU+/VY+Cg/UwK9NTdaTN+dv6CBio2+kUovyjuae0KONfN3FRLcwuvzklXq1NGdj62EbpoBtvFpT13k3K1Uxcu+0sgYvIDfJSpqfM5n+jiYwiXPanFe0xVZ73vUYA9VQ5FP8qLKkLK+EacWkkCwEjVTfSTKh5QgNwjDggCYUOAxgIDADCgGgwHEMmAq0lPeq10B11yKmZiP4lQepjFFdvjofX+hN/XkBKujvLaif1f139L38L8lugm0m06fLQbafLw21NzNf9nOr4ofuUvrU/X60xea23057WHloOvLe82X2anvYk/u0h83/AF+rkpmftP4hkopQB1qPmYfuJY+neKfAzmol7234h7bGVCDdadqa6/gvn/1lx6CUUCAmEYDABAwirQocCE0MGEYYgDFd9ISC0TV94RYgDlPeaPsXWy42l0bOp9Ua3zCzNpLXgdXJiaDdKtP4FwD8iYUR2Yyv4niMqkDUmTHJ1lbXTdmkqkZKpwkMSTud4JoP2mj1gj8n4aR+cg8Pckm5J73WCCRQsF5x+j7w84IIoHnmp9z8o+kJtoIJshHfcSU28EEQAwoIIwKHBBEBCCCCEB3D+9+uoltR5en1b/tHwEEEDOvt6H6J/c/GbT7O9sT5p9XgggHMX1JJ1JLXPWJgghQIxSwQQAGCCCAEIawQQCI3vRYggiB6nJeB/wAxPzp/zCCCMncK3OVOP9xvIwQSVRh7wQQTQn//2Q==" alt="" />
                    <span>{currentUser.username}</span>
                    {open && (<>
                        <div className="options">
                        {
                            currentUser.isSeller && (
                                <>
                                <Link to="/mygigs" className='link'>Gigs</Link>
                                <Link to="/add" className='link'>Add New Gig</Link>
                                
                                </>
                            )
                        }
                        <Link to="/orders" className='link'>Orders</Link>
                        <Link to="/messages" className='link'>Messages</Link>
                        <Link to="/" className='link'>Logout</Link>
                    </div>
                    </>)
                    }
                </div>
               )

               }
            </div>
        </div>
        {
        (active || pathname !== "/") && (
        <>
            <hr />
            <div className="menu">
                <Link className="link" to="/">
                    Graphic & Design
                </Link>
                <Link className="link" to="/">
                    Video & Animation
                </Link>
                <Link className="link" to="/">
                    Writing & Translation
                </Link>
                <Link className="link" to="/">
                    AI Services
                </Link>
                <Link className="link" to="/">
                    Digital Marketing
                </Link>
                <Link className="link" to="/">
                    Music & Audio
                </Link>
                <Link className="link" to="/">
                    Programming & Tech
                </Link>
                <Link className="link" to="/">
                    Business
                </Link>
                <Link className="link" to="/">
                    Lifestyle
                </Link>
            </div>
            <hr />
        </>
        )}
    </div>
  )
}

export default Navbar