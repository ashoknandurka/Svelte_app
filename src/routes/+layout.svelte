<script>
// @ts-nocheck

	import { page, navigating } from '$app/stores';
</script>

<nav>
	<a href="/" aria-current={$page.url.pathname === '/'}>home</a>
	<a href="/about" aria-current={$page.url.pathname === '/about'}>about</a>
    <a href="/blog">blog</a>
	<a href="/todoAction">todo</a>
	<a href="/todos">todos</a>
    <a href="/a/deeply/nested/route">A deeply nested route</a>

	{#if $navigating}
	navigating to {$navigating.to.url.pathname}
   {/if}

</nav>

<slot />