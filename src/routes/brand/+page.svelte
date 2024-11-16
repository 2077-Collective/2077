<script>
    const brandAssets = [
        { name: "Logo", url: "/bo-du.webp", fileName: "bo-du.webp" },
        {
            name: "Brand Guidelines",
            url: "/bo-du.webp",
            fileName: "bo-du.webp",
        },
        { name: "Icon Set", url: "/bo-du.webp", fileName: "bo-du.webp" },
        { name: "Banner", url: "/bo-du.webp", fileName: "bo-du.webp" },
        { name: "Typography", url: "/bo-du.webp", fileName: "bo-du.webp" },
    ];
</script>

<section class="px-6 lg:px-20 pt-12 pb-8">
    <div class="container pt-20 pb-32">
        <div class="pt-8 min-h-[400px]">
            <h1 class="text-center font-bold text-5xl lg:text-8xl">
                Brand Assets
            </h1>
        </div>
        <div
            class="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
            {#each brandAssets as asset}
                <div
                    class="w-[280px] h-[280px] flex flex-col justify-center border border-gray-300 p-6 text-center hover:border-blue-600 transition"
                >
                    <a
                        href={asset.url}
                        download={asset.fileName}
                        class="text-2xl font-semibold text-blue-600 hover:text-blue-700 transition"
                    >
                        Download {asset.name}
                    </a>
                </div>
            {/each}
        </div>
    </div>
</section>
