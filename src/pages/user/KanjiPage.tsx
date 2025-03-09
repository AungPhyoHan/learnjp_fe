import { useParams } from "react-router-dom";
import { Page, Word } from "../../models/MyModels";
import { useEffect, useState } from "react";
import { listAllkanji } from "../../service/MyService";

const KanjiPage = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [pageWords, setPageWords] = useState<Word[]>([]);
  const { level } = useParams<{ level: string }>();
  const intLevel = parseInt(level!, 10);
  const [page, setPage] = useState<Page>({
    startPage: 0,
    nextPage: 10,
  });
  const size = 10;
  const pageCount = Math.ceil(words.length / size);
  const [startCount, setStartCount] = useState<number>(
    words.length == 0 ? 0 : 1
  );

  useEffect(() => {
    listAllkanji(intLevel)
      .then((response) => {
        setWords(response.data);
      })
      .catch((error) => console.error(error));
    return () => console.log("Rerun");
  }, [intLevel]);

  useEffect(() => {
    setPage((prevPage) => ({
      ...prevPage,
      totalPage: words.length,
    }));
  }, [words]);

  useEffect(() => {
    setStartCount(words.length == 0 ? 0 : 1);
  }, [words.length]);

  const handleNextPage = () => {
    if (page.nextPage > words.length) {
    } else if (page.nextPage != page.totalPage) {
      setPage((prevPage) => {
        const nextPage =
          prevPage.nextPage + size < prevPage.totalPage!
            ? prevPage.nextPage + size
            : prevPage.totalPage!;

        return {
          ...prevPage,
          startPage: prevPage.nextPage,
          nextPage: nextPage,
        };
      });
    }
    if (startCount != pageCount) {
      setStartCount((prevCount) => prevCount + 1);
    }
  };

  const handlePrevPage = () => {
    const modulus = page.nextPage % size;
    if (modulus != 0) {
      setPage((prevPage) => {
        return {
          ...prevPage,
          startPage: page.startPage - size,
          nextPage: page.nextPage - modulus,
        };
      });
    } else if (page.startPage == 0 || page.startPage - size < 0) {
    } else {
      setPage((prevPage) => {
        return {
          ...prevPage,
          startPage: page.startPage - size,
          nextPage: page.startPage,
        };
      });
    }
    if (startCount != 0) {
      setStartCount((prevCount) =>
        prevCount - 1 != 0 && page.totalPage != 0 ? prevCount - 1 : 1
      );
    }
  };

  useEffect(() => {
    setPageWords([]);
    if (page.nextPage > size) {
      words.map((word, index) => {
        if (index + 1 >= page.startPage && index + 1 <= page.nextPage) {
          setPageWords((prevWords) => [...prevWords, word]);
        }
      });
      setPageWords((prevWords) => prevWords.slice(1));
    }
    if (page.startPage == 0) {
      words.map((word, index) => {
        if (index + 1 >= page.startPage && index + 1 <= page.nextPage) {
          setPageWords((prevWords) => [...prevWords, word]);
        }
      });
    }
  }, [page.startPage, page.nextPage, words]);

  useEffect(() => {
    if (pageWords.length == 0) {
      words.map((word, index) => {
        if (index + 1 >= page.startPage && index + 1 <= page.nextPage) {
          setPageWords((prevWords) => [...prevWords, word]);
        }
      });
    }
  }, [page, page.startPage]);

  return (
    <>
      <div className="container w-full md:mx-auto md:mt-[60px] py-[30px] px-3">
        <h1 className="font-courier text-xl text-center">
          {startCount}/{pageCount}
        </h1>
        <div className="overflow-x-auto bg-white border-2 border-black md:mx-[70px]">
          <table className="min-w-full table-auto text-sm text-gray-700 text-center">
            <thead className="bg-blue-300 text-black text-[16px] font-bold">
              <tr>
                <th className="border-r border-b border-black px-2 py-3 font-medium ">
                  KANJI
                </th>
                <th className="border-r border-b border-black px-2 py-3 font-medium ">
                  HIRAKANA
                </th>
                <th className="border-r border-b border-black px-2 py-3 font-medium ">
                  HIRAKANA <br />
                  (KUN)
                </th>
                <th className="border-b border-black px-2 py-3 font-medium ">
                  DEFINITION
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-yellow-200 text-[16px]">
              {pageWords.map((word) => (
                <tr className="hover:bg-gray-50" key={word.id!}>
                  <td className="border-r border-b border-black px-2 py-4 max-w-[100px]  break-words">
                    {word.isParent
                      ? word.firstKanji
                      : word.firstKanji +
                        "" +
                        word.secondKanji +
                        "" +
                        word.thirdKanji}
                  </td>
                  <td className="border-r border-b border-black px-2 py-4 max-w-[50px] break-words">
                    {word.hirakana}
                  </td>
                  <td className="border-r border-b border-black px-2 py-4 max-w-[10px] break-words">
                    {word.kunHirakana}
                  </td>
                  <td className="border-b border-black px-2 py-4 max-w-[50px] break-words">
                    {word.my}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex items-center justify-center mb-9">
        <a
          href="#"
          onClick={handlePrevPage}
          className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </a>
        <a
          href="#"
          onClick={handleNextPage}
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </>
  );
};

export default KanjiPage;
