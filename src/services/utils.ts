import moment from 'moment';

import { ToastOptions } from 'react-toastify';

export const toastErrorProps: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const formatDate = (date: string) => {
  return moment(date).format('HH:mm');
};
