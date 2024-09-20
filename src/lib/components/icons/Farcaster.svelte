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
    <g clip-path="url(#clip0_1_400)">
        <path
            d="M4.00017 19.9252L3.00024 21H10.0952L9.01524 19.9252L9.01524 14.6C9.01524 13.4 9.15924 11 12.6152 11C16.0712 11 16.2152 13.4 16.2152 14.6V19.9252L15.1352 21L22.0002 21L21.0001 19.9252V9.40523L22.0002 7L19.0952 7L19.0953 4L6.13532 4L6.13524 7H3.00024L4.00017 9.40523L4.00017 19.9252Z"
            fill={$page.url.pathname === '/' ? 'white' : 'black'}
        />
    </g>
    <defs>
        <clipPath id="clip0_1_400">
            <rect width="24" height="24" fill="white" />
        </clipPath>
    </defs>
</svg>
