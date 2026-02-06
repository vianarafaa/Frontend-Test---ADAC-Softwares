export default function Hero() {
    return (
        <section class="hero-section" id="hero-section">
            <div class="hero-texts flex text-center flex-col p-14 pt-28">
                <h1 class="text-5xl pb-4 font-light lg:font-medium lg:text-7xl">Work at the speed of thought.</h1>
                <p class="text-xl font-light lg:font-normal">
                    Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
                </p>
            </div>
            <div class="buttons flex flex-col items-center gap-5 lg:flex-row lg:justify-center">
                <button class="try-btn py-5 px-10 font-medium">Try For Free</button>
                <button class="learn-btn py-5 px-10 font-medium">Learn More</button>
            </div>
            <div class="img-wrapper relative">
                <img src="/hero/screens.svg" alt="App screens image" class="block w-full lg:hidden" />
                <img src="/hero/screens-lg.svg" alt="App screens image" class="hidden lg:block self-center w-full" />
            </div>
        </section>
    )
}
