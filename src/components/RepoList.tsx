import { useState } from "react";
import { useAction } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepoList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepos } = useAction();

  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  console.log(data);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepos(term);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={term}
          onChange={(e) => {
            e.preventDefault();
            setTerm(e.target.value);
          }}
          type='text'
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading</h3>}
      {!error && !loading && data.map((d) => <li key={Math.random()}>{d}</li>)}
    </div>
  );
};

export default RepoList;
