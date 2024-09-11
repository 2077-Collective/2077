<script>
    import Eth from "../lib/components/icons/Eth.svelte";
    import BulletPoint from "../lib/components/icons/BulletPoint.svelte";
    import Explore from "../lib/components/icons/Explore.svelte";
    import Discord from "$lib/components/icons/Discord.svelte";
    import Farcaster from "$lib/components/icons/Farcaster.svelte";
    import Twitter from "$lib/components/icons/Twitter.svelte";
</script>

<section class="hero px-6 lg:px-20 pt-64 pb-8 min-h-screen">
    <h1 class="text-white font-inter font-bold text-5xl lg:text-8xl pb-12">
        We are the <br /> 2077 Collective.
    </h1>
    <p class="font-inter text-xl text-gray-one">
        Nosotros somos el Colectivo 2077.
    </p>
    <p class="font-inter text-xl text-gray-two">
        Wir sind das 2077 Kollektiv.
    </p>
    <p class="font-inter text-xl text-gray-three">我们是 2077 集体。</p>
    <p class="font-inter text-xl text-gray-four">Мы Коллектив 2077.</p>
    <p class="font-inter text-xl text-gray-five">نحن مجموعة 2077.</p>
    <div class="pt-36 text-white">
        <p class="text-3xl font-interSemi max-w-[680px]">
            We are creatives, researchers, marketers, and developers all working
            to make <span class="inline-block"><Eth /></span> Ethereum
            <s>cool</s> again.
        </p>
    </div>
</section>

<section class="px-6 lg:px-20 pt-12 pb-8">
    <div
        class="border-b border-gray-500 py-16 flex flex-col gap-y-4 lg:flex-row lg:justify-between"
    >
        <h2 class="flex items-center text-6xl font-interSemi tracking-tight">
            <span class="pr-4"><BulletPoint /></span> Beliefs
        </h2>
        <p class="text-2xl font-interRegular max-w-screen-3xl">
            Crypto has the potential to give people across the world almost
            unimaginable levels of freedom and autonomy.
        </p>
    </div>
    <div
        class="border-b border-gray-500 py-16 flex flex-col gap-y-4 lg:flex-row lg:justify-between"
    >
        <h2
            class="flex items-center text-6xl font-interSemi tracking-tight pb-4"
        >
            <span class="pr-4"><BulletPoint /></span> Vision
        </h2>
        <p class="text-2xl font-interRegular max-w-screen-3xl">
            We envision a world where everyone has individual sovereignty,
            economic freedom and ownership of the infrastructure that supports
            them.
        </p>
    </div>
    <div
        class="border-b border-gray-500 py-16 flex flex-col gap-y-4 lg:flex-row lg:justify-between"
    >
        <h2
            class="flex items-center text-6xl font-interSemi tracking-tight pb-4"
        >
            <span class="pr-4"><BulletPoint /></span> Mission
        </h2>
        <p class="text-2xl font-interRegular max-w-screen-3xl">
            Accelerate Ethereum adoption, because for this vision to
            materialize, crypto must be built on a truly decentralized and
            permissionless base layer.
        </p>
    </div>
</section>

<section class="flex flex-col gap-y-16 px-6 lg:px-20 pt-12 pb-8">
    <div class="">
        <p class="text-3xl font-interSemi pb-16">
            Solving Ethereum's biggest problem
        </p>
        <h2 class="text-7xl lg:text-8xl font-interBold">
            Lack of <br /> Marketing
        </h2>
    </div>

    <div class="grid gap-y-16">
        <div>
            <p class="text-2xl max-w-screen-3xl">
                There's an established community of researchers and developers
                focused on building and scaling Ethereum, but there's no unified
                community focused on promoting it. Independent marketing
                projects at the L2 or dapp/infrastructure layer—while net
                positive and beneficial for Ethereum—tend to be self-interested
                and ultimately focused on one specific (albeit important) piece
                of the puzzle they have an interest in.
            </p>
        </div>

        <div>
            <h3 class="font-interSemi text-2xl pb-4">
                A (visible) narrative vacuum
            </h3>
            <p class="text-2xl max-w-screen-3xl">
                The people whose voices really matter—core developers,
                researchers, builders—are often quiet. The empty space is filled
                with competitor noise, which is often intellectually dishonest.
                This shapes the world's view of Ethereum without anyone to
                credibly counteract the psyops, dispel misinformation, and
                proactively share good narratives about Ethereum with the world.
            </p>
        </div>

        <div>
            <h3 class="font-interSemi text-2xl pb-4">
                Focus on the wrong things
            </h3>
            <p class="text-2xl max-w-screen-3xl">
                Too much of the Ethereum community's energy is spent in tribal
                arguments on crypto-Twitter, or talking to other crypto natives.
                Having circular arguments about the investment case or esoteric
                technical debates is not useful after a point. For most
                people,energy is better spent showing the world what users can
                do with Ethereum right now and getting people on-chain.
            </p>
        </div>
    </div>

    <div class="lg:flex lg:justify-center">
        <h2 class="font-interBold text-6xl lg:text-7xl max-w-screen-2xl pb-16">
            We are Ethernauts making Ethereum <s>cool</s> again and solving ETH's
            marketing problem.
        </h2>
        <div class="">
            <img src="/ethernaut.webp" alt="" width="420" height="420" />
            <p class="text-gray-three pt-2">
                An unedited photograph of an Ethernaut
            </p>
        </div>
    </div>
