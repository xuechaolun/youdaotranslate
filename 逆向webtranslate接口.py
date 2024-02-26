# 2024/2/26 13:20
import json
import time

import execjs
import requests

import gen_sign


def translate(word):
    headers = {
        "Referer": "https://fanyi.youdao.com/",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    }
    cookies = {
        "OUTFOX_SEARCH_USER_ID": "1566049255@115.17.134.5"
    }
    url = "https://dict.youdao.com/webtranslate"
    ts = int(time.time() * 1000)
    data = {
        "i": "默认值",
        "from": "auto",
        "to": "",
        "dictResult": "true",
        "keyid": "webfanyi",
        "sign": gen_sign.gen_sign(ts),
        "client": "fanyideskweb",
        "product": "webfanyi",
        "appVersion": "1.0.0",
        "vendor": "web",
        "pointParam": "client,mysticTime,product",
        "mysticTime": ts,
        "keyfrom": "fanyi.web",
        "mid": "1",
        "screen": "1",
        "model": "1",
        "network": "wifi",
        "abtest": "0",
        "yduuid": "abcdefg"
    }
    data.update({'i': word})
    # 得到密文
    response = requests.post(url, headers=headers, cookies=cookies, data=data)
    # print(response.text)
    # print(response)

    # 解密 response.text
    js_code = execjs.compile(open('decrypto.js', 'r', encoding='utf-8').read())
    result = js_code.call('decry', response.text)
    dict_res = json.loads(result)
    # print(dict_res)

    print('src:', dict_res['translateResult'][0][0]['src'])
    print('tgt:', dict_res['translateResult'][0][0]['tgt'])


if __name__ == '__main__':
    translate('大数据工程师')
