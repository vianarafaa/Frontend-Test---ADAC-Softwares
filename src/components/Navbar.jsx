export default function Navbar() {
    return (
        <section class="navbar-section">
            <div>
                <nav class="flex justify-between ">
                    <img src="./public/navbar/logo-dark.svg" alt="Figma Land Logo" />

                    <div class="flex gap-3">
                        <button class="login-button">Login</button>
                        <img src="./public/navbar/menu-alt-right.svg" alt="Menu image" />
                    </div>
                </nav>
            </div>
        </section>
    )
}
