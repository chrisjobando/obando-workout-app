export const TodosSubscription: string = `
    subscription TodosSub {
      todos {
        id
        done
        text
      }
    }
  `;
