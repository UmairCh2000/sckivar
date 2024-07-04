import Hero from "@/components/blog/Hero";
import PopularBlogs from "@/components/blog/PopularBlogs";
import RecentBlogs from "@/components/blog/RecentBlogs.jsx";

const BlogPage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <PopularBlogs />
      <RecentBlogs />
    </div>
  );
};

export default BlogPage;
