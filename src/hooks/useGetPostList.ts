import { useEffect, useState } from "preact/hooks";
import { Post } from "~/libs/entities/Post";
import { getPostListClient } from "~/libs/usecases/getPostListClient";

export const useGetPostList = (page?: number, limit?: number) => {
  const [data, setData] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getPostListClient({ page, limit })
      .then((res) => {
        if (res.isOk()) {
          setData(res.unwrap());
        } else {
          setError(res.unwrap());
        }
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page, limit]);

  return { data, error, isLoading };
};
