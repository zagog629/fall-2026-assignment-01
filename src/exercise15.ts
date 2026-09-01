import { writeFile } from "fs/promises";

export type CommentSummary = {
  postId: number;
  id: number;
  commenterEmail: string;
};

type RawComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export async function processCommentsPipeline(
  targetPostId: number,
  outputPath: string,
): Promise<number> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${targetPostId}/comments`,
  );
  const rawComments = (await res.json()) as RawComment[];

  const summaries: CommentSummary[] = rawComments.map((c) => ({
    postId: c.postId,
    id: c.id,
    commenterEmail: c.email.trim(),
  }));

  const filtered = summaries.filter(
    (c) => !c.commenterEmail.toLowerCase().endsWith(".org"),
  );

  await writeFile(outputPath, JSON.stringify(filtered), "utf-8");

  return filtered.length;
}