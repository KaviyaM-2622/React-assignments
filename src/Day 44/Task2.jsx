function Premium() {
  const isPremiumUser = true;

  return (
    <div>
      {isPremiumUser && <button>Premium Access</button>}
    </div>
  );
}

export default Premium;
