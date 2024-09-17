<script>
    import Eth from "./icons/Eth.svelte";
    import Logo from "./icons/Logo.svelte";
    import Discord from "./icons/Discord.svelte";
    import Farcaster from "./icons/Farcaster.svelte";
    import Twitter from "./icons/Twitter.svelte";
</script>

<header class="hero pb-8 min-h-screen">
    <div class="container px-6 lg:px-20 flex flex-col">
        <nav class="flex justify-between py-6">
            <a href="/">
                <Logo />
            </a>

            <ul class="hidden lg:flex gap-x-6 text-white">
                <li>
                    <a href="/about">About us</a>
                </li>
                <li>
                    <a href="/values">Values</a>
                </li>
                <li>
                    <a href="/">Blog</a>
                </li>
                <li>
                    <a href="/">Resources</a>
                </li>
                <li>
                    <a href="/support">Suppport us</a>
                </li>
            </ul>

            <ul class="flex gap-x-4">
                <li>
                    <a href="https://discord.gg/2077collective" target="_blank">
                        <Discord />
                    </a>
                </li>
                <li>
                    <a href="https://x.com/2077Collective" target="_blank">
                        <Twitter />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.farcaster.id/c/2077collective"
                        target="_blank"
                    >
                        <Farcaster />
                    </a>
                </li>
            </ul>
        </nav>
        <div class="flex flex-col gap-6 pt-20">
            <h1 class="text-white font-bold text-5xl lg:text-8xl pb-12">
                We are the <br /> 2077 Collective.
            </h1>

            <div>
                <p class=" font-medium text-xl text-gray-lightest">
                    Nosotros somos el Colectivo 2077.
                </p>
                <p class=" font-medium text-xl text-gray-lighter">
                    Wir sind das 2077 Kollektiv.
                </p>
                <p class=" font-medium text-xl text-gray-light">
                    我们是 2077 集体。
                </p>
                <p class=" font-medium text-xl text-gray-dark">
                    Мы Коллектив 2077.
                </p>
                <p class=" font-medium text-xl text-gray-darker">
                    نحن مجموعة 2077.
                </p>
            </div>
        </div>
        <div class="pt-36 text-white pt-[204px]">
            <p class="text-3xl font-semibold max-w-[680px]">
                We are creatives, researchers, marketers, and developers all
                working to make <span class="inline-block"><Eth /></span>
                Ethereum
                <s>cool</s> again.
            </p>
        </div>
    </div>
</header>

<style>
    .container {
        max-width: 1440px;
        margin-inline: auto;
    }
    .hero {
        background-image: url("/hero.webp");
        background-position: 0;
        background-size: cover;
        background-repeat: no-repeat;
        max-height: 920px;
    }
</style>
