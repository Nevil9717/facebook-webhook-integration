import { useState, useEffect } from "react";
import axios from "axios";

const PagesSelection = ({
  userId,
  accessToken,
  setPageId,
  setPageAccessToken,
}) => {
  console.log(
    "🚀 ~ file: PagesSelection.jsx:5 ~ PagesSelection ~ PageAccessToken:",
    accessToken
  );
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const { data } = await axios.post("/api/pages", {
          userId,
          accessToken,
        });
        console.log(
          "🚀 ~ file: PagesSelection.jsx:14 ~ fetchPages ~ data:",
          data
        );
        setPages(data.pages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPages();
  }, [userId, accessToken]);

  const handlePageSelect = (pageId, access_token) => {
    console.log(
      "🚀 ~ file: PagesSelection.jsx:25 ~ handlePageSelect ~ pageId:",
      pageId
    );
    setPageId(pageId);
    setPageAccessToken(access_token);
  };

  return (
    <div>
      <h1>Select a Page</h1>
      <ul className="px-1">
        {console.log(
          "🚀 ~ file: PagesSelection.jsx:50 ~ PagesSelection ~ pages:",
          pages
        )}
        {pages.map((page) => (
          <li key={page.id}>
            <button
              onClick={() => handlePageSelect(page.id, page.access_token)}
            >
              {page.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PagesSelection;
