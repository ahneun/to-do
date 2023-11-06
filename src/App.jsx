import Header from "./components/Header";
import Input from "./components/Input";
import Card from "./components/Card";
import { useState } from "react";
import "App.css";

function App() {
  const [todoList, setTodoList] = useState([
    {
      title: "리액트 공부하기 1",
      content: "리액트 기초를 공부해봅시다.",
      id: 0,
      type: "working",
    },
    {
      title: "리액트 공부하기 2",
      content: "리액트 기초를 공부해봅시다.",
      id: 1,
      type: "done",
    },
  ]);

  const handleDeleteClick = (id) => {
    const list = todoList.filter((n) => {
      return n.id !== id;
    });
    setTodoList(list);
  };

  const handleToggleClick = (id) => {
    const list = [...todoList];
    const targetIndex = list.findIndex((target) => {
      return target.id === id;
    });
    list[targetIndex].type === 'working'?
      (list[targetIndex].type = 'done'):(list[targetIndex].type = 'working')
    setTodoList(list);
  };

  return (
    <>
      <Header></Header>
      <section>
        <Input todoList={todoList} setTodoList={setTodoList}></Input>
      </section>
      <section>
        <Card
          todoList={todoList}
          onDelete={handleDeleteClick}
          onToggle={handleToggleClick}
        ></Card>
      </section>
    </>
  );
}

export default App;
