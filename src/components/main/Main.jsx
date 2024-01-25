import React, { useState } from "react";
import { user } from "../../assets/icons/index";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./Main.css";

const Main = () => {
  const [data, setData] = useState([
    {
      name: "Новые",
      num: 3,
      card: [
        {
          id: "1",
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          holati: "В приоритете",
          users: 3,
          docs: 255,
          user_job: "Рекруитер",
          user_name: "Алексей Щербаков",
          avatar: user,
        },
        {
          id: "2",
          title: "Маркетолог",
          desc: "Отдел маркетинга",
          holati: "В приоритете",
          users: 2,
          docs: 83,
          user_job: "Рекруитер",
          user_name: "Floyd Miles ",
          avatar: user,
        },
        {
          id: "3",
          title: "Менеджер по продажам",
          desc: "Отдел продаж",
          holati: "В приоритете",
          users: 3,
          docs: 205,
          user_job: "Рекруитер",
          user_name: "Theresa Webb",
          avatar: user,
        },
      ],
    },
    {
      name: "Текущие",
      num: 4,
      card: [
        {
          id: "4",
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          holati: "В приоритете",
          users: 3,
          docs: 255,
          user_job: "Рекруитер",
          user_name: "Алексей Щербаков",
          avatar: user,
        },
        {
          id: "5",
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          holati: "В приоритете",
          users: 3,
          docs: 255,
          user_job: "Рекруитер",
          user_name: "Алексей Щербаков",
          avatar: user,
        },
        {
          id: "6",
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          holati: "В приоритете",
          users: 3,
          docs: 255,
          user_job: "Рекруитер",
          user_name: "Алексей Щербаков",
          avatar: user,
        },
        {
          id: "7",
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          holati: "В приоритете",
          users: 3,
          docs: 255,
          user_job: "Рекруитер",
          user_name: "Алексей Щербаков",
          avatar: user,
        },
      ],
    },
    {
      name: "Закрытые",
      num: 0,
      card: [],
    },
    {
      name: "Архив",
      num: 8,
      card: [
        {
          id: "8",
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          holati: "В приоритете",
          users: 3,
          docs: 255,
          user_job: "Рекруитер",
          user_name: "Алексей Щербаков",
          avatar: user,
        },
        {
          id: "9",
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          holati: "В приоритете",
          users: 3,
          docs: 255,
          user_job: "Рекруитер",
          user_name: "Алексей Щербаков",
          avatar: user,
        },
        {
          id: "10",
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          holati: "В приоритете",
          users: 3,
          docs: 255,
          user_job: "Рекруитер",
          user_name: "Алексей Щербаков",
          avatar: user,
        },
        {
          id: "11",
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          holati: "В приоритете",
          users: 3,
          docs: 255,
          user_job: "Рекруитер",
          user_name: "Алексей Щербаков",
          avatar: user,
        },
        {
          id: "12",
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          holati: "В приоритете",
          users: 3,
          docs: 255,
          user_job: "Рекруитер",
          user_name: "Алексей Щербаков",
          avatar: user,
        },
        {
          id: "13",
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          holati: "В приоритете",
          users: 3,
          docs: 255,
          user_job: "Рекруитер",
          user_name: "Алексей Щербаков",
          avatar: user,
        },
        {
          id: "14",
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          holati: "В приоритете",
          users: 3,
          docs: 255,
          user_job: "Рекруитер",
          user_name: "Алексей Щербаков",
          avatar: user,
        },
        {
          id: "15",
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          holati: "В приоритете",
          users: 3,
          docs: 255,
          user_job: "Рекруитер",
          user_name: "Алексей Щербаков",
          avatar: user,
        },
      ],
    },
    {
      name: "Удаленные ",
      num: 8,
      card: [
        {
          id: "16",
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          holati: "В приоритете",
          users: 3,
          docs: 255,
          user_job: "Рекруитер",
          user_name: "Алексей Щербаков",
          avatar: user,
        },
        {
          id: "17",
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          holati: "В приоритете",
          users: 3,
          docs: 255,
          user_job: "Рекруитер",
          user_name: "Алексей Щербаков",
          avatar: user,
        },
        {
          id: "18",
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          holati: "В приоритете",
          users: 3,
          docs: 255,
          user_job: "Рекруитер",
          user_name: "Алексей Щербаков",
          avatar: user,
        },
        {
          id: "19",
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          holati: "В приоритете",
          users: 3,
          docs: 255,
          user_job: "Рекруитер",
          user_name: "Алексей Щербаков",
          avatar: user,
        },
        {
          id: "20",
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          holati: "В приоритете",
          users: 3,
          docs: 255,
          user_job: "Рекруитер",
          user_name: "Алексей Щербаков",
          avatar: user,
        },
        {
          id: "21",
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          holati: "В приоритете",
          users: 3,
          docs: 255,
          user_job: "Рекруитер",
          user_name: "Алексей Щербаков",
          avatar: user,
        },
        {
          id: "22",
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          holati: "В приоритете",
          users: 3,
          docs: 255,
          user_job: "Рекруитер",
          user_name: "Алексей Щербаков",
          avatar: user,
        },
        {
          id: "23",
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          holati: "В приоритете",
          users: 3,
          docs: 255,
          user_job: "Рекруитер",
          user_name: "Алексей Щербаков",
          avatar: user,
        },
      ],
    },
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;
    const sourceListIndex = Number(source.droppableId);
    const destinationListIndex = Number(destination.droppableId);
    const draggedCardIndex = source.index;

    if (
      !data[sourceListIndex] ||
      !data[destinationListIndex] ||
      !data[sourceListIndex].card ||
      !data[destinationListIndex].card
    ) {
      return;
    }

    const draggedCard = data[sourceListIndex].card[draggedCardIndex];
    data[sourceListIndex].card.splice(draggedCardIndex, 1);
    data[destinationListIndex].card.splice(destination.index, 0, draggedCard);

    setData([...data]);
  };

  let num = 0;
  data.forEach((item) => {
    num += item.card.length;
  });

  return (
    <main>
      <div className='wrapper'>
        <div className='main-start'></div>
        <div className='main-end'>
          <h1 className='main-end__title'>
            Заявки • <span className='main-end-zayavki-num'>{num}</span>
          </h1>

          <div className='main-end__wrapper'>
            {data.map((item, index) => (
              <ul className='main-end__new-list' key={index}>
                <DragDropContext onDragEnd={handleDragEnd}>
                  <div className='new-list__card'>
                    <h3 className='main-end__new-list-title'>
                      {`${item.name} • ${item.num}`}
                    </h3>
                  </div>
                  <Droppable droppableId='ROOT' type='group'>
                    {(provided, snapshot) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={`new-list__card-body ${
                          item.card.length === 0
                            ? "main-end__new-list__bow"
                            : ""
                        }`}>
                        {item.card.map((item, index) => (
                          <Draggable
                            draggableId={item.id}
                            key={item.id}
                            index={index}>
                            {(provided) => (
                              <li
                                className='main-end__new-item'
                                {...provided.dragHandleProps}
                                {...provided.draggableProps}
                                ref={provided.innerRef}>
                                <div className='new-item-wrapper'>
                                  <h3 className='new-item__title'>
                                    {item.title}
                                  </h3>
                                  <p className='new-item__desc'>{item.desc}</p>
                                  <div className='new-item__res'>
                                    <span className='new-item__badge'>
                                      {item.holati}
                                    </span>
                                    <span className='new-item__users'>
                                      {item.users}
                                    </span>
                                    <span className='new-item__docs'>
                                      {item.docs}
                                    </span>
                                  </div>
                                  <div className='new-item__user'>
                                    <img src={item.avatar} alt='User' />
                                    <div className='new-item__user-text'>
                                      <p className='new-item__user-kasbi'>
                                        {item.user_job}
                                      </p>
                                      <p className='new-item__user-name'>
                                        {item.user_name}
                                      </p>
                                    </div>
                                  </div>
                                  {provided.placeholder}
                                </div>
                              </li>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
