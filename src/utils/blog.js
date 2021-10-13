import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'src/data/posts');

export const getPostSlugs = () => {
    return fs.readdirSync(postsDirectory);
}

export const getPostBySlug = (slug, fields = []) => {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const {data, content} = matter(fileContents)

    const items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
        }

        if (data[field]) {
            items[field] = data[field]
        }
    });

    return items
}

export const getBlogPosts = (fields = [], limit) => {
    const slugs = getPostSlugs();
    return slugs.map((slug) => getPostBySlug(slug, fields)).sort((post1, post2) => (post1.date > post2.date ? '-1' : '1')).slice(0, limit < 0 ? slugs.length : limit ? limit : slugs.length);
}