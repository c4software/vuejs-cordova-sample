export const nativeAlert = (message, title) => {
  if(navigator.notification) {
    navigator.notification.alert(message, () => {}, title, 'Ok');
  }else{
    alert(message);
  }
};
