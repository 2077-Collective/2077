<script>
    import Eth from "../lib/components/icons/Eth.svelte";
    import Values from "../lib/components/icons/Values.svelte";
</script>

<section class="hero px-6 lg:px-32 pt-64 pb-8 min-h-screen">
    <h1 class="text-white font-interBold text-5xl lg:text-8xl pb-12">
        We are the <br /> 2077 Collective.
    </h1>
    <p class="font-interMedium text-xl text-gray-300">
        Nosotros somos el Colectivo 2077.
    </p>
    <p class="font-interMedium text-xl text-gray-400">
        Wir sind das 2077 Kollektiv.
    </p>
    <p class="font-interMedium text-xl text-gray-500">我们是 2077 集体。</p>
    <p class="font-interMedium text-xl text-gray-600">Мы Коллектив 2077.</p>
    <p class="font-interMedium text-xl text-gray-700">نحن مجموعة 2077.</p>
    <div class="pt-36 text-white">
        <p class="text-3xl font-interSemi max-w-[680px]">
            We are creatives, researchers, marketers, and developers all working
            to make <span class="inline-block"><Eth /></span> Ethereum
            <s>cool</s> again.
        </p>
    </div>
</section>

<section class="px-6 lg:px-32 pt-12 pb-8">
    <div class="border-b border-gray-500 py-12 mb-8 lg:flex lg:justify-between">
        <h2
            class="flex items-center text-6xl font-interSemi tracking-tight pb-4"
        >
            <span class="pr-4"><Values /></span> Beliefs
        </h2>
        <p class="text-2xl font-interMedium max-w-[580px]">
            Crypto has the potential to give people across the world almost
            unimaginable levels of freedom and autonomy.
        </p>
    </div>
    <div class="border-b border-gray-500 py-12 mb-8 lg:flex lg:justify-between">
        <h2
            class="flex items-center text-6xl font-interSemi tracking-tight pb-4"
        >
            <span class="pr-4"><Values /></span> Vision
        </h2>
        <p class="text-2xl font-interMedium max-w-[580px]">
            We envision a world where everyone has individual sovereignty,
            economic freedom and ownership of the infrastructure that supports
            them.
        </p>
    </div>
    <div class="border-b border-gray-500 py-12 mb-8 lg:flex lg:justify-between">
        <h2
            class="flex items-center text-6xl font-interSemi tracking-tight pb-4"
        >
            <span class="pr-4"><Values /></span> Mission
        </h2>
        <p class="text-2xl font-interMedium max-w-[580px]">
            Accelerate Ethereum adoption, because for this vision to
            materialize, crypto must be built on a truly decentralized and
            permissionless base layer.
        </p>
    </div>
</section>

<section class="px-6 lg:px-32 pt-12">
    <div class="pb-16">
        <p class="text-3xl font-interSemi pb-16">
            Solving Ethereum's biggest problem
        </p>
        <h2 class="text-7xl lg:text-8xl font-interBold">Lack of <br /> Marketing</h2>
    </div>

    <div class="pb-16">
        <p class="text-2xl max-w-[720px] pb-16">
            There's an established community of researchers and developers
            focused on building and scaling Ethereum, but there's no unified
            community focused on promoting it. Independent marketing projects at
            the L2 or dapp/infrastructure layer—while net positive and
            beneficial for Ethereum—tend to be self-interested and ultimately
            focused on one specific (albeit important) piece of the puzzle they
            have an interest in.
        </p>

        <h3 class="font-interSemi text-2xl pb-4">A (visible) narrative vacuum</h3>
        <p class="text-2xl max-w-[720px] pb-16">
            The people whose voices really matter—core developers, researchers, 
            builders—are often quiet. The empty space is filled with competitor noise, 
            which is often intellectually dishonest. This shapes the world's view of 
            Ethereum without anyone to credibly counteract the psyops, dispel misinformation, 
            and proactively share good narratives about Ethereum with the world.
        </p>

        <h3 class="font-interSemi text-2xl pb-4">Focus on the wrong things</h3>
        <p class="text-2xl max-w-[720px] pb-16">
            Too much of the Ethereum community's energy is spent in tribal arguments on crypto-Twitter, 
            or talking to other crypto natives. Having circular arguments about the investment case or 
            esoteric technical debates is not useful after a point. For most people,energy is better 
            spent showing the world what users can do with Ethereum right now and getting people on-chain.
        </p>
    </div>

    <div class="lg:flex lg:justify-center pb-16">
        <h2 class="font-interBold text-6xl lg:text-7xl max-w-[600px] pb-16">
            We are Ethernauts making Ethereum <s>cool</s> again and solving ETH's marketing problem.
        </h2>
        <div>
            <img src="/ethernaut.webp" alt="">
            <p class="text-gray-500 pt-2">An unedited photograph of an Ethernaut</p>
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
</style>
