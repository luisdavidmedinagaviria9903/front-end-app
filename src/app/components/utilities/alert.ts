import Swal from 'sweetalert2';


const TITLE_ERROR = 'Error';
const TITLE_INFO = 'Important';
const TITLE_OK = 'Ok';
const TITLE_SUCCESS = 'SUCCESS';


const showSuccessPopUp = (title: string, message: string) => {
    return Swal.fire({
        icon: "success",
        title: title,
        text: message,
    });
}
const showErrorPopUp = (title: string, message: string) => {
    return Swal.fire({
        icon: "error",
        title: title,
        text: message,
    });
}
export {
    TITLE_ERROR,
    TITLE_SUCCESS,
    showSuccessPopUp,
    showErrorPopUp

}
