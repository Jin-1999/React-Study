
import ReactDOM from "react-dom";
const Modal = (props) => {
    // 获取backdrop的根元素
    const backdropRoot = document.getElementById('backdrop-root');
    return ReactDOM.createPortal(<div className="backdrop">
        {props.children}
    </div>, backdropRoot);
}

export default Modal