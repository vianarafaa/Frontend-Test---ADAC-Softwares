export default function Navbar() {
    return (
        <section class="navbar-section" id="navbar">
            <div>
                <nav class="flex justify-between">
                    <img src="./public/navbar/logo-dark.svg" alt="Figma Land Logo" class="logo-img" />

                    <div class="flex flex-row justify-between items-center">
                        <button class="login-button">Login</button>
                        <img src="./public/navbar/menu-alt-right.svg" alt="Menu image" class="menu-img" />
                    </div>
                </nav>
            </div>
        </section>
    )
}
