export default function Partners() {
    return (
        <section class="partners-section" id="partners-section">
            <div class="flex text-center flex-col pt-36 px-12">
                <div class="partners-texts">
                    <h1 class="text-5xl pb-4 font-light">Partners</h1>
                    <p class="text-xl font-light">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                </div>
                <div class="partners-logos flex flex-col gap-12">
                    <div>
                        <ul class="flex gap-12">
                            <li>
                                <img src="./public/partners/logos_apple-app-store.svg" alt="App Store Logo" />
                            </li>
                            <li>
                                <img src="./public/partners/logos_apiary.svg" alt="Apiary Logo" />
                            </li>
                            <li>
                                <img src="./public/partners/logos_android-icon.svg" alt="Android Logo" />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul class="flex gap-12">
                            <li>
                                <img src="./public/partners/logos_basecamp.svg" alt="Basecamp Logo" />
                            </li>
                            <li>
                                <img src="./public/partners/logos_airbnb.svg" alt="Airbnb Logo" />
                            </li>
                            <li>
                                <img src="./public/partners/logos_ibm.svg" alt="IBM Logo" />
                            </li>
                        </ul>
                    </div>
                </div>
                <button class="all-partners-btn font-medium self-center">All Partners</button>
            </div>
        </section>
    )
}
