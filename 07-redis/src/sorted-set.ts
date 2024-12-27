// Add several values with their scores to a Sorted Set,
// then retrieve them all using ZSCAN.

import { createClient } from 'redis';
import { USERNAME, PASSWORD } from './secret';

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
    
    await client.zAdd('mysortedset', [
        {
            score: 127,
            value: 'Ninety Nine 4'
        },
        {
            score: 99,
            value: 'Ninety Nine'
        },
        {
            score: 71,
            value: 'One Blah'
        },
        {
            score: 101,
            value: 'One Hundred and OneTy'
        },
        {
            score: 124,
            value: 'One Hundred and One'
        },
        {
            score: 101,
            value: 'One Hundred and OneTy'
        }
    ]);
    
    // Get all of the values/scores from the sorted set using
    // the scan approach:
    // https://redis.io/commands/zscan
    for await (const memberWithScore of client.zScanIterator('mysortedset')) {
         console.log(memberWithScore);
    }
    
    client.quit();
})();

interface Red {
    color: string | number;
}

const o = {
    color: "blah",
} satisfies Red;