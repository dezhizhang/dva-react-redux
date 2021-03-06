import dva from 'dva';
import './index.css';
import { createBrowserHistory as createHistory } from 'history';

//初始化
const app = dva({
  history: createHistory()

});

// 2. Plugins
// app.use({});

// 3. Model
 app.model(require('./models/counter').default);
 app.model(require('./models/example').default);
 
// 4. Routerx
app.router(require('./router').default);

// 5. Start
app.start('#root');
