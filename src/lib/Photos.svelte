<script>
	const imgList = [
		{ url: '/cigar-1.jpg' },
		{ url: '/family.jpg' },
		{ url: '/jungle.jpg' },
		{ url: '/fishing.jpg' }
	];
	let activePicture = '/cigar-1.jpg';
	const newActive = (newImg) => {
		activePicture = newImg;
	};
</script>

<img src={activePicture} alt="" class="main_image" />
<div class="flex h-24 my-5 gap-2 slideshow-slides">
	{#each imgList as img}
		<img
			src={img.url}
			alt=""
			on:click|preventDefault={() => {
				newActive(img.url);
			}}
		/>
	{/each}
</div>

<style>
	.main_image {
		/* min-height: 300px; */
		width: 100%;
	}
	.slideshow-slides {
		overflow-x: auto;
	}
</style>
