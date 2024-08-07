"use client";

import useSearch from "@/src/libs/useSearch";
import SearchInput from "./_components/SearchInput";
import { allBlogPosts, allCategories } from "@/src/constants/dataset";
import Categories from "./_components/Categories";
import PostListItem from "@/src/components/PostListItem";

export default function BlogPage() {
  const { searchValue, searchHandler } = useSearch();

  const filteredBlogPosts = allBlogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const filteredCategories = allCategories.filter((category) =>
    category.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 p-4">
      <h1 className="text-4xl font-extrabold lg:text-5xl">Blog</h1>
      <span className="text-sm font-light text-gray-600 dark:text-gray-400">
        다시 보고 싶은 기술들을 저만의 언어로 공유합니다.
      </span>
      <SearchInput
        className="relative mt-4 w-full"
        placeholder="카테고리, 게시글 검색"
        onChange={searchHandler}
      />
      <h3 className="mt-4 text-2xl font-extrabold sm:mt-8 sm:text-3xl">
        Categories
      </h3>
      <Categories categories={filteredCategories} />
      <h2 className="mt-4 text-2xl font-extrabold sm:mt-8 sm:text-3xl">
        Posts
      </h2>
      <div className="mt-2 flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:gap-12">
        {filteredBlogPosts.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
