import PostEditForm from '@/components/posts/PostEditForm';
import posts from '@/data/posts';

export default function Page({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id);
  if (!post) return <div>Post not found</div>;

  return <PostEditForm post={post} />;
}
