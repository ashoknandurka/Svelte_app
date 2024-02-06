<script>
// @ts-nocheck

    import { page } from "$app/stores";
    import { emojis } from "./emojis";
</script>

<h1>{$page.status} {$page.error?.message}</h1>
<span>
    {emojis[$page.status] ?? emojis[500]}
</span>