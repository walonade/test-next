import {ComponentProps, Fragment} from "react"
import Header from "../../components/Header"

const WithHeader = (props : ComponentProps<any>) => (
    <Fragment>
        <Header/>
        {props.children}
    </Fragment>
)
export default WithHeader