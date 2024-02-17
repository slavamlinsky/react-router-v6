import { useState } from "react";

const BlogFilter = ({ postQuery, latest, setSearchParams }) => {
  const [search, setSearch] = useState(postQuery);
  const [checked, setChecked] = useState(latest);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;

    const isLatest = form.latest.checked;

    const params = {};

    if (query.length) params.post = query;
    if (isLatest) params.latest = true;

    setSearchParams(params);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input type="search" name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
      <label style={{ padding: "0 1em" }} htmlFor="latest">
        <input
          id="latest"
          name="latest"
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        New posts only
      </label>
      <input type="submit" value="Search" />
    </form>
  );
};

export default BlogFilter;
