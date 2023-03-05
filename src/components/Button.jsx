export default function Button({ onClick, children }) {
  return (
    <button
      className='btn'
      onClick={e => onClick()}
    >
      {children}
    </button>
  );
}
