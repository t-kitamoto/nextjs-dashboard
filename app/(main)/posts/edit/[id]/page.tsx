import PostEditForm from '@/components/posts/PostEditForm';
import posts from '@/data/posts';

export default function Page({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id);
  if (!post) return <div>投稿が見つかりません。</div>;

  return <PostEditForm post={post} />;
}
