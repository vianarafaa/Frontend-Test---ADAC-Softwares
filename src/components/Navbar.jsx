import { useState } from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <section class="navbar-section" id="navbar">
            <nav class="flex justify-between items-center relative py-4 px-2 lg:px-60 lg:py-4 lg:fixed lg:top-0 lg:left-0 lg:w-full lg:z-50">
                <Link to="hero-section" smooth={true} duration={500} onClick={() => setMenuOpen(false)} class="logo-img">
                    <img src="/navbar/logo-dark.svg" alt="Figma Land Logo" />
                </Link>
                <ul
                    className={`flex flex-col absolute top-16 right-0
                    w-56 h-54
                    p-6 gap-6 shadow-xl
                    transform transition-transform duration-300
                    ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
                    lg:translate-x-0 lg:static lg:flex lg:flex-row
                    lg:w-auto lg:h-auto lg:p-0
                    lg:text-inherit lg:shadow-none`}
                >
                    <li class="flex items-center">
                        <Link to="hero-section" smooth={true} duration={500} onClick={() => setMenuOpen(false)} class="font-medium">
                            Home
                        </Link>
                    </li>
                    <li class="flex items-center">
                        <Link to="features-section" smooth={true} duration={500} onClick={() => setMenuOpen(false)} class="font-medium">
                            Product
                        </Link>
                    </li>
                    <li class="flex items-center">
                        <Link to="testimonials-section" smooth={true} duration={500} onClick={() => setMenuOpen(false)} class="font-medium">
                            About
                        </Link>
                    </li>
                    <li class="flex items-center">
                        <Link to="footer-section" smooth={true} duration={500} onClick={() => setMenuOpen(false)} class="font-medium">
                            Contact
                        </Link>
                    </li>
                </ul>
                <div class="flex flex-row justify-between items-center">
                    <button class="login-button font-medium">Login</button>
                    <img
                        src="/navbar/menu-alt-right.svg"
                        alt="Menu image"
                        class="menu-img lg:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                </div>
            </nav>
        </section>
    )
}
