import "./App.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
import books from "./horror.json";

function App() {
    return (
        <div className="container-fluid">
            <WarningSign text="Warning!!!" />
            <MyBadge variant="danger" text="Danger badge" />
            <MyBadge variant="success" text="Success badge" />
            <MyBadge variant="warning" text="Warning badge" />
            <BookList books={books} />
        </div>
    );
}

export default App;
