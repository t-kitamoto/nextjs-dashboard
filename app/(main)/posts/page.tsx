import PostsTable from '@/components/posts/PostTable';
import BackButton from '@/components/BackButton';
import PostPagination from '@/components/posts/PostPagination';

const PostsPage = () => {
  return (
    <>
      <BackButton text="戻る" link="/" />
      <PostsTable />
      <PostPagination />
    </>
  );
};

export default PostsPage;
