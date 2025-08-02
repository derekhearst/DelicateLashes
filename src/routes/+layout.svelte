<script lang="ts">
	import '../app.css'
	import favicon from '$lib/assets/favicon.svg'

	let { children } = $props()
</script>

<svelte:head>
	<title>Delicate Lashes - Professional At-Home Lash Extensions | Boise</title>
	<meta
		name="description"
		content="Professional classic lash extensions in the comfort of your home. Serving Boise area with personalized, luxurious lash services starting at $150." />
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Navigation -->
<nav class="navbar sticky top-0 z-50 bg-white shadow-lg">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path>
				</svg>
			</div>
			<ul class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
				<li><a href="#services" class="text-gray-700 hover:text-pink-600">Services</a></li>
				<li><a href="#gallery" class="text-gray-700 hover:text-pink-600">Gallery</a></li>
				<li><a href="#booking" class="text-gray-700 hover:text-pink-600">Booking</a></li>
				<li><a href="#contact" class="text-gray-700 hover:text-pink-600">Contact</a></li>
			</ul>
		</div>
		<a class="btn btn-ghost text-xl font-bold text-pink-800" href="/">
			<span class="text-2xl">🌸</span>
			Delicate Lashes
		</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal space-x-2 px-1">
			<li><a href="#services" class="text-gray-700 transition-colors hover:text-pink-600">Services</a></li>
			<li><a href="#gallery" class="text-gray-700 transition-colors hover:text-pink-600">Gallery</a></li>
			<li><a href="#booking" class="text-gray-700 transition-colors hover:text-pink-600">Booking</a></li>
			<li><a href="#contact" class="text-gray-700 transition-colors hover:text-pink-600">Contact</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<a class="btn border-pink-500 bg-pink-500 text-white hover:bg-pink-600" href="#booking"> Book Now </a>
	</div>
</nav>

<!-- Main Content -->
<main>
	{@render children?.()}
</main>

<!-- Footer -->
<footer class="footer grid-cols-1 bg-pink-800 p-6 text-pink-100 md:grid-cols-4">
	<aside>
		<div class="flex items-center space-x-2">
			<span class="text-2xl">🌸</span>
			<div>
				<p class="text-lg font-bold">Delicate Lashes</p>
				<p class="text-sm">Enhancing your natural beauty</p>
			</div>
		</div>
	</aside>
	<nav>
		<h6 class="footer-title text-sm">Services</h6>
		<a class="link link-hover text-xs">Classic Extensions</a>
		<a class="link link-hover text-xs">At-Home Service</a>
	</nav>
	<nav>
		<h6 class="footer-title text-sm">Contact</h6>
		<a class="link link-hover text-xs">Boise (83704)</a>
		<a class="link link-hover text-xs">(208) 555-LASH</a>
	</nav>
	<nav>
		<h6 class="footer-title text-sm">Follow</h6>
		<div class="flex space-x-2">
			<a class="link link-hover text-xs">Instagram</a>
			<a class="link link-hover text-xs">Facebook</a>
		</div>
	</nav>
</footer>

<div class="footer footer-center bg-pink-900 p-2 text-pink-100">
	<aside>
		<p class="text-xs">© 2024 Delicate Lashes. All rights reserved.</p>
	</aside>
</div>
