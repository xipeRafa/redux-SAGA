import Grid from "@mui/material/Grid"
import { Provider } from "react-redux"
import MyForm from "./components/MyForm"
import MyTable from "./components/MyTable"
import store from './store'



const App = () => {
    return (
        <div style={{ margin: '100px' }}>
            <Provider store={store}>
              
                        <MyForm />
                   
                        <MyTable />
                   
            </Provider>
        </div>
    );
};
export default App;