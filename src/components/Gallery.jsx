export default function Gallery() {
    return (
        <section class="gallery-section" id="gallery-section">
            <div class="flex text-center flex-col pt-36 px-12">
                <div class="gallery-texts">
                    <h1 class="text-5xl pb-4 font-light">Gallery</h1>
                    <p class="text-xl font-light">
                        We focus on ergonomics and meeting you where you work. <br class="hidden lg:block" />
                        It's only a keystroke away.
                    </p>
                    <div class="gallery-imgs pb-4 lg:hidden">
                        <ul>
                            <li>
                                <img src="/gallery/mobile-img1.svg" alt="" />
                            </li>
                            <li>
                                <img src="/gallery/mobile-img2.svg" alt="" />
                            </li>
                            <li>
                                <img src="/gallery/mobile-img3.svg" alt="" />
                            </li>
                            <li>
                                <img src="/gallery/mobile-img4.svg" alt="" />
                            </li>
                        </ul>
                    </div>
                    <div class="hidden lg:flex gallery-imgs py-8 flex-col items-center">
                        <ul class="flex flex-row">
                            <li>
                                <img src="/gallery/desktop-img1.svg" alt="" />
                            </li>
                            <li>
                                <img src="/gallery/desktop-img2.svg" alt="" />
                            </li>
                            <li>
                                <img src="/gallery/desktop-img3.svg" alt="" />
                            </li>
                            <li>
                                <img src="/gallery/desktop-img4.svg" alt="" />
                            </li>
                        </ul>
                        <ul class="flex flex-row">
                            <li>
                                <img src="/gallery/desktop-img5.svg" alt="" />
                            </li>
                            <li>
                                <img src="/gallery/desktop-img6.svg" alt="" />
                            </li>
                            <li>
                                <img src="/gallery/desktop-img7.svg" alt="" />
                            </li>
                        </ul>
                    </div>
                    <button class="see-more-btn font-medium">See More</button>
                </div>
            </div>
        </section>
    )
}
