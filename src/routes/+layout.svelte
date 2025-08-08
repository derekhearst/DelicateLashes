<script lang="ts">
	import '../app.css'

	let { children } = $props()
</script>

<svelte:head>
	<title>Delicate Lashes - Professional At-Home Lash Extensions | Boise</title>
	<meta
		name="description"
		content="Professional classic lash extensions in the comfort of your home. Serving Boise area with personalized, luxurious lash services starting at $150." />
	<link rel="icon" href="/favicon.svg" />
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
				<li><a href="#services" class="text-gray-700 transition-colors hover:text-pink-600">Services</a></li>
				<li><a href="#gallery" class="text-gray-700 hover:text-pink-600">Gallery</a></li>
				<li><a href="#booking" class="text-gray-700 hover:text-pink-600">Booking</a></li>
				<li><a href="#appointment-prep" class="text-gray-700 hover:text-pink-600">Appointment Prep</a></li>
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
			<li>
				<a href="#appointment-prep" class="text-gray-700 transition-colors hover:text-pink-600">Appointment Prep</a>
			</li>
			<li><a href="#contact" class="text-gray-700 transition-colors hover:text-pink-600">Contact</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<a class="btn border-pink-500 bg-pink-500 text-white hover:bg-pink-600" href="#booking"> Book Now </a>
	</div>
</nav>

<!-- Main Content -->
<svelte:boundary>
	{#snippet pending()}
		<p>Loading...</p>
	{/snippet}

	{@render children?.()}
</svelte:boundary>

<!-- Footer -->
<footer class="footer bg-pink-800 p-4 text-pink-100">
	<div class="container mx-auto flex flex-col items-center justify-between space-y-2 md:flex-row md:space-y-0">
		<div class="flex items-center space-x-2">
			<span class="text-xl">🌸</span>
			<div>
				<p class="text-sm font-bold">Delicate Lashes</p>
				<p class="text-xs">Professional at-home lash extensions • Boise, ID</p>
			</div>
		</div>
		<div class="text-center text-xs">
			<p>(208) 555-LASH • hello@delicatelashes.com</p>
			<p>Classic Extensions $150 • Mon-Sat 9 AM - 7 PM</p>
		</div>
		<div class="text-xs">
			<p>© 2025 Delicate Lashes</p>
		</div>
	</div>
</footer>
