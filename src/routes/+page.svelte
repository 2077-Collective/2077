<script>
    import Eth from '../lib/components/icons/Eth.svelte'
</script>


<section class="hero px-6 lg:px-32 pt-64  min-h-screen">
    <h1 class="text-white font-interBold text-8xl pb-12">We are the <br> 2077 Collective.</h1>
    <p class="font-interMedium text-xl text-gray-300">Nosotros somos el Colectivo 2077.</p>
    <p class="font-interMedium text-xl text-gray-400">Wir sind das 2077 Kollektiv.</p>
    <p class="font-interMedium text-xl text-gray-500">我们是 2077 集体。</p>
    <p class="font-interMedium text-xl text-gray-600">Мы Коллектив 2077.</p>
    <p class="font-interMedium text-xl text-gray-700">نحن مجموعة 2077.</p>
    <div class="pt-36 text-white ">
        <p class="text-3xl font-interSemi max-w-[680px]">
            We are creatives, researchers, marketers, and developers all working to make <span class="inline-block"><Eth /></span> Ethereum <s>cool</s> again.
        </p>
    </div>
</section>


<style>
    .hero {
        background-image: url('/hero.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: auto;
    }
</style>