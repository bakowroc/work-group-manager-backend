import { UserState } from './../../../data/user/UserState';
import { TaskProps } from './Task/TaskProps';

export interface BoardProps {
  _id: any;
  tasks: Array<TaskProps>;
  name: string;
  icon?: string;
  slug: any;
}

export interface BoardDispatchProps {
  updateBoardAction: (toUpdateObject: any) => any;
  updateTaskAction: (toUpdateObject: any) => void;
  toggleAddTaskForm: (board?: any) => void;
  toggleTaskDetails: (task?: any) => void;
}

export interface BoardStateProps {
  me: UserState;
}