</section>

<section class="flex flex-col gap-y-20 bg-gray px-6 lg:px-20 py-32 pb-20">
    <div class="flex flex-col gap-y-4">
        <div class="flex gap-x-6 items-center">
            <div class="bg-green inline-block h-12 w-6"></div>
            <h2 class="text-6xl font-ibmSemi">EIP-2077</h2>
        </div>
        <p class="text-3xl max-w-[1080px]">
            The 2077 Collective has authored <strong
                >EIP-2077: Ethereum Marketing Department</strong
            > to prescribe a strategy for marketing the Ethereum brand online and
            IRL. EIP-2077 provides a blueprint that guides 2077 Collective's marketing
            efforts:
        </p>
    </div>

    <div class="grid lg:grid-cols-2">
        <div class="bg-white border border-black p-10 flex flex-col gap-y-6">
            <p
                class="font-ibmSemi bg-black text-white w-8 rounded-full h-8 text-xl flex justify-center items-center"
            >
                1
            </p>
            <p class="font-interSemi text-2xl">Fill the gap</p>
            <p class="text-2xl">
                Establish consensus on core marketing problems, create public
                good infrastructure to tackle marketing problems, and forge
                relationships between builders and marketers.
            </p>
        </div>
        <div
            class="bg-white border border-black border-y-0 p-10 flex flex-col gap-y-6 lg:border lg:border-s-0"
        >
            <p
                class="font-ibmSemi border border-black w-8 rounded-full h-8 text-xl flex justify-center items-center"
            >
                2
            </p>
            <p class="font-interSemi text-2xl">Control the Narrative</p>
            <p class="text-2xl text-[#0B0B0B]">
                Ethpill newcomers, defend Ethereum from FUD + psyops, and
                amplify the voices of protocol devs, researchers, and builders.
            </p>
        </div>
        <div
            class="bg-white border border-black p-10 flex flex-col gap-y-6 lg:border-t-0"
        >
            <p
                class="font-ibmSemi border border-black w-8 rounded-full h-8 text-xl flex justify-center items-center"
            >
                3
            </p>
            <p class="font-interSemi text-2xl">Correct the focus</p>
            <p class="text-2xl">
                Bring more people on-chain, increase % of builders in the
                Ethereum ecosystem, and create tools + resources to onboard
                users/devs.
            </p>
        </div>
        <div
            class="bg-white border border-black border-t-0 p-10 flex flex-col gap-y-6 lg:border-s-0"
        >
            <p
                class="font-ibmSemi border border-black w-8 rounded-full h-8 text-xl flex justify-center items-center"
            >
                4
            </p>
            <p class="font-interSemi text-2xl">Promote the ecosystem</p>
            <p class="text-2xl text-gray-950">
                Increase mindshare, adoption, and investment in Ethereum through
                coordinated marketing efforts in the ecosystem and educate
                users, builders, and businesses about Ethereum L1/L2s.
            </p>
        </div>
    </div>

    <div class="text-center">
        <a
            class="inline-flex gap-x-4 items-center bg-green hover:bg-green-dark py-4 px-6 rounded-full text-xl font-ibmMedium"
            href="https://eip2077.info"
            >Explore EIP-2077 <span class="inline-block"><Explore /></span></a
        >
    </div>
</section>

