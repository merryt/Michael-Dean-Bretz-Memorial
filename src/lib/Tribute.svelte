<script>
import { createPost, getAllPosts } from "$lib/services";
import { createEventDispatcher } from "svelte";
let postsPromise = getAllPosts();

const dispatch = createEventDispatcher();

let content = "";
let name = "";
let file = null;

let createPostPromise = Promise.resolve({});

const newPost = async () => {
    const newpost = createPost({
        content, 
        name
    }, ()=>{
        postsPromise = getAllPosts();
    });
    content = "";
    name = "";
    
};
</script>

<form on:submit|preventDefault="{newPost}">
    <div class="form-control">
        <input type="text" placeholder="Name" class="input input-bordered w-full mb-5 textarea-primary" bind:value="{name}"/>
        <textarea
            required
            class="textarea textarea-primary mb-4"
            placeholder="Condolence"
            bind:value="{content}"></textarea>
        {#await createPostPromise}
        <button class="btn btn-disabled text-xl">Submit</button>
        {:then { data, error }}
        <button class="btn btn-primary text-xl">Submit</button>
        {/await}
    </div>
</form>

<div class="mt-5">
    {#await postsPromise}
    <h2 class="h-2 mb-10">getting posts</h2>
    <progress class="progress w-56"></progress>
    {:then { data, error }}
    {#if data}
    <ul>
        {#each data as post}
        <li><strong>{ post.name }:</strong> { post.content }</li>
        {/each}
    </ul>
    {:else}
    error: {error.message}
    {/if}
    {/await}
</div>