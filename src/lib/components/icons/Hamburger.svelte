<script>
    import { page } from "$app/stores";
</script>

<svg
    class="text-current"
    width="28"
    height="18"
    viewBox="0 0 28 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <rect
        class="text-current"
        width="28"
        height="2"
        rx="1"
        fill={$page.url.pathname === "/" ? "white" : "black"}
    ></rect>
    <rect
        class="text-current"
        y="8"
        width="28"
        height="2"
        rx="1"
        fill={$page.url.pathname === "/" ? "white" : "black"}
    ></rect>
    <rect
        class="text-current"
        x="8"
        y="16"
        width="20"
        height="2"
        rx="1"
        fill={$page.url.pathname === "/" ? "white" : "black"}
    ></rect>
</svg>
