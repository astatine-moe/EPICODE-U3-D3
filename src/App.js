import "./App.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
import books from "./horror.json";

function App() {
    return (
        <div className="container">
            <WarningSign text="Warning" />
            <MyBadge variant="danger" text="Danger badge" />
            <BookList books={books} />
        </div>
    );
}

export default App;
