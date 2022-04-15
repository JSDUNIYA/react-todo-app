import { render, screen } from "@testing-library/react";
import TodoList  from "./TodoList";

test("Verify todlist component", () => {
    render(<TodoList />);
    let todoElement = screen.getByText('TODO LIST:')   
    expect(todoElement).toBeInTheDocument();
});

test("Verify 3 todolist loaded", () => {
    render(<TodoList />);
    expect(screen.getByText("My third task")).toBeInTheDocument();
})