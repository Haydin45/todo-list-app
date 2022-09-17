import "./App.css";
import AddTodo from "./components/add-todo/AddTodo";
import TodoList from "./components/todo-list/TodoList";
import TodoFooter from "./components/todo-footer/TodoFooter";
import { TodoProvider } from "./contexts/todo/TodoContext";
import Header from "./components/header/Header";
import { HeaderProvider } from "./contexts/header/HeaderContext";

function App() {
  return (
    <div className="App">
      <HeaderProvider>
        <Header />
      </HeaderProvider>

      <TodoProvider>
        <AddTodo />
        <TodoList />
        <TodoFooter />
      </TodoProvider>
    </div>
  );
}

export default App;
