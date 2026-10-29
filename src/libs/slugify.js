export default function slugify(name){
    const slugs = name.toLowerCase().replaceAll(" ", "-")
    return `${slugs}`
}