<section class="flex flex-col gap-y-16 px-6 lg:px-20 py-16 pb-32">
    <div class="flex flex-col gap-y-4">
        <h2 class="text-6xl font-interMedium">
            Inde<span class="font-keania">x</span>
        </h2>
        <p class="font-interRegular text-2xl">
            Recent work that has been put out by the collective.
        </p>
    </div>

    <div class="flex flex-col gap-y-8 lg:flex-row lg:gap-x-8 lg:justify-center">
        <div class="bg-black p-10 flex flex-col gap-y-6 flex-grow">
            <p class="text-white text-xl font-interMedium">Website</p>
            <img
                src="/globe.webp"
                alt="globe"
                loading="lazy"
                width="840"
                height="840"
            />
            <p class="text-white text-xl font-interMedium max-w-screen-3xl">
                See the geographical distribution of Ethereum validators in
                real-time. A visual experience with in-depth metrics and
                statistics.
            </p>
            <div>
                <a
                    class="inline-flex gap-x-4 items-center bg-green hover:bg-green-dark py-4 px-6 rounded-full text-xl font-ibmMedium"
                    href="https://eip2077.info"
                    >etherpedia.2077.xyz <span class="inline-block"
                        ><Explore /></span
                    ></a
                >
            </div>
        </div>

        <div class="flex flex-col gap-y-8 flex-grow">
            <div class="bg-black p-10 flex flex-col gap-y-6 flex-grow">
                <p class="text-white text-xl font-interMedium">Research hub</p>
                <img
                    src="/globe1.webp"
                    alt="globe"
                    loading="lazy"
                    width="570"
                    height="248"
                />
                <div>
                    <p class="text-white text-xl font-interMedium max-w-96">
                        See the geographical distribution of Ethereum validators
                        in real-time. A visual experience with in-depth metrics
                        and statistics.
                    </p>
                </div>
                <div>
                    <a
                        class="inline-flex gap-x-4 items-center bg-green hover:bg-green-dark py-4 px-6 rounded-full text-xl font-ibmMedium"
                        href="https://research.2077.xyz"
                        >research.2077.xyz <span class="inline-block"
                            ><Explore /></span
                        ></a
                    >
                </div>
            </div>
            <div class="bg-black p-10 flex flex-col gap-y-6 flex-grow">
                <p class="text-white text-xl font-interMedium">EIP Wiki</p>
                <img
                    src="/globe1.webp"
                    alt="globe"
                    loading="lazy"
                    width="570"
                    height="248"
                />
                <p class="text-white text-xl font-interMedium max-w-96">
                    The ultimate resource on Ethereum Improvement Proposals
                    (EIPs) for research nerds.
                </p>
                <div>
                    <a
                        class="inline-flex gap-x-4 items-center bg-green hover:bg-green-dark py-4 px-6 rounded-full text-xl font-ibmMedium"
                        href="https://eips.wiki"
                        >eips.wiki <span class="inline-block"><Explore /></span
                        ></a
                    >
                </div>
            </div>
        </div>
    </div>
</section>

<section
    class="banner min-h-[633px] flex flex-col gap-y-16 justify-center items-end px-6 lg:px-20 py-16"
>
    <div class="flex flex-col gap-y-12">
        <div class="flex flex-col gap-y-6">
            <h2 class="text-6xl font-interSemi text-white">
                Join the Collective
            </h2>
            <p class="text-2xl font-interRegular text-white max-w-[732px]">
                Help shape Ethereum's future by contributing your skills in
                research, writing, design, or marketing to drive adoption and
                help reach its full potential.
            </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-x-6 gap-y-6">
            <a
                class="max-w-40 border border-white rounded-full py-4 px-6 text-white hover:opacity-65 flex gap-x-4"
                href="https://discord.gg/2077collective" target="_blank"
            >
                <Discord />
                Discord
            </a>
            <a
                class="max-w-40 border border-white rounded-full py-4 px-6 text-white hover:opacity-65 flex gap-x-4"
                href="https://x.com/2077Collective" target="_blank"
            >
                <Twitter />
                Follow us
            </a>
            <a
                class="max-w-40 border border-white rounded-full py-4 px-6 text-white hover:opacity-65 flex gap-x-4"
                href="https://www.farcaster.id/c/2077collective" target="_blank"
            >
                <Farcaster />
                Farcaster
            </a>
        </div>
    </div>
</section>

<style>
    .hero {
        background-image: url("/hero.webp");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: auto;
    }

    .banner {
        background-image: url("/banner.webp");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: auto;
    }
</style>
