import { createClient } from "redis";
import { USERNAME, PASSWORD } from "./secret";

(async () => {
    const client = createClient({
        username: USERNAME,
        password: PASSWORD,
        socket: {
            host: 'redis-14253.c114.us-east-1-4.ec2.redns.redis-cloud.com',
            port: 14253
        },
    });
    // client.on('error', err => console.log('Redis Client Error', err));
    
    await client.connect();
    await client.set('foo', 'bar');
    const result = await client.get('foo');
    console.log(result);  // >>> bar
    client.quit();
    // client.destroy();
})();