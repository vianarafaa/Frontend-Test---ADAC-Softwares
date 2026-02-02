export default function Hero() {
    return (
        <section class="hero-section">
            <div>
                <div class="hero-text flex text-center flex-col">
                    <h1 class="text-5xl pb-4">Work at the speed of thought.</h1>
                    <h2 class="text-xl font-extralight">
                        Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their
                        schedule.
                    </h2>
                </div>
                <div class="buttons flex flex-col items-center gap-5">
                    <button class="try-btn py-5 px-10">Try For Free</button>
                    <button class="learn-btn py-5 px-10">Learn More</button>
                </div>
                <div class="img-wrapper relative">
                    <img src="./public/hero/screens.svg" alt="App screens image" class="block w-full" />
                </div>
            </div>
        </section>
    )
}
