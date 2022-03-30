import ajax from "./ajax";

export default function loginApi(aipData) {
    return ajax('/login', aipData, 'post','登录成功')
}