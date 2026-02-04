export default function Gallery() {
    return (
        <section class="gallery-section" id="gallery-section">
            <div class="flex text-center flex-col pt-36 px-12">
                <div class="contents-texts">
                    <h1 class="text-5xl pb-4 font-light">Gallery</h1>
                    <p class="text-xl font-extralight">
                        We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                    </p>
                    <div class="gallery-imgs pb-4">
                        <ul>
                            <li>
                                <img src="./public/gallery/mobile-img1.svg" alt="" />
                            </li>
                            <li>
                                <img src="./public/gallery/mobile-img2.svg" alt="" />
                            </li>
                            <li>
                                <img src="./public/gallery/mobile-img3.svg" alt="" />
                            </li>
                            <li>
                                <img src="./public/gallery/mobile-img4.svg" alt="" />
                            </li>
                        </ul>
                    </div>
                    <button class="see-more-btn font-medium">See More</button>
                </div>
            </div>
        </section>
    )
}
