<script>
	const imgList = [{ url: '/profile.jpg' }];
	let activePicture = '/profile.jpg';
	const newActive = (newImg) => {
		activePicture = newImg;
	};
</script>

<img src={activePicture} alt="" class="main_image" />
<div class="flex h-24 my-5 gap-2">
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
		width: 100%;
	}
</style>
