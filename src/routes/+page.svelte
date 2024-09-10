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

<section class="px-6 lg:px-32 pt-12">
    <div class="border-b border-gray-500 py-12 mb-8 lg:flex lg:justify-between">
        <h2 class="flex items-center text-6xl font-interSemi tracking-tight pb-4">
            <span class="pr-4"><Values /></span> Beliefs
        </h2>
        <p class="text-2xl font-interMedium max-w-[580px]">
            Crypto has the potential to give people across the world almost
            unimaginable levels of freedom and autonomy.
        </p>
    </div>
    <div class="border-b border-gray-500 py-12 mb-8 lg:flex lg:justify-between">
        <h2 class="flex items-center text-6xl font-interSemi tracking-tight pb-4">
            <span class="pr-4"><Values /></span> Vision
        </h2>
        <p class="text-2xl font-interMedium max-w-[580px]">
            We envision a world where everyone has individual sovereignty, economic freedom 
            and ownership of the infrastructure that supports them.
        </p>
    </div>
    <div class="border-b border-gray-500 py-12 mb-8 lg:flex lg:justify-between">
        <h2 class="flex items-center text-6xl font-interSemi tracking-tight pb-4">
            <span class="pr-4"><Values /></span> Mission
        </h2>
        <p class="text-2xl font-interMedium max-w-[580px]">
            Accelerate Ethereum adoption, because for this vision to materialize, crypto 
            must be built on a truly decentralized and permissionless base layer.
        </p>
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
