import axios from 'axios'
import { message } from 'antd'

export default function ajax(url, aipData = {}, type = 'get', successMsg = '成功') {

    let params = undefined;
    let data = undefined;
    if (type === 'get') {
        params = aipData
    } else {
        data = aipData
    }

    let axiosRequestConfig = {
        method: type,
        params,
        url,
        data
    }
    return new Promise((resolve, reject) => {
        axios(axiosRequestConfig).then(res => {
            let { data: { status, msg } } = res
            if (status === 1) {
                message.error(msg)
            } else {
                resolve(res.data)
                message.success(msg || successMsg)
            }
        }).catch(error => {
            message.error(error)
        })
    });
};