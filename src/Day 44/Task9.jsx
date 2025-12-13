function NotificationBadge() {
  const count = 2; 

  return (
    <div>
      {count > 0 && <span>{count}</span>}
    </div>
  );
}

export default NotificationBadge;
