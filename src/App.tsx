import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <div className='flex flex-row'>
        <img
          src='https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif'
          className='object-scale-down h-8'
        />
        <h1 className='text-3xl font-medium'>Hi</h1>
      </div>
      <h2 className='text-xl font-medium'>
        This site uses Vite + <FontAwesomeIcon icon={faReact} /> React +
        Typescript + Tailwind CSS 3
      </h2>
    </div>
  );
}

export default App;
