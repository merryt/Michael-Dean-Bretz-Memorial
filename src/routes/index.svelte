<script>
	import Tile from '$lib/Tile.svelte';
	import Photos from '$lib/Photos.svelte';
	import Tribute from '$lib/Tribute.svelte';
</script>

<div class="hero h-96">
	<div class="hero-overlay bg-opacity-60" />
	<div
		class="hero-content mx-auto max-w-5xl container text-neutral-content flex flex-col-reverse md:flex-row "
	>
		<div class="w-full text-center md:text-left">
			<h1 class="md:mb-5 text-5xl font-bold">Mike Bretz</h1>
			<p>Son, Father, Brother, and Friend</p>
			<p>May 4th 1958 - July 31 2022</p>
		</div>
		<img class="rounded-full w-48 h-68" src="/profile.jpg" alt="" />
	</div>
</div>
<main class="container mx-auto w-full grid grid-cols-2 gap-5 justify-between p-5 md:px-0">
	<Tile title="Obituary" width="full">
		<p>Michael Dean Bretz passed on July 31st 2020 at age 64 after a long battle against cancer.</p>
		<p>
			Mike was born to Nicholas and Barbara Bretz in Arvada, Colorado. He was the oldest of four 4
			children. Mike graduated from Arvada High School, attained a Bachelor of Science from Regis
			University and a Masters Degree of Environmental Policy and Management from the University of
			Denver. Throughout his career, he managed environmental restoration and hazardous waste which
			took him to Boston, St. Louis, Kansas City, Leadville, and Eastern Washington. Throughout his
			life Mike was active in the Arvada community; he was an Arvada Volunteer Firefighter, a
			catcher in the Men's Senior Recreational Baseball Association, and spent many summers
			volunteering with the Arvada Farmers Market. Above all Mike was an immensely dedicated father
			to his two children Randi and Dylan. His children fondly remember Mike’s unique and
			identifiable whistle, which could always be heard from the sidelines of their various sporting
			events. Additionally, Mike and his children built wood furnishings together (as Mike was a
			skilled wood craftsman), and enjoyed countless bike rides and camping trips across Colorado.
			He will be greatly missed by his friends and family.
		</p>
		<p>
			He is survived by his children, his parents, and his three sisters. In lieu of flowers, please
			consider a donation to <a
				href="https://www.google.com/url?q=https://www.sclhealth.org/locations/lutheran-medical-center-foundation/donate/&sa=D&source=hangouts&ust=1659549140304000&usg=AOvVaw1hybV5fZNMJthnA2y-U5cp"
				>Lutheran Hospice facility</a
			> in Mike's name. Or to the charity of your choice.
		</p>
		<p>A memorial will be held in his honor at XXX on [DATE AND TIME].</p>
	</Tile>
	<Tile title="Memorial" width="full">
		<p>A service will be held on ...</p>
	</Tile>
	<Tile title="Photos">
		<Photos />
	</Tile>
	<Tile title="Tribute Wall">
		<Tribute />
	</Tile>
	<Tile title="Video of life">
		<div class="video-container">
			<iframe src="https://www.youtube.com/embed/dKVDJlAh_sk" />
		</div>
	</Tile>
</main>

<style>
	.hero {
		background: url(/hero.jpg) no-repeat center center;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}

	.container p {
		margin-bottom: 6px;
	}

	.video-container {
		position: relative;
		padding-bottom: 56.25%;
		padding-top: 30px;
		height: 0;
		overflow: hidden;
	}

	.video-container iframe,
	.video-container object,
	.video-container embed {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
