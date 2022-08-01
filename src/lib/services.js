import supabase from "./supabase"

export async function createPost({ content, name }, tailcall) {
    const { data, error } = await supabase
        .from('tributes')
        .insert({ content, name })

    await tailcall()
    return { data, error }
}


export async function getAllPosts() {
    let { data, error } = await supabase.from('tributes').select().order('created_at', { ascending: false })
    if (error) return { data, error }
    return { data, error }
}