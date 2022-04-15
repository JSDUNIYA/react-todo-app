import {render, screen, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer';
import Todo from './todo'

let data = {
    id:1,
    name: "My first task",
    done: true,
};

let data2 = {
    id:1,
    name: "My first task",
    done: false,
};


afterEach(()=>{
    cleanup();
})
test('Render todo', () => {
    render(<Todo todoData={data}/>)
    const todoElement = screen.getByTestId('data-1');

    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('My first task');
    expect(todoElement).not.toContainHTML('<strike>')
})

test('match Snapshot', () =>{
    const tree = renderer.create(<Todo todoData={data}/>).toJSON();
    expect(tree).toMatchSnapshot();

})