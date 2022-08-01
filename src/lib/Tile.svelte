<script>
    export let title;
</script>

<div class="{`py-4 bg-base-100 p-5 rounded-md ${$$props.class}`}">
<!-- <div class="py-4 bg-base-100 p-5 rounded-md"> -->
    <h3 class="text-xl font-bold flex-wrap mb-5">{title}</h3>
	<slot></slot>
</div>