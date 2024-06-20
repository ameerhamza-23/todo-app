export const getTasksFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      const tasks = localStorage.getItem('tasks');
      return tasks ? JSON.parse(tasks) : [];
    }
    return [];
  };
  
  export const saveTasksToLocalStorage = (tasks: string[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  };