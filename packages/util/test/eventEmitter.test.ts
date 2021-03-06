import { EventEmitter } from '../src/eventEmitter';

describe('EventEmitter', () =>
{
    test('on', () =>
    {
        const eventEmitter = new EventEmitter<{
            hi: () => void,
            hello: () => void
        }>();
        let value = 0;
        let value1 = 0;

        eventEmitter.on('hi', () =>
        {
            value++;
        });

        eventEmitter.emit('hi');

        expect(value).toEqual(1);

        eventEmitter.on('hi', () =>
        {
            value++;
            value1++;
        });

        eventEmitter.emit('hi');

        expect(value).toEqual(3);
        expect(value1).toEqual(1);

        eventEmitter.on('hello', () =>
        {
            value++;
        });
        eventEmitter.emit('hello');

        expect(value).toEqual(4);
    });

    // test('once', () => {
    //     const eventEmitter = new EventEmitter();
    //
    // })
});
