export default function Button({ onClick, children }) {
  return (
    <div className='btn-cont'>
      <button
        className='btn'
        onClick={() => onClick()}
      >
        {children}
      </button>
    </div>
  );
}
