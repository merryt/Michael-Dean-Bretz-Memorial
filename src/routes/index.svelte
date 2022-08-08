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
			<p>May 4th 1958 - July 30 2022</p>
		</div>
		<img class="rounded-full w-48 h-68" src="/profile.jpg" alt="" />
	</div>
</div>
<main class="container mx-auto w-full grid grid-cols-2 gap-5 justify-between p-5 md:px-0">
	<Tile title="Obituary" width="full">
		<p>
			Michael Dean Bretz passed on Saturday July 30, 2022, at age 64 after a long battle against
			cancer.
		</p>
		<p>
			Michael was born on May 4, 1958, to Nicholas and Barbara (Catron) Bretz at Mercy Hospital in
			Denver, Colorado. He was the oldest of four children. Mike graduated from Arvada High School,
			where he played trumpet in the Arvada High School concert, jazz, and marching bands and
			enjoyed trips the band took to other cities and states. His first job was with the Rocky
			Mountain News where he and his friends loaded many pounds of newspapers on their bikes before
			riding up and down the hills of northern Arvada delivering papers every day of the week. He
			later worked at McDonald’s to earn funds to purchase his beloved 1970 Pontiac GTO. After high
			school, Mike worked in construction before seeking employment at Rocky Flats at which time he
			began seeking his college education. He earned his Bachelor of Science degree from Regis
			University, and a Master of Science degree in Environmental Policy and Management from the
			University of Denver. Then he managed environmental restoration and hazardous waste projects
			which took him to Boston, St. Louis, Kansas City, Leadville, and Eastern Washington, as well
			as here in Colorado. Throughout his life Mike was active in the Arvada community; he was an
			Arvada Volunteer Firefighter, a catcher in the Men's Senior Recreational Baseball Association,
			and spent many summers volunteering with the Arvada Farmers Market. Above all Mike was an
			immensely dedicated father to his two children Miranda (Randi) and Dylan. His children fondly
			remember Mike’s unique and identifiable whistle, which could always be heard from the
			sidelines of their various sporting events. Additionally, Mike with his children, built wood
			furnishings together as Mike was a skilled wood craftsman, and enjoyed countless bike rides
			and camping trips across Colorado. He will be greatly missed by his friends and family.
		</p>
		<p>
			He is survived by his daughter Miranda Merry (Tyler), son Dylan, his parents, sisters;
			Michelle Bretz, Denise Newell, and Sherri Schmallen (Paul) as well as many aunts, uncles,
			nieces, nephews, and cousins. In lieu of flowers, the family suggests donations be made in
			Mike’s name to <a
				class="link"
				href="https://www.google.com/url?q=https://www.sclhealth.org/locations/lutheran-medical-center-foundation/donate/&sa=D&source=hangouts&ust=1659549140304000&usg=AOvVaw1hybV5fZNMJthnA2y-U5cp"
				>Collier Lutheran Hospice Center.</a
			>
		</p>
	</Tile>
	<Tile title="Memorial" width="full">
		<p>
			Please join us for the Recitation of the Rosary and Funeral Mass, Tuesday August 16, 2022 at
			Spirit of Christ Catholic Communicy Church in Arvada, Colorado for Rosary (10:30AM, Spirt
			Center Central) and Mass of Chirstian Burial (11:00AM, Church), with a reception luncheon to
			follow.
		</p>
	</Tile>
	<Tile title="Photos">
		<Photos />
	</Tile>
	<Tile title="Tribute Wall">
		<Tribute />
	</Tile>
	<Tile title="Video of life">
		<div class="video-container">
			<iframe src="https://www.youtube.com/embed/T3wep32pm2o" />
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
