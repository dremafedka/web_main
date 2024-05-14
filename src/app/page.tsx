export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between min-h-screen p-8">
            <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-gray-500 to-pink-500 text-transparent bg-clip-text">
                Welcome to the Rick and Morty Website!
            </h1>
            <section className="flex flex-col items-center gap-5">
                <div className="md:w-1/2 mb-4 md:mb-0">
                    <img
                        className="w-full h-auto rounded-md shadow-md"
                        src="https://images.bauerhosting.com/legacy/empire-images/features/59d7b5d65d36143c05ed7dc1/mzzHr6g1yvZ05Mc7hNj3tUdy2bM.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80"
                        alt="Rick and Morty"
                    />
                </div>
                <div className="md:w-1/2 text-justify">
                    <p className="text-xl mb-4">
                        Explore everything about the adventures of Rick and Morty on our website!
                        From funny moments to thrilling escapades in the multiverse.
                    </p>
                    <p className="text-xl">
                        Join our community and stay updated on all the news about your favorite animated series.
                    </p>
                </div>
            </section>
        </main>
    );
}
