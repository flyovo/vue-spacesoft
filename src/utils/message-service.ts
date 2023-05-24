import { notification, Button } from 'ant-design-vue';

export const MessageService = {
  notiSuccess: (msg: string) =>
    notification.success({ message: 'Success', description: msg }),
  notiWarning: (msg: string) =>
    notification.warning({ message: 'Warning', description: msg }),
  notiInfo: (msg: string) =>
    notification.info({ message: 'Info', description: msg }),
  notiError: (msg: string) =>
    notification.error({ message: 'Error', description: msg })
  //   MsgBoxConfirm: (msg: string[]) =>
  //     notification.open({
  //       message: 'Error',
  //       description: msg,
  //       btn: h(
  //         Button,
  //         {
  //           type: 'primary',
  //           size: 'small',
  //           onClick: () => notification.close(key)
  //         },
  //         'Confirm'
  //       ),
  //       key,
  //       onClose: close
  //     })
};
