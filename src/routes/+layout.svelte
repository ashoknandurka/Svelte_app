<script>
// @ts-nocheck

	import { page, navigating } from '$app/stores';
</script>

<nav>
	<a href="/" aria-current={$page.url.pathname === '/'}>home</a>
	<a href="/about" aria-current={$page.url.pathname === '/about'}>about</a>
    <a href="/blog">blog</a>
	<!-- <a href="/todoAction">todo</a> -->
	<a href="/todos">todos</a>
    <a href="/a/deeply/nested/route">Deeply_nested_route</a>
	<a href="/expected">expectedError_page</a>
	<a href="/unexpected">unexpectedError_page</a>
	<a href="/b">b</a>
	<a href="/c">c</a>

	{#if $navigating}
	navigating to {$navigating.to.url.pathname}
   {/if}

</nav>

<slot />