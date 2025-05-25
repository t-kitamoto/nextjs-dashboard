import posts from '@/data/posts';
import PostEditForm from '@/components/posts/PostEditForm';

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const post = posts.find((p) => p.id === params.id);
  if (!post) return <div>Post not found</div>;

  return <PostEditForm post={post} />;
}
