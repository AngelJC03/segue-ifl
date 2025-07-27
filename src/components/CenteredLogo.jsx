import segueLogo from '../assets/images/logo-photos/temp-segue-logo.png'; // adjust path if needed

function CenteredLogo() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px', // or any height you want
        width: 'auto',
      }}
    >
      <img
        src={segueLogo}
        alt="Segue Logo"
        style={{
          height: '175px', // adjust size as needed
          width: 'auto',
        }}
      />
    </div>
  );
}

export default CenteredLogo;