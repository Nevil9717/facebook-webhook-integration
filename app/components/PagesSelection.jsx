import { useState, useEffect } from "react";
import axios from "axios";

const PagesSelection = ({ userId, accessToken, setPageId }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const { data } = await axios.post("/api/pages", {
          userId,
          accessToken,
        });
        setPages(data.pages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPages();
  }, [userId, accessToken]);

  const handlePageSelect = (pageId) => {
    setPageId(pageId);
  };

  return (
    <div>
      <h1>Select a Page</h1>
      <ul>
        {pages.map((page) => (
          <li key={page.id}>
            <button onClick={() => handlePageSelect(page.id)}>
              {page.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PagesSelection;
