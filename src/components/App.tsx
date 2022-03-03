import { Provider } from "react-redux";
import { store } from "../state";
import RepoList from "../components/RepoList";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search fir repo</h1>
        <RepoList />
      </div>
    </Provider>
  );
}
