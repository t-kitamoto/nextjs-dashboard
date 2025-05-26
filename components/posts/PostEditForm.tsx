'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useEffect } from 'react';
import { Post } from '@/types/posts';
import { toast } from 'sonner';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import BackButton from '@/components/BackButton';

const formSchema = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
  author: z.string().min(1),
  date: z.string().min(1),
});

export default function PostEditForm({ post }: { post: Post }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      body: '',
      author: '',
      date: '',
    },
  });

  useEffect(() => {
    form.reset({
      title: post.title,
      body: post.body,
      author: post.author,
      date: post.date,
    });
  }, [post, form]);

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    toast('Post updated successfully', {
      description: `Updated by ${data.author} on ${data.date}`,
    });
  };

  return (
    <>
      <BackButton text="戻る" link="/posts" />
      <h3 className="text-2xl mb-4">投稿の編集</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          {/* title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>タイトル</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* body */}
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel>本文</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* author */}
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>投稿者</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* date */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>日付</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">投稿を更新</Button>
        </form>
      </Form>
    </>
  );
}
