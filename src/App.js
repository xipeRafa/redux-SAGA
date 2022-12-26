import store from './store'
import { Provider } from "react-redux"

import MyForm from "./components/MyForm"
import MyTable from "./components/MyTable"




const App = () => {
    return (
        <div>
            <Provider store={store}>
                    <MyForm />
                    <MyTable />
            </Provider>
        </div>
    )
}

export default App