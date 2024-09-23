<script>
    import { page } from "$app/stores";
    import Logo from "./icons/Logo.svelte";
    import Discord from "./icons/Discord.svelte";
    import Farcaster from "./icons/Farcaster.svelte";
    import Twitter from "./icons/Twitter.svelte";
</script>


<header class="flex justify-center px-6 lg:px-20">
    <nav class="absolute px-6 lg:px-0 container flex justify-between py-6">
        <a href="/">
            <Logo />
        </a>

        <ul
            class="hidden lg:flex gap-x-6"
            class:text-white={$page.url.pathname === "/"}
            class:text-black={$page.url.pathname !== "/"}
        >
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
</header>
