<script>
    import Discord from './icons/Discord.svelte'
    import Farcaster from './icons/Farcaster.svelte'
    import Twitter from './icons/Twitter.svelte'
</script>

<header class="pt-8 lg:pt-16 px-6 lg:px-32 absolute w-full">
    <nav class="flex justify-between">
        <a href="/">
            <img src="/logo.svg" alt="">
        </a>

        <ul class="hidden lg:flex gap-x-4 text-white">
            <li>
                <a href="/">About us</a>
            </li>
            <li>
                <a href="/">Values</a>
            </li>
            <li>
                <a href="/">Blog</a>
            </li>
            <li>
                <a href="/">Resources</a>
            </li>
            <li>
                <a href="/">Suppport us</a>
            </li>
        </ul>

        <ul class="flex gap-x-4">
            <li>
                <a href="">
                    <Discord />
                </a>
            </li>
            <li>
                <a href="">
                    <Twitter />
                </a>
            </li>
            <li>
                <a href="">
                    <Farcaster />
                </a>
            </li>
        </ul>
    </nav>
</header>