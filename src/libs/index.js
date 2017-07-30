export default nativeAlert = (message, title) => {
  if(navigator.notification.alert) {
    navigator.notification.alert(
      message,
      () => {
      },
      title,
      'Ok'
    );
  }else{
    alert(message);
  }
};
