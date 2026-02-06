export default function OpenType() {
    return (
        <section class="opentype-section" id="opentype-section">
            <div class="py-24 lg:flex lg:justify-center">
                <div class="opentype-box flex text-center flex-col pt-24 lg:pt-0 lg:mt-24 lg:grid lg:grid-cols-2 lg:w-9/12 lg:rounded-3xl overflow-hidden lg:text-left">
                    <div class="lg:pt-16 lg:pl-24">
                        <h1 class="text-5xl pb-14 font-light">
                            OpenType <br class="lg:hidden" /> features and Variable fonts
                        </h1>
                        <button class="try-btn font-medium self-center">Try For Free</button>
                    </div>
                    <img src="/opentype/lightning-fast-lg.svg" alt="" class="hidden lg:block justify-self-end self-end" />
                    <img src="/opentype/lightning-fast.svg" alt="" class="lg:hidden pt-24" />
                </div>
            </div>
        </section>
    )
}
