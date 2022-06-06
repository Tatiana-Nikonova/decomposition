import './App.css';
import NewsTab from "./components/NewsItem";
import Date from "./components/Date";
import Search from "./components/Search";
import Banner from "./components/Banner";
import Weather from "./components/Weather";
import Map from "./components/Map";
import TV from "./components/TV";
import Broadcasts from "./components/Broadсasts";

const testNews = "Новости";
const testSearchMenu = "Поиск";
const testTv = ['передача-1', 'передача-2', 'передача-3'];
const testBroadcasts = ['что-то'];

function App() {
  return (
      <div>
        <NewsTab
            tabs={['Сейчас в СМИ', 'в Германии', 'Рекомендуем']}
            newsList={testNews}
        />
        <br/><br/>
        <Date format={'YYYY MM DD'} />
        <br/><br/>
        <Search
            menu={testSearchMenu}
            description={'Найдется всё...'}
            btnText={'Найти'}
            keyboard={true}
        />
        <br/><br/>
        <Banner
            img={'ссылка на изображение'}
            link={'ссылка'}
        />
        <br/><br/>
        <Weather
            title={'Погода'}
            city={'Город, из которого надо показывать погоду'}
        />
        <br/><br/>
        <Map
            title={'Карта Германии'}
        />
        <br/><br/>
        <TV
            title={'Телепрограмма'}
            list={testTv}
            showIcon={true}
            countToShow={3}
        />
        <br/><br/>
        <Broadcasts
            title={'Эфир'}
            list={testBroadcasts}
            countToShow={3}
        />
      </div>
  );
}

export default App;