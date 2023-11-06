import React from "react";

function Card({ todoList, onDelete, onToggle }) {
  const workingList = todoList.filter((n) => {
    return n.type === "working";
  });
  const doneList = todoList.filter((n) => {
    return n.type === "done";
  });

  return (
    <div className="container">
      <h1 className="card-list-header">Working...🔥</h1> 
      <div className="card-list working">
        <ul>
          {workingList.map((n) => {
            return (
              <li key={`card-${n.id}`} >
                <div className="card working" id={`card-${n.id}`}>
                  <h3 className="card-title">{n.title}</h3>
                  <h4 className="card-content">{n.content}</h4>
                  <div className="card-btns">
                    <button
                      className="card-btn btn-delete"
                      onClick={() => {
                        onDelete(n.id);
                      }}
                    >
                      삭제하기
                    </button>
                    <button
                      className="card-btn btn-done"
                      onClick={() => {
                        onToggle(n.id);
                      }}
                    >
                      완료
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <h1 className="card-list-header">Done...🎉</h1>
      <div className="card-list done">
        <ul>
          {doneList.map((n) => {
            return (
              <li key={`card-${n.id}`} >
                <div className="card done" id={`card-${n.id}`}>
                  <h3 className="card-title">{n.title}</h3>
                  <h4 className="card-content">{n.content}</h4>
                  <div className="card-btns">
                    <button
                      className="card-btn btn-delete"
                      onClick={() => {
                        onDelete(n.id);
                      }}
                    >
                      삭제하기
                    </button>
                    <button
                      className="card-btn btn-cancel"
                      onClick={() => {
                        onToggle(n.id);
                      }}
                    >
                      취소
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Card;