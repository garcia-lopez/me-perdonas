import mapacheLove from '../assets/mapache_love.jpg';

const HomePage = () => { 
    return (
        <div className='tqmArea'>
          <h1 className='text'>Te quiero mucho</h1>
          <img 
            id="mapache" 
            src={mapacheLove} 
            alt="mapache" 
          />
        </div>
    );
};

export default HomePage;