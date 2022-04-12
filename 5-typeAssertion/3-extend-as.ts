
class ApiError extends Error {
    code: number = 0
}

class HttpError extends Error {
    statusCode: number = 200
}

function isApiError(error: Error) {
    if(typeof (error as ApiError).code === 'number') {
        return true
    }
    return false
}

const ae = new ApiError()
const he = new HttpError()



console.log(isApiError(he));

// 两个类都继承自抽象的父类，需要分辨
// 这里用instanceof应该更好，但是有时候不是类，是interface

