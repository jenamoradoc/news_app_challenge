import './styles/index.css';

const Spinner = () => {
  return (
    <div className='spinner-container'>
      <div className='lds-roller'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h4>Loading...</h4>
    </div>
  );
};

export default Spinner;
