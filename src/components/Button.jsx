import '@/styles/Button.css'
export default function Button({ action, addLine, deleteLine }) {
const buttonStyle = `button ${action === 'delete' ? 'delete-button' : ''}`;

  return (
    <button
      className={buttonStyle}
      type="button"
      onClick={action === 'add' ? addLine : deleteLine}
    >
      {action === 'add' ? '+' : '-'}
    </button>
  );
}
