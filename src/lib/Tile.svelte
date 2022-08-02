<script>
	export let title;
	export let width;
</script>

<div
	class="py-4 bg-base-100 p-5 rounded-md col-span-full {width !== 'full' ? 'md:col-span-1' : ''}"
>
	<!-- <div class="py-4 bg-base-100 p-5 rounded-md"> -->
	<h3 class="text-xl font-bold flex-wrap mb-5">{title}</h3>
	<slot />
</div>
