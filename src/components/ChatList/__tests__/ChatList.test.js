import { render } from "@testing-library/react";
import { ChatList } from "../ChatList";
import { ChatListContainer } from "../ChatListContainer";

describe("Компонент ChatList", () => {
    it("Рендер контейнера ChatListContainer", () => {
        const addNewChat = () => { };
        const removeChat = () => { };
        const component = render(
            <ChatListContainer addChat={addNewChat} deleteChat={removeChat} />
        );

        const text = component.getAllByText("Add Chat");
        expect(text).toBeDefined();
    });

    it("Снапшот презентационного ChatList", () => {
        const handleSubmit = () => { };
        const deleteChat = () => { };
        const chats = [];
        const component = render(
            <ChatList chats={chats} handleSubmit={handleSubmit} deleteChat={deleteChat} />
        );

        expect(component).toMatchSnapshot();
    });
});