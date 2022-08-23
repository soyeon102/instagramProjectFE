import React, { useState, useEffect, useCallback } from 'react';
import { getCookie } from '../shared/Cookie';
import { BASE_URL } from '../shared/api';

const END_POINT = `${BASE_URL}/api/auth/article`;
const useFetch = (page) => {
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //query API 요청 보내기
  const sendQuery = useCallback(async () => {
    const URL = `${END_POINT}?${page}`;

    try {
      setIsLoading(true);
      const response = await (
        await fetch(URL, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: getCookie('ACCESS_TOKEN'),
          },
        })
      ).json();
      if (!response) {
        throw new Error(`서버에 오류가 있습니다.`);
      }
      setList((prev) => [...new Set([...prev, ...response])]);
      setHasMore(response.length > 0);
      setIsLoading(false);
    } catch (e) {
      throw new Error(`오류입니다. ${e.message}`);
    }
  }, [page]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery, page]);

  return { hasMore, list, isLoading };
};
export default useFetch;