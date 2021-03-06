export interface SnackbarStateProps {
  isOpen: boolean;
  message: SnackbarMessage;
}

export interface SnackbarDispatchProps {
  toggleSnackbar: (message: SnackbarMessage) => void;
}

export enum SnackbarMessage {
  TASK_ADDED_SUCCESS = 'Task was added successfully',
  BOARD_ADDED_SUCCESS = 'Board was added successfully',
  TASK_ADDED_FAILURE = 'Sorry. There was a problem with adding your task',
  TASK_DELETE_SUCCESS = 'Task was deleted successfully',
  BOARD_DELETE_SUCCESS = 'Board was deleted successfully'
}
