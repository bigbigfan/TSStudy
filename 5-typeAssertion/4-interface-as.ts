interface ApiError extends Error {
    code: number
}
interface HttpError extends Error {
    statusCode: number
}


function isApiError(error: Error) {
    if(typeof (error as ApiError).code === 'number') {
        return true
    }
    return false
}



const ae:ApiError = {
    code: 200,
    name: 'nme1',
    message: 'msg1'
} 

const he:HttpError = {
    statusCode: 404,
    name: 'nme2',
    message: 'msg2'
} 




console.log(isApiError(he));










export default 0