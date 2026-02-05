export default function Navbar() {
    return (
        <section class="navbar-section" id="navbar">
            <nav class="flex justify-between py-4 px-2 lg:px-60 lg:py-4">
                <a href="" class="logo-img">
                    <img src="/navbar/logo-dark.svg" alt="Figma Land Logo" />
                </a>
                <ul class="hidden lg:flex gap-8 items-center">
                    <li>
                        <a href="#hero-section" class="font-medium">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#features-section" class="font-medium">
                            Product
                        </a>
                    </li>
                    <li>
                        <a href="#testimonials-section" class="font-medium">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#footer-section" class="font-medium">
                            Contact
                        </a>
                    </li>
                </ul>
                <div class="flex flex-row justify-between items-center">
                    <button class="login-button font-medium">Login</button>
                    <img src="/navbar/menu-alt-right.svg" alt="Menu image" class="menu-img lg:hidden" />
                </div>
            </nav>
        </section>
    )
}
