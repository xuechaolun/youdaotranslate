const crypto = require('crypto');

function y(e) {
    return crypto.createHash("md5").update(e).digest()
}

function decry(t) {
    o = 'ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl'
    n = 'ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4'

    const a = Buffer.alloc(16, y(o))
        , i = Buffer.alloc(16, y(n))
        , r = crypto.createDecipheriv("aes-128-cbc", a, i);
    let s = r.update(t, "base64", "utf-8");
    return s += r.final("utf-8"),
        s
}

// t = 'Z21kD9ZK1ke6ugku2ccWu4n6eLnvoDT0YgGi0y3g-v0B9sYqg8L9D6UERNozYOHq_NL1ndYeJuH3giVcJDpIHY2e0_yOZmT6Zrgp_a5Z91RaaFfo0ZreV0GLGbTnVFvOV2PJMrS7ixv53Y-_Hh83BlPxuRdvYjigB3zgbKkVS04LConAGOA4jDHPhyZDgw4N1poiM0IoN14gVzkoISsmTpo64ra-k6j3KJkzJuqBlooA9bbzvbMV94s2QtQ5uAhHdDbdyN6o4hYz0uXgzWiHj0AJQQ456FM3FT7MlYv8Grz6Mk6Y5_8Bm1J8pfAU3xNHlhXKUC0UfAeYpR7W3Dr4R2Sjrw-1XCl-TmDmZAFxzOYsGA7zY9psoQajnOWST1dHsLpeyxlJXE1TnpANny5Vnh5wfa7QJ88thXnhXN04aPxOyxpapfhxOadrMAeGtG1mH5SvtmsCErvEqDDF8QJaBCipPadcFy4rmANiY9TbGUIU7esNXJwf5P0sMAwPcCfORSnTrm9Laz9sAbGKg58UDEcPH4A9C6Qfkzcqfy0obI89hlDgjlyzfKg4Bi5g0t3rlBaKSjbKQov67bb3gSsAN0r9AZFOJlWF33gtUaozRRflmx0h3xBl3twZca3aGVh0'
//
// console.log(decry(t));