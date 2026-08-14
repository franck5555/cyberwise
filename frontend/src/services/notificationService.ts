const notificationService = {
  scheduleNotification: async (_title: string, _body: string, _data?: object) => {
    return undefined;
  },

  getNotificationToken: async () => {
    return 'demo-token';
  },

  listenForNotifications: (_callback: (notification: unknown) => void) => {
    return () => undefined;
  },
};

export default notificationService;