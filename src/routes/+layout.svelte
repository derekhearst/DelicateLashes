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
				<li><a href="/gallery" class="text-gray-700 hover:text-pink-600">Gallery</a></li>
				<li><a href="#booking" class="text-gray-700 hover:text-pink-600">Booking</a></li>
				<li><a href="/appointment-prep" class="text-gray-700 hover:text-pink-600">Appointment Prep</a></li>
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
			<li><a href="/pricing" class="text-gray-700 transition-colors hover:text-pink-600">Pricing</a></li>
			<li><a href="/styles" class="text-gray-700 transition-colors hover:text-pink-600">Styles</a></li>
			<li><a href="/gallery" class="text-gray-700 transition-colors hover:text-pink-600">Gallery</a></li>
			<li><a href="/reviews" class="text-gray-700 transition-colors hover:text-pink-600">Reviews</a></li>
			<li><a href="#booking" class="text-gray-700 transition-colors hover:text-pink-600">Booking</a></li>
			<li><a href="/appointment-prep" class="text-gray-700 transition-colors hover:text-pink-600">Prep</a></li>
			<li><a href="/cancel" class="text-gray-700 transition-colors hover:text-pink-600">Cancel</a></li>
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
<footer class="footer mt-auto grid-cols-1 bg-pink-800 p-6 text-pink-100 md:grid-cols-4">
	<aside>
		<div class="flex items-center space-x-2">
			<span class="text-2xl">🌸</span>
			<div>
				<p class="text-lg font-bold">Delicate Lashes</p>
				<p class="text-sm">Enhancing your natural beauty</p>
				<p class="mt-2 text-xs">Professional at-home lash extensions in Boise, ID</p>
			</div>
		</div>
	</aside>
	<nav>
		<h6 class="footer-title text-sm">Services</h6>
		<a href="/pricing" class="link link-hover text-xs">Classic Extensions - $150</a>
		<a href="/styles" class="link link-hover text-xs">Lash Styles</a>
		<a href="/appointment-prep" class="link link-hover text-xs">Appointment Prep</a>
		<a href="/gallery" class="link link-hover text-xs">Our Work</a>
	</nav>
	<nav>
		<h6 class="footer-title text-sm">Contact & Support</h6>
		<a href="tel:+12085555274" class="link link-hover text-xs">(208) 555-LASH</a>
		<a href="mailto:hello@delicatelashes.com" class="link link-hover text-xs">hello@delicatelashes.com</a>
		<a href="/cancel" class="link link-hover text-xs">Cancel/Reschedule</a>
		<p class="text-xs">Boise, ID 83704</p>
		<p class="text-xs">At-home service within 15 miles</p>
	</nav>
	<nav>
		<h6 class="footer-title text-sm">Information</h6>
		<a href="/reviews" class="link link-hover text-xs">Client Reviews</a>
		<a href="/pricing" class="link link-hover text-xs">Pricing & Policies</a>
		<p class="text-xs">Payment: Cash, Venmo, CashApp</p>
		<p class="text-xs">Hours: Mon-Sat, 9 AM - 7 PM</p>
		<div class="mt-2 flex space-x-2">
			<a href="https://instagram.com/delicatelashes" class="link link-hover rounded bg-pink-600 px-2 py-1 text-xs"
				>Instagram</a>
			<a href="https://facebook.com/delicatelashes" class="link link-hover rounded bg-blue-600 px-2 py-1 text-xs"
				>Facebook</a>
		</div>
	</nav>
</footer>

<div class="footer footer-center bg-pink-900 p-4 text-pink-100">
	<aside class="text-center">
		<p class="text-xs">© 2025 Delicate Lashes. All rights reserved.</p>
		<p class="mt-1 text-xs">Professional lash extension services • Licensed & Insured • Boise, Idaho</p>
	</aside>
</div>
