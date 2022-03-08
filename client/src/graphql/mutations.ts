export const AddTodoMutation: string = `
    mutation($text: String!) {
        addTodo(text: $text) {
            id
        }
    }
`;

export const SetDoneMutation: string = `
    mutation($id: ID!, $done: Boolean!) {
        setDone(id: $id, done: $done) {
            id
        }
    }
`;
