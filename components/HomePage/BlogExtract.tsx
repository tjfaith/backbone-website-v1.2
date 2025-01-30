'use client'
import { BlogServices } from '@/app/api';
import { Button } from '@heroui/button'
import { Image } from '@heroui/image';
import { Spacer } from '@heroui/spacer';
import createDOMPurify from "dompurify";
import { useRouter } from "next/navigation";


const BlogExtract = () => {
    const { data: allBlogs, isLoading: blogLoading } =
        BlogServices().useGetAllBlog({});
    const DOMPurify = createDOMPurify();
    const router = useRouter();

    const viewBlog = (blog_id: string) => {
        router.push(`/blog/${blog_id}`);
    };

    return (
        <div className='max-w-screen-2xl mx-auto lg:px-28 px-6 py-14'>
            <div className=' flex justify-between items-end mb-8'>
                <div>
                    <div className='clash-display-font text-4xl font-medium text-foreground-950'>Take a walk with us!</div>
                    <div className='text-foreground-950'>Read about how Backbone has helped individuals and businesses across a variety of sectors.</div>
                </div>
                <Button variant='bordered' className=' text-base text-foreground-600'>Learn more about how we work </Button>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {allBlogs?.splice(0, 3).map((blog, index) => (
                    <div key={index} className='hover:bg-accent2-200/50 rounded-xl p-2 transition-all ease-in-out duration-300'>
                        <Image src={blog.cover_image} alt="blog image" className="object-cover h-screen-40 w-screen-30 mb-4" />
                        <div>
                            <div className=' mb-2 uppercase text-foreground-400 font-normal text-sm'>{blog.category.name}</div>
                            <div className=' clash-display-font text-xl font-medium text-foreground-950 mb-2 leading-snug'>{blog.title}</div>
                            <div>
                                {
                                    <div
                                        className='text-base'
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(
                                                blog?.blog_content.length > 300
                                                    ? blog?.blog_content.slice(0, 300) + "..."
                                                    : blog?.blog_content,
                                            ),
                                        }}
                                    />
                                }
                            </div>
                            <Spacer y={20} />
                            <Button
                                variant='bordered'
                                className="border"
                                onPress={() =>
                                    viewBlog(
                                        `/${blog.blog_id}?title=${encodeURIComponent(blog.title)}&id=${blog.blog_id}`,
                                    )
                                }
                            >
                                View article
                            </Button>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default BlogExtract 