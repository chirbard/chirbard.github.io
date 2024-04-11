import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import background from './assets/bg.png';

function App() {
  return (
    <div
      className='min-h-screen flex justify-center items-center background-pattern, bg-gray-900'
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className='flex-col flex items-center justify-center rounded-xl p-8
      bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-600'
      >
        <div className='flex flex-row'>
          <img
            src='https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif'
            className='object-scale-down h-8'
          />
          <h1 className='text-3xl font-medium text-white'>Hi</h1>
        </div>
        <h2 className='text-xl font-medium text-white '>
          This site uses Vite + <FontAwesomeIcon icon={faReact} /> React +
          Typescript + Tailwind CSS 3
        </h2>
      </div>
    </div>
  );
}

export default App;
