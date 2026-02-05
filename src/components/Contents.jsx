export default function Contents() {
    return (
        <section class="contents-section" id="contents-section">
            <div class="flex text-center flex-col pt-36 px-12">
                <div class="contents-texts">
                    <h1 class="text-5xl pb-4 font-light">Contents</h1>
                    <p class="text-xl font-extralight">
                        We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                    </p>
                </div>
                <div class="contents-cards flex flex-col gap-8">
                    <div class="contents-card px-7 py-10 rounded-xl">
                        <h2 class="font-medium text-xl pb-4">Work</h2>
                        <p class="font-light pb-14">Ever wondered if you're too reliant on a client for work? Slate helps you identify.</p>
                        <button class="card-btn font-medium">Sign Up</button>
                        <img src="/contents/macbook.svg" alt="Transactions screen" class="pt-14" />
                    </div>
                    <div class="contents-card px-7 py-10 rounded-xl">
                        <h2 class="font-medium text-xl pb-4">
                            Design with <br />
                            real data
                        </h2>
                        <p class="font-light pb-14">Ever wondered if you're too reliant on a client for work? Slate helps you identify.</p>
                        <button class="card-btn font-medium">Try For Free</button>
                        <img src="/contents/board.svg" alt="Transactions screen" class="pt-14" />
                    </div>
                </div>
            </div>
        </section>
    )
}
