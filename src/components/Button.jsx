export default function Button({ onClick, children }) {
  return (
    <button
      style={{ marginBottom: 20 }}
      onClick={e => onClick()}
    >
      {children}
    </button>
  );
}
