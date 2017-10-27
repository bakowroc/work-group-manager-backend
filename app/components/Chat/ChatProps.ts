import { TaskState } from './../../data/task/TaskState';

export interface ChatProps {
  chatClassName?: string;
  inputClassName?: string;
  titleClassName?: string;
  historyClassName?: string;
  messageAuthorClassName?: string;
  messageTextClassName?: string;
  chatRoomId: string;
  title: string;
}
