<script>
    import { page } from "$app/stores";
</script>

<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <g clip-path="url(#clip0_1_397)">
        <path
            d="M13.6757 10.6218L20.2325 3H18.6787L12.9855 9.61785L8.43828 3H3.1936L10.0699 13.0074L3.1936 21H4.74745L10.7597 14.0113L15.5619 21H20.8065L13.6757 10.6218ZM11.5475 13.0956L10.8508 12.0991L5.30725 4.1697H7.6939L12.1676 10.5689L12.8643 11.5654L18.6795 19.8835H16.2928L11.5475 13.0956Z"
            fill={$page.url.pathname === "/" ? "white" : "black"}
        />
    </g>
    <defs>
        <clipPath id="clip0_1_397">
            <rect width="24" height="24" fill={$page.url.pathname === "/" ? "white" : "black"} />
        </clipPath>
    </defs>
</svg>
