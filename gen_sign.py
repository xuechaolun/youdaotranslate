# 2024/2/26 13:22
import hashlib
import time


def gen_sign(mysticTime):
    client = 'fanyideskweb'
    product = 'webfanyi'
    key = 'fsdsogkndfokasodnaso'
    s = f'client={client}&mysticTime={mysticTime}&product={product}&key={key}'
    return hashlib.md5(s.encode('utf-8')).hexdigest()


if __name__ == '__main__':
    print(gen_sign(int(time.time() * 1000)))
