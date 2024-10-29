import React, { useEffect, useState } from 'react';
import buildConfigs from '../data/buildConfigs';
import './BuildShowcasePage.css';
import { useNavigate } from 'react-router-dom';

function BuildShowcasePage() {
  const [category, setCategory] = useState('全部');
  const [tab, setTab] = useState('热门');
  const [page, setPage] = useState(1);
  const [inputPage, setInputPage] = useState('');
  const itemsPerPage = 8;
  const navigate = useNavigate();

  const categories = ['全部', '游戏', '办公', '设计', '高端', '性价比'];
  const tabs = ['热门', '最新', '价格'];

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setPage(1);
  };

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  const filteredBuilds = buildConfigs.filter(
    (build) => category === '全部' || build.category === category
  );

  const sortedBuilds = filteredBuilds.sort((a, b) => {
    switch (tab) {
      case '热门':
        return b.recommendedCount - a.recommendedCount;
      case '最新':
        return new Date(b.date) - new Date(a.date);
      case '价格':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  const paginatedBuilds = sortedBuilds.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleInputChange = (e) => {
    setInputPage(e.target.value);
  };

  const handleJumpToPage = () => {
    const newPage = Number(inputPage);
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const totalPages = Math.ceil(filteredBuilds.length / itemsPerPage);

  return (
    <div className="build-showcase-page">
      {/* Sidebar for categories */}
      <div className="sidebar">
        <h3>类别</h3>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-button ${category === cat ? 'active' : ''}`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main content area */}
      <div className="content-area">
        <div className="tabs">
          {tabs.map((t) => (
            <button
              key={t}
              className={`tab-button ${tab === t ? 'active-tab' : ''}`}
              onClick={() => handleTabChange(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid">
          {paginatedBuilds.map((build) => (
            <div
              key={build.id}
              className="build-card"
              onClick={() => navigate(`/build/${build.id}`)}
            >
              <img src={build.image} alt={build.name} />
              <div className="build-card-content">
                <h3>{build.name}</h3>
                <p>发布日期：{build.date}</p>
                <p>推荐人数：{build.recommendedCount}</p>
                <p>价格：¥{build.price}</p>
                <p>评分：{build.rating} / 5</p>
                <button className="details-link">查看详情</button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="pagination">
          <button
            className="pagination-button"
            onClick={() => handlePageChange(1)}
            disabled={page === 1}
          >
            首页
          </button>
          <button
            className="pagination-button"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            上页
          </button>
          <span className="pagination-info">
            {page} / {totalPages}
          </span>
          <button
            className="pagination-button"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            下页
          </button>
          <button
            className="pagination-button"
            onClick={() => handlePageChange(totalPages)}
            disabled={page === totalPages}
          >
            尾页
          </button>
          <input
            type="number"
            min="1"
            max={totalPages}
            value={inputPage}
            onChange={handleInputChange}
          />
          <button className="pagination-button" onClick={handleJumpToPage}>
            跳转
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuildShowcasePage;
